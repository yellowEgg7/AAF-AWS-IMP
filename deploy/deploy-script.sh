readonly STACK_NAME="notes-web-app"
readonly FILE_DIRECTORY="$PWD"
readonly TAGS=("ApplicationName=notes-application" "Owner=hl2dm@live.com")
readonly AWS_DEFAULT_REGION="eu-west-1"

# where shall I open ssh access from?
myIpAddress="$(curl -s https://ifconfig.me/)/32"
readonly myIpAddress

# grab user data script and replace any template vars
UserDataScript=$(<"${FILE_DIRECTORY}/ec2-user-data-node.sh")
readonly UserDataScript

echo "Deploying network ${STACK_NAME}"
# deploy network
aws cloudformation deploy \
  --template-file "${FILE_DIRECTORY}/template.yml" \
  --stack-name "${STACK_NAME}-network" \
  --capabilities CAPABILITY_IAM \
  --tags "${TAGS[@]}" \
  --no-fail-on-empty-changeset \
  --region "${AWS_DEFAULT_REGION}" \
  --parameter-overrides \
      stackName="${STACK_NAME}"

# have to wait for VPC  
aws cloudformation wait \
  stack-exists \
  --stack-name "${STACK_NAME}-network"

echo "Finding the current Amazon Linux 2 AMI"
LINUX2_AMI=$(
  aws ec2 describe-images \
    --owners amazon \
    --filters 'Name=name,Values=amzn2-ami-hvm-2.*.*-x86_64-gp2' 'Name=state,Values=available' \
    --query 'reverse(sort_by(Images, &CreationDate))[:1].ImageId' \
    --output text
)
readonly LINUX2_AMI
echo "This is the current Amazon Linux 2 AMI: ${LINUX2_AMI}"

echo "Deploying server ${STACK_NAME}"
# deploy server
aws cloudformation deploy \
  --template-file "${FILE_DIRECTORY}/ec2-setup.yml" \
  --stack-name "${STACK_NAME}-server" \
  --capabilities CAPABILITY_IAM \
  --tags "${TAGS[@]}" \
  --no-fail-on-empty-changeset \
  --region "${AWS_DEFAULT_REGION}" \
  --parameter-overrides \
      stackName="${STACK_NAME}" \
      Linux2Ami="${LINUX2_AMI}" \
      UserDataScript="${UserDataScript}" \
      myIpAddress="${myIpAddress}"

aws cloudformation wait \
  stack-exists \
  --stack-name "${STACK_NAME}-server"

PUBLICIP=$(aws cloudformation list-exports --query "Exports[?Name=='${STACK_NAME}-server-ip-address'].Value" --output text)
echo "The EC2 Instance's Public IP is $PUBLICIP"

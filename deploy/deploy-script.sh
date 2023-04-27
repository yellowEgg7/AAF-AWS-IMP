#!/bin/bash

export AWS_REGION=eu-west-2
export AWS_DEFAULT_REGION=eu-west-2

if ! aws sts get-caller-identity
then
    echo >&2 "aws creds not working"
    exit 2
fi


readonly UserDataScript="ec2-user-data.sh"


aws cloudformation deploy   \
    --template-file "template.yml"
    --stack-name "aaf-networks"  \          \
    --GroupName "kamdin-JJ" \               \    
    --capabilities CAPABILITY_IAM           \
    --no-fail-on-empty-changeset            \
    --region "eu-west-2"                    \
    --parameter-overrides UserDataScript=${UserDataScript}

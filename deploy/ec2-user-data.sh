
echo "Install required tools" | tee -a "${logName}"
yum install -y \
    docker \
    iptraf-ng \
    htop \
    tmux \
    vim \
    curl \
    git

echo "Setting up ssh access keys" | tee -a "${logName}"
curl -s https://github.com/kamdin84.keys | tee -a /home/ec2-user/.ssh/authorized_keys

usermod -aG docker ec2-user

chkconfig docker on
service docker start


echo "Starting a debug nginx web server on port 8080" | tee -a "${logName}"
docker run -d \
    --restart always \
    -v /home/ec2-user/index.html:/usr/share/nginx/html/index.html:ro \
    -p 8080:80 \
    nginx


echo "installing Nodejs using NVM" | tee -a "${logName}"
curl --silent --location https://rpm.nodesource.com/setup_16.x | bash -
yum -y install nodejs

echo "installing application" | tee -a "${logName}"
(cd /home/ec2-user && git clone https://github.com/yellowEgg7/AAF-AWS-IMP/tree/main/01-notebook /home/ec2-user/kam-jj-sds2)

echo "installing deps and starting application $(date)" | tee -a "${logName}"
(cd /home/ec2-user/AAF-AWS-IMP/tree/main/01-notebook && npm install && DEBUG=* PORT=80 npm start)

npm install
npm start
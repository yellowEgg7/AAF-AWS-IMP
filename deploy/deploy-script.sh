sudo apt update
sudo apt -y install gcc-c++ make screen
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt -y install nodejs
sudo su - ubuntu -c 'git clone https://github.com/yellowEgg7/AAF-AWS-IMP /home/ubuntu/AAF-AWS-IMP'
sudo su - ubuntu -c 'cd /home/ubuntu/AAF-AWS-IMP/01-notebook && npm install escape-html'
sudo su - ubuntu -c 'cd /home/ubuntu/AAF-AWS-IMP/01-notebook && screen -d -m npm start'
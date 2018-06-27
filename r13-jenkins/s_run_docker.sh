docker run -d --restart always --name jenkins -v /opt/data.d/jenkins_home:/var/jenkins_home -p 50000:50000 -p 8888:8080 jenkins/jenkins:lts


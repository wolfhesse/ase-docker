FROM ubuntu
MAINTAINER rogeraaut@gmail.com

RUN echo "deb http://archive.ubuntu.com/ubuntu xenial main universe" > /etc/apt/sources.list
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y openssh-server python dnsutils net-tools vim sudo htop

RUN mkdir -p /var/run/sshd

RUN /usr/sbin/useradd --create-home --home-dir /home/rogera --shell /bin/bash rogera
RUN /usr/sbin/adduser rogera sudo
RUN chown -R rogera /home/rogera

RUN echo 'rogera:1boris' |chpasswd

EXPOSE 22
EXPOSE 8080
CMD [ "/bin/bash" ]

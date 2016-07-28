FROM ubuntu:14.04
MAINTAINER rogeraaut@gmail.com
RUN echo "deb http://archive.ubuntu.com/ubuntu trusty main universe" > /etc/apt/sources.list
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y openssh-server apache2 supervisor
RUN mkdir -p /var/run/sshd
RUN mkdir -p /var/log/supervisor
ADD supervisord.conf /etc/supervisor/conf.d/supervisord.conf


RUN /usr/sbin/useradd --create-home --home-dir /home/rogera --shell /bin/bash rogera
RUN /usr/sbin/adduser rogera sudo
RUN chown -R rogera /home/rogera

RUN echo 'rogera:1boris' |chpasswd

EXPOSE 22 80 9091
CMD ["/usr/bin/supervisord"]



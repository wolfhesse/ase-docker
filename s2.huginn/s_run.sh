docker run --restart=always --name huginn -v /srv/docker/huginn/mysql-data:/var/lib/mysql  -d -p 3000:3000 huginn/huginn 

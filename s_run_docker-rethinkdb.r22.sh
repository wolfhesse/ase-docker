 docker run --restart=always -d -h `hostname` -p 18080:8080 -p 28015:28015 -p 29015:29015 -v /home/rogera/data.d/docker_rethink_data.d:/data --name rethink-cluster rethinkdb rethinkdb -d /data --bind all --canonical-address 10.0.0.22 -j 10.0.0.21:29015


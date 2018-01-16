docker run -it --name teamcity-server-instance  \
    -v /srv/docker/teamcity_server/datadir:/data/teamcity_server/datadir \
    -v /srv/docker/teamcity_server/logs:/opt/teamcity/logs  \
    -p 8111:8111 \
    jetbrains/teamcity-server

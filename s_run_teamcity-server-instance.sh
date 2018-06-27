docker run -it --name teamcity-server-instance  \
    -v /home/rogera/data.d/teamcity_server/datadir:/data/teamcity_server/datadir \
    -v /home/rogera/data.d/teamcity_server/logs:/opt/teamcity/logs  \
    -p 8111:8111 \
    jetbrains/teamcity-server

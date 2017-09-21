VS_TENANT=rogera
AGENT_POOL=docker
AGENT_PAT=ezmrvy37igrwnzzc55ahclv7aujrru7kcv7xvdq5r5r65rabz6oq
DOCKER_USERNAME=wolfhesse
DOCKER_PASSWORD=12ben*son


docker run --name vsts-agent -ti -e VS_TENANT=$VS_TENANT -e AGENT_POOL=$AGENT_POOL -e AGENT_PAT=$AGENT_PAT -e DOCKER_USERNAME=$DOCKER_USERNAME -e DOCKER_PASSWORD=$DOCKER_PASSWORD --restart=always --volume=/var/run/docker.sock:/var/run/docker.sock giggio/vsts-agent:docker

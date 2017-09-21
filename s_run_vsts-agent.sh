VS_TENANT=rogeraaut
AGENT_PAT=ezmrvy37igrwnzzc55ahclv7aujrru7kcv7xvdq5r5r65rabz6oq
DOCKER_USERNAME=wolfhesse
DOCKER_PASSWORD=12ben*son

docker run --name vsts-agent -ti -e VS_TENANT=$env:VS_TENANT -e AGENT_PAT=$AGENT_PAT -e DOCKER_USERNAME=$DOCKER_USERNAME -e DOCKER_PASSWORD=$DOCKER_PASSWORD --rm --volume=/var/run/docker.sock:/var/run/docker.sock giggio/vsts-agent:docker

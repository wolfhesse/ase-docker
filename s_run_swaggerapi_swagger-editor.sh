# pref: auf s0

#docker run -d --restart=always --name swagger-editor -e OAUTH2_REDIRECT_URL=http://wolfspool.at/ -p 18022:8080 swaggerapi/swagger-editor
docker run -d --restart=always --name swagger-editor -e OAUTH2_REDIRECT_URL=http://wolfspool.at/ -p 18022:8080 swaggerapi/swagger-editor:v2.10.5

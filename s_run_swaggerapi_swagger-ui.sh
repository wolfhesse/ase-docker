# pref: auf s0

docker run -d --restart=always --name swaggerui -p 18023:8080 -e OAUTH2_REDIRECT_URL=http://wolfspool.at/api/swagger_ui_config/redirect swaggerapi/swagger-ui

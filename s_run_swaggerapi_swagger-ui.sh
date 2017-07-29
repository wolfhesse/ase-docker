# pref: auf s0

docker run -d --restart=always --name swaggerui -p 18022:8080 -e API_URL=http://generator.swagger.io/api/swagger.json swaggerapi/swagger-ui

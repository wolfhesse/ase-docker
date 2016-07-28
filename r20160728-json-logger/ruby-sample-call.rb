require 'uri'
require 'net/http'

url = URI("http://s13001.wolfspool.chickenkiller.com:13001/")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["cache-control"] = 'no-cache'
request["postman-token"] = '8b71c4ce-58e9-7549-64bd-d65d1c250d8a'
request.body = "{ \"data\":{\"pers_id\":1,\"name\":\"roger\",\"other_names\":[\"boris\",\"andel\"]} }"

response = http.request(request)
puts response.read_body

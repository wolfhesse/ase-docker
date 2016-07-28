import http.client

conn = http.client.HTTPConnection("s13001.wolfspool.chickenkiller.com:13001")

payload = "{ \"data\":{\"pers_id\":1,\"name\":\"roger\",\"other_names\":[\"boris\",\"andel\"]} }"

headers = {
    'content-type': "application/json",
    'cache-control': "no-cache",
    'postman-token': "c20bd5cc-fc15-5b5e-f0cc-46ae6ee09470"
    }

conn.request("POST", "/", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

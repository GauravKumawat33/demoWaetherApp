# demoWaetherApp

## **In this task i have used openweather api to display weather based on name.**

 1. body parser is used to collect form request easily.
           https is used to interact with others server and we the response we    get is saved inside "reponse".
  2. If we want to work on that response then we can use    response.on("data".function(data){ // do the code here })
 3.  res.send send both res.write and res.end so 2 or more re.send will    give error to avoid it use res.write instead
 4. inside res.write/res.send you can literally paste html code with    variables.
 4. the res and req in the get function are the interaction with clident    and our server where as response we get from other server
 5. to our    server we usee https to paste in our request cutomizably
    and to    receive response.
 6. Postman help to see the incoming api response, basically it structure    in a good way posting and receiving things. Json
    awesome viwer    extension can also be used.
 7. The data we receive in the respons.on is in hexadecimal so to convert    it we have to parse it. (JSON.parse(data));
 8.  Similarilly we can stringfy the data as well using    JSON.stingfy(object). it basicall compresses the js object.
  9. form should be provided with same action (url to post) as you want to    receive by default it is on the same page.

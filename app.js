const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{

    res.sendFile(__dirname+"/index.html")
})

app.post("/",(req,res)=>{

    const query=req.body.cityName;
    const city = query.charAt(0).toUpperCase() + query.slice(1);
    const apiKey="a446176c76e0e130ca371a18e89a3496";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
    https.get(url,(response)=>{
        console.log(response.statusCode);


        response.on("data",function(data){
           const weatherData = JSON.parse(data);
            
           const temp=weatherData.main.temp;
           const weatherDescription=weatherData.weather[0].description;
           const icon =weatherData.weather[0].icon;
           const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"
           res.write("<p>The Weather is currently "+ weatherDescription+ " </p>");
           res.write("<h1>The Tempeature in "+city+" is "+temp+" Degree Celcius.</h1>");
           res.write("<image src=" + imageURL + ">")
           res.send();
            })
                })
    console.log("post received.");

})

app.listen(3000,function(){
    console.log("Server is running at port 3000.");
})

















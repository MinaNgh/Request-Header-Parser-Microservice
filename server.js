const express = require("express");
const app = express();

app.use(express.static(__dirname+"/public"));
app.get("/",(req, res)=>{
	res.sendFile(__dirname+"/view/index.html");
});

app.get("/api/whoami",(req, res)=>{
	var output ={
		"ipaddress":req.ip,
		"language":req.headers['accept-language'],
		"software":req.headers['user-agent']
	}
	res.send(output);
});

app.listen(process.env.PORT || 8080);
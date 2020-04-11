console.log("Hi Node");

const https = require("https");
const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
    let body  = "";

    response.on("data", dataChunk => {
        body += dataChunk;
        console.log(dataChunk);
    });

    response.on("end", () => {
        const profile = JSON.parse(body);

        console.log(profile.points.JavaScript);
        // console.dir(profile);
    });

});

request.on("error", error => {
    console.error(error.message);
});

request


const users = ["chalkers", "alenaholligan"];
users.forEach(name => {
    console.log(name);
});
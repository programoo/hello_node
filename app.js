console.log("Hi Node");

const https = require("https");
var request = null;

try {
    request = https.get("https://teamtreehouse.com/chalkers-not.json", response => {
        let body = "";
        response.on("data", dataChunk => {
            body += dataChunk;
        });

        response.on("end", () => {

            try{
                const profile = JSON.parse(body);
                console.log(profile.points.JavaScript);
            }
            catch(error){
                console.error("Parse Error" + error.message);
            }
        });
    }).on("error", error => {
        console.error("RequestError: " + error.message);
    });

} catch (error) {
    console.error("TryCatch: " + error);
}

request

const users = ["chalkers", "alenaholligan"];

users.forEach(name => {
    console.log(name);
});

console.log(process.argv.slice(2));


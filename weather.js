const https = require("https");

var request = null;
function get(query){
    try {
        request = https.get("https://samples.openweathermap.org/data/2.5/weather?q=Bangkok,bkk&appid=439d4b804bc8187953eb36d2a8c26a02", response => {
            let body = "";
            response.on("data", dataChunk => {
                body += dataChunk;
            });

            response.on("end", () => {
                try {

                    var profile = JSON.parse(body);
                    console.dir(profile);
                    console.log("This is temp" + profile.main.temp);
                } catch (error) {
                    console.error("Parse Error" + error.message);
                }
            });
        }).on("error", error => {
            console.error("RequestError: " + error.message);
        });

    } catch (error) {
        console.error("TryCatch: " + error);
    }
}

module.exports.get = get

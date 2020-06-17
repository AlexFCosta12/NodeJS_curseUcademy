const request = require ('request')

/*const url = 'http://api.weatherstack.com/current?access_key=5db0883415e19caa92038d2a4287c7e1&query=37.8267,-122.4233&units=f'
//const url = 'http://api.weatherstack.com/current?access_key=5db0883415e19caa92038d2a4287c7e1&query='

request({ url: url, json: true }, (error, response) => {
    //const data = JSON.parse(response.body)
    if (error) {
        console.log("error message");
    }
    else if (response.body.error){
        console.log ('Unable to find Location');
    }
    else {
        console.log (response.body.current.weather_descriptions[0] + " It is currently "+response.body.current.temperature+" degress out. It feels like "+response.body.current.feelslike+" degress.");
    }
})*/

// Geocoding 

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?access_token=pk.eyJ1IjoiYWxleGNvc3RhMTIzIiwiYSI6ImNrYmdsemRoZjEwcHIzMXAyZ3g1ZGZ0a2gifQ.mwE1tZDcRvwyD3gu_cgI4A&limit=1'
request({url: geocodeURL, json: true}, (error,response) =>{
    if (error){
        console.log ("Unable to connect to Location services!")
    }else if (response.body.features.length === 0){
        console.log ("Unable to find Location");
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log ("Latitude: "+latitude+" Logintude: "+ longitude);
    }
})
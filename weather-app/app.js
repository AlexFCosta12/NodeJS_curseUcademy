
const geocode = require ('./utils/geocode')
const forecast = require ('./utils/forecast')
var address = process.argv[2];

if (address){
    geocode (address,(error, {latitude, longitude, location} = {}) => {
        if (error) return console.log (error);
        else {
         forecast(latitude,longitude, (error, forecastData) => {
             if (error) return console.log (error)
             else{
                 console.log ('Location ', location);
                 console.log('Data', forecastData)
             }
         })
        }
     });
}else {
    console.log ('Please provide address');
}


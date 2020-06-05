const request = require ('request')

const url = 'http://api.weatherstack.com/current?access_key=5db0883415e19caa92038d2a4287c7e1&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log (data.current);
})
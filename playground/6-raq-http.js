const http = require ('http')
const url = 'http://api.weatherstack.com/current?access_key=5db0883415e19caa92038d2a4287c7e1&query=40,-75&units=f'

const options = {
    hostname: 'api.weatherstack.com',
    port: 80,
    path: '/current?access_key=5db0883415e19caa92038d2a4287c7e1&query=40,-75&units=f',
    method: 'GET'
  };

const request = http.request (options, (response)=>{
    let data=''

    response.on ('data',(chunk)=>{
        data = data+chunk.toString();
    })

    response.on('end', ()=>{
        const body = JSON.parse (data)
        console.log (body);
    })


})

request.on ('error',(error)=>{
    console.log ('An error', error);
})

request.end();
const request = require('request');

var getWeather = (lat,lng, callback) =>{
  request({
    url: `https://api.darksky.net/forecast/685bb92d45f9b0b60773a7727c07c914/${lat},${lng}`,
    josn: true
  },(error,response,body)=>{a
    if(!error && response.statusCode === 200) {
      callback(undefined,{
        temperature:JSON.parse(body).currently.temperature,
        apparentTemperature: JSON.parse(body).currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.')
    }
  });
}

module.exports.getWeather = getWeather;

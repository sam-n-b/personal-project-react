import React from 'react'
import request from 'superagent'

function Insult() {

  return request.get("https://lakerolmaker-insult-generator-v1.p.mashape.com/?mode=random")
    .set("X-Mashape-Key", "clNRJOwfcwmshhRKK3divX2NiavLp1SxU0Hjsn3jiGIQMbh6tE")
    .set("Accept", "text/plain")
    .then(function (result) {
      return result.text;
    });

}



export default
  Insult
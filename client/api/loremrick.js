import React from 'react'
import request from 'superagent';

function LoremDicksum() {

  return request.get('http://loremricksum.com/api/?paragraphs=1&quotes=1')
    .then(res => {
      const morty = res.text
      // console.log(morty)

      return morty

    })
}

export default
  LoremDicksum

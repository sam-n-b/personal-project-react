import React from 'react'

import {Link} from 'react-router-dom'

export default function Nav(props) {
  console.log(props) //by being wrapped in a route we get some props for free
  return <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/bananas'>Bananas</Link></li>
    </ul>
}

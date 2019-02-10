import React from 'react'
import {Link} from 'react-router-dom'


class Menu extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul>
               <li><Link to="/user">Show User</Link></li>
               <li><Link to="/movie">Show Movie</Link></li>
                <li>test</li>
            </ul>
        )
    }

}

export default Menu
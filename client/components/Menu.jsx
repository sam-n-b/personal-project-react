import React from 'react'
import {Link} from 'react-router-dom'


class Menu extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='row'>
                <div className='col-md-4 navLink'><Link to="/">Go Home</Link></div>
               <div className='col-md-4'><Link to="/user">Show User</Link></div>
               <div className='col-md-4'><Link to="/movie">Show Movie</Link></div>
            </div>
        )
    }

}

export default Menu
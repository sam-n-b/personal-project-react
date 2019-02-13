import React from 'react'
import {Link} from 'react-router-dom'


class Menu extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
            <div className='row align-items-center justify-content-center'>
                <div className='col-md-4 center-block'><Link to="/home"><button type="button" className="btn btn-outline-light bsButton">Latest</button></Link></div>
               <div className='col-md-4'><Link to="/user"><button type="button" className="btn btn-outline-light bsButton">Users</button></Link></div>
               <div className='col-md-4'><Link to="/movies"><button type="button" className="btn btn-outline-light bsButton">Movies</button></Link></div>
            </div>
            <br></br>
            </React.Fragment>
        )
    }

}

export default Menu
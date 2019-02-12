import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title1: 'Titanic',
            image1: '/images/titanic.jpg',
            title2: 'Roma',
            image2: '/images/roma.jpg',
            title3: 'Whiplash',
            image3: '/images/whiplash.jpg',
            title4: 'End of the Tour',
            image4: '/images/end_of_the_tour.jpg',
            title5: 'Cool Runnings',
            image5: '/images/coolRunnings.jpg',
            title6: 'Short Term 12',
            image6: '/images/shortTerm12.jpg',
            title7: 'Leave No Trace',
            image7: '/images/leaveNoTrace.jpg',
            title8: 'Swiss Army Man',
            image8: '/images/swissArmyMan.jpg'
        }
    }
        render(){
            return(

                <h1>home</h1>
                // <div className='row'>
                //     <div className='col-md-3'>
                //         <h3 className='movie-title'>{this.state.title1}</h3>
                //         <img className='movie-image' src={this.state.image1}></img>
                //     </div>
                //     <div className='col-md-3'>
                //         <h3 className='movie-title'>{this.state.title2}</h3>
                //         <img className='movie-image' src={this.state.image2}></img>
                //     </div>
                //     <div className='col-md-3'>
                //         <h3 className='movie-title'>{this.state.title3}</h3>
                //         <img className='movie-image' src={this.state.image3}></img>
                //     </div>
                //     <div className='col-md-3'>
                //         <h3 className='movie-title'>{this.state.title4}</h3>
                //         <img className='movie-image' src={this.state.image4}></img>
                //     </div>
                //     <div className='col-md-3'>
                //         <h3 className='movie-title'>{this.state.title5}</h3>
                //         <img className='movie-image' src={this.state.image5}></img>
                //     </div>
                //     <div className='col-md-3'>
                //         <h3 className='movie-title'>{this.state.title6}</h3>
                //         <img className='movie-image' src={this.state.image6}></img>
                //     </div>
                //     <div className='col-md-3'>
                //         <h3 className='movie-title'>{this.state.title7}</h3>
                //         <img className='movie-image' src={this.state.image7}></img>
                //     </div>
                //     <div className='col-md-3'>
                //         <h3 className='movie-title'>{this.state.title8}</h3>
                //         <img className='movie-image' src={this.state.image8}></img>
                //     </div>
                // </div>
            )
        
    }
}

export default Home
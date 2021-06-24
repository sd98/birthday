import React, { Component } from 'react'
import m1 from './imgs/1.jpg'
import m2 from './imgs/2.jpg'
import m3 from './imgs/3.jpg'
import m4 from './imgs/4.jpg'
import m5 from './imgs/5.jpg'
import m6 from './imgs/6.jpg'
import m7 from './imgs/7.jpg'
import m8 from './imgs/8.jpg'
import m9 from './imgs/9.jpg'
import m10 from './imgs/10.jpg'
import m11 from './imgs/11.jpg'
import m12 from './imgs/12.jpg'
import m13 from './imgs/13.jpg'
import m14 from './imgs/14.jpg'
import Hotpics from './Hotpics'

export class Bdaybutton extends Component {

    constructor(){
        super()

        this.state = {
            data: "hi!",
            index: 0,
            imgList: [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14]
        }

        this.nextPick = this.nextPick.bind(this)
    }

    nextPick(){
        if(this.state.index + 1 === this.state.imgList.length){
            this.setState({index:0})
        }
        else {
            this.setState({
                index: this.state.index + 1
            })
        }

        alert(this.state.index)
    }

    changeState=()=>{
        this.setState({data:`state/props of parent component 
      is send by onClick event to another component`}); 
    }; 

    render() {
        
        return (
            <div>
                <button onClick={this.changeState}>Click!</button>
            </div>
        )
    }
}

export default Bdaybutton

import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import m0 from './imgs/0.jpg'
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
import m15 from './imgs/15.jpg'
import m16 from './imgs/16.jpg'
import m17 from './imgs/17.jpg'
import m18 from './imgs/18.jpg'
import Button from 'react-bootstrap/Button';

export class Hotpics extends Component {

    constructor(){
        super()

        this.state = {
            index: 0,
            imgList: [m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18]
        }

        this.nextPick = this.nextPick.bind(this)
    }

    nextPick(){
        if(this.state.index + 1 === this.state.imgList.length){
            this.setState({index:1})
        }
        else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    render() {
        return (
            <Grid container spacing={3}>
                
        <Grid style={{paddingTop:'200px'}} item xs={2}>
                <div><button style={{padding:'10px', width:'100px',height:'70px', backgroundColor:'gray', color:'white', borderRadius:'10px'}} onClick={this.nextPick}>Next Hoe Pls</button></div>
        </Grid>
        <Grid style={{paddingTop:'20px'}} item xs={10}>
        <img src={this.state.imgList[this.state.index]} style={{width: '504px', height:'700px' }}/>
        </Grid>
      </Grid>
                
        
                
        )
    }
}

export default Hotpics
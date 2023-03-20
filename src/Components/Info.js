import React from 'react'
import Card from './Card'

const Info = (props) => {

    let info = props.info;
    let input = props.input;
    let setInfo =props.setInfo;

    function generateinfo(){
        
        if(input!==''){
            let newinfo=[];

            info.map( (coin)=>{
                if(coin.name.includes(input)){
                    console.log(coin.name);
                    newinfo.push(coin);
                }
            } )
            return newinfo;
        }
        else{
            return info;
        }

    }
    
  return (
    <div>
      {
        generateinfo().map((coin)=>(
            <Card coin = {coin}></Card>
        ))
      }
    </div>
  )
}

export default Info

import React from 'react'
const MovieCard = (props) => {


  const style = {backgroundColor:"black", color:"skyblue", width:"8cm",height:"7cm",margin:"1cm",borderRadius:"0.3cm",padding:"0.5cm",fontSize:"25px"}
  const styleimg ={height:"100px",width:"60px",paddingBottom:"0.5cm"}
  return (
    <div >
        <div style={style}>
          <p>
            Movie name :{props.name}<br />
            about :{props.description}<br />
            rating:{props.rate}<br />
          </p>
          <img src={props.img} alt="loading" style={styleimg} />
        </div>
    </div>
  );
};
 
export default MovieCard; 
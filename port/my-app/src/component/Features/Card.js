import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow' >
        <img style={{width:"100px",borderRadius:"30px",marginLeft:"10px"}} src={props.image} alt='' />
        <h2 style={{textAlign:"center"}}>{props.title}</h2>
        {/* <p>{props.desc}</p> */}
       
      </div>
    </>
  )
}

export default Card

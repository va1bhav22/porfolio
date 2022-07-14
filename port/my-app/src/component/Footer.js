import React from "react"
import hero2 from "./pic/hero2.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img style={{width:"70px"}} src={hero2} alt='' />
          </div>
          <p>© 2022. All Work is Done.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer

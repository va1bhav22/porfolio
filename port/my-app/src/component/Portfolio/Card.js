import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <h3 style={{fontSize:""}} onClick={toggleModal}>{props.category}</h3>
          {/* <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label> */}
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img styles={{height:"300px"}} src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <p style={{fontSize:"30px"}}>{props.category}</p>
              <h4>{props.title}</h4>
              <p>{props.dec}</p>
              {/* <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p> */}
              <div className='button f_flex mtop'>
                <button className='btn_shadow'> <a target="_blank" href={props.Git}>GitHub</a>
                <i class="fa-brands fa-github"></i>
                </button>
                <button className='btn_shadow'><a target="_blank" href={props.Dep}> VIEW PROJECT</a>
                <i class="fa-solid fa-location-arrow"></i>
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card

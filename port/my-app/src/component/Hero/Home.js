import React from "react"
import "./Home.css"
import hero2 from "../pic/hero2.png"
// import skill1 from "../pic/skill1.png"
// import skill2 from "../pic/skill2.png"
// import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Vaibhav Jadhav</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                   
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100007863347464"> <i class='fab fa-facebook-f'></i></a>
                  </button>
                  <button className='btn_shadow'>
                   
                    <a target="_blank" href="https://www.instagram.com/its_ur_vaibhav_j/?hl=en"> <i class='fab fa-instagram'></i></a>
                  </button>
                  <button className='btn_shadow'>
                  <a target="_blank" href="https://www.linkedin.com/in/vaibhav-jadhav-5b7716226/"> <i class='fab fa-linkedin-in'></i></a>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>.</h4>
                <button className='btn_shadow'>
                  {/* <img src={skill1} alt='' /> */}
                 
                  <a target="_blank" href="https://github.com/va1bhav22"> <i class="fa-brands fa-github"></i></a>
                </button>
                <button className='btn_shadow'>
                  {/* <img src={skill2} alt='' /> */}
                 
                  <a target="_blank" href="https://twitter.com/"> <i class="fa-brands fa-twitter"></i></a>
                </button>
                <button className='btn_shadow'>
                  {/* <img src={skill3} alt='' /> */}
                 <a target="_blank" href="https://drive.google.com/file/d/1s5auYTgvKPVskRlsA9KvB54PddKmbLnk/view?usp=sharing"> Resume </a>
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero2} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

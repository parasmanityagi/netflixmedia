import React from 'react'
import pic1 from '../Images/NetflixIndia.png'
import pic2 from '../Images/NetflixPicture.png'
import pic3 from '../Images/netflixPic.png'
import pic4 from '../Images/NetflixChild.png'
import { questions } from '../Api/Faq'
import Accordian from '../Components/SubComponent/Accordian'

const Home = () => {

  return (
    <>
      <div className='home_one'>
        <h1>Unlimited movies, TV shows </h1>
        <h1>and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>

        {/* div for increasing brightness of background */}
        <div className="background"></div>
      </div>


      {/* div for login */}
      <div className="login">
          <input type="email" placeholder='Enter Email Address...' autoComplete='off' />
          <button type='submit' className="login_btn">Login</button>
      </div>


      {/* second div  */}
      <div className="home_two">
        <div className="homeTwo_left">
          <h1>Enjoy on your TV.</h1>
          <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
        </div>

        <div className="homeTwo_right">
          <img src={pic1} alt="Image" />
        </div>
      </div>



      {/* div three */}
      <div className="home_three">
        <div className="homeThree_right">
          <img src={pic2} alt="Image" />
        </div>


        <div className="homeThree_left">
          <h1>Download your shows to watch offline.</h1>
          <h3>Save your favourites easily and always have something to watch.</h3>
        </div>
      </div>



      {/* four div  */}
      <div className="home_four">
        <div className="homeFour_left">
          <h1>Watch everywhere.</h1>
          <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV..</h3>
        </div>

        <div className="homeFour_right">
          <img src={pic3} alt="Image" />
        </div>
      </div>


      {/* div five */}
      <div className="home_five">
        <div className="homeFive_right">
          <img src={pic4} alt="Image" />
        </div>


        <div className="homeFive_left">
          <h1>Create profiles for children.</h1>
          <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
        </div>
      </div>




      {/* div six for accordian(frequently asked questions) */}
      <div className="home_faq">
        <h1 className="faq_heading">
          Frequently Asked Questions
        </h1>
        {questions.map((data) => {
          return (
            <Accordian id={data.id} question={data.question} answer={data.answer} />
          )
        })}
      </div>
    </>
  )
}

export default Home
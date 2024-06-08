import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
  <div className='Main1'>
    <div className='Laxmi'>
     <div className='Devi'>
    <p className='Hea'>Laxmi Devi Institute of Engineering & Technology</p></div>
    <p className='Add' style={{}}>Alwar-Tijara-Delhi Highway<br />
  chikani Alwar-Rajasthan<br />
  India - 301018</p>
  <br/>

  <p style={{textAlign:'center', color:'white'}}>+91-6375131652 <br />
  <br /> +91-9549287061
  </p>

      <div className='dire'><a className='DirectorC' href="">director@lietalwar.org</a>
      </div>
    </div>
    <div className='Quick'>
      <div className='QuickH'>
        <p className='Hea'>Quick Links</p>
        <br />
        <p  className='quickoption'style={{margintop:'10px'}}>
          <a href="">About Us</a>
          <br /><br />
          <a href="">Admission</a>
          <br />
          <br />
          <a href="">Apply @ LIET</a>
          <br />
          <br />
          <a href="">Board of Management</a>
          <br /><br />
          <a href="">Grievance Redressal</a>
          </p>
      </div>

    </div>
    <div className='Course'>
     <div className='CourseH'> <p className='Hea'>Courses</p></div>
    
    <p className='Courseoption'>
     <a href="">B. Tech.</a><br />
     <a href="">M. Tech</a>.<br />
     <a href="">MBA</a><br />
     <a href="">Polytechnic</a><br />
     </p>
    </div>
    <div className='External'>
     <div className='ExternalH'>
      <p className='Hea'>External Links</p>
      <p className='Externaloption'>
        <a href="">AICTE</a><br />
        <a href="">BTU</a><br />
        <a href="">BTER</a><br />
        <a href="">DELNET</a><br />

      </p>
      </div>
       </div>
    
  </div>
    </>
  )
}

export default App

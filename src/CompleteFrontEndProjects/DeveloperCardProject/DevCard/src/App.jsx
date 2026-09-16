import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
//import './App.css'
import './index.css'
//import Card from './Components/Card'
import image1 from "./assets/image1.png"
import image2 from "./assets/image2.jpg"
import image3 from "./assets/image3.jpg"
import image4 from "./assets/image4.jpg"
import image5 from "./assets/image5.jpg"
import image6 from "./assets/image6.jpg"
import image7 from "./assets/image7.jpg"

import Hello from './Components/hello'
const developers = [

  {
    img: image1,
    name: "Aarav",
    Role: "Frontend Developer",
    Skills: "React, Tailwind, JavaScript",
    Experience: "2 Years",
    isOnline: true
  },

  {
    img: image2,
    name: "Priyansh",
    Role: "Backend Developer",
    Skills: "Java, Spring Boot, MySQL",
    Experience: "4 Years",
    isOnline: false
  },

  {
    img: image3,
    name: "Riya",
    Role: "UI/UX Designer",
    Skills: "Figma, Photoshop, CSS",
    Experience: "1.5 Years",
    isOnline: true
  },

  {
    img: image4,
    name: "Sanket",
    Role: "SDE",
    Skills: "Java, Spring Boot, React",
    Experience: "3 Years",
    isOnline: true
  },

  {
    img: image5,
    name: "Kabir",
    Role: "DevOps Engineer",
    Skills: "Docker, Kubernetes, AWS",
    Experience: "5 Years",
    isOnline: false
  },

  {
    img: image6,
    name: "Ananya",
    Role: "AI Engineer",
    Skills: "Python, TensorFlow, GenAI",
    Experience: "3 Years",
    isOnline: true
  }

];
function App() {
  return <>
   {/* <div className="app-container">

    <h1 className="main-title">DEV CONNECT</h1>

      <div className="card-wrapper">
        {developers.map((developer)=>(
          // Card(developer)
          //console.log(developer)
          <Card
          img={developer.img} 
          name= {developer.name} 
          Role={developer.Role}
          Skills={developer.Skills}
          Experience={developer.Experience}
          isOnline={developer.isOnline}
          />
        ))} */}
        
  {/* <Card
  img={image4}
  name="Sanket"
  Role="SDE"
  Skills="Java, Spring Boot, React"
  Experience="3 Years"
  isOnline={true}
/>

<Card
  img={image1}
  name="Somil"
  Role="Embedded Intern"
  Skills="Arduino"
  Experience="1 Year"
  isOnline={false}
/>
<Card
  img={image7}
  name="Aarav"
  Role="Frontend Developer"
  Skills="React, Tailwind, JavaScript"
  Experience="2 Years"
  isOnline={true}
/>

<Card
  img={image2}
  name="Priyansh"
  Role="Backend Developer"
  Skills="Java, Spring Boot, MySQL"
  Experience="4 Years"
  isOnline={false}
/>

<Card
  img={image3}
  name="Riya"
  Role="UI/UX Designer"
  Skills="Figma, Photoshop, CSS"
  Experience="1.5 Years"
  isOnline={true}
/>

<Card
  img={image5}
  name="Kabir"
  Role="DevOps Engineer"
  Skills="Docker, Kubernetes, AWS"
  Experience="5 Years"
  isOnline={false}
/>

<Card
  img={image6}
  name="Ananya"
  Role="AI Engineer"
  Skills="Python, TensorFlow, GenAI"
  Experience="3 Years"
  isOnline={true}
/> */}
    <Hello />
  </>
}

export default App

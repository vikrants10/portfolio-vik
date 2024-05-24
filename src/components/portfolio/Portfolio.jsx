import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'
import IMG10 from '../../assets/portfolio10.jpg'
import IMG11 from '../../assets/portfolio11.jpg'
import IMG12 from '../../assets/portfolio12.jpg'
import IMG13 from '../../assets/portfolio13.png'
import IMG14 from '../../assets/portfolio14.jpg'
const data =[
  // {
  //   id:1,
  //   image:IMG1,
  //   title:'3d Portfolio - ReactJs and ThreeJs',
  //   github:'https://github.com/vikrants10/3D_Portfolio.git',
  //   demo:'https://github.com/vikrants10/3D_Portfolio.git'
  // },
 
  {
    id:3,
    image:IMG3,
    title:'TextUtils - ReactJs',
    github:'https://github.com/vikrants10/Textutils-ManageYourTexts.git',
    demo:'https://mytextsutilities.netlify.app/'
  },
  {
    id:4,
    image:IMG4,
    title:'WeatherApp - ReactJs and WeatherApi ',
    github:'https://github.com/vikrants10/WeatherApp_ReactJs-main.git',
    demo:'https://forecast-today.netlify.app/'
  },
  {
    id:5,
    image:IMG5,
    title:'ToDoList - EmbeddedJs App',
    github:'https://github.com/vikrants10/To-do-List-main.git',
    demo:'https://to-do-list-869l.onrender.com/'
  },
  {
    id:2,
    image:IMG2,
    title:'NewsApp - React and NewsApi',
    github:'https://github.com/vikrants10/News_App_ReactJs-main.git',
    demo:'https://github.com/vikrants10/News_App_ReactJs-main.git'
  },
  {
    id:6,
    image:IMG6,
    title:'Notes Keeper App-React Js',
    github:'https://github.com/vikrants10/Keeper_App.git',
    demo:'https://take-a-note-apps.netlify.app/'
  },
  {
    id:7,
    image:IMG7,
    title:'News-Letter SignUp - Mailchimp',
    github:'https://github.com/vikrants10/3D_Portfolio.git',
    demo:'https://github.com/vikrants10/3D_Portfolio.git'
  },
  {
    id:8,
    image:IMG8,
    title:'Drum Kit - Html , Css , Javascript',
    github:'https://github.com/vikrants10/Drum-Kit.git',
    demo:'https://drum-kit-vik.netlify.app/'
  },
  {
    id:9,
    image:IMG9,
    title:'Responsive Food Website - HTML , CSS , Javascript',
    github:'https://github.com/vikrants10/Responsive-Food-Website-main.git',
    demo:'https://joyful-profiterole-vik.netlify.app/'
  },
  {
    id:10,
    image:IMG10,
    title:'Secret Keeper - MongoDb',
    github:'https://github.com/vikrants10/Secrets.git',
    demo:'https://secrets-7b73.onrender.com/'
  },
  {
    id:11,
    image:IMG11,
    title:'Sentiment Analysis - Deep Learning',
    github:'https://github.com/vikrants10/Sentiment-Analysis-Using-RNN-main.git',
    demo:'https://github.com/vikrants10/Sentiment-Analysis-Using-RNN-main.git'
  },
  {
    id:13,
    image:IMG13,
    title:'Home Automation System - IOT',
    github:'https://github.com/vikrants10/Home-Automation-System-mains.git',
    demo:'https://github.com/vikrants10/Home-Automation-System-mains.git'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image , title , github , demo})=>{
            return(
                <article className='portfolio__item'>
                <div className='portfolio__item_image'>
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target={'_blank'} rel="noreferrer">GitHub</a>
                  <a href={demo} className="btn btn-primary" target={'_blank'} rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
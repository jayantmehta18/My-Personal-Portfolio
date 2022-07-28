import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {VscGraphLine} from 'react-icons/vsc'
import {FaNodeJs,FaReact,FaPython} from 'react-icons/fa'

const Experience = ()=>{
  return (
    <section id='skills'>
      <h5>My Expertise</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
      <article className='experience__content'>
      <FaPython className="experience__content-icon"/>
      <h3>C++/Python</h3>
      <div className="grey__progressBar">
        <div className="progressBar__percentage" style={{width:'90%'}}></div>
      </div>
      </article>

      <article className='experience__content'>
      <SiLeetcode className="experience__content-icon"/>
      <h3>Data Structures & Algo</h3>
      <div className="grey__progressBar">
        <div className="progressBar__percentage" style={{width:'90%'}}></div>
      </div>
      </article>

      <article className='experience__content'>
      <AiFillHtml5 className="experience__content-icon"/>
      <h3>HTML/CSS/JS</h3>
      <div className="grey__progressBar">
        <div className="progressBar__percentage" style={{width:'85%'}}></div>
      </div>
      </article>

      <article className='experience__content'>
      <FaNodeJs className="experience__content-icon"/>
      <h3>DBMS/OOPS/OS</h3>
      <div className="grey__progressBar">
        <div className="progressBar__percentage" style={{width:'70%'}}></div>
      </div>
      </article>

      <article className='experience__content'>
      <FaReact className="experience__content-icon"/>
      <h3>ReactJS</h3>
      <div className="grey__progressBar">
        <div className="progressBar__percentage" style={{width:'70%'}}></div>
      </div>
      </article>

      <article className='experience__content'>
      <VscGraphLine className="experience__content-icon"/>
      <h3>Structured Query Language</h3>
      <div className="grey__progressBar">
        <div className="progressBar__percentage" style={{width:'80%'}}></div>
      </div>
      </article>
      </div>
    </section>
  )
}

export default Experience
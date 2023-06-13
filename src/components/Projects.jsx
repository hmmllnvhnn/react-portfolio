import React from 'react'
import ProjectItems from './ProjectItems'
import enhypenImg from '../assets/enhypen.jpg'
import netflixImg from '../assets/netflix.jpg'
import calculatorImg from '../assets/calculator.jpg'
import todolistImg from '../assets/todolist.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-red-900'>Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas alias esse accusantium maiores eligendi, et ratione tempore nisi cupiditate at, itaque pariatur! Quos in rerum neque vel exercitationem sint?</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItems img={enhypenImg} title="Enhypen App" />
        <ProjectItems img={netflixImg} title="Netflix App" />
        <ProjectItems img={calculatorImg} title="Calculator App" />
        <ProjectItems img={todolistImg} title="Todo List App" />
      </div>
    </div>
  )
}

export default Projects
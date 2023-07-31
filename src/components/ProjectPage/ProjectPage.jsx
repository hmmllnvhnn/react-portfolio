import React from 'react'
import './ProjectPage.css'

const ProjectPage = () => {
    return (
        <div>
            <body id='projects' className='projects'>
                <h1 className='projectTxt'>projects</h1>
                <img className='homyz' src="./homyz.png" alt="" />
                <a href="https://mp2-realestate.vercel.app/">
                    <button className='livelink'>Live Link</button>
                </a>
            </body>
        </div>
    )
}

export default ProjectPage
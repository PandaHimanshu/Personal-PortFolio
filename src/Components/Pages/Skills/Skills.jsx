import React from 'react'
import './Skills.css'
import Header from '../../Header/Header'

function Skills() {

    return (
        <>
            <h1 className='sub-title'>
                My <span>Skills</span>
            </h1>
            <section className='section'>
                <div className='container1' id='skills'>
                    <h1 className='headings'>Technical skills</h1>
                    <div className='technical-bars'>
                        <div className='bar'>
                            <div className='info'>
                                <span>HTML</span>
                            </div>
                            <div className='progress-line html'>
                                <span></span>
                            </div>
                        </div>
                        <div className='bar'>
                            <div className='info'>
                                <span>CSS</span>
                            </div>
                            <div className='progress-line CSS'>
                                <span></span>
                            </div>
                        </div>
                        <div className='bar'>
                            <div className='info'>
                                <span>JavaScript</span>
                            </div>
                            <div className='progress-line JavaScript'>
                                <span></span>
                            </div>
                        </div>
                        <div className='bar'>
                            <div className='info'>
                                <span>React</span>
                            </div>
                            <div className='progress-line React'>
                                <span></span>
                            </div>
                        </div>
                        <div className='bar'>
                            <div className='info'>
                                <span>JAVA</span>
                            </div>
                            <div className='progress-line JAVA'>
                                <span></span>
                            </div>
                        </div>
                        <div className='bar'>
                            <div className='info'>
                                <span>Spring Boot</span>
                            </div>
                            <div className='progress-line SpringBoot'>
                                <span></span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='container1'>
                    <h1 className='headings'>Professional skills</h1>
                    <div className='radial-bars'>

                        <div className='radial-bar'>
                            <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                                <circle className='path path-1' cx='100' cy='100' r='80'></circle>
                            </svg>
                            <div className='percentage'>90%</div>
                            <div className='text'>Creativity</div>
                        </div>

                        <div className='radial-bar'>
                            <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                                <circle className='path path-2' cx='100' cy='100' r='80'></circle>
                            </svg>
                            <div className='percentage'>80%</div>
                            <div className='text'>Communication</div>
                        </div>

                        <div className='radial-bar'>
                            <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                                <circle className='path path-3' cx='100' cy='100' r='80'></circle>
                            </svg>
                            <div className='percentage'>70%</div>
                            <div className='text'>Problem Solving</div>
                        </div>

                        <div className='radial-bar'>
                            <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
                                <circle className='path path-4' cx='100' cy='100' r='80'></circle>
                            </svg>
                            <div className='percentage'>60%</div>
                            <div className='text'>Teamwork</div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
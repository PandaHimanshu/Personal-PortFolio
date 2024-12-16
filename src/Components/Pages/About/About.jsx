import React from 'react';
import mypng from '../../../assets/myimg.jpg';
import './custom.css';

function About() {
  return (
    <section className=" min-h-screen" id='about'>
      <h1 className="text-4xl font-bold text-center my-8">
        <span>About</span> Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-4">
        <div className="flex-shrink-0 custom-border-radius overflow-hidden ml-5">
          <img
            src={mypng}
            alt="mypng"
            className="w-[400px] h-[400px] object-cover"
            style={{ borderRadius: "inherit" }}
          />
        </div>
        <div className="text-lg text-justify p-4 shadow-lg rounded-lg border-4 border-blue-500">
          <p className="mb-4">
            Hello! I'm <span className="font-bold">Himanshu Shekhar Panda</span>, a passionate and driven full-stack developer currently in my final year of B.Tech in Computer Science and Engineering. Over the years, I've cultivated a strong foundation in both frontend and backend development, allowing me to build and deliver full-featured applications from concept to completion.
          </p>
          <p className="mb-4">
            Creating efficient, user-friendly applications is what I love, and I’m always exploring new technologies and frameworks to enhance my skills. Each project I undertake is a new opportunity to solve real-world problems through code, and I bring a thoughtful, solution-oriented approach to every challenge.
          </p>
          <p>
            Thank you for visiting my portfolio. I look forward to connecting with like-minded professionals and collaborating on exciting projects!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

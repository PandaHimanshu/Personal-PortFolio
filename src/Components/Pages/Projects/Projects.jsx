import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import gemini from '../../../assets/gemini.png';
import weather from '../../../assets/weather.png';
import quiz from '../../../assets/quiz.png';
import scm from '../../../assets/scm.png';
import servlet from '../../../assets/servlet.png';
import cricinformer from '../../../assets/cricinformer.png';
import todo from '../../../assets/todo.png';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Projects() {
  const projects = [
    {
      id: 1,
      type: 'frontend',
      image: gemini,
      heading: 'AI-Assistant',
      description: 'Developed a Gemini clone for asistance for users queries and tasks using React Framework.',
      fullDescription: 'This project focused on delivering a responsive, user-friendly interface capable of understanding and responding intelligently to user queries. Through React robust component-based architecture, I ensured the application is scalable and maintains high performance. The project highlights my skills in integrating APIs, managing state, and building advanced AI-driven functionalities in web applications',
      githubLink: 'https://github.com/PandaHimanshu/Gemini-Clone---AI-Assistant',
      liveLink: 'https://pandahimanshu.github.io/Gemini-Clone---AI-Assistant/'
    },
    {
      id: 2,
      type: 'frontend',
      image: weather,
      heading: 'Weather Tracking App',
      description: 'Created a weather monitoring application to display real-time weather data for any location.',
      fullDescription: 'Developed a simple yet functional weather monitoring application using HTML, CSS, and JavaScript. The application integrates the OpenWeatherMap API to fetch and display current weather data such as temperature, humidity, wind speed, and weather conditions for any city entered by the user. It features a clean and responsive design, ensuring accessibility across devices. This project highlights my skills in working with APIs, handling asynchronous JavaScript operations, and building dynamic, user-friendly web applications with core web technologies.',
      githubLink: 'https://github.com/PandaHimanshu/Weather_Web_App',
      liveLink: 'https://pandahimanshu.github.io/Weather_Web_App/'
    },
    {
      id: 3,
      type: 'frontend',
      image: quiz,
      heading: 'Quiz App',
      description: 'Created a dynamic Quiz Application, providing an engaging and interactive user experience.',
      fullDescription: 'Developed a feature-rich Quiz Application using HTML, CSS, and JavaScript. The application dynamically retrieves quiz questions and answers from an external API, making it flexible and content-rich. The intuitive user interface ensures seamless interaction, while JavaScript handles the quiz logic, such as tracking scores, validating answers, and providing instant feedback. This project showcases the effective use of APIs for real-time data integration and demonstrates strong front-end development skills in creating engaging, responsive, and interactive web applications.',
      githubLink: 'https://github.com/PandaHimanshu/Quiz_App',
      liveLink: 'https://pandahimanshu.github.io/Quiz_App/'
    },

    {
      id: 4,
      type: 'fullstack',
      image: scm,
      heading: 'Smart-Control-Manager',
      description: 'Developed Smart Control Manager, a full-stack application, for managing contact information',
      fullDescription: 'Smart Control Manager is a robust full-stack application designed for efficient contact management. Built with Spring Boot for the backend and Thymeleaf for the frontend, the application allows users to store and manage contact details seamlessly. It integrates with Cloudinary for storing associated images securely in the cloud, ensuring both data and media are accessible from anywhere. The project demonstrates key full-stack development skills, including backend API creation, cloud integration, and responsive user interfaces. With a focus on security and usability, it serves as a practical solution for organizing and managing personal or professional contacts.',
      githubLink: 'https://github.com/PandaHimanshu/Smart-Control-Manager',
      liveLink: 'https://github.com/PandaHimanshu/Smart-Control-Manager'
    },
    {
      id: 5,
      type: 'fullstack',
      image: servlet,
      heading: 'Weather-Application-Servlet',
      description: 'It is a JSP and Servlet-based web application that fetches real-time weather data and displays it to users',
      fullDescription: 'Weather-Application-Servlet is a dynamic web application built using JSP (JavaServer Pages) and Servlets, designed to provide real-time weather information to users. By integrating with an external weather API, the application fetches weather details, including temperature, humidity, wind speed, and forecasts, based on the users input (location or city). The user interface is simple yet informative, presenting the data in an easy-to-read format. This project showcases skills in Java-based web development, handling API requests, processing JSON responses, and displaying data dynamically with JSP and Servlets. It is an ideal solution for understanding the basics of web applications and Java-based backend development.',
      githubLink: 'https://github.com/PandaHimanshu/Weather-Application-Servlet',
      liveLink: 'https://github.com/PandaHimanshu/Weather-Application-Servlet'
    },
    {
      id: 6,
      type: 'backend',
      image: cricinformer,
      heading: 'Crik Informer',
      description: 'CrikInformer is a Spring Boot backend application offering real-time cricket updates',
      fullDescription: 'CrikInformer is a robust backend application developed using Spring Boot, aimed at providing cricket enthusiasts with real-time updates and comprehensive statistics. The application features RESTful APIs that deliver live scores, player statistics, and match schedules seamlessly. It leverages an SQL database for efficient and reliable data management, ensuring the timely delivery of accurate cricket information. By offering an engaging platform for accessing cricket updates, CricInformer caters to the needs of users who value precision and speed in sports data. This project demonstrates expertise in backend development, REST API creation, and database management.',
      githubLink: 'https://github.com/PandaHimanshu/CricInformer',
      liveLink: 'https://github.com/PandaHimanshu/CricInformer'
    },
    {
      id: 7,
      type: 'backend',
      image: todo,
      heading: 'TODO App',
      description: 'It is a full-stack web application built with Spring Boot for the backend and MySQL for data storage',
      fullDescription: 'The Todo App is a task management application built using Spring Boot and MySQL. The backend is powered by Spring Boot, providing RESTful APIs to perform CRUD (Create, Read, Update, Delete) operations on tasks. The application is designed to allow users to add new tasks, mark them as completed, update task details, and delete them when no longer needed. MySQL is used as the database to store the tasks and their related information. The frontend can be built with HTML, CSS, and JavaScript (or any front-end framework like React or Angular), communicating with the backend via HTTP requests to retrieve and manipulate task data. The app demonstrates full-stack development practices and provides a practical solution for managing daily tasks.',
      githubLink: 'https://github.com/PandaHimanshu/Todo-backend-SpringBoot',
      liveLink: 'https://github.com/PandaHimanshu/Todo-backend-SpringBoot'
    },

  ];

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.type === filter);

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const projectTemplate = (project) => {
    return (
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-3 m-2">
        <img src={project.image} alt={project.heading} className="w-full h-[244px] object-cover rounded-t-lg" />
        <h3 className="text-xl font-semibold mt-4 text-black">{project.heading}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <div className="flex gap-2 mt-2 icons text-black">
          <Button icon="pi pi-info-circle" className="p-button-info" onClick={() => handleShowMore(project)} tooltip="View Details" />
          <Button icon="pi pi-github" className="p-button-secondary" onClick={() => window.open(project.githubLink, '_blank')} tooltip="View Source" />
          <Button icon="pi pi-globe" className="p-button-success" onClick={() => window.open(project.liveLink, '_blank')} tooltip="View Live" />
        </div>
      </div>
    );
  };

  const handleShowMore = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setSelectedProject(null);
  };

  return (
    <section className="min-h-screen py-6" id='services'>
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="text-center mb-6">
        <button onClick={() => setFilter('all')} className={`m-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}>All</button>
        <button onClick={() => setFilter('frontend')} className={`m-2 px-4 py-2 rounded ${filter === 'frontend' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}>Frontend</button>
        <button onClick={() => setFilter('fullstack')} className={`m-2 px-4 py-2 rounded ${filter === 'fullstack' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}>Fullstack</button>
        <button onClick={() => setFilter('backend')} className={`m-2 px-4 py-2 rounded ${filter === 'backend' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}>Backend</button>
      </div>
      <div className="w-full flex justify-center">
        <Carousel value={filteredProjects} itemTemplate={projectTemplate} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="w-full max-w-5xl" />
      </div>
      {selectedProject && (
        <Dialog className='text-center' header={selectedProject.heading} visible={isModalVisible} style={{ width: '40vw' }} onHide={hideModal}>
          <div className="p-4">
            <p className="text-gray-600">{selectedProject.fullDescription}</p>
          </div>
        </Dialog>
      )}
    </section>
  );
}

export default Projects;

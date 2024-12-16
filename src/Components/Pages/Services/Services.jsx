import React from 'react';
import Header from '../../Header/Header';

function Services() {
  const services = [
    { title: 'Full Stack Developer', 
      description: 'As a skilled Full Stack Developer, I offer comprehensive services to create robust, scalable, and user-friendly web applications. Leveraging modern frontend technologies like React and Tailwind CSS, I craft interactive and responsive user interfaces that ensure seamless user experiences. On the backend, I specialize in Spring Boot, delivering powerful APIs and managing complex business logic efficiently. With a strong grasp of database systems, I design and maintain secure, high-performance data layers to support application functionality. My goal is to deliver end-to-end solutions tailored to meet diverse client needs, combining creativity with technical expertise.' },
    { title: 'Java Backend Developer',
      description: 'As a proficient Java Backend Developer, I specialize in building secure, efficient, and scalable backend solutions for web applications. Using Spring Boot as my primary framework, I design and implement robust RESTful APIs that ensure seamless communication between the frontend and backend systems. My expertise includes handling complex business logic, integrating third-party services, and ensuring high performance through optimized code. I also focus on secure data management by utilizing relational databases and implementing industry-standard practices. With a commitment to quality and efficiency, I deliver backend systems that power intuitive, reliable, and scalable applications.' },
    { title: 'Frontend Developer', 
      description: 'As a dedicated Frontend Developer, I craft visually appealing and responsive user interfaces that deliver seamless user experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I transform designs into interactive and functional applications. I prioritize performance, accessibility, and cross-browser compatibility to ensure the application runs smoothly on all devices. By leveraging tools like Tailwind CSS for streamlined styling and Redux for efficient state management, I create dynamic and engaging web applications. My focus is on building intuitive interfaces that enhance user satisfaction and align with client goals.' },
  ];

  return (
    <section className=" min-h-screen" id='services'>
      <h1 className="text-4xl font-bold text-center my-8">My Services</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer"
            >
              <h2 className="text-2xl font-semibold mb-4 ">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

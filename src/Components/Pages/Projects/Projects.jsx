import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import img from '../../../assets/myimg.jpg';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Projects() {
  const projects = [
    {
      id: 1,
      type: 'frontend',
      image: img,
      heading: 'Notes App',
      description: 'Frontend project 1 description lorem fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgch',
      fullDescription: 'Detailed description for Frontend project 1 fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgc',
      githubLink: 'https://github.com/username/repo1',
      liveLink: 'https://project1.example.com'
    },
    {
      id: 2,
      type: 'frontend',
      image: img,
      heading: 'Notes App',
      description: 'Frontend project 2 description lorem fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgch',
      fullDescription: 'Detailed description for Frontend project 2 fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgc',
      githubLink: 'https://github.com/username/repo2',
      liveLink: 'https://project2.example.com'
    },
    {
      id: 3,
      type: 'frontend',
      image: img,
      heading: 'Notes App',
      description: 'Frontend project 2 description lorem fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgch',
      fullDescription: 'Detailed description for Frontend project 2 fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgc',
      githubLink: 'https://github.com/username/repo2',
      liveLink: 'https://project2.example.com'
    },
    {
      id: 4,
      type: 'fullstack',
      image: img,
      heading: 'Notes App',
      description: 'Frontend project 2 description lorem fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgch',
      fullDescription: 'Detailed description for Frontend project 2 fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgc',
      githubLink: 'https://github.com/username/repo2',
      liveLink: 'https://project2.example.com'
    },
    {
      id: 5,
      type: 'fullstack',
      image: img,
      heading: 'Notes App',
      description: 'Frontend project 2 description lorem fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgch',
      fullDescription: 'Detailed description for Frontend project 2 fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgc',
      githubLink: 'https://github.com/username/repo2',
      liveLink: 'https://project2.example.com'
    },
    {
      id: 6,
      type: 'fullstack',
      image: img,
      heading: 'Notes App',
      description: 'Frontend project 2 description lorem fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgch',
      fullDescription: 'Detailed description for Frontend project 2 fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgc',
      githubLink: 'https://github.com/username/repo2',
      liveLink: 'https://project2.example.com'
    },
    {
      id: 7,
      type: 'android',
      image: img,
      heading: 'Notes App',
      description: 'Frontend project 2 description lorem fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgch',
      fullDescription: 'Detailed description for Frontend project 2 fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgc',
      githubLink: 'https://github.com/username/repo2',
      liveLink: 'https://project2.example.com'
    },
    {
      id: 8,
      type: 'android',
      image: img,
      heading: 'Notes App',
      description: 'Frontend project 2 description lorem fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgch',
      fullDescription: 'Detailed description for Frontend project 2 fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgc',
      githubLink: 'https://github.com/username/repo2',
      liveLink: 'https://project2.example.com'
    },
    {
      id: 9,
      type: 'android',
      image: img,
      heading: 'Notes App',
      description: 'Frontend project 2 description lorem fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgch',
      fullDescription: 'Detailed description for Frontend project 2 fyhhg c ghcvhgvc vvhvhvh gcvhgcvhgchg cgvhgchch chgc',
      githubLink: 'https://github.com/username/repo2',
      liveLink: 'https://project2.example.com'
    }
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
        <h3 className="text-xl font-semibold mt-4">{project.heading}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <div className="flex gap-2 mt-2 icons">
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
    <section className="min-h-screen py-12" id='services'>
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="text-center mb-6">
        <button onClick={() => setFilter('all')} className={`m-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}>All</button>
        <button onClick={() => setFilter('frontend')} className={`m-2 px-4 py-2 rounded ${filter === 'frontend' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}>Frontend</button>
        <button onClick={() => setFilter('fullstack')} className={`m-2 px-4 py-2 rounded ${filter === 'fullstack' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}>Fullstack</button>
        <button onClick={() => setFilter('android')} className={`m-2 px-4 py-2 rounded ${filter === 'android' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}>Android</button>
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

import React from 'react';
import Header from '../../Header/Header';

function Services() {
  const services = [
    { title: 'Web Developer', description: 'Building responsive and performant websites..hellok dqw d dewq wef ef wef we fwe f efwe wf wef we fw.hellok dqw d dewq wef ef wef we fwe f efwe wf wef we fw' },
    { title: 'Android Developer', description: 'Developing robust Android applications..hellok dqw d dewq wef ef wef we fwe f efwe wf wef we fw.hellok dqw d dewq wef ef wef we fwe f efwe wf wef we fw' },
    { title: 'Java Developer', description: 'Creating efficient Java applications..hellok dqw d dewq wef ef wef we fwe f efwe wf wef we fw.hellok dqw d dewq wef ef wef we fwe f efwe wf wef we fw' },
    { title: 'UI/UX Designer', description: 'Designing intuitive user interfaces..hellok dqw d dewq wef ef wef we fwe f efwe wf wef we fw.hellok dqw d dewq wef ef wef we fwe f efwe wf wef we fw' },
    { title: 'Backend Developer', description: 'Developing scalable backend services..hellok dqw d dewq wef ef wef we fwe f efwe wf wef we fw.hellok dqw d dewq wef ef wef we fwe f efwe wf wef we fw' },
    { title: 'Full Stack Developer', description: 'Handling both frontend and backend development.hellok dqw d dewq wef ef wef we fwe f efwe wf wef we fwef ef we re wfewe fwef ewfwef wef f few fwe f we f we fwe fewf e wf  wef  f ewf  feyuitsy n r uy' },,
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
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

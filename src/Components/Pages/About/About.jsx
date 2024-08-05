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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe accusamus exercitationem blanditiis impedit commodi, incidunt, nihil illo est neque eveniet nesciunt dolorum culpa veniam facilis omnis debitis. Necessitatibus deserunt incidunt inventore rem nesciunt, a labore minus facilis excepturi fuga omnis autem. Quas vel id iusto eveniet doloribus aperiam hic iste reiciendis cumque at illum alias neque, magnam numquam explicabo tempora, accusantium voluptatum ex recusandae. Consequuntur mollitia eos quibusdam, ullam voluptatem asperiores sequi. Tempore accusamus cupiditate, provident, doloribus ea nihil aliquid aspernatur sequi et officia ex! Expedita reprehenderit facere ipsam soluta! Explicabo ex inventore eos pariatur excepturi! Quos quibusdam modi fuga?
        </div>
      </div>
    </section>
  );
}

export default About;

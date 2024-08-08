import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import React, { useState, useEffect } from 'react';




const Projects = () => {

  const texts = ["Projects", "Thinking", "Ideas"];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 120;
    // const pauseDuration = 1000;

    const handleTypeWriter = () => {
      const text = texts[textIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(text.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      } else {
        if (charIndex < text.length) {
          setCurrentText(text.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const interval = setInterval(handleTypeWriter, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(interval); 
  }, [charIndex, isDeleting, textIndex]);


  const categories = ['All', 'VR', 'AR', 'Web AR', 'Unity'];

  return (
    <div className='max-container max-w-max'>
    <div className='min-container'>
      <h1 className='head-text' style={{ color: '#ffffff' }}>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold typewriter-wrapper'>
        <span className='typewriter-text'>{currentText}</span>
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I'm passionate about learning about new technologies, therefore I play around with AR and VR frameworks, 
        hand-tracking user interface interactions, and utilizing Arduino hardware with Unity. 
        I'm committed to extending the capabilities of AR and VR to develop entertaining and practical applications.
      </p>

      {/* Category Filters */}
      <div className='flex justify-center gap-6 mb-10' style={{ paddingTop: '20px' }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded gradient-button ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
      {projects
  .filter(project => selectedCategory === 'All' || project.category === selectedCategory)
  .map((project) => (
    <div className='lg:w-[400px] w-full' style={{ color: '#ffffff' }} key={project.name}>
      <div className='block-container w-12 h-12'>
        <div className={`btn-back rounded-xl ${project.theme}`} />
        <div className='btn-front rounded-xl flex justify-center items-center'>
          <img
            src={project.iconUrl}
            alt='project icon'
            className='w-1/2 h-1/2 object-contain'
          />
        </div>
      </div>

      <div className='mt-5 flex flex-col'>
        <h4 className='text-2xl font-poppins font-semibold'>
          {project.name}
        </h4>
        <p className='mt-2 text-slate-500'>{project.description}</p>

        <div className='my-5 flex flex-col'>
          <div className='w-full rounded-xl overflow-hidden'>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title={`${project.name} video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className='mt-5 flex items-center gap-2 font-poppins'>
          <Link
            to={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-blue-600'
          >
            Live Link
          </Link>
          <img
            src={arrow}
            alt='arrow'
            className='w-4 h-4 object-contain'
          />
        </div>
      </div>
    </div>
  ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </div>
    </div>
  );
};

export default Projects;

import React, { useState, useEffect } from 'react';

// Define the interface for the project object
interface Project {
  image: string;
  name: string;
}

// Define the props for the ProjectCarousel component
interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [projects.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/3"
          >
            <div className="flex flex-col items-center">
              <img src={project.image} alt={project.name} className="w-64 h-auto mx-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
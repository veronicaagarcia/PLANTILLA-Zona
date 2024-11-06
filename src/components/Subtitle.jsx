import { useEffect, useRef, useState } from 'react';

const Subtitle = ({ name, textColor}) => {
  const subtitleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Maneja la animación al hacer scroll
  const handleScroll = () => {
    const position = subtitleRef.current.getBoundingClientRect();
    if (position.top < window.innerHeight && !isVisible) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div className="relative inline-block mx-auto p-1 md:p-2 mb-4 md:mb-6 xl:mb-8">
      <h2 
        ref={subtitleRef}
        className={`relative z-10 inline-block text-center w-fit mx-auto font-heading font-medium text-${textColor} text-base md:text-lg xl:text-xl 
          mt-4 md:mt-6 xl:mt-8 
          transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {name}
        <span className={`block h-[2px] w-full bg-current mt-1 transition-transform duration-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></span>
      </h2>
      <svg 
        className="absolute inset-0 w-full h-full -z-10" 
        viewBox="0 0 200 60" 
        preserveAspectRatio="none"
      >
        <path 
          d="M10,30 Q30,10 50,30 T90,30 T130,30 T170,30 Q190,30 190,30" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="path-animation"
        />
      </svg>
      <style jsx>{`
        .path-animation {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw 1s forwards;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .path-animation {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Subtitle;


import { useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add an event listener to check for scroll position
  window.addEventListener('scroll', handleScroll);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-4 text-3xl right-4 p-1 px-3 bg-black text-white rounded-full transition-transform transform hover:scale-105 focus:outline-none`}
    >
      ^
    </button>
  );
};

export default ScrollToTopButton;
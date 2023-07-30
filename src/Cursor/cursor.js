import React, { useEffect, useState } from 'react';
import './cursor.css';

function Cursor() {
  const [postX, setPostX] = useState(0);
  const [postY, setPostY] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPostX(e.clientX);
      setPostY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300); 
  };

  return (
    <div>
      <div
        className={`cursor ${clicked ? 'cursor-clicked' : ''}`}
        style={{ left: `${postX}px`, top: `${postY}px` }}
        data-cursor
        onClick={handleClick} // Attach onClick event to handle the click
      ></div>
      <div
        className={`cursor-outline ${clicked ? 'cursor-clicked' : ''}`}
        style={{ left: `${postX}px`, top: `${postY}px` }}
        data-cursor-outline
        onClick={handleClick}
      ></div>
    </div>
  );
}

export default Cursor;

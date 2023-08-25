// import React, { useEffect, useState } from 'react';
// import './cursor.css';

// function Cursor() {
//   const [postX, setPostX] = useState(0);
//   const [postY, setPostY] = useState(0);
//   const [clicked, setClicked] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPostX(e.clientX);
//       setPostY(e.clientY);
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const handleClick = () => {
//     setClicked(true);
//     setTimeout(() => setClicked(false), 300); 
//   };

//   return (
//     <div>
//       <div
//         className={`cursor ${clicked ? 'cursor-clicked' : ''}`}
//         style={{ left: `${postX}px`, top: `${postY}px` }}
//         data-cursor
//         onClick={handleClick}
//       ></div>
//       <div
//         className={`cursor-outline ${clicked ? 'cursor-clicked' : ''}`}
//         style={{ left: `${postX}px`, top: `${postY}px` }}
//         data-cursor-outline
//         onClick={handleClick}
//       ></div>
//     </div>
//   );
// }

// export default Cursor;


import React from 'react';
import useMousePosition from './useMousePosition';
import './YourStyles.css'; // Import your CSS file

const Cursor = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="ring"
      ></div>
      <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default Cursor;


// import React from 'react';
// import { FaLinkedin } from "react-icons/fa"; // Import the LinkedIn icon

// const Footer = () => {
//   return (
//     <div>
//       <footer className='flex flex-col items-center justify-between m-6 mb-0'>
//         <nav className='flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700 p-4 rounded'>
//           <a className='hover:text-cyan-500 text-amber-500' href="#">Home</a>
//           <a className='hover:text-cyan-500 text-amber-500' href="#offer">Offer</a>
//           <a className='hover:text-cyan-500 text-amber-500' href="#order">Order</a>
//           <a className='hover:text-cyan-500 text-amber-500' href="#contact">Contact</a>
//         </nav>

//         <div className='flex justify-center space-x-5 my-4 transition-transform duration-500 ease-in-out transform hover:scale-105'>
//           {/* GitHub Icon */}
//           <a href="https://github.com/" target='blank' rel='nofollow noopener'>
//             <img 
//               src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" 
//               alt="GitHub Logo" 
//               className="w-8 h-8"
//             />
//           </a>

//           {/* LinkedIn Icon */}
//           <a href="https://www.linkedin.com/in/areesha-nadeem-4556a92a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank' rel='nofollow noopener'>
//             <FaLinkedin className="text-blue-600 w-8 h-8" />
//           </a>
//         </div>

//         <p className='text-center hover:text-cyan-500 text-amber-400 font-medium mb-8'>2024 Areesha Nadeem. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Footer;


import React from 'react';
import { FaLinkedin } from "react-icons/fa"; // Import the LinkedIn icon

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-between m-6 mb-0 bg-gradient-to-r from-black to-slate-800 p-6 rounded'>
      <nav className='flex justify-center flex-wrap gap-6 text-slate-300 font-medium'>
        <a className='hover:text-cyan-500 text-amber-400' href="#">Home</a>
        <a className='hover:text-cyan-500 text-amber-400' href="#offer">Offer</a>
        <a className='hover:text-cyan-500 text-amber-400' href="#order">Order</a>
        <a className='hover:text-cyan-500 text-amber-400' href="#contact">Contact</a>
      </nav>

      <div className='flex justify-center space-x-5 my-4 transition-transform duration-500 ease-in-out transform hover:scale-105'>
        {/* GitHub Icon */}
        <a href="https://github.com/" target='_blank' rel='nofollow noopener'>
          <img 
            src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" 
            alt="GitHub Logo" 
            className="w-8 h-8"
          />
        </a>

        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/areesha-nadeem-4556a92a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='nofollow noopener'>
          <FaLinkedin className="text-blue-500 w-8 h-8" />
        </a>
      </div>

      <p className='text-center hover:text-cyan-500 text-amber-300 font-medium mb-8'>2024 Areesha Nadeem. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

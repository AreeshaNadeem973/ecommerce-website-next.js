// import React from "react";
// import { FaPizzaSlice } from "react-icons/fa"; // Fixed import
// import { FaSearch } from "react-icons/fa"; // Fixed import
// import { FaBolt } from "react-icons/fa"; // Ensure FaBolt is imported
// import { FaCartShopping } from "react-icons/fa6";

// const Navbar = () => {
//   return (
//     <div>
//       <div className="grid xl:grid-cols-1 grid-cols-1">
//         <div className="p-5">
//           <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-tr from-black to-gray-900">
//             <div className="flex justify-between items-center">
//               <div className="flex justify-items-center items-center gap-2">
//                 {/* Logo - Pizza */}
//                 <FaPizzaSlice className="w-6 h-6 text-yellow-400 hover:text-orange-400" />

//                 {/* Search icon */}
//                 <div style={{ position: "relative" }}>
//                   <input
//                     className="rounded-3xl py-3 px-3 outline-none text-lg w-[350px] pr-10 lg:block md:block"
//                     placeholder="Search for your favourite Pizzas from Menu."
//                   />
//                   <FaSearch className="w-5 h-5 text-gray-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
//                 </div>
//               </div>

//               <div className="flex justify-center items-center gap-2">
//                 <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block" />
//                 <p className="text-sm text-white hidden lg:block md:block">
//                   {""} Order now and get it with
//                 </p>
//                 <span className="text-amber-400">15 minutes!</span>

//                 {/* Cart icon */}
//                 <FaCartShopping className="w-8 h-8 text-sky-400 rounded-full ring-2 p-1 relative hover:text-amber-400" />

//                 <img
//                   className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-400"
//                   src="https://static.vecteezy.com/system/resources/previews/011/157/909/non_2x/pizzeria-emblem-on-blackboard-pizza-logo-template-emblem-for-cafe-restaurant-or-food-delivery-service-vector.jpg"
//                   alt="user avatar"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { FaPizzaSlice, FaSearch, FaBolt } from "react-icons/fa"; 
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-tr from-black to-gray-900 p-5 rounded-xl border w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo - Pizza */}
          <FaPizzaSlice className="w-6 h-6 text-yellow-400 hover:text-orange-400" />

          {/* Search icon */}
          <div className="relative">
            <input
              className="rounded-3xl py-3 px-3 outline-none text-lg w-full max-w-xs pr-10"
              placeholder="Search for your favourite Pizzas from Menu."
            />
            <FaSearch className="w-5 h-5 text-gray-300 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaBolt className="w-5 h-5 text-amber-400 hidden md:block" />
          <p className="text-sm text-white hidden md:block">
            Order now and get it with
          </p>
          <span className="text-amber-400 hidden md:block">15 minutes!</span>

          {/* Cart icon */}
          <FaCartShopping className="w-8 h-8 text-sky-400 rounded-full ring-2 p-1 relative hover:text-amber-400" />

          <img
            className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400"
            src="https://static.vecteezy.com/system/resources/previews/011/157/909/non_2x/pizzeria-emblem-on-blackboard-pizza-logo-template-emblem-for-cafe-restaurant-or-food-delivery-service-vector.jpg"
            alt="user avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;




// import React from "react";
// import { FaShoppingCart } from "react-icons/fa";

// const ProductCardGrid = () => {
//   const productImages = [
//     "https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/06/supreme-pizza-lifted-slice.jpg",
//     "https://img.freepik.com/premium-photo/professional-food-photography-pizza-margarita_964851-11615.jpg",
//     "https://media.istockphoto.com/id/1198079266/photo/deluxe-pizza-with-pepperoni-sausage-mushrooms-and-peppers.jpg?s=612x612&w=0&k=20&c=TCpJThR1MnAsantJcskN14Uvd5EsZP5JCA69rVBqJDM=",
//     "https://media.istockphoto.com/id/835271096/photo/slice-of-pizza-cheese-crust-seafood-topping-sauce-with-bell-pepper-vegetables-delicious-tasty.jpg?s=612x612&w=0&k=20&c=Fh7GHdiX3RQKfAbOSQR3fxgPI_UUFCuFhtpBvTaoHUM=",
//     "https://media.istockphoto.com/id/468515806/photo/pizza.jpg?s=612x612&w=0&k=20&c=X2K8aiRYh23fcmmOCLGAK4ZFOIpj0cdLe2yv0AoZSIw=",
//     "https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw="
//   ];

//   return (
//     <div id="order" className="relative text-center p-5 md:p-10">
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `url('https://i.pinimg.com/564x/58/c6/29/58c6290a49601366f248962eb0f9e8bb.jpg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 0,
//           opacity: 0.1,
//         }}
//       />

//       <h1 className="font-bold text-3xl md:text-4xl text-white z-10 relative">
//         Most Requested Items
//       </h1>
//       <h2 className="text-2xl md:text-3xl text-white z-10 relative">Order Now..!</h2>

//       <section 
//         id="Projects"
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10 gap-x-5 mt-10 mb-5"
//       >
//         {Array.from({ length: 6 }).map((_, index) => (
//           <div
//             key={index}
//             className="w-full max-w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
//           >
//             <a href="#">
//               <img 
//                 src={productImages[index]}
//                 alt={`Product ${index + 1}`}
//                 className="h-48 w-full object-cover rounded-t-xl" 
//               />
//               <div className="px-4 py-3">
//                 <span className="text-slate-500 mr-3 uppercase text-xs">Category</span>
//                 <p className="text-lg font-bold text-red-700 truncate block capitalize">Pizza {index + 1}</p>

//                 <div className="flex items-center">
//                   <p className="text-lg font-semibold text-black my-3 cursor-auto">$149</p>

//                   <del>
//                     <p className="text-blue-800 cursor-auto ml-2">$199</p>
//                   </del>

//                   <div className="ml-auto">
//                     <FaShoppingCart className="w-5 h-5 text-blue-800" />
//                   </div>
//                 </div>
//               </div>
//             </a>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default ProductCardGrid;


import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  const productImages = [
    "https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/06/supreme-pizza-lifted-slice.jpg",
    "https://img.freepik.com/premium-photo/professional-food-photography-pizza-margarita_964851-11615.jpg",
    "https://media.istockphoto.com/id/1198079266/photo/deluxe-pizza-with-pepperoni-sausage-mushrooms-and-peppers.jpg?s=612x612&w=0&k=20&c=TCpJThR1MnAsantJcskN14Uvd5EsZP5JCA69rVBqJDM=",
    "https://media.istockphoto.com/id/835271096/photo/slice-of-pizza-cheese-crust-seafood-topping-sauce-with-bell-pepper-vegetables-delicious-tasty.jpg?s=612x612&w=0&k=20&c=Fh7GHdiX3RQKfAbOSQR3fxgPI_UUFCuFhtpBvTaoHUM=",
    "https://media.istockphoto.com/id/468515806/photo/pizza.jpg?s=612x612&w=0&k=20&c=X2K8aiRYh23fcmmOCLGAK4ZFOIpj0cdLe2yv0AoZSIw=",
    "https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw="
  ];

  return (
    <div id="order" className="relative text-center p-5 md:p-10 bg-gradient-to-r from-gray-900 to-gray-800">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/58/c6/29/58c6290a49601366f248962eb0f9e8bb.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />

      <h1 className="font-bold text-3xl md:text-4xl text-white z-10 relative">Most Requested Items</h1>
      <h2 className="text-2xl md:text-3xl text-white z-10 relative">Order Now..!</h2>

      <section 
        id="Projects"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10 gap-x-5 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img 
                src={productImages[index]}
                alt={`Product ${index + 1}`}
                className="h-48 w-full object-cover rounded-t-xl" 
              />
              <div className="px-4 py-3">
                <span className="text-slate-500 mr-3 uppercase text-xs">Category</span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">Pizza {index + 1}</p>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">$149</p>

                  <del>
                    <p className="text-gray-500 cursor-auto ml-2">$199</p>
                  </del>

                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-blue-600 hover:text-blue-800 transition duration-300" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCardGrid;



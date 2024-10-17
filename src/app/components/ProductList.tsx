
// import React from 'react';

// const products = [
//   {
//     id: 1,
//     title: "Pepperoni Pizza",
//     category: "Fixing", 
//     price: 300.00,
//     imageUrl: "https://i0.wp.com/olivesandlamb.com/wp-content/uploads/2024/05/Chicken-Parmesan-Pizza-10-4x5-1-scaled.jpg?resize=1229%2C1536&ssl=1",
//     bgColor: "bg-amber-500"
//   },
//   {
//     id: 2,
//     title: "Philly Cheese Steak Pizza",
//     category: "Delights",
//     price: 200.00,
//     imageUrl: "https://img.freepik.com/premium-photo/bbq-chicken-pizza-feast-top-view_1170794-94678.jpg",
//     bgColor: "bg-teal-500"
//   },
//   { 
//     id: 3,
//     title: "BBQ Chicken Pizza",
//     category: "Fixing",
//     price: 500.00,
//     imageUrl: "https://s.tmimgcdn.com/scr/800x500/413600/flatlay-realistic-bbq-chicken-pizza-7_413680-original.jpg",
//     bgColor: "bg-amber-500"
//   },
// ];

// const ProductList = () => { 
//   return (
//     <div className='p-4 flex flex-row items-center justify-center mb-6 overflow-x-auto whitespace-nowrap'>
//       {products.map((product, index) => (
//         <div 
//           key={product.id} 
//           className={`flex-shrink-0 ${index !== products.length - 1 ? 'mr-4' : ''} relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg w-72 sm:w-80 md:w-64 lg:w-80 border-b-4 border-gray-300`}
//         >
//           <img 
//             className="relative w-full h-48 sm:h-64 object-cover rounded-t-lg mt-4" 
//             src={product.imageUrl} 
//             alt={product.title} 
//           />
//           <div className='relative text-white px-4 pb-4 mt-2'>
//             <span className='block opacity-75 text-sm'>{product.category}</span>
//             <div className='flex justify-between items-center'>
//               <span className='block font-semibold text-lg truncate'>{product.title}</span>
//               <span className='block bg-white rounded-full text-orange-500 text-sm font-bold px-3 py-1 leading-none'>
//                 {product.price.toFixed(2)}
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

import React from 'react';

const products = [
  {
    id: 1, 
    title: "Pepperoni Pizza",
    category: "Fixing", 
    price: 300.00,
    imageUrl: "https://i0.wp.com/olivesandlamb.com/wp-content/uploads/2024/05/Chicken-Parmesan-Pizza-10-4x5-1-scaled.jpg?resize=1229%2C1536&ssl=1", 
    bgColor: "bg-orange-500" // Changed to a more vibrant color
  },
  {
    id: 2,
    title: "Philly Cheese Steak Pizza",
    category: "Delights",
    price: 200.00,
    imageUrl: "https://img.freepik.com/premium-photo/bbq-chicken-pizza-feast-top-view_1170794-94678.jpg",
    bgColor: "bg-teal-500"
  },
  { 
    id: 3,
    title: "BBQ Chicken Pizza",
    category: "Fixing",
    price: 500.00,
    imageUrl: "https://s.tmimgcdn.com/scr/800x500/413600/flatlay-realistic-bbq-chicken-pizza-7_413680-original.jpg",
    bgColor: "bg-orange-500" // Changed to a more vibrant color
  },
];

const ProductList = () => { 
  return (
    <div className='p-4 flex flex-row items-center justify-center mb-6 overflow-x-auto whitespace-nowrap'>
      {products.map((product) => (
        <div 
          key={product.id} 
          className={`flex-shrink-0 mr-4 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg w-72 sm:w-80 md:w-64 lg:w-80 border-b-4 border-gray-300`}
        >
          <img 
            className="relative w-full h-48 sm:h-64 object-cover rounded-t-lg mt-4" 
            src={product.imageUrl} 
            alt={product.title} 
          />
          <div className='relative text-white px-4 pb-4 mt-2'>
            <span className='block opacity-75 text-sm'>{product.category}</span>
            <div className='flex justify-between items-center'>
              <span className='block font-semibold text-lg truncate'>{product.title}</span>
              <span className='block bg-white rounded-full text-orange-500 text-sm font-bold px-3 py-1 leading-none'>
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;




// import React from 'react';

// const Pizza = [
//   {
//     id: 1,
//     title: "Mexican Pizza",
//     category: "Fixing",
//     price: 200.00,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VRMYFgPTn_9CMQy0UL2aMS3Wui8Kpzgn09jyV-D0wXdkgAsHNNpNHIRrDlbCYKYWNd8&usqp=CAU",
//     bgColor: "bg-amber-500"
//   },
//   {
//     id: 2,
//     title: "Classy Pizza",
//     category: "Delights",
//     price: 150.00,
//     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWUglV8dq8xxyMpahUJRFkWkipcgJ88Iclg&s",
//     bgColor: "bg-teal-500"
//   },
//   {
//     id: 3,
//     title: "Family Pizza",
//     category: "Fixing",
//     price: 400.00,
//     imageUrl: "https://i.pinimg.com/564x/2d/6b/7d/2d6b7df948d14f41e9a1a48e5b37e9c5.jpg",
//     bgColor: "bg-amber-500"
//   },
// ];

// const PizzaList = () => {
//   return (
//     <div className='p-2 flex items-center justify-center overflow-x-auto whitespace-nowrap px-6 space-x-4'>
//       {Pizza.map((pizza) => (
//         <div key={pizza.id} className={`flex-shrink-0 ${pizza.bgColor} rounded-lg shadow-lg w-72 border-b-4 border-gray-300`}>
//           <img className="w-full h-48 object-cover rounded-t-lg" src={pizza.imageUrl} alt={pizza.title} />
//           <div className='text-white px-6 py-4'>
//             <span className='block opacity-75 text-sm'>{pizza.category}</span>
//             <div className='flex justify-between items-center'>
//               <span className='font-semibold text-xl'>{pizza.title}</span>
//               <span className='bg-white rounded-full text-orange-500 text-sm font-bold px-3 py-2'>
//                 {pizza.price.toFixed(2)}
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PizzaList;




import React from 'react';

const pizzaData = [
  {
    id: 1,
    title: "Mexican Pizza",
    category: "Fixing",
    price: 200.00,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VRMYFgPTn_9CMQy0UL2aMS3Wui8Kpzgn09jyV-D0wXdkgAsHNNpNHIRrDlbCYKYWNd8&usqp=CAU",
    bgColor: "bg-amber-500"
  },
  {
    id: 2,
    title: "Classy Pizza",
    category: "Delights",
    price: 150.00,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWUglV8dq8xxyMpahUJRFkWkipcgJ88Iclg&s",
    bgColor: "bg-teal-500"
  },
  {
    id: 3,
    title: "Family Pizza",
    category: "Fixing",
    price: 400.00,
    imageUrl: "https://i.pinimg.com/564x/2d/6b/7d/2d6b7df948d14f41e9a1a48e5b37e9c5.jpg",
    bgColor: "bg-amber-500"
  },
];

const PizzaList = () => {
  return (
    <div className='p-2 flex items-center justify-center overflow-x-auto whitespace-nowrap px-6 space-x-4'>
      {pizzaData.map((pizza) => (
        <div key={pizza.id} className={`flex-shrink-0 ${pizza.bgColor} rounded-lg shadow-lg w-72 border-b-4 border-gray-300`}>
          <img className="w-full h-48 object-cover rounded-t-lg" src={pizza.imageUrl} alt={pizza.title} />
          <div className='text-white px-6 py-4'>
            <span className='block opacity-75 text-sm'>{pizza.category}</span>
            <div className='flex justify-between items-center'>
              <span className='font-semibold text-xl'>{pizza.title}</span>
              <span className='bg-white rounded-full text-orange-500 text-sm font-bold px-3 py-2'>
                ${pizza.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PizzaList;

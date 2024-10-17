
// import React from "react";

// const FloatingImageContentBlock = () => {
//   return (
//     <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
//       <div className="md:w-1/2 md:pr-10">  
//         <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Delicious Pizzas</h2>
//         <p className="text-white mb-4 text-base sm:text-lg">
//           Experience the most flavorful pizzas in town, made with fresh ingredients and baked to perfection.
//         </p>
//         <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 mb-6">
//           Order Now
//         </button>

//         <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-white">
//           Coming Soon: Our New Pizza Launches
//         </h3>
//         <ul className="text-white list-disc list-inside space-y-2">
//           <li><strong>Margherita Pizza:</strong> A classic delight topped with fresh mozzarella, tomatoes, and basil.</li>
//           <li><strong>Pepperoni Pizza:</strong> Loaded with spicy pepperoni and gooey mozzarella cheese.</li>
//           <li><strong>BBQ Chicken Pizza:</strong> Grilled chicken, tangy BBQ sauce, and red onions.</li>
//           <li><strong>Vegetarian Delight Pizza:</strong> A medley of seasonal vegetables on a cheesy base.</li>
//           <li><strong>Spicy Veggie Pizza:</strong> Zesty jalapeños and bell peppers on a fresh tomato sauce.</li>
//         </ul>
//       </div>
//       <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
//         <img
//           src="https://media.istockphoto.com/id/512624640/vector/seamless-pizza-pattern-on-dark-background.jpg?s=612x612&w=0&k=20&c=HyJgDjoIJ6jAniFIjz0p47R0dzUSTI0dtXcewdlG1vs="
//           alt="Delicious Pizza"
//           className="w-full max-w-sm h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
//         />
//       </div>
//     </section>
//   );
// };

// export default FloatingImageContentBlock;


import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">  
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Pizzas</h2>
        <p className="text-white mb-4 text-base sm:text-lg">
          Experience the most flavorful pizzas in town, made with fresh ingredients and baked to perfection.
        </p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-200 mb-6">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mb-6 text-center text-white">
          Coming Soon: Our New Pizza Launches
        </h3>
        <ul className="text-white list-disc list-inside space-y-2">
          <li><strong>Margherita Pizza:</strong> A classic delight topped with fresh mozzarella, tomatoes, and basil.</li>
          <li><strong>Pepperoni Pizza:</strong> Loaded with spicy pepperoni and gooey mozzarella cheese.</li>
          <li><strong>BBQ Chicken Pizza:</strong> Grilled chicken, tangy BBQ sauce, and red onions.</li>
          <li><strong>Vegetarian Delight Pizza:</strong> A medley of seasonal vegetables on a cheesy base.</li>
          <li><strong>Spicy Veggie Pizza:</strong> Zesty jalapeños and bell peppers on a fresh tomato sauce.</li>
        </ul>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src="https://media.istockphoto.com/id/512624640/vector/seamless-pizza-pattern-on-dark-background.jpg?s=612x612&w=0&k=20&c=HyJgDjoIJ6jAniFIjz0p47R0dzUSTI0dtXcewdlG1vs="
          alt="Delicious Pizza"
          className="w-full max-w-sm h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;


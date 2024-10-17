import React from 'react'
import Navbar from '../app/components/Navbar'
import Carousel from '../app/components/Carousel'
import Progressor from '../app/components/Progressor'
import Pizza from './components/Pizza'
import Banner from './components/Banner'
import ProductList from '../app/components/ProductList'
import Offer from '../app/components/Offer'
import Card from '../app/components/Card'
import MenuItems from '../app/components/MenuItems'
import Reservation from '../app/components/Reservation'
import Footer from '../app/components/Footer'


export default function App() {
 return (
    <div className='bg-gradient-to-r from-black to-slate-700 min-h-screen text-white'>
      <Navbar/>
      <Carousel />
      <Progressor/>
      <Pizza/>
      <Banner />
      <ProductList />
      <MenuItems />
      <Offer />
      <Card />
      <Reservation />    
      <Footer />  
    </div>
  )
}


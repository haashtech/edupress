import React from 'react'
import Banner from '../../components/home/Banner'
import Categories from '../../components/home/Categories'
import FeaturedCourses from '../../components/home/FeaturedCourses'
import Posters from '../../components/home/Posters'
import FeedBacks from '../../components/home/FeedBacks'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
   <>
   <Banner/>
   <Categories/>
   <FeaturedCourses/>
   <Posters/>
   <FeedBacks/>
   </>
  )
}

export default Home
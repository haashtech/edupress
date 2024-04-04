import React from 'react'


const categoryItems = [
    { id: 1, title: "Art & Design", des: "38 Courses", image: '/images/home/img/img1.png' },
    { id: 2, title: "Development", des: "38 Courses", image: '/images/home/img/img2.png' },
    { id: 3, title: "Communication", des: "38 Courses", image: '/images/home/img/img3.png' },
    { id: 4, title: "Videography", des: "38 Courses", image: '/images/home/img/img4.png' },
    { id: 5, title: "Photography", des: "38 Courses", image: '/images/home/img/img5.png' },
    { id: 6, title: "Marketing", des: "38 Courses", image: '/images/home/img/img6.png' },
    { id: 7, title: "Content Writing", des: "38 Courses", image: '/images/home/img/img7.png' },
    { id: 8, title: "Finance", des: "38 Courses", image: '/images/home/img/img8.png' },
    { id: 9, title: "Science", des: "38 Courses", image: '/images/home/img/img9.png' },
    { id: 10, title: "Network", des: "38 Courses", image: '/images/home/img/img10.png' }
];


function Categories() {
  return (
    <div  className="section-container py-10">
        <div className=' w-full mb-10'>
            <h2 className='text-[32px] font-semibold'>Top Categories</h2>
            <p className='text-sm'>Explore our Popular Categories</p>
        </div>

        {/* categories cards */}
        <div className='grid lg:grid-cols-5  md:grid-cols-4 grid-cols-2  gap-5'>
            {
                categoryItems.map((item,index) => (
                    <div className="flex flex-col space-y-2 rounded-lg justify-center hover:shadow-lg hover:scale-105 duration-300 cursor-pointer border sm:py-12 py-11 items-center">
                        <div className="flex">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="text-center">
                            <h3 className='font-semibold'>{item.title}</h3>
                            <small>{ item.des}</small>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories
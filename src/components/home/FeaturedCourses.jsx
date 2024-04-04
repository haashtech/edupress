import React from "react";

function FeaturedCourses() {

    const coursesList = [
        { id: 1, by:"by Determined-Poitras", title: "Art & Design", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/img1.png' },
        { id: 2, by:"by Determined-Poitras", title: "Development", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/img2.png' },
        { id: 3, by:"by Determined-Poitras", title: "Communication", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/img3.png' },
        { id: 4, by:"by Determined-Poitras", title: "Videography", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/img4.png' },
        { id: 5, by:"by Determined-Poitras", title: "Photography", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/img5.png' },
        { id: 6, by:"by Determined-Poitras", title: "Marketing", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/img6.png' },
        { id: 7, by:"by Determined-Poitras", title: "Content Writing", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/img7.png' },
        { id: 8, by:"by Determined-Poitras", title: "Finance", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/img8.png' },
        { id: 9, by:"by Determined-Poitras", title: "Science", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/img9.png' },
        { id: 10, by:"by Determined-Poitras", title: "Network", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/img10.png' }
    ];
  return (
    <div className="section-container sm:py-24 py-16">
      <div className=" w-full mb-10">
        <h2 className="text-[32px] font-semibold">Featured courses</h2>
        <p className="text-sm">Explore our Popular Courses</p>
      </div>
      {/* cards */}
      <div className='grid lg:grid-cols-3  md:grid-cols-4 grid-cols-2  gap-5'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default FeaturedCourses;

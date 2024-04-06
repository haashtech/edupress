import React from 'react'
import { Link } from 'react-router-dom'

function BlogListView({pages}) {
  return (
   <div className="flex gap-4 flex-col">
      {pages && pages.map((item,idx) => (
           
           <Link to={`/blogs/${item.id}`} key={item.id}>
           <div className="card md:w-[100%]  w-[100%] h-52 card-side border">
             <figure>
               <img
                 src={item.image}
                 alt="Movie"
                 className='w-[17rem] h-full object-fill'  
               />
             </figure>
            <div className="flex flex-col">
            <div className="md:p-4 p-2 flex flex-col space-y-3">
               <h2>by <small> {item.by}</small></h2>
               <p className='font-bold text-lg'>{item.title}</p>
               <div className="flex items-center gap-3">
                 {/* == */}
                 <div className="md:flex hidden items-center gap-1 ">
                   <img src="/images/home/img/std.png" alt={item.students} />
                   <span className='text-xs'>{item.weeks}</span>
                 </div>
                 {/*  */}
                 <div className="flex items-center gap-1">
                   <img src="/images/home/img/std.png" alt={item.students} />
                   <span className='text-xs'>{item.students}</span>
                 </div>
                 {/*  */}
                 <div className="flex items-center gap-1">
                   <img src="/images/home/img/std.png" alt={item.students} />
                   <span className='text-xs'>{item.levels}</span>
                 </div>
                 {/*  */}
                 <div className="flex items-center gap-1">
                   <img src="/images/home/img/std.png" alt={item.students} />
                   <span className='text-xs'>{item.lessons}</span>
                 </div>
                 {/* == */}
               </div>
               {/* footer */}
               
             </div>
             <div className="w-full px-4 py-2 border-gray-400 mt-auto ">
                 <div className="flex border-t  items-center justify-between">
                 <div className="flex gap-2 items-center">
                 <del className='text-sm'>{item.price}</del>
                 <span className='text-success'>{item.offer}</span>
                 </div>
                 <button>View More</button>
                 </div>
               </div>
            </div>
           </div>
           </Link>
       
      ))}
   </div>
  )
}

export default BlogListView
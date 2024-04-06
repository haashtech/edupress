import React from 'react'
import { blogCategory } from './BlogLists'

function BlogCategory() {
  return (
    <div>
         <h1 className='font-bold'>Course category</h1>
        <div className="py-5">
        {
            blogCategory.map((item) => (
                <div className="space-x-3 gap-2 space-y-2 flex justify-between" key={item.id}>
                    <div className="space-x-3">
                    <input type="checkbox" name={item.name} id={item.name} className='cursor-pointer'/>
                    <span className='cursor-pointer'>{item.name}</span><br/>
                    </div>
                    <span className='text-sm'>{item.number}</span>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default BlogCategory
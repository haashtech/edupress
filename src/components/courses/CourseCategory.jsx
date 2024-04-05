import React from 'react'
import { courseCategory, instrector, level, price, review } from './CourseList'
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

function CourseCategory() {

    const generateStars = count => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < count) {
            stars.push(<IoStarSharp key={i} style={{ color: '#ffc107', fontSize: '1.2em' }} />);
          } else {
            stars.push(<IoStarOutline key={i} style={{ color: '#e0e0e0', fontSize: '1.2em' }} />);
          }
        }
        return <div style={{ display: 'flex' }}>{stars}</div>;
      };
      
  return (
    <div>
        <h1 className='font-bold'>Course category</h1>
        <div className="py-5">
        {
            courseCategory.map((item) => (
                <div className="space-x-3 gap-2 space-y-2 flex justify-between" key={item.id}>
                    <div className="space-x-3">
                    <input type="checkbox" name={item.name} id={item.name} className='cursor-pointer'/>
                    <span className='cursor-pointer'>{item.name}</span><br/>
                    </div>
                    <span className='text-sm'>{item.count}</span>
                </div>
            ))
        }
        </div>

        {/* instrectors */}

        <div className="py-5">
            <h3 className='font-bold mb-3'>Intrectors</h3>
        {
            instrector.map((item) => (
                <div className="space-x-3 gap-2 space-y-2 flex justify-between" key={item.id}>
                <div className="space-x-3">
                <input type="checkbox" name={item.name} id={item.name} className='cursor-pointer'/>
                <span className='cursor-pointer'>{item.name}</span><br/>
                </div>
                <span className='text-sm'>{item.count}</span>
            </div>
            ))
        }
        </div>

        {/* price */}
        <div className="py-5">
            <h3 className='font-bold mb-3'>Price</h3>
        {
            price.map((item) => (
                <div className="space-x-3 gap-2 space-y-2 flex justify-between" key={item.id}>
                    <div className="space-x-3">
                    <input type="checkbox" name={item.name} id={item.name} className='cursor-pointer'/>
                    <span className='cursor-pointer'>{item.name}</span><br/>
                    </div>
                    <span className='text-sm'>{item.count}</span>
                </div>
            ))
        }
        </div>

        {/* rating */}
        <div className="py-5">
        <h3 className='font-bold mb-3'>Review</h3>
        {review.map(item => (
          <div className="space-x-3 space-y-2 flex justify-between" key={item.id}>
            {generateStars(item.stars)} {/* Generate stars */}
            <span className='text-sm'>{item.count}</span>
            <div className=""></div>
            <br />
          </div>
        ))}
      </div>

       {/* price */}
       <div className="py-5">
            <h3 className='font-bold mb-3'>Levels</h3>
        {
            level.map((item) => (
                <div className="space-x-3 gap-2 space-y-2 flex justify-between" key={item.id}>
                    <div className="space-x-3">
                    <input type="checkbox" name={item.name} id={item.name} className='cursor-pointer'/>
                    <span className='cursor-pointer'>{item.name}</span><br/>
                    </div>
                    <span className='text-sm'>{item.count}</span>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default CourseCategory
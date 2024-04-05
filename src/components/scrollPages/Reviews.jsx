import React from 'react'
import { review } from '../courses/CourseList';
import { IoStarOutline, IoStarSharp } from 'react-icons/io5';

import replay from '/images/home/img/replay.png'
import PaginationButtons from '../courses/PaginationButtons';
import useReviewFetcher from '../../customeHooks/useReviewFetcher ';

function Reviews() {
    const { loading, pages, totalPages, currentPage, setCurrentPage } =
    useReviewFetcher();

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
    <div className='py-3'>
        <div className="space-y-4">
            <h1>comments</h1>
            <div className="flex items-center gap-2 ">
                <h3 className='text-3xl font-semibold'>4.0</h3>
                <div className="flex flex-col items-start">
                <img src="/images/home/img/ratestar.png" alt="" />
                <span>based on 146,951 ratings</span>
                </div>
            </div>
        </div>
        <div className="py-3 here">
              {review.map(item => (
         <>
          <div className="space-x-3 space-y-2 flex items-center " key={item.id}>
            {generateStars(item.stars)}
            <span className='text-sm'>{item.persentage}</span>
            <div className=""></div>
            <br />
          </div>
        
         </>
        ))}
        </div>
        <hr />
        {/* reviews */}
        {pages.map((item) => (
            <div className="py-3">
            
               <>
               
               <div className="flex gap-5 py-5">
                <div className="w-36 h-w-36 rounded-full">
                    <img src={item.authImg} alt="" />
                </div>
                <div className="flex flex-col space-y-3">
                    <h3 className='md:text-xl text-sm'>{item.authname}</h3>
                    <p className='md:text-sm text-xs'>{item.content}</p>
                     <span className='flex items-center gap-1 cursor-pointer'><img src={replay} alt="" /> Reply</span>
                </div>
             
              </div>
                
              </>
          
            </div>
        ))}

        <PaginationButtons
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
        
    </div>
  )
}

export default Reviews
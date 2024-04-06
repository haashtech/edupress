import React from 'react';
import { Link } from 'react-router-dom';

function BlogGridView({ pages }) {
    return (
        <div className="grid grid-cols-2 gap-4 ">
            {pages.map((item) => (
              <Link to={`/blogs/${item.id}`} key={item.id}>
              <div  className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:scale-95 ease-in-out duration-300 transition-all">
                    <img src={item.image} alt={item.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-gray-700 mb-4">{item.des}</p>
                    <p className="text-gray-500">{item.by}</p>
                </div>
              </Link>
                
            ))}
        </div>
    );
}

export default BlogGridView;

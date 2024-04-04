import React from 'react';

function FooterItems({ title, Links }) {
  return (
    <ul className=''>
      <li className="flex items-center mb-1">
        {/* Display the logo */}
        {title === "EduPress" && <img src="/images/home/logo.png" alt="Logo" className="mr-2" />}
        {/* Display the title */}
        <h1 className={`text-black font-semibold  ${title === "EduPress" ? "text-2xl font-bold" : "sm:text-[0.95rem]"}`}>{title}</h1>
      </li>
      {/* Display the links */}
      {
        Links.map((link, index) => (
          <li key={index} className='md:text-[0.85rem] text-[0.75rem] cursor-pointer leading-5'>{link.name}</li>
        ))
      }
    </ul>
  );
}

export default FooterItems;

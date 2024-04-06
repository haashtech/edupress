import React from 'react'
import FAQs from '../../components/scrollPages/FAQs'

function Faq() {
  return (
    <div className='section-container py-10'>
     <h1 className='text-xl font-bold'>FAQs</h1>
     <div className="grid md:grid-cols-2 px-10 gap-3 grid-cols-1">
      <FAQs status="faqs"/>
      <FAQs status="faqs"/>
     </div>
     <img src="/images/home/img/faqimg.png " alt="faqs" className='p-5'/>
    </div>
  )
}

export default Faq
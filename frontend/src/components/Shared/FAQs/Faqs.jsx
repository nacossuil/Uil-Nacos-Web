import { useState } from 'react';
import './faqs.css'
import { FAQS } from './data';

const FAQs = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0)



  return (
    <section>
      <div className="faqs">
        <h2>FAQs and Answers</h2>
        <div className='faqs-container'>
          <div className='faqs-questions'>
            <h3 >Your Questions</h3>
            <hr></hr>
            <div className='faqs-questions-list'>
              {
                FAQS.map(({ question }, i) => (
                  <button onClick={() => setActiveFaqIndex(i)} className={`${activeFaqIndex === i ? "active" : ""}`} key={question + i}>
                    {question}
                  </button>
                ))
              }
            </div>
          </div>
          <div className='faqs-answers'>
            <h3 >Your Answers</h3>
            <hr className='line'></hr>
            <p>
              {FAQS[activeFaqIndex].answer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs;

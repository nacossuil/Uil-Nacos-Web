import { useState } from 'react';
import './faqs.css';
import { FAQS } from './data';
import grid from "@/assets/grid-bg.svg";

const FAQs = () => {
    const [activeFaqIndex, setActiveFaqIndex] = useState(0);

    return (
        <section
            className="faqs-section"
            style={{
                backgroundImage: `url(${grid})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="faqs">
                <h2>Frequently Asked Questions</h2>
                <div className='faqs-container'>
                    <div className='faqs-questions'>
                        <h3>Your Questions</h3>
                        <div className='faqs-questions-list'>
                            {FAQS.map(({ question }, i) => (
                                <button
                                    onClick={() => setActiveFaqIndex(i)}
                                    className={`faq-question ${activeFaqIndex === i ? "active" : ""}`}
                                    key={question + i}
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='faqs-answers'>
                        <h3>{FAQS[activeFaqIndex].question}</h3>
                        <div className="faq-answer">
                            {FAQS[activeFaqIndex].answer}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQs;
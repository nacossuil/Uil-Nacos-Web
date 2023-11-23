import './faq.css'

const FAQs = () => {
  return (
    <section>
      <div className="faqA">
        <h2>FAQs and Answers</h2>
        <div className='faqA-row'>
          <div className='faqA-col'>
            <h3 className='ques'>Your Questions</h3>
            <hr></hr>
            <div className='ques-btns'>
              <button className='visible'>Who can become a member?</button>
              <button>How can I join NACOS- Unilorin?</button>
              <button>How often do events and bootcamps occur?</button>
              <button>What should I bring when participating in a bootcamp?</button>
              <button>Whom should I contact if I have any inquiries?</button>
            </div>
          </div>
          <div className='faqA-col blue'>
            <h3 className='ans'>Your Answers</h3>
            <hr className='line'></hr>
            <p>The community is inclusive, welcoming students from various departments such as Computer Science, Computer Engineering, Information and Communication Science, Telecommunication Science, and Computer Science Education. We provide tech-related discussions that cater to a wide range of students, from beginners taking their first steps in development to advanced learners looking to enhance their skills.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs;

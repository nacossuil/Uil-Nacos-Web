import './Executives.css'

import { EXECS } from './data';
import Executive from '../../Shared/Executive/Executive';
import { BsArrowRight } from 'react-icons/bs';

const Executives = () => {
    return (
        <section className="executives">
            <div className="executives-container">
                <h1 className="executive-head">Meet the NACOS Executives</h1>
                <h4 className="executive-subhead">Meet the current passionate students driving the success of the community</h4>

                <div className="executive-list">
                    {EXECS.map((data, i) => (
                        <Executive key={data.name + i} data={data} />
                    ))}

                </div>

                <a href="#" className="vae">
                    <p className="vae-text">View all Executives</p>
                    <BsArrowRight />
                </a>
            </div>
        </section>
    )
}


export default Executives;
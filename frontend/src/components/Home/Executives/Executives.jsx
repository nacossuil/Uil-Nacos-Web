import './Executives.css'

import { EXECS } from './data';
import Executive from '../../Shared/Executive/Executive';
import { BsArrowRight } from 'react-icons/bs';

const Executives = () => {
    return (
        <section className="executive-members">
            <p className="executive-head">Meet the NACOS Executives</p>
            <p className="executive-subhead">Meet the current passionate students driving the success of the community</p>

            <div className="executive-list">
                {EXECS.map((data, i) => (
                    <Executive key={data.name + i} data={data} />
                ))}

            </div>

            <a href="#" className="vae">
                <p className="vae-text">View all Executives</p>
                <BsArrowRight />
            </a>
        </section>
    )
}


export default Executives;
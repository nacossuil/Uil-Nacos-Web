import './values.css'
import RocketSvg from '../../../assets/green-rocket-icon.svg'
import TargetSvg from '../../../assets/target-arrow-icon.svg'
import BulbSvg from '../../../assets/light-bulb-icon.svg'

const values = [
    {
        icon: RocketSvg,
        title: "Our Mission",
        text: "Is to become a network of committed Student IT Professionals determined to stimulate the technology, innovation and entrepreneurship scene in Nigeria. To develop a vibrant ecosystem that drives digital inclusion across all tertiary Institutions"
    },
    {
        icon: TargetSvg,
        title: "Our Aims",
        text: `We aim to serve both professional and public interests by fostering the open interchange of information and by promoting the highest professional and ethical standards.
        To protect the image and safeguard the interest of the Computing profession.`
    }, {
        icon: BulbSvg,
        title: "Why NACOS (Unilorin) ?",
        text: `Ww aim to serve both professional and public interests by fostering the open interchange of information and by promoting the highest professional and ethical standards.
        To protect the image and safeguard the interest of the Computing profession.`
    },
]

const Values = () => {
    return (
        <div className='values'>
            {
                values.map(({ icon, title, text }) => (
                    <div key={title} className='value'>
                        <img src={icon} alt="icon" />
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Values
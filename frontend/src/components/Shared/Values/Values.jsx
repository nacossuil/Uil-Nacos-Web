import './values.css'
import { RxRocket } from 'react-icons/rx'
import { TbTargetArrow } from 'react-icons/tb'
import { IoBulbOutline } from 'react-icons/io5'

const values = [
    {
        icon: <RxRocket />,
        title: "Our Mission",
        text: "Is to become a network of committed Student IT Professionals determined to stimulate the technology, innovation and entrepreneurship scene in Nigeria. To develop a vibrant ecosystem that drives digital inclusion across all tertiary Institutions"
    },
    {
        icon: <TbTargetArrow />,
        title: "Our Aims",
        text: `We aim to serve both professional and public interests by fostering the open interchange of information and by promoting the highest professional and ethical standards.
        To protect the image and safeguard the interest of the Computing profession.`
    }, {
        icon: <IoBulbOutline />,
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
                    <div className='value'>
                        <div className="value__icon">
                            {icon}
                        </div>
                        <div className="value__title">
                            {title}
                        </div>
                        <div className="value__text">
                            {text}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Values
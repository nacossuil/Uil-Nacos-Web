import Nacos_tree from '../../../assets/imgs/nacos-tree.webp'
import Green_rocket from '../../../assets/green-rocket-icon.svg'
import Target_arrow from '../../../assets/target-arrow-icon.svg'
import Light_bulb from '../../../assets/light-bulb-icon.svg'
import './sec2.css'

const Section_2_3 = () => {
    return (
      <section>
        <div className='nt'>
          <img src={Nacos_tree} />
        </div>

        {/* Just for understanding - man stands for Mission-Aims-NACOS - columns... */}
        <div className='man'>
            <div className='man-col'>
              <img src={Green_rocket} />
              <h4>Our Mission</h4>
              <p>Is to become a network of committed Student IT Professionals determined to stimulate the technology, innovation and entrepreneurship scene in Nigeria. To develop a vibrant ecosystem that drives digital inclusion across all tertiary Institutions</p>
            </div>
            <div className='man-col'>
              <img src={Target_arrow} />
              <h4>Our Aims</h4>
              <p>We aim to serve both professional and public interests by fostering the open interchange of information and by promoting the highest professional and ethical standards. To protect the image and safeguard the interest of the Computing profession.</p>
            </div>
            <div className='man-col stop'>
              <img src={Light_bulb} />
              <h4>Why NACOS(UNILORIN)?</h4>
              <p>Ww aim to serve both professional and public interests by fostering the open interchange of information and by promoting the highest professional and ethical standards. To protect the image and safeguard the interest of the Computing profession.</p>
            </div>
        </div>
      </section>
    )
}

export default Section_2_3;
import "./values.css";
import RocketSvg from "../../../assets/green-rocket-icon.svg";
import TargetSvg from "../../../assets/target-arrow-icon.svg";
import BulbSvg from "../../../assets/light-bulb-icon.svg";

const values = [
  {
    icon: RocketSvg,
    title: "Our Mission",
    text: "To ignite the spark of innovation in emerging tech leaders, empowering them to revolutionize Nigeria's digital landscape with bold ideas, expertise, and passion!",
  },
  {
    icon: TargetSvg,
    title: "Our Aim",
    text: `We aim to foster a dynamic community of tech enthusiasts, serving both professional and public interests. We do this by providing cutting-edge resources and mentorship, collaborative networks and opportunities, and encouraging unbridled innovation and entrepreneurship. Through this, we promote the open interchange of information, uphold the highest professional and ethical standards, and protect the image and interests of the Computing profession.`,
  },
  {
    icon: BulbSvg,
    title: "Why NACOSS (Unilorin)?",
    text: `NACOSS Unilorin's strong alumni network fosters a lasting bond between members, departments, and industry professionals, driving collaboration and innovation. As the tech field continues to evolve, our community remains at the forefront, embracing new technologies and trends to stay ahead of the curve. Together, we're shaping the future of tech in Nigeria and beyond, one connection at a time.`,
  },
];

const Values = () => {
  return (
    <section id="values-section" className="values-section">
      <div className="values">
        {values.map(({ icon, title, text }) => (
          <div key={title} className="value">
            <img src={icon} alt="icon" />
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;

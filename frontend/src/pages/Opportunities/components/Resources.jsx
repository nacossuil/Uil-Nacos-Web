import PropTypes from "prop-types";

const Resources = ({data, heading}) => {
    return (
        <section className="section-resources">
            <div className="container-center">
                <h2 className="heading-md">{heading}</h2>
                <ResourcesCards data={data}/>
            </div>
        </section>
    );
};

Resources.propTypes = {
    data: PropTypes.array,
    heading: PropTypes.string,
};

const ResourcesCards = ({data}) => {
    return (
        <ul className="cards">
            {data.map((data, i) => (
                <ResourcesCard
                    key={i}
                    img={data.img}
                    title={data.title}
                    description={data.description}
                    level={data.level}
                />
            ))}
        </ul>
    );
};

ResourcesCards.propTypes = {
    data: PropTypes.array,
};

const ResourcesCard = ({img, title, description, level}) => {
    let color, bgColor;

    if (level === "Beginner" || level === "Scholarship") {
        bgColor = "#c0c6e4";
        color = "#192666";
    }

    if (level === "Intermediate" || level === "Community") {
        bgColor = "#FF0F9F1F";
        color = "#FF0F9F";
    }

    if (level === "Advanced" || level === "Financial Support") {
        bgColor = "#1386011F";
        color = "#080908";
    }

    return (
        <li className="card">
            <img src={img} alt="course"/>
            <div className="content">
                <h3 className="heading-sm">{title}</h3>
                <p className="text-sm">{description}</p>
                <div className="justify-flex">
          <span
              style={{
                  backgroundColor: level ? bgColor : "#c0c6e4",
                  color: level ? color : "#192666",
              }}
              className="tag"
          >
            {level ? level : "Scholarship"}
          </span>
                    <a href="/#" className="btn btn-md">
                        {level ? "View course" : "Apply"}
                    </a>
                </div>
            </div>
        </li>
    );
};

ResourcesCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    level: PropTypes.string,
};

export default Resources;

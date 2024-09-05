import "./Executives.css";

import { EXECS } from "./data";
import Executive from "../../Shared/Executive/Executive";
import { BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";

const Executives = () => {
  const [execs, setExecutives] = useState([]);
  const [execsLoading, setExecutivesLoading] = useState(false);
  useEffect(() => {
    const fetchExecs = async () => {
      setExecutivesLoading(true);
      try {
        const res = await axios.get(
          "https://uil-nacos-web.onrender.com/api/execs?session=2022-2023",
          {
            session: "2022-2023",
          }
        );
        console.log(res);
        const execsData = res.data.execs;
        setExecutives(execsData);
        setExecutivesLoading(false);
      } catch (error) {
        console.error("Fetching executives failed", error);
      }
    };
    fetchExecs();
  }, []);
  return (
    <section className="executives">
      <div className="executives-container">
        <h1 className="executive-head">Meet the NACOS Executives</h1>
        <h4 className="executive-subhead">
          Meet the current passionate students driving the success of the
          community
        </h4>
        <div className="executives-nav">
          <button className="cp-button">Upcoming Executives</button>
          <button className="cp-button active">Past Executives</button>
        </div>
        <div className="executive-list">
          {execs.map((data, i) => (
            <Executive key={i} data={data} />
          ))}
        </div>

        {/* <a href="#" className="vae">
          <p className="vae-text">View all Executives</p>
          <BsArrowRight />
        </a> */}
      </div>
    </section>
  );
};

export default Executives;

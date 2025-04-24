import { useState } from "react";
import grid from "../../../assets/grid-bg.svg";
import { useExecutives } from "../../../hooks/useExecutives";
import ExecutivesTabs from "./executives-tab";
import LoadingSpinner from "../../Shared/loading-spinner";
import ErrorMessage from "./error-message";
import ExecutivesGrid from "./executives-grid";

const Executives = () => {
  const [activeTab, setActiveTab] = useState("current");
  const { executives, loading, error, session } = useExecutives(activeTab);

  return (
    <section
      id="executives"
      className="min-h-screen bg-repeat"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 pt-12">
        <h1 className="text-4xl font-bold mb-4 mt-8 text-center text-[#194b88]">
          Meet Your Executives
        </h1>
        <h4 className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
          Meet the passionate students driving the success of the community 🚀
        </h4>

        <ExecutivesTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mb-6 text-lg font-medium text-gray-700">
          Showing Executives for the{" "}
          <span className="text-[#194b88]">{session.replace("-", "/")}</span>{" "}
          Session
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage
            message={error}
            retry={() => window.location.reload()}
          />
        ) : (
          <ExecutivesGrid executives={executives} />
        )}
      </div>
    </section>
  );
};

export default Executives;

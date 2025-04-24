import PropTypes from "prop-types";

const ExecutivesTabs = ({ activeTab, setActiveTab }) => (
  <div className="flex w-full max-w-[22rem] bg-gray-200 rounded-lg mb-8 overflow-hidden">
    {["current", "past"].map((tab) => (
      <button
        key={tab}
        className={`w-full py-2 px-4 transition ${
          activeTab === tab
            ? "bg-[#194b88] text-white"
            : "bg-gray-300 text-gray-800"
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab === "current" ? "Current Executives" : "Past Executives"}
      </button>
    ))}
  </div>
);

ExecutivesTabs.propTypes = {
  activeTab: PropTypes.oneOf(["current", "past"]).isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ExecutivesTabs;

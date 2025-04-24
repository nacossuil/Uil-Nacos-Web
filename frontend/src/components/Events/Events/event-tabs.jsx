import { PropTypes } from "prop-types";

const EventsTabs = ({ activeTab, setActiveTab }) => (
  <div className="flex justify-center mb-12">
    <div className="flex w-[22rem] bg-gray-200 rounded-lg overflow-hidden">
      {["upcoming", "past"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`w-full px-4 py-2 font-medium transition-all ${
            activeTab === tab
              ? "bg-[#194b88] text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
        </button>
      ))}
    </div>
  </div>
);

export default EventsTabs;
EventsTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";
import ExecutiveCard from "./executive-card";

const ExecutivesGrid = ({ executives }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {executives.map((executive) => (
      <ExecutiveCard key={executive.email} executive={executive} />
    ))}
  </div>
);

ExecutivesGrid.propTypes = {
  executives: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExecutivesGrid;

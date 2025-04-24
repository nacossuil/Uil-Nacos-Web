import PropTypes from "prop-types";
import emailpng from "../../../assets/email-icon.svg";
import linkedInpng from "../../../assets/linkedin-icon.svg";

const ExecutiveCard = ({ executive }) => (
  <div className="w-full sm:w-[270px] flex flex-col justify-start items-center my-8 bg-white m-2.5 p-4 shadow-md rounded-md hover:shadow-xl transition-shadow duration-300">
    <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
      <img
        src={executive.imageUrl}
        alt={`${executive.name} - ${executive.position}`}
        className="w-full h-full object-cover object-top"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/200x200?text=No+Image";
        }}
      />
    </div>
    <div className="flex flex-col items-center justify-center flex-grow">
      <p className="mt-2 text-xl font-bold text-black text-center">{executive.name}</p>
      <p className="text-lg text-black text-center">{executive.position}</p>
      <p className="text-sm text-gray-600 mb-4 text-center">{executive.studentId}</p>
    </div>
    <div className="flex justify-center space-x-4 mt-auto">
      <a href={`mailto:${executive.email}`} aria-label={`Email ${executive.name}`}>
        <img src={emailpng} className="h-5 w-5" alt="Email Icon" />
      </a>
      {executive.linkedinUrl && (
        <a href={executive.linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src={linkedInpng} className="h-5 w-5" alt="LinkedIn Icon" />
        </a>
      )}
    </div>
  </div>
);

ExecutiveCard.propTypes = {
  executive: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    studentId: PropTypes.string,
    email: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    linkedinUrl: PropTypes.string,
  }).isRequired,
};

export default ExecutiveCard;

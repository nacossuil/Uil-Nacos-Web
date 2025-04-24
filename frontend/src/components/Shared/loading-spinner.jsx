import { ThreeDotsLoader } from "./three-dots-loader";

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-[30vh]">
    <ThreeDotsLoader />
    <p className="mt-4 text-lg text-[#194b88] animate-pulse">
      Loading executives...
    </p>
  </div>
);

export default LoadingSpinner;

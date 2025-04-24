import { useState } from "react";
import grid from "../../../assets/Grid.png";
import { useEvents } from "../../../hooks/useEvents";
import EventsTabs from "./event-tabs";
import { ThreeDotsLoader } from "../../Shared/three-dots-loader";
import EventGrid from "./event-grid";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { eventInfo, loading, error } = useEvents(activeTab);

  return (
    <section
      id="events"
      className="min-h-screen w-full pt-8 px-4 sm:px-8 md:px-16"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-center text-[#194b88]">
          Discover Tech Events & Innovation Gatherings
        </h2>

        <EventsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[30vh]">
            <ThreeDotsLoader />
            <p className="mt-4 text-lg text-[#194b88] animate-pulse">
              Loading events...
            </p>
          </div>
        ) : error ? (
          <div className="text-red-600 text-center">{error}</div>
        ) : (
          <EventGrid events={eventInfo} />
        )}
      </div>
    </section>
  );
};

export default Events;

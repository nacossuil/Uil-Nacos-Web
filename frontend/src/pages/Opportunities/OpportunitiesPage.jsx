import './Opportunitiespage.css';
import PageIntro from './components/PageIntro';
import Resources from './components/Resources';
import Events from "./components/Events.jsx";
import {coursesData, eventsData, scholarshipsData,} from './opportunitiesPageData.js';

const OpportunitiesPage = () => {
    return (
        <div className="opportunities">
            <PageIntro/>
            <div className="container-center">
                <section id="resources-section">
                    <Resources data={coursesData} heading="Shared Career Resources"/>
                    <Resources data={scholarshipsData} heading="Discover Scholarships & Financial Support"/>
                </section>
                <section id="events-section">
                    <Events heading="Tech Competitions and Hackathons" eventsData={eventsData}
                    />
                </section>
            </div>
        </div>
    );
}
export default OpportunitiesPage;

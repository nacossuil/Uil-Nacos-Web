import './Opportunitiespage.css';
import PageIntro from './components/PageIntro';
import Resources from './components/Resources';
import Events from './components/Events';
import {
    tempCoursesData,
    tempScholarshipsData,
    tempEventsData,
} from './tempPageData';

const OpportunitiesPage = () => {
    return (
        <div className="opportunities">
            <PageIntro/>
            <div className="container-center">
                <section id="resources-section">
                    <Resources data={tempCoursesData} heading="Shared Career Resources"/>
                    <Resources data={tempScholarshipsData} heading="Discover Scholarships & Financial Support"/>
                </section>
                <section id="events-section">
                    <Events
                        eventsData={tempEventsData}
                        heading="Tech Competitions and Hackathons"
                    />
                </section>
            </div>
        </div>
    );
}

export default OpportunitiesPage;

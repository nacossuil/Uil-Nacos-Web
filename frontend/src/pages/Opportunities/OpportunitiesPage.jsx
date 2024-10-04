import './Opportunitiespage.css';
import PageIntro from './components/PageIntro';
import Resources from './components/Resources';
import Events from './components/Events';
import {
    coursesData,
    scholarshipsData,
    eventsData,
} from './opportunitiesPageData.js';

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
                    <Events
                        eventsData={eventsData}
                        heading="Tech Competitions and Hackathons"
                    />
                </section>
            </div>
        </div>
    );
}

export default OpportunitiesPage;

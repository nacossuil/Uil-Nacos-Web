const PageIntro = () => {
    return (
        <section className="section-intro">
            <div className="container-center">
                <div className="intro__content">
                    <div className="intro__content-text">
                        <h1 className="heading-lg">Opportunities for Students</h1>
                        <p className="text-md">
                            Welcome to the Student Opportunities Hub, your go-to resource for discovering exciting
                            opportunities in technology and beyond. Explore scholarships, internships, hackathons, and
                            more to enrich your academic journey and future career.
                        </p>
                        <a href="#resources-section" className="btn btn-lg text-md">
                            Learn more ↓
                        </a>
                    </div>
                    <div className="intro__content-img-box">
                        <img
                            src={new URL('../../../assets/Technology-in-Schools-Opportunities-and-Challenges.jpg', import.meta.url).href}                            alt="Opportunities in Technology"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageIntro;

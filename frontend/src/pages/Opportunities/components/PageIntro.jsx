const PageIntro = () => {
  return (
    <section className="section-intro">
      <div className="container-center">
        <div className="intro__content">
          <div className="intro__content-text">
            <h1 className="heading-lg">Opportunities for Students</h1>
            <p className="text-md">
              Welcome to our student opportunities hub, where we are dedicated
              to helping you discover exciting opportunities in the world of
              technology and beyond. Explore scholarships, internships,
              hackathons, and more to enhance your academic journey.
            </p>
            <a href="/#" className="btn btn-lg">
              Learn more ↓
            </a>
          </div>
          <div className="intro__content-img-box">
            <img
              src="./../../../src/assets/Opportunities/intro-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;

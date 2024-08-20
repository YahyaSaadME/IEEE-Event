import Registration from "./Register";

function Hero() {
  return (
    <div className="bg-transparent text-white/95 bg-cover bg-top h-screen flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center px-4 xl:px-0 mt-24">
        <h1 className="font-display text-6xl max-md:text-5xl tracking-wider text-center md:text-start">
          Hello There!
        </h1>
        <p className="font-light mt-4 w-full md:max-w-[50%] sm:text-xs md:text-md  text-center md:text-start">
          Join us on 22nd August for an insightful webinar hosted by the IEEE
          GRSS Club, SRM. Where experts will explore the transformative role of
          Machine Learning (ML) and Deep Learning (DL) in Geospatial
          Exploration. This event kicks off at 10:00 AM, with a keynote address
          on "The Role of ML and DL in Geospatial Exploration," followed by
          sessions diving into NASA's current projects and future prospects.
          Don't miss this opportunity to learn, engage, and explore cutting-edge
          innovations in geospatial technology. Register now and be a part of
          the future of space exploration!
        </p>
        <Registration />
      </div>
    </div>
  );
}

export default Hero;

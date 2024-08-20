import About from "../assets/imgs/logo.svg";
import grss_logo from "../assets/imgs/grss_logo.svg";

function About_Us() {
  return (
    <div className="bg-transparent text-white/95 bg-cover bg-top mt-10" id="about_us">
      <div
        className="w-full max-w-7xl mx-auto flex flex-col px-4 xl:px-0"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h1 className="font-display text-6xl max-md:text-5xl tracking-wider">
          About Us
        </h1>
        <div
          className="my-10 flex flex-col"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <h3
            className="font-light mt-8 w-full text-center md:mt-.5 md:pl-10"
            style={{ paddingRight: "10px" }}
          >
            The IEEE Geoscience and Remote Sensing Society (GRSS), a part of IEEE, focuses on technologies for environmental monitoring and Earth observation. It supports research through publications like IEEE Transactions on Geoscience and Remote Sensing and hosts conferences such as IGARSS. Both IEEE and GRSS offer educational resources and networking opportunities, advancing knowledge and standards in their fields.
          </h3>
          <div className="flex item-center justify-between  mt-10">
            <img
              src={About}
              alt=""
              className="pr-7 md:pl-7 md:pt-10"
              style={{ width: "24vw", minWidth: "150px" }}
            />
            <img
              src={grss_logo}
              alt=""
              className="pr-7 md:pl-7 md:pt-10"
              style={{ width: "24vw", minWidth: "150px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_Us;

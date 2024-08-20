import React, { useEffect } from "react";

const events = [
  { time: "10:00 AM - 10:15 AM", title: "Welcome and Introduction", description: "Introduction to the webinar and its objectives." },
  { time: "10:15 AM - 10:45 AM", title: "Keynote Address", description: 'Topic: "The Role of ML and DL in Geospatial Exploration"' },
  { time: "10:45 AM - 11:30 AM", title: "Session 1: Current Projects at NASA", description: "Overview of ongoing projects utilizing ML and DL. Case studies and success stories." },
  { time: "11:30 AM - 11:45 AM", title: "Break", description: "" },
  { time: "11:45 AM - 12:30 PM", title: "Session 2: Future Prospects and Research", description: "Upcoming projects and research initiatives. Potential applications of ML and DL in future Geospatial missions." },
  { time: "12:30 PM - 12:45 PM", title: "Q&A Session", description: "Open floor for participants to ask questions to the speakers." },
  { time: "12:45 PM - 1:00 PM", title: "Closing Remarks", description: "Summary of key points discussed. Thank you note and next steps." },
];

const About_Event: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".timeline-event");
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
          element.classList.remove("opacity-0");
          element.classList.add("opacity-100");
        } else {
          element.classList.remove("opacity-100");
          element.classList.add("opacity-0");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger animation on page load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <h1  id="event" className="text-center font-display text-5xl max-md:text-4xl tracking-wider pt-20 max-md:pt-12 pb-8 ">
					About Event
				</h1>
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
      {events.map((event, index) => (
        <div
          key={index}
          className={`timeline-event flex items-center w-full transition-opacity duration-1000 ease-out opacity-0 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`relative w-1/2 p-4 ${
              index % 2 === 0 ? "text-right" : "text-left"
            }`}
          >
            <div className="bg-transparent text-white md:p-4 rounded">
              <h3 className="text-lg md:text-lg text-base font-bold">{event.time}</h3>
              <p className="text-sm md:text-sm text-xs">{event.title}</p>
              <p className="text-sm md:text-sm text-xs text-gray-300">{event.description}</p>
            </div>
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-white z-10 ${
                index % 2 === 0 ? "-right-2" : "-left-2"
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
    </>

  );
};

export default About_Event;

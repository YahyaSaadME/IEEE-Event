// import ui from "../assets/imgs/ui.png";
// import social from "../assets/imgs/social.png";
import ai from "../assets/imgs/ai.png";
// import graphics from "../assets/imgs/graphics.jpg";
// import { useState } from "react";

function About_Event() {
  const data = [
    {
      head: "Web Development",
      context: "Full Stack Developement",
      desc: "You will learn building and managing both front-end (client-side) and back-end (server-side) components of a web application. You can make many projects.",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          className="bi bi-browser-chrome w-16 h-16 mb-3 shadow-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          />
        </svg>
      ),
    },
    // {
    //   head: "Android Development",
    //   context: "App Creation and Development",
    //   desc: "Android development involves creating mobile applications for Android OS using languages like Java, Kotlin, and Android Studio IDE.",
    //   img: (
    //     <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="16"
    //     height="16"
    //     fill="white"
    //     className="bi bi-browser-chrome w-16 h-16 mb-3 shadow-lg"
    //     viewBox="0 0 16 16"
    //   >
    //       <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    //     </svg>
    //   ),
    // },
    {
      head: "AI and ML",
      context: "Machine Learning Model Creations",
      desc: "Machine learning involves training models to recognize patterns and make predictions based on data, used in AI applications and automation.",
      img: (
          <img src={ai} style={{height:65,width:65}} className="mb-3"/>
      ),
    },    
    // {
    //   head: "UI/UX",
    //   context: "Web and App Designing",
    //   desc: "UI/UX (User Interface/User Experience) focuses on design and usability, enhancing user satisfaction by creating intuitive, visually appealing interfaces.",
    //   img: (
    //     <div className="bg-white rounded-full mb-3" style={{height:65,width:65,padding:10}}>
    //       <img src={ui}/>
    //     </div>
        
    //   ),
    // },    {
    //   head: "Content & Social Media",
    //   context: "Sharing Compelling Material",
    //   desc: "Content & Social Media involve creating and sharing compelling material on various platforms to engage audiences and drive brand awareness.",
    //   img: (
    //     <div className="bg-white rounded-full mb-3" style={{height:65,width:65,padding:10}}>
    //       <img src={social}/>
    //     </div>
        
    //   ),
    // },{
    //   head: "Graphics Designing",
    //   context: "Creation of Graphical Templates",
    //   desc: "Graphics Design is the art of visual communication, creating aesthetically pleasing and effective designs using elements like color, typography, and imagery.",
    //   img: (
    //     <div className="bg-white rounded-full mb-3" style={{height:65,width:65,padding:10}}>
    //       <img src={graphics}/>
    //     </div>
        
    //   ),
    // },
    
    
  ];
  return (
      <div
        className="w-full max-w-7xl mx-auto flex flex-col px-4 xl:px-0"
        style={{ justifyContent: "center" }} id="event"
      >
        <h1 className="font-display text-6xl max-md:text-5xl tracking-wider text-center pb-10">
          About The Event
        </h1>
        <div className="flex max-md:flex-col ">
          {data.map(function (e) {
            return (
              <div
                style={{
                  backdropFilter: "blur(5px)",
                  borderRadius: "20px",
                }}
              key = {e.head}>
                <div className="flex flex-col items-center pb-10 mt-10">
                  {
                    e.img
                  }
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {e.head}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {e.context}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <p className="px-4 text-justify">
                      {e.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
}

export default About_Event;

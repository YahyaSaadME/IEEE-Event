import About from '../assets/imgs/logo.svg'

function About_Us() {
  return (
 <div className="bg-transparent text-white/95 bg-cover bg-top flex justify-item-center" id="about_us">
        <div className="h-screen w-full max-w-7xl mx-auto flex flex-col px-4 xl:px-0" style={{alignItems:"center",justifyContent:"center"}}>
        <h1 className="font-display text-6xl max-md:text-5xl tracking-wider">About Us</h1>
        <div className='my-10 flex flex-col-reverse sm:flex-row 'style={{justifyContent:"space-between",alignItems:"center"}}>
        <h3 className='font-light mt-8 w-full text-justify md:mt-.5 md:pl-10' style={{paddingRight:'10px'}}>
        The IEEE club at SRMIST is passionate about fostering students' innovation, curiosity, and technological brilliance. They would have a platform to investigate the dynamic fields of electrical and electronics engineering, computer science, and allied fields.The club wants to be the most innovative, team-oriented, and student-run space on campus, which will encourage the development of fresh concepts.Without the ongoing assistance and efforts of the professors, mentors, and students, the club would not have been able to launch.The founding of the IEEE club at SRMIST is evidence of the dedication and spirit of cooperation among our instructors and students.
        </h3>
          <img src={About} alt="" className='pr-7 md:pl-7 md:pt-10' style={{width:'24vw',minWidth:"150px"}}/>      
        </div>
      </div>
    </div>
  )
}

export default About_Us
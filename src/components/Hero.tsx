

function Hero() {
  return (
    <div className="bg-transparent text-white/95 bg-cover bg-top ">
      <div className="h-screen w-full max-w-7xl mx-auto flex flex-col justify-center px-4 xl:px-0">
        <h1 className="font-display text-6xl max-md:text-5xl tracking-wider">Hello There!</h1>
        <p className="font-light mt-8 w-full max-w-[50%]">
        Join us on the 16th and 17th of October for an enlightening event that bridges the gap between theory and practice in the fields of Artificial Intelligence (AI), Machine Learning (ML), and Web Development. This event is a golden opportunity to dive deep into these cutting-edge technologies, learn from industry experts, and transform your ideas into reality. Don’t miss out on this chance to enhance your skills and network with like-minded individuals. See you there!
        </p>
        <span className="mt-12 w-max bg-white text-black hover:bg-transparent active:bg-white/20 hover:outline outline-1 outline-white hover:text-white px-12 py-3 rounded-full cursor-pointer text-lg">Register Now!</span>
      </div>
    </div>
  )
}

export default Hero
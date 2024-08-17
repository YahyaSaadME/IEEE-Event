import About_Event from "./components/About_Event"
import About_Us from "./components/About_Us"
import Backdrop from "./components/Backdrop"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
// import Perks from "./components/Perks"
import Speakers from "./components/Speakers"
import Sponsors from "./components/Sponsors"


export default function App() {
    return (
        <div className="w-full h-screen relative">
            <Backdrop/>
            <Navbar/>
            <Hero/>
            <About_Us/>
            <About_Event/>
            <Speakers/>
            <Sponsors/>
            {/* <Perks/> */}
            <Footer/>
        </div>
    )
}

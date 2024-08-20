import { useEffect, useState } from "react"
import About_Event from "./components/About_Event"
import About_Us from "./components/About_Us"
import Backdrop from "./components/Backdrop"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import QR from "./components/QR"
import Speakers from "./components/Speakers"
import UpcomingEvents from "./components/UpcomingEvents"


export default function App() {
    const [isQr, setisQr] = useState(false)
    useEffect(()=>{
        let data = window.location.href.split("/")
        data.map((e)=>{setisQr(e=="qr"?true:false)})
        console.log(isQr);
        
    },[])
    return (
        <div className="w-full h-screen relative">
            {
                !isQr?<>
                <Backdrop/>
                <Navbar/>
                <Hero/>
                <About_Event/>
                <About_Us/>
                <Speakers/>
                <UpcomingEvents/>
                </>:<QR/>
            }

            <Footer/>
        </div>
    )
}

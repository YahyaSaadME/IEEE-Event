import { useEffect, useRef } from "react"
import bg from "/bg.mp4"

const Backdrop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollOpacity =
        window.scrollY < window.innerHeight
          ? window.scrollY / window.innerHeight
          : 1;

      if (!backdropRef.current) return;
      backdropRef.current.style.backgroundColor = `rgba(0,0,0,${
        scrollOpacity * 0.8
      })`;
      backdropRef.current.style.backdropFilter = `blur(${scrollOpacity * 4}px)`;
    };

    document.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backdropRef = useRef<HTMLDivElement>(null);
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
      <div ref={backdropRef} className="z-10 absolute inset-0" />
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
    </div>
  );
};

export default Backdrop;
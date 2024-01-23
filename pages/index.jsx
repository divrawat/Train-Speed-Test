import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { useState, useEffect } from 'react';
const ReactSpeedometer = dynamic(() => import("react-d3-speedometer"), { ssr: false });

export default function Home() {

  const [speed, setSpeed] = useState(0);
  function calculate() {
      const watchId = navigator.geolocation.watchPosition(
          (position) => { const newSpeed = position.coords.speed || 0; setSpeed(newSpeed); },
          (error) => { console.error('Error getting location:', error.message); },
          { enableHighAccuracy: true }
      );
      return () => { navigator.geolocation.clearWatch(watchId); };
  }

  useEffect(() => { calculate() }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-[1200px] mx-auto p-3 mt-5">

        <h1 className="text-3xl font-bold text-center">Online Speedometer: Feel the Need for Speed – Discover Your Velocity Now !</h1>

        <div className='flex justify-center mt-[100px] h-[220px]'>
            <ReactSpeedometer value={speed} needleColor="red" startColor="#09cb09" endColor="#ff1919" segments={10} maxSegmentLabels={10}
                // currentValueText={`Speed: ${speed.toFixed(2)} km/s`} 
                minValue={0} maxValue={500} width={350} height={350}/>
        </div>

        <div className="text-center font-bold text-2xl mt-5">{speed.toFixed(2)} km/s</div>

      </div>
      <Footer />

    </>
  );
}

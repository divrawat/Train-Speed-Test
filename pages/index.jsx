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
      <div className="bg-[#f7f8f9] pt-5 pb-5">
        <div className="max-w-[1200px] mx-auto p-3 bg-[white] border border-solid border-[#d7d7d7] rounded-lg">

          <h1 className="text-3xl font-bold text-center mt-5">Online Speedometer: Feel the Need for Speed – Discover Your Velocity Now !</h1>

          <div className='flex justify-center mt-[100px] h-[220px]'>
            <ReactSpeedometer value={speed} needleColor="red" startColor="#09cb09" endColor="#ff1919" segments={10} maxSegmentLabels={10}
              // currentValueText={`Speed: ${speed.toFixed(2)} km/s`} 
              minValue={0} maxValue={500} width={350} height={350} />
          </div>

          <div className="text-center font-bold text-2xl mt-5">{speed.toFixed(2)} km/s</div>



          <div className="mt-10 max-w-[1100px] pt-3 pb-10 pr-3 pl-3 mx-auto">

            <p className="mb-[35px]"> Welcome to our Train Speed Test Tool {`-`} where you can have a bit of fun exploring how fast different trains zip around! 🚂💨 Whether you&apos;re a big train fan or just curious, our website lets you peek into the speedy world of trains in a super easy way.</p>

            <p className="mb-[35px]">   Ever wondered how fast that high-speed train in Japan goes compared to the classic steam locomotive? Well, wonder no more! Our tool lets you compare train speeds from all over the globe in a simple click.</p>

            <p className="mb-[35px]">  It&apos;s like a little adventure where you can check out the fastest trains out there. No need to be a tech genius {`-`} our website is designed for everyone. Just hop on, explore, and enjoy the ride{'!'} 🌍🚄</p>

            <p className="mb-[35px]">  So, if you&apos;re into trains or just looking for a cool way to spend a few minutes, give our Train Speed Test Tool a go. Fasten your seatbelt, and let&apos;s have some speed-happy fun together. All aboard{'!'} 🚀🎉</p>

            <h2 className="text-3xl font-bold">Requirements</h2>

            <p className="mt-[25px]">1. Ensure you have a device equipped with both GPS and internet connectivity.</p>
            <p className="mt-[10px]">2. Navigate to https://trainspeedtest.in.net - a platform providing complimentary train speed testing services.</p>
            <p className="mt-[10px]">3. Grant permission for GPS usage to enable the use of the online speedometer tool.</p>


            <h2 className="text-3xl font-bold mt-[45px]">Train Speed</h2>
            <p className="mt-[20px]">A Train Speed Test is a tool or service that allows users to measure and compare the speeds of different trains. Typically offered online, these tests provide information on the velocity of trains, enabling enthusiasts, researchers, or curious individuals to explore and compare the speeds of various trains from around the world. Users may input specific parameters or select trains from a database to view their respective speeds, contributing to a better understanding of the diverse capabilities of different railway systems.</p>





            <h2 className="text-3xl font-bold mt-[45px] mb-5">FAQ&apos;s</h2>

            <h3></h3>
            <p></p>

            <h3></h3>
            <p></p>

            <h3></h3>
            <p></p>

            <h3></h3>
            <p></p>

            <h3></h3>
            <p></p>
















            <h2 className="text-3xl font-bold mt-[45px] mb-5">Conclusion</h2>

            <p className="mb-[35px]">Train Speed Test is a handy tool that gives you an accurate result by tracking GPS with your mobile phone. This easy-to-use tool provides the speed of a train while it&apos;s moving on the tracks. I highly recommend using Speed Test Pro for measuring online speed tests for trains, as it offers the best and most accurate results.</p>
            <p className="mb-[35px]">Simply turn on your GPS while using this website on your Android smartphone, and it will start tracking your train, providing you with the exact speed. Make sure to enable your GPS and grant permission for better accuracy. I&apos;ve tried this website multiple times, and it always gives precise results.</p>
            <p className="mb-[35px]">While a train speed test may seem simple for regular users checking train speeds, it holds great importance for engineers and higher authorities responsible for railway maintenance and development. Railway authorities use this tool to ensure passenger safety and enhance overall train performance.</p>



          </div>

        </div>
      </div>
      <Footer />

    </>
  );
}

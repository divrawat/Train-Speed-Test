import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { useState } from 'react';
import { FaStopwatch } from "react-icons/fa6";
import { AiFillStop } from "react-icons/ai";
import { TbFreeRights } from "react-icons/tb";
const ReactSpeedometer = dynamic(() => import("react-d3-speedometer"), { ssr: false });
import Head from "next/head";
import { MdOutlineGpsFixed } from "react-icons/md";
import { IoHappySharp } from "react-icons/io5";
import { FaTachometerAlt } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { PiPaintBucketFill } from "react-icons/pi";
import { DOMAIN, URL } from "@/config";
import Link from "next/link";

export default function Home() {

  const [speed, setSpeed] = useState(0);
  const [isGeolocationActive, setIsGeolocationActive] = useState(false);
  const [watchId, setWatchId] = useState(null);

  function calculate() {
    if (isGeolocationActive) {
      navigator.geolocation.clearWatch(watchId);
      setIsGeolocationActive(false);
    }

    else {
      const newWatchId = navigator.geolocation.watchPosition(
        (position) => { const newSpeed = position.coords.speed || 0; setSpeed(newSpeed); },
        (error) => { console.error('Error getting location:', error.message); },
        { enableHighAccuracy: true }
      );
      setIsGeolocationActive(true);
      setWatchId(newWatchId);
    }
  }


  const list = [
    {
        country: "China",
        continent: "Asia",
        MaxSpeed: "350",
        RailNetWork: "45000 km"
    },
    {
        country: "Spain",
        continent: "Europe",
        MaxSpeed: "310",
        RailNetWork: "4327.1 km"
    },
    {
        country: "France",
        continent: "Europe",
        MaxSpeed: "320",
        RailNetWork: "2735 km"
    },
    {
        country: "Germany",
        continent: "Europe",
        MaxSpeed: "300",
        RailNetWork: "1630.6 km"
    },
    {
        country: "Japan",
        continent: "Asia",
        MaxSpeed: "320",
        RailNetWork: "2727 km"
    },
    {
        country: "Italy",
        continent: "Europe",
        MaxSpeed: "300",
        RailNetWork: "921 km"
    },
    {
        country: "United Kingdom",
        continent: "Europe",
        MaxSpeed: "300",
        RailNetWork: "113 km"
    },
    {
        country: "South Korea",
        continent: "Asia",
        MaxSpeed: "305",
        RailNetWork: "660.9 km"
    },
    {
        country: "Turkey",
        continent: "Europe/Asia",
        MaxSpeed: "300",
        RailNetWork: "1211 km"
    },
    {
        country: "Finland",
        continent: "Europe",
        MaxSpeed: "220",
        RailNetWork: "1120 km"
    },
    {
        country: "Sweden",
        continent: "Europe",
        MaxSpeed: "205",
        RailNetWork: "860 km"
    },
    {
        country: "Uzbekistan",
        continent: "Asia",
        MaxSpeed: "250",
        RailNetWork: "741 km"
    },
    {
        country: "United States",
        continent: "North America",
        MaxSpeed: "240",
        RailNetWork: "735 km"
    },
    {
        country: "Greece",
        continent: "Europe",
        MaxSpeed: "200",
        RailNetWork: "700 km"
    },
    {
        country: "Russia",
        continent: "Europe",
        MaxSpeed: "250",
        RailNetWork: "650 km"
    },
    {
        country: "Saudi Arabia",
        continent: "Asia",
        MaxSpeed: "300",
        RailNetWork: "449 km"
    },
    {
        country: "Taiwan",
        continent: "Asia",
        MaxSpeed: "300",
        RailNetWork: "332.1 km"
    },
    {
        country: "Austria",
        continent: "Europe",
        MaxSpeed: "230",
        RailNetWork: "254 km"
    },
    {
        country: "Portugal",
        continent: "Europe",
        MaxSpeed: "220",
        RailNetWork: "227 km"
    },
    {
        country: "Poland",
        continent: "Europe",
        MaxSpeed: "200",
        RailNetWork: "224 km"
    },
    {
        country: "Belgium",
        continent: "Europe",
        MaxSpeed: "300",
        RailNetWork: "209 km"
    },
    {
        country: "Morocco",
        continent: "Africa",
        MaxSpeed: "320",
        RailNetWork: "186 km"
    },
    {
        country: "Switzerland",
        continent: "Europe",
        MaxSpeed: "230",
        RailNetWork: "178 km"
    },
    {
        country: "Indonesia",
        continent: "Asia",
        MaxSpeed: "350",
        RailNetWork: "142.3 km"
    },
    {
        country: "Norway",
        continent: "Europe",
        MaxSpeed: "210",
        RailNetWork: "139.5 km"
    },
    {
        country: "Netherlands",
        continent: "Europe",
        MaxSpeed: "300",
        RailNetWork: "90 km"
    },
    {
        country: "Serbia",
        continent: "Europe",
        MaxSpeed: "200",
        RailNetWork: "75 km"
    },
    {
        country: "Denmark",
        continent: "Europe",
        MaxSpeed: "200",
        RailNetWork: "56 km"
    },
    {
        country: "Hong Kong",
        continent: "Asia",
        MaxSpeed: "200",
        RailNetWork: "26 km"
    }
];

































  const description = "Welcome to our Train Speed Test Tool, where you can have a bit of fun exploring how fast different trains zip around! 🚂💨 Whether you&apos;re a big train fan or just curious, our website lets you peek into the speedy world of trains in a super easy way."


  const head = () => (
    <Head>
      <title>Train Speed Test: Feel the Need for Speed</title>
      <meta name="description" content={description} />
      <meta name="robots" content="follow, index, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <link rel="canonical" href={URL} />
      <meta property="og:title" content={`${DOMAIN}: Feel the Need for Speed`} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={DOMAIN} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={DOMAIN} />
      <meta property="og:site_name" content={DOMAIN} />
    </Head>
  );



  return (
    <>
      {head()}
      <Navbar />
      <div className="bg-gray-800 pt-5 pb-5 " style={{ backgroundImage: "url(/Back.webp)" }}>
        <div className="max-w-[1200px] mx-auto p-3 text-white rounded-lg bg-black opacity-90" >

          <h1 className="text-3xl font-bold text-center mt-5 ">Train Speed Test - Feel the Need for Speed</h1>

          <div className='flex justify-center mt-[100px] h-[220px] '>
            <ReactSpeedometer value={speed} needleColor="red" startColor="#09cb09" endColor="#ff1919" segments={10} maxSegmentLabels={10}
              minValue={0} maxValue={500} width={350} height={350} />
          </div>

          <div className="text-center font-bold text-2xl mt-5 ">{speed.toFixed(2)} km/hr</div>

          <div className="flex justify-center items-center mt-8">
            <button onClick={calculate} className="flex items-center border border-gray-300 bg-black  px-4 py-2 tracking-wider font-bold rounded-md transition duration-300 ease-in-out hover:bg-[#2b2a2b] hover:text-gray-300">
              {isGeolocationActive ? (<><AiFillStop className="mr-2" color="#ff3838" />STOP</>) : (<><FaStopwatch className="mr-2" color="#84fb66" />START</>)}
            </button>
          </div>



          <div className="mt-10 max-w-[1100px] pt-3 pb-10 pr-3 pl-3 mx-auto">

            <p className="mb-[35px] text-center text-[17.5px]"> Welcome to our <Link href="/">Train Speed Test Tool</Link>, where you can have a bit of fun exploring how fast your train runs 🚂💨 Whether you&apos;re a big train fan or just curious, our website lets you peek into the speedy world of trains in a super easy way.</p>

            <p className="mb-[35px] text-center text-[17.5px]">   Ever wondered how fast your train goes ? Well, wonder no more! Our tool lets you compare train speeds from all over the globe in a simple click.</p>

            <p className="mb-[35px] text-center text-[17.5px]">  It&apos;s like a little adventure where you can check out the fastest trains out there. No need to be a tech genius {`-`} our website is designed for everyone. Just hop on, explore, and enjoy the ride{'!'} 🌍🚄</p>

            <p className="mb-[90px] text-center text-[17.5px]">  So, if you&apos;re into trains or just looking for a cool way to spend a few minutes, use our train speed test tool. Fasten your seatbelt, and let&apos;s have some speed-happy fun together 🚀🎉</p>



            <img src="/train.jpg" alt="White Bullet Train" className="md:w-[100%]" />



            <h2 className="text-3xl font-bold mb-11 mt-[100px]">Features</h2>

            <div className="md:grid md:grid-cols-2 gap-10 mb-11">

              <div className=" p-4 ">
                <div className="flex justify-center"><TbFreeRights size={120} /></div>
                <div className="text-2xl font-bold text-center mt-2">Lifetime Free</div>
                <p className="text-center mt-5 mb-5 p-2">You can freely utilize this website without the need for any subscription or purchase. It is available for use on any device at no cost.</p>
              </div>

              <div className="p-4">
                <div className="flex justify-center"><MdOutlineGpsFixed size={120} /></div>
                <div className="text-2xl font-bold text-center mt-2">95% Accuracy</div>
                <p className="text-center mt-5 mb-5 p-2">Our website can only provide vehicle speed with 95% Accuracy since it is dependent on browser&apos;s Geolocation API. It also depends on your Internet connectivity</p>
              </div>


              <div className="p-4">
                <div className="flex justify-center"><IoHappySharp size={120} /></div>
                <div className="text-2xl font-bold text-center mt-2">Easy To Use</div>
                <p className="text-center mt-5 mb-5 p-2">Our tool is very easy to use as you just have to click the start button and allow your location to your browser. Moreover we also have a simple interface.</p>
              </div>


              <div className="p-4">
                <div className="flex justify-center"><FaTachometerAlt size={120} /></div>
                <div className="text-2xl font-bold text-center mt-2">Range</div>
                <p className="text-center mt-5 mb-5 p-2">Our <Link href="/">train speed test</Link> train speed test tool can detect a speed of a vehicle ranging from 0 km/hr to 500 km/hr.</p>
              </div>


              <div className="p-4">
                <div className="flex justify-center"><PiPaintBucketFill size={120} /></div>
                <div className="text-2xl font-bold text-center mt-2">Attractive Design</div>
                <p className="text-center mt-5 mb-5 p-2">Our website is beautiful, attractive, simple and easy to use by any age group. Our tool is made in Next.js and works fine in all browsers.</p>
              </div>


              <div className="p-4">
                <div className="flex justify-center"><FaCarRear size={120} /></div>
                <div className="text-2xl font-bold text-center mt-2">Multiple Vehicles</div>
                <p className="text-center mt-5 mb-5 p-2">This website can not only detect train speed but also other vehicles like bus, car, motorcycle etc. as it works like a speedometer.
                </p>
              </div>

            </div>


            <h2 className="text-3xl font-bold">Requirements</h2>

            <p className="mt-[25px]">1. Ensure you have a device equipped with both GPS and internet connectivity.</p>
            <p className="mt-[10px]">2. Navigate to https://trainspeedtest.in.net  - a platform providing complimentary train speed testing services.</p>
            <p className="mt-[10px]">3. Grant permission for location usage to enable the use of the online speedometer tool.</p>


            <h2 className="text-3xl font-bold mt-[45px]">Train Speed</h2>
            <p className="mt-[20px]">A Train Speed Test is a tool or service that allows users to measure and compare the speeds of different trains. Typically offered online, these tests provide information on the velocity of trains, enabling enthusiasts, researchers, or curious individuals to explore and compare the speeds of various trains from around the world. Users may input specific parameters or select trains from a database to view their respective speeds, contributing to a better understanding of the diverse capabilities of different railway systems.</p>





            <h2 className="text-3xl font-bold mt-[45px] mb-5">FAQ&apos;s</h2>

            <h3 className="text-2xl font-bold mb-2">How can I check my train speed ?</h3>
            <p className="mb-[35px]">You can check train speed through this website.</p>

            <h3 className="text-2xl font-bold mb-2">Is a train speed test accurate ?</h3>
            <p className="mb-[35px]">No, train speed test is not accurate as it fully depends on GPS signal and your internet connectivity.</p>

            <h3 className="text-2xl font-bold mb-2">Is it legal to do a train speed test ?</h3>
            <p className="mb-[35px]">Yes you can check your train speed, it is completely safe.</p>

            <h3 className="text-2xl font-bold mb-2">What is the average speed of a train in India ?</h3>
            <p className="mb-[35px]">The average speed of train in India is just 55 km/s .</p>

            <h3 className="text-2xl font-bold mb-2">How do this train speed tool work ?</h3>
            <p className="mb-[35px]">This train speed tool access your location from the browser using the Geolocation API and updates when position changes. It watches the user&apos;s position and updates the provided callback whenever the position changes and hence the speed is predicted.</p>


            <h2 className="text-3xl font-bold mt-[45px] mb-5">Online GPS Speedometer</h2>

            <p className="mb-[35px]">The GPS Speedometer, also known as the Global Positioning System Speedometer, is a device that operates based on the governor principle to provide precise speed measurements. It is widely recognized for its accuracy in tracking speed across various vehicles. In contemporary times, virtually every vehicle worldwide is equipped with a speedometer to gauge velocity.</p>
            <p className="mb-[35px]">The Online GPS Speedometer is readily accessible via the internet. Leveraging your mobile device&apos;s GPS capabilities, it efficiently pinpoints your location while you are in transit. Our online speedometer tool harnesses this technology to accurately detect the speed of trains. By employing GPS technology, we can meticulously monitor train speeds and provide you with precise measurements.</p>
            <p className="mb-[35px]">Our tool utilizes online GPS technology, harnessing your device&apos;s GPS functionality through internet connectivity. This enables us to gather precise location data and coordinates, which are then translated into an online speedometer capable of accurately determining train speeds.</p>



            <h2 className="text-3xl font-bold mt-[45px] mb-5">Conclusion</h2>

            <p className="mb-[35px]"><Link href="/">Train Speed Test Tool</Link> is a handy tool that gives you an accurate result by tracking GPS with your mobile phone. This easy-to-use tool provides the speed of a train while it&apos;s moving on the tracks. I highly recommend using Speed Test Pro for measuring online speed tests for trains, as it offers the best and most accurate results.</p>
            <p className="mb-[35px]">Simply turn on your GPS while using this website on your Android smartphone, and it will start tracking your train, providing you with the exact speed. Make sure to enable your GPS and grant permission for better accuracy. I&apos;ve tried this website multiple times, and it always gives precise results.</p>
            <p className="mb-[35px]">While a train speed test may seem simple for regular users checking train speeds, it holds great importance for engineers and higher authorities responsible for railway maintenance and development. Railway authorities use this tool to ensure passenger safety and enhance overall train performance.</p>



   





            <h2 className="text-3xl font-bold mb-11 mt-[100px]">List Of High-Speed Railway Lines</h2>



            <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-white ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Country
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Continent
                        </th>
                        <th scope="col" className="px-6 py-3">
                            MaxSpeed
                        </th>
                        <th scope="col" className="px-6 py-3">
                            RailNetwork
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((list, index) => (
                        <tr key={index} className="bg-black">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                                {list.country}
                            </th>
                            <td className="px-6 py-4">
                                {list.continent}
                            </td>
                            <td className="px-6 py-4">
                                {list.MaxSpeed}
                            </td>
                            <td className="px-6 py-4">
                                {list.RailNetWork}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>








          </div>

        </div>
      </div>
      <Footer />

    </>
  );
}

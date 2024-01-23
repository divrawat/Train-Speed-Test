import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ReactSpeedometer = dynamic(() => import("react-d3-speedometer"), { ssr: false });


export default function SpeedometerComponent() {

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
        <div className='flex justify-center mt-[100px] h-[200px]'>
            <ReactSpeedometer value={speed} needleColor="red" startColor="#09cb09" endColor="#ff1919" segments={5} maxSegmentLabels={5}
                currentValueText={`Speed: ${speed.toFixed(2)} km/s`} minValue={0} maxValue={500} />
        </div>
    );
};





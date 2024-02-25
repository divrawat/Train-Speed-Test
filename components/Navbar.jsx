import Link from "next/link";
import { IoMdSpeedometer } from "react-icons/io";
import React, { useRef } from 'react';

export default function Navbar() {

    const menuRef = useRef(null);

    const toggle = (ref) => {
        if (ref.current.style.display === 'block') {
            ref.current.style.display = 'none';
        } else {
            ref.current.style.display = 'block';
        }
    };




    return (

        <nav className="md:pb-3 pt-3 bg-gray-800 text-white" style={{ backgroundImage: "url(/Nav.jpg)" }}>
            <div className="container mx-auto md:flex items-center justify-center md:justify-between max-w-[1200px]">
                <div className="flex items-center md:space-x-4 justify-between">
                    <div className="flex items-center">
                        <IoMdSpeedometer size={45} className="mr-3 ml-3  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
                        <span className=" text-lg font-bold tracking-wider text-[21px] md:text-[24px]"><Link href="/">Train Speed Test</Link></span>
                    </div>
                    <span onClick={toggle} className="md:hidden text-[22px] font-extrabold mr-4">☰</span>
                </div>

                <div className="md:pb-0 pr-3 md:mt-0 mt-4 md:bg-transparent ">
                    <ul id="menu" ref={menuRef} className="md:flex md:space-x-10 md:pb-0 pb-4 items-center font-bold  text-center leading-[3] hidden">
                        {/* <li> <Link href="/">Home</Link></li> */}
                        <li> <Link href="/about">About</Link></li>
                        <li> <Link href="/contact">Contact</Link></li>
                        <li> <Link href="/disclaimer">Disclaimer</Link></li>
                        <li> <Link href="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

import Link from "next/link";
import { IoMdSpeedometer } from "react-icons/io";

export default function Navbar() {

    function toggle() {
        let x = document.getElementById("menu")
        if (x.style.display === "block") {
            x.style.display = "none";
        }
        else { x.style.display = "block" }
    }


    return (

        <nav className="md:pb-5 pt-3">
             {/* <nav className="md:pb-3 pt-3 border-b border-[#bebdbd]"> */}

            <div className="container mx-auto md:flex items-center justify-center md:justify-between max-w-[1200px]">
                <div className="flex items-center md:space-x-4 justify-between">
                    <div className="flex items-center">
                        {/* <img src="/00.png" alt="Logo" className="h-[50px] w-[55px] mr-3 ml-3" /> */}
                        <IoMdSpeedometer size={55} className="mr-3 ml-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 "/>
                        <span className="text-black text-lg font-bold tracking-wider text-[21px] md:text-[24px]"><Link href="/">Train Speed Test</Link></span>
                    </div>
                    <span onClick={toggle} className="md:hidden text-[22px] font-extrabold mr-4">☰</span>
                </div>

                <div className="md:pb-0 pr-3 md:mt-0 mt-4 md:bg-transparent bg-[#f7f6f6] ">
                    <ul id="menu" className="md:flex md:space-x-10 md:pb-0 pb-4 items-center text-black font-bold  text-center leading-[3] hidden">
                        <li> <Link href="/">Home</Link></li>
                        <li> <Link href="/about">About</Link></li>
                        <li> <Link href="/contact">Contact</Link></li>
                        <li> <Link href="/about">About</Link></li>
                        <li> <Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

            </div>
        </nav>


    );
}

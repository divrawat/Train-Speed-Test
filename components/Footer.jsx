import Link from "next/link";

export default function Footer() {


    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();

    return (


        <footer className="bg-[#e3e3e3] mt-10 p-3">
               
               <div className="pt-5 text-center text-2xl">Copyright {currentYear} @ Speedometer</div>


            <div className="md:pb-0 md:mt-0 mt-4 ">
                <ul id="menu" className="sm:flex sm:space-x-10 sm:pb-0 items-center text-black font-bold text-center justify-center leading-[3] pt-5 md:pb-10">
                    <li> <Link href="/">Home</Link></li>
                    <li> <Link href="/about">About</Link></li>
                    <li> <Link href="/contact">Contact</Link></li>
                    <li> <Link href="/privacy-policy">Privacy Policy</Link></li>
                    <li> <Link href="/disclaimer">Disclaimer</Link></li>
                </ul>
            </div>

        </footer>


    );
}

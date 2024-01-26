import Link from "next/link";

export default function Footer() {


    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();

    return (

        <footer className="bg-[#f7f8f9]">
            <div className="py-2 max-w-[1100px] mx-auto">
                <div className="container mx-auto md:flex flex-wrap justify-between items-center">
                    <div className="md:flex items-center text-center">
                        <p className="font-bold p-3">&copy; {currentYear} @ Train Speed Test</p>
                    </div>

                    <ul className="md:flex md:space-x-7 text-center leading-[2.5] p-3 font-bold">
                        <li>   <Link href="/contact">Contact</Link></li>
                        <li>    <Link href="/about">About</Link></li>
                        <li>   <Link href="/disclaimer">Disclaimer</Link></li>
                        <li>    <Link href="/privacy-policy">Privacy Policy</Link></li>
                    </ul>

                </div>
            </div>
        </footer>


    );
}

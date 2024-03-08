
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const Blog = () => {
    return (
        <>
            <Navbar />


            <div className="flex flex-wrap md:gap-[100px] gap-10 justify-center md:p-10 p-3">

                <div className="w-[400px] border border-gray-300 cursor-pointer">
                    <Link href="/facts-about-indian-trains">
                        <div>
                            <img className="w-[400px] h-[300px] object-cover" src="https://c.ndtvimg.com/2022-06/pec7cqno_trains-650_625x300_20_June_22.jpg" alt="" />
                            <h2 className="text-2xl font-bold px-3 mt-2 mb-2">Some Facts About Indian Trains</h2>
                            <p className="px-3 mb-5">Indian trains form the lifeline of the nation, weaving through its vast and diverse landscape with unmatched efficiency and charm. As one of the largest railway networks...</p>
                        </div>
                    </Link>
                </div>



                <div className="w-[400px] border border-gray-300 cursor-pointer">
                    <Link href="/maharaja-express">
                        <div>
                            <img className="w-[400px] h-[300px] object-cover" src="https://www.the-maharajas.com/assets/img/photo_gallery/Rang-Mahal-Restaurant.jpg" alt="" />
                            <h2 className="text-2xl font-bold px-3 mt-2 mb-2">Exploring Luxury Travel: India&apos;s Maharaja Express</h2>
                            <p className="px-3 mb-5">India&apos;s Maharaja Express is a luxurious train journey that offers a unique way to explore the rich cultural heritage and diverse landscapes of India. From the moment you step...</p>
                        </div>
                    </Link>
                </div>



            </div>


            <Footer />

        </>
    );
}



export default Blog;
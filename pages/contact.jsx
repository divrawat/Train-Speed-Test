import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
    return (
        <>

            <Navbar />

            <div className="max-w-[1100px] mx-auto p-4 ">

                <h1 className="text-center p-3 font-bold text-3xl">Contact</h1>

                <p className="mt-2 mb-[40px]">Thank you for reaching out to our Twitter Trends Tools. We value your feedback and inquiries. Please use the following information to get in touch with us:</p>

                <h2 className="text-3xl font-bold mb-6">General Inquiries</h2>
                <p className="mt-2 mb-[10px]"><b>Email:</b> divrawat2001@gmail.com</p>
                <p className="mt-2 mb-[40px]"><b>Phone:</b> Will Update Soon</p>



                <h2 className="text-3xl font-bold mb-6">Customer Support</h2>
                <p className="mt-2 mb-[30px]">For assistance with our products or services, please contact our customer support team:</p>
                <p className="mt-2 mb-[10px]"><b>Email:</b> divrawat2001@gmail.com</p>
                <p className="mt-2 mb-[40px]"><b>Phone:</b> Will Update Soon</p>



                <h2 className="text-3xl font-bold mb-6">Business Enquiry</h2>
                <p className="mt-2 mb-[30px]">For assistance with our products or services, please contact our customer support team:</p>
                <p className="mt-2 mb-[10px]"><b>Email:</b> divrawat2001@gmail.com</p>
                <p className="mt-2 mb-[10px]"><b>Phone:</b> Will Update Soon</p>


            </div>
            <Footer />


        </>
    )
}


export default Contact
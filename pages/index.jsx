import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpeedometerComponent from "@/components/Speedometer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1200px] mx-auto p-3 mt-5">

        <h1 className="text-3xl font-bold text-center">Online Speedometer: Feel the Need for Speed – Discover Your Velocity Now !</h1>
        <SpeedometerComponent />

      </div>
      <Footer />

    </>
  );
}

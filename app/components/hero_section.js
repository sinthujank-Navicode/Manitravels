"use client"
import { motion } from "framer-motion";
import Navbar from "./navbar";
export default function Section1() {
    return (
      <section
  className="container flex flex-col items-center w-full h-screen text-center overflow-hidden px-4"
  style={{ backgroundImage: "url('/background01.jpg')" }}>
    <Navbar/>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 mt-20 items-center">
    {/* First Box - Text Section */}
    <motion.div
      initial={{ x: "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col justify-center items-center md:items-start text-center md:text-left bg-white bg-opacity-80 p-12 rounded-xl w-full md:w-[75%] min-h-[600px] shadow-lg"
    >
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-md text-gray-500"
      >
        ____ As an independent entity,<br /> we provide supportive and neutral<br /> governance to our coalition
      </motion.p>
      <br />
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-5xl md:text-7xl font-extrabold mt-6"
      >
        TRAVEL<br /> AROUND <br />THE WORLD
      </motion.h1>
    </motion.div>

    {/* Second Box - Image Section */}
    <motion.div
      initial={{ x: "100%", scale: 0.25, opacity: 1 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="relative  p-12 rounded-xl w-full md:w-[75%] min-h-[600px] shadow-lg flex justify-center"
    >
      <img src="/flight.jpg" alt="Airplane" className="max-w-full h-auto" />
    </motion.div>
  </div>
</section>

    
    );
  }
  
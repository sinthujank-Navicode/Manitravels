// app/components/Section1.js
export default function Section1() {
    return (
      <section
        className="container mx-auto flex flex-col items-center w-full h-screen text-center"
        style={{ backgroundImage: "url('/background01.jpg')" }}>
        <div className="max-w-7xl min-h-[600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 items-center bg-white bg-opacity-80 p-10 rounded-xl  overflow-hidden">
          {/* Left Text Section with Animation */}
          <motion.div
            initial={{ x: "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col justify-center text-center md:text-left"
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
            <br />
            <br />
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

          {/* Right Image Section - Hidden on Mobile */}
          <motion.div
            initial={{ x: "100%", scale: 0.25, opacity: 1 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="relative hidden md:block "
          >
            <Image src="/flight.jpg" alt="Airplane" width={800} height={700} />
          </motion.div>
        </div>
      </section>
    );
  }
  
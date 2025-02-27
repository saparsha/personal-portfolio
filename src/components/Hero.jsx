import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/saparProfilPic.png"
import { delay, motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity:0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                    >
                        Sapar Shayan
                    </motion.h1>
                    <motion.span variants={container(0.5)}
                        initial="hidden"
                        animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Software Engineer
                    </motion.span>
                    <motion.p variants={container(1)}
                        initial="hidden"
                        animate="visible" className="my-2 max-w-xl py-9 font-light tracking-tighter text-lg"> 
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className=" w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{x:100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 1, delay: 1.2}} src={profilePic} alt="Sapar Shayan" className="w-3/4 max-w-xs md:max-w-sm lg:max-w-md" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero

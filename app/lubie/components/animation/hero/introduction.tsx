import { motion,stagger} from "framer-motion"


export default function StaggerTextAnimation () {
const textVariants = {
    hidden: {opacity: 0, x:50},
    visible: {opacity: 1, x: 0, delay: {stagger: 0.5}},
};



const text = "Stagger Text Animation";

return (
    <motion.div
    variants={textVariants}
    initial="hidden"
    animate="visible"
    >

    <p className="sm:text-2xl md:text-2xl mb-5 text-xl font-bold md:text-right text-center">
          The first <br></br> <span className="text-lubie-light-blue text-extra-bold">multi-purpose</span>  FDA registered <br></br>Lube in  the
          Philippines
        </p>

        </motion.div>

)
}


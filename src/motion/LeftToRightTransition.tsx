import { motion } from "framer-motion";

const LeftToRightTransition = ({children} : any) => {
  return (
    <motion.div
      initial={{ x: -100 }} // Start off-screen to the left
      animate={{ x: 0 }} // Move to the right
      transition={{ duration: 1.5 }} // Animation duration
    >
        {children}
    </motion.div>
  );
};

export default LeftToRightTransition;

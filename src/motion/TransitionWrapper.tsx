import { motion } from "framer-motion";

const TransitionWrapper = ({children}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
        {children}
    </motion.div>
  );
};

export default TransitionWrapper;

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
         شیخ عزیز الرحمن (گولڈ میڈلسٹ)
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        سینیئر صحافی
      </motion.p>
    </div>
  );
};

export default Hero;

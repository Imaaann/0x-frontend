"use client";
import { motion } from "framer-motion";
import MainLogo from "./svg/main-logo";

function MainIcon() {
  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0.7 }}
      animate={{ scale: [null, 1.1, 1], opacity: [null, 1, 1] }}
    >
      <MainLogo height={300} width={300} />
    </motion.div>
  );
}

export default MainIcon;

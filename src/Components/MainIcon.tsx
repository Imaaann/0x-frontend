"use client";
import icon from "@/../public/Ox_.svg";
import Image from "next/image";
import { motion } from "framer-motion";
function MainIcon() {
  return (
    <motion.div
      initial={{ scale: 0.3, opacity: 0.7 }}
      animate={{ scale: [null, 1.1, 1], opacity: [null, 1, 1] }}
    >
      <Image src={icon} alt="An icon displaying the text 0x_" width={300} height={300} />
    </motion.div>
  );
}

export default MainIcon;

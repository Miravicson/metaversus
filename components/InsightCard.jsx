"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import styles from "../styles";

const InsightCard = ({ index, imgUrl, title, subtitle }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-col gap-4 md:flex-row"
  >
    <img
      src={imgUrl}
      alt="insight"
      className="md:w-[270px] rounded-[32px] h-[250px] object-cover w-full"
    />

    <div className="flex items-center justify-between w-full ">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] text-secondary-white font-normal lg:text-[20px] text-[14px]">
          {subtitle}
        </p>
      </div>
      <button className="items-center hidden lg:flex justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[2px] border-white">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="object-contain w-[40%] h-[40%]"
        />
      </button>
    </div>
  </motion.div>
);

export default InsightCard;

"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import styles from "../styles";

const InsightCard = ({ index, imgUrl, title, subtitle }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="lg:flex mb-[32px] lg:mb-0"
  >
    <div className="rounded-[24px] w-full h-[300px] sm:h-[200px] lg:w-[270px] lg:h-[270px] md:flex-none">
      <img
        src={imgUrl}
        alt="insight"
        className="object-cover w-full h-full rounded-[24px]"
      />
    </div>
    <div className="lg:ml-[64px] lg:flex lg:justify-between lg:gap-[90px] lg:items-center">
      <div>
        <h2 className="font-normal text-center lg:text-left mt-[24px] lg:mt-[24px] mb-[24px] text-[30px] lg:text-[42px] leading-[1] lg:leading-[1.25] lg:mb-[16px] text-white">
          {title}
        </h2>
        <p className="font-normal text-center lg:text-left text-[16px] mb-[24px] lg:text-[20px] opacity-[0.4] text-white leading-[2]">
          {subtitle}
        </p>
      </div>
      <button className="border-[2px] rounded-full mx-auto border-white lg:flex-none lg:p-0 w-[100px] h-[100px]  flex justify-center items-center ">
        <img
          src="/top-right-arrow.svg"
          alt="top-right-arrow"
          className="object-contain"
        />
      </button>
    </div>
  </motion.div>
);

export default InsightCard;

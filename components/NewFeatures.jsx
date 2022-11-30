import styles from "../styles";
const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-col flex-1 sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} bg-[#323f5d] w-[70px] h-[70px] rounded-[24px] mb-[26px]`}
    >
      <img src={imgUrl} alt={'icon'} className="object-contain w-1/3 h-1/3" />
    </div>
    <h1 className="font-bold text-[24px] text-white mb-[16px] leading-[30px]">{title}</h1>
    <p className="font-normal flex flex-1 text-[18px] text-[#B0B0B0] leading-[32px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;

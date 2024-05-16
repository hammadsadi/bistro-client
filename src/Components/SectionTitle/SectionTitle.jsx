const SectionTitle = ({ subtitle, heading }) => {
  return (
    <div className="text-center max-w-sm mx-auto mb-6 md:mb-11">
      <h5 className=" text-lg md:text-xl italic text-color-primary font-normal pb-2 md:pb-3 capitalize">
        ---{subtitle}---
      </h5>
      <h2 className="text-[#151515] font-normal text-2xl md:text-4xl border-y-4 md:py-4 py-3 uppercase">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;

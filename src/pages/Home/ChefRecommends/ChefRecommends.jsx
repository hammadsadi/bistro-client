import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import RecommendsItem from "../../Shared/RecommendsItem/RecommendsItem";

const ChefRecommends = () => {
  return (
    <section>
      <div className="container md:px-0 px-2 mx-auto pt-12 md:pt-24">
        <SectionTitle subtitle={"Should Try"} heading={"CHEF RECOMMENDS"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <RecommendsItem />
          <RecommendsItem />
          <RecommendsItem />
          <RecommendsItem />
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;

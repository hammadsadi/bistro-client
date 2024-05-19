import RecommendsItem from "../../Shared/RecommendsItem/RecommendsItem";

const TabContect = ({ salad }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {salad.map((item) => (
        <RecommendsItem key={item._id} item={item} isPrice={true} />
      ))}
    </div>
  );
};

export default TabContect;

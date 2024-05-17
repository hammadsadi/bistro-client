import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularMenuItem from "../../Shared/PopularMenuItem/PopularMenuItem";
import PageCover from "../../Shared/PageCover/PageCover";
import bn2 from "../../../assets/menu/dessert-bg.jpeg";
import bn3 from "../../../assets/menu/pizza-bg.jpg";
import bn4 from "../../../assets/menu/salad-bg.jpg";
import bn5 from "../../../assets/menu/soup-bg.jpg";
import MenuBtn from "../../../Components/MenuBtn/MenuBtn";
import useGetMenu from "../../../hooks/useGetMenu";
const TodaysOffer = () => {
  // const [todayOffer, setTodayOffer] = useState([]);
  const [menu] = useGetMenu();
  const todayOffer = menu.filter((menu) => menu.category === "offered");
  const salad = menu.filter((menu) => menu.category === "salad");
  const dessert = menu.filter((menu) => menu.category === "dessert");
  const pizza = menu.filter((menu) => menu.category === "pizza");
  const soup = menu.filter((menu) => menu.category === "soup");

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItem = data.filter((menu) => menu.category === "popular");
  //       setTodayOffer(popularItem);
  //     });
  // }, []);
  return (
    <div>
      <section>
        <div className="container md:px-0 px-2 mx-auto pt-12 md:pt-24">
          <div>
            <SectionTitle subtitle={"Don't miss"} heading={"TODAY'S OFFER"} />
          </div>
          {/* Popular Menu Item*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {todayOffer?.map((item) => (
              <PopularMenuItem key={item._id} item={item} />
            ))}
          </div>
          <MenuBtn btnTitle={" ORDER YOUR FAVOURITE FOOD"} />
        </div>
      </section>
      {/* More Product */}
      <div>
        {/* Section Cover */}
        <div className="py-12 md:py-24">
          <PageCover
            isHead={false}
            img={bn2}
            heading={"DESSERTS"}
            disc={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>
        <div className="container md:px-0 px-2 mx-auto pb-12 md:pb-24">
          {/* Popular Menu Item*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {dessert?.map((item) => (
              <PopularMenuItem key={item._id} item={item} />
            ))}
          </div>
          <MenuBtn btnTitle={" ORDER YOUR FAVOURITE FOOD"} />
        </div>
      </div>
      {/* More Product PIZZA*/}
      <div>
        {/* Section Cover */}
        <div className="pb-12 md:pb-24">
          <PageCover
            isHead={false}
            img={bn3}
            heading={"PIZZA"}
            disc={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>
        <div className="container md:px-0 px-2 mx-auto">
          {/* Popular Menu Item*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {pizza?.map((item) => (
              <PopularMenuItem key={item._id} item={item} />
            ))}
          </div>
          <MenuBtn btnTitle={" ORDER YOUR FAVOURITE FOOD"} />
        </div>
      </div>
      {/* More Product SALADS*/}
      <div>
        {/* Section Cover */}
        <div className="py-12 md:py-24">
          <PageCover
            isHead={false}
            img={bn4}
            heading={"SALADS"}
            disc={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>
        <div className="container md:px-0 px-2 mx-auto pb-12 md:pb-24">
          {/* Popular Menu Item*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {salad?.map((item) => (
              <PopularMenuItem key={item._id} item={item} />
            ))}
          </div>
          <MenuBtn btnTitle={" ORDER YOUR FAVOURITE FOOD"} />
        </div>
      </div>
      {/* More Product SOUPS*/}
      <div>
        {/* Section Cover */}
        <div className="pb-12 md:pb-24">
          <PageCover
            isHead={false}
            img={bn5}
            heading={"SOUPS"}
            disc={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>
        <div className="container md:px-0 px-2 mx-auto pb-12 md:pb-24">
          {/* Popular Menu Item*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {soup?.map((item) => (
              <PopularMenuItem key={item._id} item={item} />
            ))}
          </div>
          <MenuBtn btnTitle={" ORDER YOUR FAVOURITE FOOD"} />
        </div>
      </div>
    </div>
  );
};

export default TodaysOffer;

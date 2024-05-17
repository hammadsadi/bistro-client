import bn1 from "../../../assets/menu/banner3.jpg";
import PageCover from "../../Shared/PageCover/PageCover";
import TodaysOffer from "../TodaysOffer/TodaysOffer";
const OurMenu = () => {
  return (
    <div>
      {/* Menu Banner Header */}
      <PageCover
        img={bn1}
        isHead={true}
        heading={"OUR MENU"}
        disc={"Would you like to try a dish?"}
      />
      {/* Todays Offer */}
      <TodaysOffer />
    </div>
  );
};

export default OurMenu;

import bn1 from "../../../assets/menu/banner3.jpg";
import PageCover from "../../Shared/PageCover/PageCover";
import MenuContent from "../MenuContent/MenuContent";
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
      <MenuContent />
    </div>
  );
};

export default OurMenu;

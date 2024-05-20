import shopBn from "../../../assets/shop/banner2.jpg";
import useGetMenu from "../../../hooks/useGetMenu";
import PageCover from "../../Shared/PageCover/PageCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabContect from "../TabContect/TabContect";
import { useParams } from "react-router-dom";
import { useState } from "react";
const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "offered"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useGetMenu();
  const offered = menu.filter((menu) => menu.category === "offered");
  const salad = menu.filter((menu) => menu.category === "salad");
  const dessert = menu.filter((menu) => menu.category === "dessert");
  const pizza = menu.filter((menu) => menu.category === "pizza");
  const soup = menu.filter((menu) => menu.category === "soup");
  return (
    <div>
      <PageCover
        img={shopBn}
        heading={"OUR SHOP"}
        isHead={true}
        disc={"Would you like to try a dish?"}
      />
      <section>
        <div className="container md:px-0 px-2 mx-auto py-12 md:py-24 ">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>
                {" "}
                <h2 className="font-inter md:text-xl text-lg font-bold uppercase">
                  Salad
                </h2>
              </Tab>
              <Tab>
                <h2 className="font-inter md:text-xl text-lg font-bold uppercase">
                  pizza
                </h2>
              </Tab>
              <Tab>
                <h2 className="font-inter md:text-xl text-lg font-bold uppercase">
                  soups
                </h2>
              </Tab>

              <Tab>
                <h2 className="font-inter md:text-xl text-lg font-bold uppercase">
                  desserts
                </h2>
              </Tab>
              <Tab>
                <h2 className="font-inter md:text-xl text-lg font-bold uppercase">
                  Offered
                </h2>
              </Tab>
            </TabList>

            <TabPanel>
              <TabContect salad={salad} />
            </TabPanel>
            <TabPanel>
              <TabContect salad={pizza} />
            </TabPanel>
            <TabPanel>
              <TabContect salad={soup} />
            </TabPanel>
            <TabPanel>
              <TabContect salad={dessert} />
            </TabPanel>
            <TabPanel>
              <TabContect salad={offered} />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default OurShop;

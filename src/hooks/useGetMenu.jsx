import { useEffect, useState } from "react";

const useGetMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menus")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return [menu];
};

export default useGetMenu;

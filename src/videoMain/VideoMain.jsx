import { useEffect } from "react";
import { getData } from "../../api/api";
import Cookies from "js-cookie";

function VideoMain() {
  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      const test = await getData(token);
      console.log(test);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <h1>We did it Joe, Youre gonna be the president of the United States</h1>
  );
}

export default VideoMain;

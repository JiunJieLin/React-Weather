import backgroundImage from "../public/backgroundImage.jpg";
import SearchBar from "@/components/searchBar";
import Weather from "@/components/weather";
import { useState } from "react";
import fakeDatas from "@/components/fakeData";

const Home = () => {
  const [selectLocation, setSelectLocation] = useState("");
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(null);
  const handleSubmit = () => {
    if (selectLocation.trim() === "") {
      return;
    }
    const index = fakeDatas.findIndex(
      (data) => data.location.toLowerCase() === selectLocation.toLowerCase()
    );
    if (index !== -1) {
      setSelectedLocationIndex(index);
    } else {
      console.log("地點未找到");
    }
  };
  return (
    <div
      className=" min-h-screen bg-center bg-cover flex flex-col  border-2 gap-10 p-4"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="flex flex-col items-center w-full pt-16">
        <p className="text-purple-300 text-3xl font-bold ">WEATHER APP</p>
        <SearchBar
          setSelectLocation={setSelectLocation}
          selectLocation={selectLocation}
          handleSubmit={handleSubmit}
        />
      </div>
      {selectedLocationIndex !== null && (
        <Weather selectedLocationIndex={selectedLocationIndex} />
      )}
    </div>
  );
};

export default Home;

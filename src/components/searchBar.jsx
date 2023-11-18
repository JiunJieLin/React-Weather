import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchBar = ({ setSelectLocation, selectLocation, handleSubmit }) => {
  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setSelectLocation(newLocation);
  };
  return (
    <div className="py-4 px-10 relative bg-white rounded-full w-[600px] sm:w-[300px]">
      <input
        type="text"
        placeholder="輸入地點"
        value={selectLocation}
        className="outline-none"
        onChange={handleLocationChange}
      />
      <button onClick={handleSubmit}>
        <MagnifyingGlassIcon className="absolute left-3 top-5 text-gray-500 h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;

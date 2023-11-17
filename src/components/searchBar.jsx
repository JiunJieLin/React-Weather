import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
const SearchBar = () => {
  return (
    <div className="py-4 px-10 relative bg-white rounded-full w-[600px]">
      <input type="text" placeholder="輸入地點" className="outline-none" />
      <button>
        <MagnifyingGlassIcon className="absolute left-3 top-5 text-gray-500 h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;

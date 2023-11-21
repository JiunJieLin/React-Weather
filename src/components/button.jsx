import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const Button = ({ handleNextLocation, handlePrevLocation }) => {
  return (
    <div className="flex items-center justify-center gap-4 ">
      <button
        onClick={handlePrevLocation}
        className="bg-white opacity-30 absolute top-12 left-[-80px]"
      >
        <ChevronLeftIcon className="w-[40px] h-[40px]  text-black" />
      </button>
      <button
        onClick={handleNextLocation}
        className="bg-white opacity-30 absolute top-12 right-[-80px]"
      >
        <ChevronRightIcon className="w-[40px] h-[40px]  text-black" />
      </button>
    </div>
  );
};
export default Button;

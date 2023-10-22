import { Plus } from "lucide-react";



const CustomButton = ({ text }) => {
  return (
    <div>
      <button className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-full">
        <Plus size={16} className="mr-1" />{" "}
        <span className="text-xs">{text}</span>{" "}
      </button>
    </div>
  );
};

export default CustomButton;

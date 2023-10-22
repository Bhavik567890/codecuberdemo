import { CircleDashedIcon, Lock, Shield } from "lucide-react";
import Button from "../button/Button";
import CustomButton from "../custom-button/CustomButton";

const SidebarOffer = () => {
  return (
    <div className="relative bg-white border border-gray-200 p-2 shadow h-full w-auto flex flex-col">
      <span className="text-gray-500 text-sm p-3">Offer Overwrites</span>

      <div className="flex items-center gap-x-2 p-3 ml-1">
        <span className="text-zinc-500 text-xs font-semibold">
          Merchant Split
        </span>

        <Shield className="w-3 h-3 text-black mr-5" />
      </div>

      <div className="flex items-center gap-x-2 p-3">
        <div className="flex items-center rounded-lg bg-gray-200 w-1/2">
          <span className="rounded-l-lg bg-gray-200 text-gray-600 px-3 py-2 font-semibold">
            75
          </span>

          <Shield className="w-3 h-3 text-black ml-24 " />
        </div>
        <div className="flex items-center rounded-lg bg-gray-200 w-1/2">
          <span className="rounded-l-lg bg-gray-200 text-gray-600 px-3 py-2">
            25
          </span>
        </div>
      </div>

      <div className="flex items-center gap-x-2 p-3 ml-1">
        <span className="text-zinc-500 text-xs font-semibold">
          Merchant funded offer
        </span>
        <Shield className="w-3 h-3 text-black ml-1" />

        <span className="text-zinc-500 text-xs font-semibold ml-3">
          What Customers get
        </span>
        <Shield className="w-3 h-3 text-black ml-1" />
      </div>

      <div className="flex items-center gap-x-2 p-3">
        <div className="flex items-center rounded-lg bg-gray-200 w-1/2">
          <span className="rounded-l-lg bg-gray-200 text-gray-600 px-3 py-2 font-semibold">
            35%
          </span>
        </div>
        <div className="flex items-center rounded-lg bg-gray-200 w-1/2">
          <span className="rounded-l-lg bg-gray-200 text-gray-600 px-3 py-2">
            28.5%
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-2 p-3">
        <div className="flex items-center">
          <Lock className="w-4 h-4 text-black ml-2" />
          <span className="text-zinc-500 text-xs font-semibold ml-2">
            Blackout days
          </span>
        </div>
        <div className="ml-auto">
          <CustomButton text="Add blackout days" />
        </div>
      </div>

      <div className="flex items-center gap-x-2 p-3">
        <div className="flex items-center">
          <CircleDashedIcon className="w-4 h-4 text-black ml-2" />
          <span className="text-zinc-500 text-xs font-semibold ml-2">
            Add Custom hour
          </span>
        </div>
        <div className="ml-auto">
          <CustomButton text=" Add Custom hour" />
        </div>
      </div>

      <div className="mt-auto  mx-auto">
        <Button />
      </div>
    </div>
  );
};

export default SidebarOffer;

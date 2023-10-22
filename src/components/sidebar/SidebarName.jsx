const SidebarName = () => {
  return (
    <div
      className={"relative bg-white border border-gray-200 p-2 shadow h-full "}
    >
      <span className="text-gray-500 text-sm p-3">Outlets</span>
      <div className={"grid gap-2 text-black text-sm font-bold  mt-3  px-3"}>
        <div className="flex items-center gap-x-2 py-2 cursor-pointer">
          Dubai Mall - Dubai
        </div>
      </div>
      <div
        className={
          "grid gap-2 text-black text-sm font-bold px-3 border-t border-gray-300 cursor-pointer"
        }
      >
        <div className="flex items-center gap-x-2 py-2">
          Marina Mall - Dubai
        </div>
      </div>
      <div
        className={
          "grid gap-2  cursor-pointer bg-slate-200 text-black text-sm font-bold pl-3 border-t border-gray-300 px-3 mt-1.5"
        }
      >
        <div className="flex items-center gap-x-2 py-2 ">
          JBR the Beach 1 - Dubai
        </div>
      </div>
    </div>
  );
};

export default SidebarName;

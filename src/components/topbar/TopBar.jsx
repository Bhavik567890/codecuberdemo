import { topBarText } from "../../../utils/topbarText";
import logo from '../../assets/logo.svg';
const TopBar = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="bg-white shadow-md p-2  flex justify-between items-center">
          <div className="flex space-x-2 ml-1">
            {topBarText.map((o, i) => (
              <div key={i} className="flex items-center  ">
                <div className="rounded-full bg-gray-100 flex items-center justify-between">
                  {o.Icon && (
                    <o.Icon
                      className=" h-3 w-4 text-blue-500 mr-2 "
                      size={"xs"}
                    />
                  )}
                  <span className="px-2 text-black cursor-pointer">{o.label}</span>
                </div>

                {i !== topBarText.length - 1 && (
                  <span className="px-0.5">/</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-black cursor-pointer">Dashboard</span>
            <span className="text-gray-500 text-xs cursor-pointer">mimojo Admin</span>
            <span className="w-8 h-8 cursor-pointer">
              <img src={logo} alt="User" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

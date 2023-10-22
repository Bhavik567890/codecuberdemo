// import components

import Header from "../components/header/Header";
import SidebarName from "../components/sidebar/SidebarName";
import TopBar from "../components/topbar/TopBar";
import WeeklyCalendar from "../components/calender/Calender";
import SidebarOffer from "../components/sidebar/SidebarOffer";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <div className="m-3">
        <Header />
      </div>

      <div className="flex">
        <div className="w-1/6 ">
          <SidebarName />
        </div>
        <div className="w-1/4 ">
          <SidebarOffer />
        </div>
        <div className="w-2/4 flex-grow  ">
          <WeeklyCalendar />
        </div>
      </div>
    </>
  );
};

export default HomePage;

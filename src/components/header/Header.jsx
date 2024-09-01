import { TiLocation } from "react-icons/ti";
import { FaCalendar } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div
        className=" flex justify-center items-center border-1 border-solid border-slate-200 rounded-3xl py-3
       w-full px-10 max-w-[1000px]  "
      >
        <div className="p-2 flex gap-2">
          <TiLocation className="text-red-500 text-2xl" />
          <input placeholder="where to go?" className=""></input>
          <span className="w-[1px] h-[30px]  bg-slate-300"></span>
        </div>
        <div className="p-2 flex gap-2  ">
          <FaCalendar className="text-2xl text-purple-950 " />
          <span>01/02/2024</span>
          <span>to</span>
          <span>01/02/2024</span>
          <span className="w-[1px] h-[30px]  bg-slate-300"></span>
        </div>
        <div className="p-2 ">
          <input></input>
        </div>
        <div className="p-2 ">
          <input></input>
        </div>
      </div>
    </>
  );
};
export default Header;

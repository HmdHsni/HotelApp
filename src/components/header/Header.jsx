import { TiLocation } from "react-icons/ti";
import { FaCalendar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
const Header = () => {
  const [roomOption, setRoomOption] = useState(false);
  const [option, setOption] = useState({
    adult: 0,
    children: 1,
    room: 2,
  });

  return (
    <>
      <div
        className=" flex justify-between items-center border-1 border-solid border-slate-200 rounded-3xl py-3
       w-full px-10 max-w-[1000px]  z-0"
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
        <div
          className="p-2 flex gap-2 relative z-999 "
          onClick={() => setRoomOption(!roomOption)}
        >
          <span>1 adult</span>
          <span>2 children</span>
          <span>1 room</span>
          <span className="w-[1px] h-[30px]  bg-slate-300 "></span>
          {roomOption && <GuestOptionList />}
        </div>
        <div className="p-2 flex justify-start">
          <CiSearch className="bg-blue-700 text-white w-10 h-10 p-2 rounded-xl" />
        </div>
      </div>
    </>
  );
};
export default Header;
const GuestOptionList = () => {
  return (
    <div className="flex flex-col gap-y-4 p-3 absolute top-10 right-[15px] shadow-xl bg-white w-[250px] rounded-xl  z-1000">
      <OptionItem type="adult" />
      <OptionItem type="children" />
      <OptionItem type="room" />
    </div>
  );
};
const OptionItem = ({ type }) => {
  const handleOptions = (type) => {
    console.log(type, "type");
  };
  return (
    <div className="flex justify-between w-full">
      <p>{type}</p>
      <div className="flex w-1/2 justify-center items-center gap-x-3 ">
        <span
          className="rounded-md flex items-center justify-center bg-slate-200 p-1 w-7 h-7"
          onClick={() => handleOptions(type)}
        >
          -
        </span>
        <span>2</span>
        <span
          className="rounded-md flex items-center justify-center bg-slate-200 p-1 w-7 h-7"
          onClick={() => handleOptions(type)}
        >
          +
        </span>
      </div>
    </div>
  );
};

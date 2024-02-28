import { useState } from "react";

function Dropdown({ name, sectionsName }) {
  const [isActive, setIsActive] = useState(false);

  const handleOnClickMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <ul className="flex flex-col md:hidden items-center gap-10">
      <button
        onClick={handleOnClickMenu}
        className="flex bg-[#FF001D] p-2 rounded-md font-bold"
      >
        {name}
      </button>

      <div
        className={`${
          isActive ? "absolute" : "hidden"
        } absolute right-[3%] top-24 text-right`}
      >
        {/* <ul className="flex flex-col gap-2 bg-[#FF001D] p-2 text-center rounded-md">
          <li className="cursor-pointer active:text-[#191919]">Home</li>
          <li className="cursor-pointer active:text-[#191919]">About</li>
          <li className="cursor-pointer active:text-[#191919]">About</li>
          <li className="cursor-pointer active:text-[#191919]">About</li>
          <li className="cursor-pointer">(51)xxxx-xxxx</li>
        </ul> */}

        <ul className="flex flex-col gap-2 bg-[#FF001D] p-2 text-center rounded-md">
            {
              sectionsName && sectionsName.map((section, index) => (
                <li key={index} className="cursor-pointer text-[#191919] border-b border-b-[#191919]  active:text-[#f9f9f9]">{section}</li>
              ))
            }
        </ul>
      </div>
    </ul>
  );
}

export default Dropdown;

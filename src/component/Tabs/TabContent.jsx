import React, { useState } from "react";
import { TambahBackup } from "../../pages/Persetujuan/Tambah/TambahBackup";
import GantiBackup from "../../pages/Persetujuan/Ganti/GantiBackup";
import { NavbaR } from "../Navbar/NavbaR";

export default function TabContent() {
  const [currentTab, setCurrentTab] = useState('1');

  const tabs = [
    {
      id: 1,
      title: "Tambah",
      content: <TambahBackup />,
    },
    {
      id: 2,
      title: "Ganti",
      content: <GantiBackup />,
    },
  ];

  const handleTabsClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <>
      <NavbaR />
      <div className="relative w-[100%] mx-auto rounded-3xl h-10 grid grid-cols-2 items-start   bg-header mt-2">
        <div className="absolute  indicator top-0 left-0 rounded-full bg-white shadow-md"></div>
        {tabs.map((tab, i) => (
          <button
            role="tab"
            id={tab.id}
            tabIndex="0"
            className="relative block h-10 px-6  tab rounded-full  font-nano font-semibold text-[16px] hover:bg-green-700 hover:text-white hover:font-bold" 
            key={i}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabsClick}
            aria-controls={tab.content}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="relative mt-1">
        {tabs.map((tab, i) => (
          <div className="tab-panel transition duration-300" key={i}>
            {currentTab === `${tab.id}` && <div>{tab.content}</div>}
          </div>
        ))}
      </div>
    </>
  );
}

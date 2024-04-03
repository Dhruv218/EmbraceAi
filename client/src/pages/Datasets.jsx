import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { URL } from "../constants";
import axios, { all } from "axios";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Datasets = () => {
  const [alldata, setalldata] = useState();
  const [search, setsearch] = useState("");
  const [data, setdata] = useState();

  useEffect(() => {
    async function getDatasets() {
      try {
        const url = `${URL}/datasets/all`;
        const res = await axios.get(url);
        console.log(res.data);
        setdata(res.data);
        setalldata(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getDatasets();
  }, []);

  const searchIdHandler = () => {
    if(alldata?.length>0 && search.length>0){
    const result = alldata.filter(item => {
      return  item.id.toLowerCase().includes(search.toLowerCase())
    });
    setdata(result);
    }
    else setdata(alldata);
  };
  
  useEffect(() => {
    searchIdHandler()
  }, [search])
  

  function getformatteddate(dateString) {
    const dateObject = new Date(dateString);

    // Extract day, month, and year
    const day = dateObject.getDate(); // Returns the day (1-31)
    const month = dateObject.getMonth() + 1; // Returns the month (0-11), so adding 1 to get the actual month number (1-12)
    const year = dateObject.getFullYear(); // Returns the year (four digits)

    // Construct the desired date format (e.g., DD/MM/YYYY)
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
  return (
    <>
      <Navbar />
      <input
        onChange={(e) => setsearch(e.target.value)}
        type="text"
        placeholder="Search Datasets ..."
        className="!w-[50%] mt-8 m-4 !text-[20px] ml-4 px-4 py-2 rounded-md border-gray-400 !border-[2px]"
      />
      <div className="flex flex-wrap items-center gap-6 m-4">
        {data?.length > 0
          ? data?.slice(0, 100)?.map((it) => {
              return (
                <Link
                  to={`${it.id}`}
                  className="border-purple-700 flex justify-between hover:scale-110 hover:shadow-white transition-cmm flex-col gap-1 bg-opacity-40 min-w-[240px]  w-[22%] shadow-box min-h-[150px]  text-white px-4 py-3"
                >
                  <div>
                    <p className="font-semibold text-[18px] mb-2">{it.id}</p>
                    {it?.author && (
                      <p className="text-[15px] font-medium">
                        {" "}
                        Author: {it.author}{" "}
                      </p>
                    )}
                    <p className="font-light text-[10px]  ">
                      {it.description?.slice(0, 100)}
                    </p>
                    <p className="font-normal text-[10px]  ">Region : US</p>
                    <p className="font-normal text-[10px]  ">
                      Last Modified: {getformatteddate(it.lastModified)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center font-light text-[15px]  gap-2">
                      <FaHandHoldingHeart color="Red" />
                      {it.likes}
                    </div>
                    <div className="flex items-center font-light text-[15px]  gap-2">
                      <IoCloudDownloadOutline color="yellow" />
                      {it.downloads}
                    </div>
                  </div>
                </Link>
              );
            })
          : search?.length>0 ? "No Result Found" :"Loading..."}
      </div>
      <Footer />
    </>
  );
};

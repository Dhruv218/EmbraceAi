import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../constants";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Datasetdetail = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [data, setdata] = useState();
  const [added, setadded] = useState(false);
  console.log(navigation);
  async function add() {
    const user = localStorage.getItem("token");
    if (user == null) navigation.prototype("/login");
    else {
      try {
        const data = { datasetId: id };
        const url = `${URL}/users/${user}/datasets`;
        const res = await axios.post(url, data);
        setadded(true);
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    }
  }

  useEffect(() => {
    async function getDatasets() {
      try {
        const url = `${URL}/datasets/${id}`;
        const res = await axios.get(url);
        console.log(res.data);
        setdata(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getDatasets();
  }, []);

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
      {data !== undefined && (
        <div className="border-purple-700 flex transition-cmm flex-col gap-1 bg-opacity-40 min-w-[240px]  w-[80%] shadow-box min-h-[130px] h-[80%] m-auto my-[50px]  text-white px-8 py-3">
          <div className="flex justify-between">
            {" "}
            <h1 className="font-semibold text-[22px]">Name : {id}</h1>
            <p className="px-3 py-2 bg-green-500 rounded-xl">
              {data?.private ? "Private" : "Public"}
            </p>
          </div>
          <h5 className="font-normal text-[15px]">
            {data?.cardData?.pretty_name}
          </h5>
          <p className="font-light text-[12px]  ">
            <span className="font-semibold"> Descripiton: </span>{" "}
            {data.description}
          </p>
          <p className="font-semibold text-[20px] mt-4">Types of Datasets</p>
          <div className="flex flex-wrap items-center my-4 gap-3">
            {data?.cardData.dataset_info?.length > 0
              ? data?.cardData?.dataset_info?.map((it) => {
                  return (
                    <>
                      <div className="w-[30%] p-4 border-white border-[1px] rounded-md ">
                        <p className="font-medium text-[15px] w-full whitespace-nowrap overflow-hidden text-ellipsis">
                          {" "}
                          Name: {it.config_name}{" "}
                        </p>
                        <p className="font-medium text-[15px]">
                          {" "}
                          Dataset Size: {it.dataset_size}
                        </p>
                        <p className="font-medium text-[15px]">
                          {" "}
                          Download size: {it.download_size}
                        </p>
                      </div>
                    </>
                  );
                })
              : "No Information"}
          </div>

          <div className="flex flex-wrap items-center gap-2 my-4">
            Tags:
            {data?.tags.map((it) => {
              return (
                <>
                  <div className="px-3 py-2 border-white border-[1px] rounded-xl">
                    <p className="text-[12px]">
                      {it.split(":")[1]?.length > 0
                        ? it.split(":")[1]
                        : it.split(":")[0]}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-between ">
            <div className="flex items-center font-light text-[15px]  gap-2">
              <FaHandHoldingHeart color="Red" />
              {data.likes}
            </div>
            <div className="flex items-center font-light text-[15px]  gap-2">
              <IoCloudDownloadOutline color="yellow" />
              {data.downloads}
            </div>
          </div>
        </div>
      )}
      <div
        onClick={add}
        className={`px-8 py-3  bg-green-500 rounded-md w-[50%] mx-auto text-center cursor-pointer hover:scale-110 hover:bg-green-600 transition-cmm ${added?'border-green-500 bg-orange-500 border-[2px] ':null}`}
      >
       {added?'Added':` Add ${id} Into Your Bucket +`}
      </div>

      <Footer />
    </>
  );
};

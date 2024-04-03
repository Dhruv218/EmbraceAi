import React, { useEffect, useState } from "react";
import { URL } from "../constants";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
export const User = () => {
  const [user, setuser] = useState();
  const [Datasetlist, setDatasetlist] = useState([]);
  const userid = localStorage.getItem("token");
  
  async function getuserdetail() {
    try {
      const url = `${URL}/users/userdetail/${userid}`;
      const res = await axios.get(url);
      console.log(res.data);
      setuser(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getuserdetail();
  }, []);

  const fetchDatasetById = async (datasetId) => {
    try {
      const url = `${URL}/datasets/${datasetId}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching dataset:", error);
      return null;
    }
  };
  const Removedataset = async (datasetId) => {
    try {
      const url = `${URL}/users/${userid}/datasets/${datasetId}`;
      const response = await axios.delete(url);
      getuserdetail()
    } catch (error) {
      console.error("Error fetching dataset:", error);
      return null;
    }
  };
  async function getdatasets() {
    const fetchedDatasets = await Promise.all(
      user.Datasets.map((datasetId) => fetchDatasetById(datasetId))
    );

    const validDatasets = fetchedDatasets.filter((dataset) => dataset !== null);
    console.log(validDatasets);
    setDatasetlist(validDatasets);
  }
  useEffect(() => {
    if (user?.Datasets !== undefined) {
      getdatasets();
    }
  }, [user]);

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
      <div className="mx-[5%] my-12 flex flex-col gap-4">
        <h1 className="font-semibold text-[20px]">User Information</h1>
        {user != undefined && (
          <div onClick={()=>{Removedataset(it.id)}} className="border-purple-700 flex transition-cmm flex-col py-4 w-fit gap-1 bg-opacity-40  shadow-box  text-white px-8 ">
            <p className="font-semibold text-[20px]">
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                Name :
              </span>{" "}
              {user.firstName + user.lastName}{" "}
            </p>
            <p>
              {" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                Email :
              </span>{" "}
              {user.email}
            </p>
            <p>
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                No. of Dataset Selected :
              </span>{" "}
              {user.Datasets?.length}
            </p>
          </div>
        )}
        <p className="font-semibold text-[20px]"> Datasets in Your Bucket</p>
        <div className="flex flex-wrap justify-start items-center gap-6">
          {Datasetlist?.length > 0
            ? Datasetlist?.map((it) => {
                return (
                  <div
                    
                    className="relative border-purple-700 flex justify-between hover:scale-110 hover:shadow-white transition-cmm flex-col gap-1 bg-opacity-40 min-w-[240px]  w-[22%] shadow-box min-h-[130px]  text-white px-4 py-3"
                  >
                    <div onClick={()=>{Removedataset(it.id)}} className=" absolute top-0 left-0 right-0 bottom-0 showw text-center justify-center flex items-center bg-black bg-opacity-75">
                      <p>Click here to remove this dataset from your collection.</p>
                      </div>
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
                  </div>
                );
              })
            : "No Datasets Added"}
        </div>
      </div>
      <Footer />
    </>
  );
};

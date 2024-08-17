import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../constants";
import { message } from "antd";
import Loader from "../components/Loader";
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import useDebounce from "../hooks/useDebounce";
import { Form } from "antd";
import AddRequestModal from "../components/AddRequestModal";
import { useDispatch } from "react-redux";
import { changeToFalse } from "../slices/modalOpenSlice";

const HelpcenterPage = () => {
  const [searchText, setSearchText] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredArray, setFilteredArray] = useState([]);

  const dispatch = useDispatch();

  const createRequest = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        base_url + "/api/helpcenter/create-card",
        values
      );
      if (response.data.status) {
        message.success(response.data.message);
        setAllCards((allCards) => [...allCards, response.data.data]);
        setFilteredArray([]);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error("Something went wrong!!");
    }
    setLoading(false);
    dispatch(changeToFalse());
  };

  const getAllCards = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        base_url + "/api/helpcenter/get-all-cards"
      );
      if (response.data.status) {
        setAllCards(response.data.data);
        message.success(response.data.message);
      } else {
        message.info(response.data.message);
      }
      console.log(response.data.status);
      console.log(response.data);
    } catch (error) {
      message.error(error.response.data.message);
    }
    setLoading(false);
  };

  const filteredArrayFuntion = async () => {
    try {
      const response = await axios.get(
        base_url + `/api/helpcenter/get-card-by-title?title=${searchText}`
      );
      setFilteredArray(response.data.data);
      if (!response.data.status) {
        message.error(response.data.message);
      }
      if (response.data.status && response.data.data.length === 0) {
        message.error("No results found !!");
      }
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  const searchDebounce = useDebounce(filteredArrayFuntion, 1000);

  useEffect(() => {
    searchDebounce();
  }, [searchText]);

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center items-center h-full w-full">
          {/* Hero Section */}
          <Herosection
            searchText={searchText}
            setSearchText={setSearchText}
            filteredArrayFuntion={filteredArrayFuntion}
          />

          {/* Cards section */}
          <div className="grid grid-cols-auto md:grid-cols-2 gap-6 lg:gap-y-[5rem] p-5 md:p-[3rem] lg:p-[7rem] lg:gap-x-[3rem] w-full justify-center items-center ">
            {(filteredArray.length === 0 ? allCards : filteredArray).map(
              (card) => {
                return (
                  <CardComponent
                    key={card.id}
                    cardDetails={card}
                    className={
                      "bg-slate-100 border-[1px] shadow-xl font-semibold"
                    }
                  />
                );
              }
            )}
          </div>

          <AddRequestModal createRequest={createRequest} />

          {/* Footer Sections */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default HelpcenterPage;

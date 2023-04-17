import React, { useEffect, useState } from "react";
// import busDate from "../availableBus/busData";
import { Link } from "react-router-dom";
import Calender from "./Calender";
import DropDown from "./DropDown";
import bgimage from "../../assets/bgimage.jpg";
import { useDispatch } from "react-redux";
import { getSeletedBuses, setBusLocation } from "../../redux/action/action";
const Selector = () => {
    const dispatch = useDispatch();
    const [cityList, setCityList] = useState(["Mumbai", "Delhi", "Hedrabad", "Dehradoon"]);
    const [location, setLocation] = useState([]);
    const [selectedDate, setSelectedDate] = useState();
    const [filteredBus, setFilteredBus] = useState();
    function fromCity(from, index) {
        cityList.splice(index, 1);
        setLocation([...location, from]);
    }
    function toCity(to, index) {
        cityList.splice(index, 1);
        setLocation([...location, to]);
    }
    useEffect(() => {
        const func = async () => {
            if (selectedDate) {
                setLocation([...location, selectedDate])
                let day = selectedDate.toLocaleString("default", { weekday: 'long', })
                const myData = {
                    pickPoint: location[0],
                    dropPoint: location[1],
                    runningDay: day
                };
                const queryString = new URLSearchParams(myData).toString();
                const buses = await fetch(`http://localhost:8080/busdetail?${queryString}`)
                    .then((response) => response.json())
                    .then((data) => data)
                    .catch((error) => console.error(error));
                setFilteredBus(buses);
            }
        };
        func();
    }, [selectedDate]);


    const handleClickFilterData = () => {
        setBusLocation(dispatch, location)
        getSeletedBuses(dispatch, filteredBus)
    }


    return (
        <div
            className="container-fluid"
            style={{
                height: "70vh",
                backgroundImage: `url(${bgimage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div>
                <div
                    className="row justify-content-center g-0"
                    style={{ paddingTop: "200px", zIndex: 1 }}
                >
                    <DropDown val="From" cityList={cityList} selectedCity={fromCity} />
                    <DropDown val="To" cityList={cityList} selectedCity={toCity} />
                    <Calender selectedDate={setSelectedDate} />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Link
                    to="./AvailableBus"
                    className="btn btn-warning justify-content-center rounded fw-bold text-white mt-1"
                    onClick={handleClickFilterData}
                >
                    Search
                </Link>
            </div>
        </div>
    );
};

export default Selector;
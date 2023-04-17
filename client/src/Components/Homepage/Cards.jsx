import React from "react";
import bus from "../../assets/bus.jpg";
import happy from "../../assets/happy.jpg";
import ticket from "../../assets/ticket.jpg";

const Cards = () => {
  const cardData = [
    { id: 1, title: "2000+", value: "Bus Collection", img: bus },
    { id: 2, title: "20Million", value: "Happy Customers", img: happy },
    { id: 3, title: "5000+", value: "Ticket Book Everyday", img: ticket },
  ];
  return (
    <div className="container-fluid">
      <div
        class="flex flex-row items-center justify-center space-x-6 flex-wrap"
        style={{ height: "390px" }}
      >
        {cardData.map((item) => {
          return (
            <div class="card shadow px-3" style={{ width: "13rem" }}>
              <img
                src={item.img}
                class="card-img-top"
                alt="..."
                style={{ height: "100px" }}
              />
              <div class="lg:w-full sm:w-1/2 md:w-1/3 sm:p-4 md:p-4">
                <h6 class="card-title text-center">{item.title}</h6>
                <small className="text-center d-block">{item.value}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

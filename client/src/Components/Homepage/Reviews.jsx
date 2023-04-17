import React from "react";

const Reviews = () => {
    const reviewData = [
        { id: 1, name: "Srihari Nag", year: 2020 },
        { id: 1, name: "Suneeta Singh", year: 2019 },
        { id: 1, name: "Suraj Kumar", year: 2018 },
    ];
    return (
        <div className="container-fluid my-5 ">
            <div
                class="d-flex flex-md-row flex-sm-column justify-content-center align-items-center gap-2"
                style={{ backgroundColor: "#EBEDEF" }}
            >
                {reviewData.map((item) => {
                    return (
                        <div class="card p-3 my-4" style={{ width: "250px" }}>
                            <div className="d-flex ">
                                <div
                                    className="px-4 text-bg-danger rounded-circle"
                                    style={{ fontSize: "55px" }}
                                >
                                    v
                                </div>
                                <div className="d-flex flex-column mx-3">
                                    <small className=" fw-bold mt-3">{item.name}</small>
                                    <small
                                        className="text-muted fw-bold"
                                        style={{ fontSize: "11px" }}
                                    >
                                        Customer since {item.year}
                                    </small>
                                </div>
                            </div>
                            <small className="bg-success text-light text-center rounded w-25 my-2">
                                <i class="fa-regular fa-star" style={{ fontSize: "11px" }}>
                                    4.5
                                </i>
                            </small>
                            <small
                                className="text-muted fw-bold"
                                style={{ fontSize: "12px" }}
                            >
                                Awesome travel experience with reserve. Excelent staff
                            </small>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Reviews;

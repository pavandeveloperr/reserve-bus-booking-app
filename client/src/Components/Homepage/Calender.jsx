import React, { useState } from "react";
import Calendar from "moedim";

const Calender = ({ selectedDate }) => {
    const [drop, setDrop] = useState(false);
    const [value, setValue] = useState(new Date());

    function handleDate(d) {
        setValue(d)
        selectedDate(d)
    }

    return (
        <div className="col-md-3 col-sm-12">
            <div className="my-1">
                <div
                    class="d-flex flex-column my-2 bg-light p-2 border border-3 rounded"
                    style={{ height: "80px" }}
                    onClick={() => setDrop(!drop)}
                >
                    <div className="d-flex">
                        <small class="text-muted flex-grow-1">Travel Date</small>
                        <div>
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>
                    </div>
                    <div class="fw-bold fs-6">
                        {value.toLocaleString("default", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </div>
                </div>
                {drop && (
                    <div className="bg-light rounded">
                        <Calendar
                            className="w-100"
                            value={value}
                            onChange={(d) => handleDate(d)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calender;

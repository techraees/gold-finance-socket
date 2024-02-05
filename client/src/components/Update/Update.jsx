import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    // Add your search logic here
    setSearched(true); // Set searched to true to keep displaying the selected dates
  };

  return (
    <div className="container">
      <div className="update-cover">
        <div className="col-md-12">
          <div className="header">
            <div className="title-wth title-name">
              <div className="liverate-cover">
                <div className="liverate-title">
                  <h4>UPDATES</h4>
                </div>
                <div className="mn-title-border">
                  <div className="date-picker">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="Start Date"
                      className="custom-date-picker" // Apply custom class for styling overrides
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      placeholderText="End Date"
                      className="custom-date-picker" // Apply custom class for styling overrides
                    />
                    <input
                      type="button"
                      onClick={handleSearch}
                      style={{ cursor: "pointer" }}
                      value="Search"
                    />
                  </div>
                  {searched && (
                    <div>
                      {/* Display selected dates */}
                      {startDate && (
                        <p>Start Date: {startDate.toLocaleDateString()}</p>
                      )}
                      {endDate && (
                        <p>End Date: {endDate.toLocaleDateString()}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12" id="divNews">
            <h1> No update Found </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateComponent;

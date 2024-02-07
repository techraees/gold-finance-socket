import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Container } from "react-bootstrap"; // Import Container from react-bootstrap
// Import CSS file for styling

const EconomicCalendar = () => {
  const { backgroundColor } = useContext(ThemeContext);

  const events = [
    {
      id: 1,
      time: "08:00",
      currency: "USD",
      event: "Non-Farm Payrolls",
      actual: "200K",
      forecast: "180K",
      previous: "220K",
    },
    {
      id: 2,
      time: "10:00",
      currency: "EUR",
      event: "Eurozone CPI",
      actual: "1.5%",
      forecast: "1.7%",
      previous: "1.9%",
    },
    // Add more events as needed
  ];

  return (
    <div className="economic-calendar-container flex-column justify-content-center  ">
      <Container>
        {" "}
        {/* Use Bootstrap's Container */}
        <div id="calendarContainer" className="widget-economic-calendar">
          <div className="header" style={{ color: backgroundColor }}>
            <h2 style={{ color: backgroundColor, textAlign: "center" }}>
              Economic Calendar
            </h2>
          </div>
          <div className="table" id="content">
            <div className="title current-day">Events</div>
            <table
              className="economic-calendar__table"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Currency</th>
                  <th>Event</th>
                  <th>Actual</th>
                  <th>Forecast</th>
                  <th>Previous</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.time}</td>
                    <td>{event.currency}</td>
                    <td>{event.event}</td>
                    <td>{event.actual}</td>
                    <td>{event.forecast}</td>
                    <td>{event.previous}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="footer" id="footer">
            {/* Footer content */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EconomicCalendar;

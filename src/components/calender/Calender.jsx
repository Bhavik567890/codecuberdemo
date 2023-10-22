import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomModal from "../model/CustomModel";

const localizer = momentLocalizer(moment);

const WeeklyCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  const minTime = new Date(2023, 10, 30, 8, 0);
  const maxTime = new Date(2023, 10, 30, 22, 0);

  // Sample events
  const sampleEvents = [
    {
      title: "Event 1",
      percentage: "50%",
      start: new Date(2023, 10, 30, 9, 0),
      end: new Date(2023, 10, 30, 16, 0),
    },
  ];

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const filteredEvents = sampleEvents
      .filter((event) => {
        return event.start >= minTime && event.end <= maxTime;
      })
      .map((event) => {
        if (event.start < minTime) {
          event.start = minTime;
        }
        if (event.end > maxTime) {
          event.end = maxTime;
        }
        return event;
      });

    setEvents(filteredEvents);
  }, []);

  useEffect(() => {
    const today = moment().startOf("day");
    const todayEvents = [
      {
        title: "Today's Event",
        percentage: "50%",
        start: moment(today).add(8, "hours").toDate(),
        end: moment(today).add(15, "hours").toDate(),
      },
    ];

    setEvents((prevEvents) => [...prevEvents, ...todayEvents]);
  }, []);

  return (
    <div className="container mx-auto h-full relative bg-white border border-gray-200 p-2 shadow">
      <span className="text-gray-500 text-sm p-4">Custom hours</span>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        views={["week"]}
        step={60}
        timeslots={1}
        eventPropGetter={(event, start, end, isSelected) => {

          var backgroundColor = "#0000ff";
          var style = {
            backgroundColor: backgroundColor,
            borderRadius: "0px",
            opacity: 0.8,
            color: "black",
            border: "0px",
            display: "block",
          };
          return {
            style: style,
          };
        }}
        min={minTime}
        max={maxTime}
        dayLayoutAlgorithm="no-overlap"
        components={{
          week: {
            event: (props) => (
              <EventComponent {...props} handleOpenModal={handleOpenModal} />
            ),
            header: ({ date, localizer }) => localizer.format(date, "dddd"),
          },
          toolbar: () => null,
        }}
        formats={{
          eventTimeRangeFormat: () => null,
        }}
        style={{ border: "none" }}
      />
      {isModalOpen && (
        <CustomModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
        />
      )}
    </div>
  );
};

const EventComponent = ({ event, handleOpenModal }) => {
  return (
    <>
      <div
        className="event-content bg-blue-400 rounded text-white p-2"
        onClick={() => handleOpenModal(event)}
      >
        <strong className="rounded-lg bg-gray-400 px-2">
          {event.percentage}
        </strong>
        <p className="text-sm">
          {moment(event.start).format("h:mm A")} -{" "}
          {moment(event.end).format("h:mm A")}
        </p>
      </div>
    </>
  );
};

export default WeeklyCalendar;

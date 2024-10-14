import { useRouter } from "next/router";
import { useState } from "react";

const EventList = ({ eventList }) => {
  const [filteredEvents, setFilterdEvents] = useState(eventList);
  const router = useRouter();

  const fetchFilteredEvents = async (e, category) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:4000/events?category=${category}`
    );
    const data = await response.json();
    setFilterdEvents(data);
    router.push(`/events?category=${category}`, undefined, { shallow: true });
  };

  const handelReset = (e) => {
    e.preventDefault();
    setFilterdEvents(eventList);
  };
  return (
    <>
      <h1 className="text-3xl mt-10">
        <u>Event List</u>
      </h1>

      <br />
      {filteredEvents.map((event) => (
        <div key={event.id}>
          <p>
            {event.id} :- {event.title}
            <br />
            <button onClick={(e) => fetchFilteredEvents(e, event.category)}>
              {event.category}
            </button>
          </p>
          <hr />
          <br />
        </div>
      ))}

      <br />
      <br />
      {filteredEvents !== eventList ? (
        <button onClick={handelReset}>All</button>
      ) : (
        ""
      )}
    </>
  );
};

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category=${category}` : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}

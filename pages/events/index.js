import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1 className="font-bold text-[1.6rem] ml-44 mb-4">Available events :</h1>
      <div className=" flex flex-col gap-12">
        {data.map((event) => (
          <Link
            href={`/events/${event.id}`}
            key={event.id}
            className="flex gap-6 rounded-xl p-6 transition ease-in-out delay-150 hover:shadow-md  hover:scale-105 duration-300 w-[80%] m-auto"
          >
            <img
              src={event.image}
              width={250}
              className="mb-8 object-cover h-56 w-96 rounded-md"
            />
            <h1 className="font-bold text-[1.6rem]">{event.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}

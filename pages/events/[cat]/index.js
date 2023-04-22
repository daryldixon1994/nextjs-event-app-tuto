import Link from "next/link";

const EventsCatPage = ({ data, id }) => {
  return (
    <div className="p-8">
      <h1 className="text-[1.45rem] font-bold mb-8">
        Events in <span style={{ textTransform: "capitalize" }}>{id}</span>
      </h1>

      <div className="">
        {data.map((event) => (
          <Link
            key={event.id}
            href={`/events/${id}/${event.id}`}
            className="flex gap-6 mb-8 p-4 transition ease-in-out hover:border-b-2 hover:border-b-[#94a3b8]"
          >
            <img src={event.image} className="h-96 w-[30rem] object-cover" />
            <h1 className="text-[1.3rem] font-medium ">{event.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  console.log("context", context);
  let id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((event) => event.city === id);
  return {
    props: {
      data,
      id,
    },
  };
}

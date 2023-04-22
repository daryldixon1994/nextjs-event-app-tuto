import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => {
  return (
    <main className="px-16 py-12 ">
      <div className=" flex flex-col gap-12">
        {data?.map((event, i) => (
          <Link
            key={i}
            href={`/events/${event.id}`}
            className="flex gap-6 rounded-xl p-6 transition ease-in-out delay-150 hover:shadow-md  hover:scale-105 duration-300 w-[80%] m-auto"
          >
            <img
              alt={event.title}
              src={event.image}
              className="mb-8 object-cover h-56 w-96 rounded-md"
            />
            <div>
              <h1 className="font-bold text-[1.6rem]">{event.title}</h1>
              <p className="">{event.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default HomePage;

import { useRouter } from "next/router";
import { useRef, useState } from "react";
const SingleEventPage = ({ data }) => {
  let ref = useRef();
  // const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = ref.current.value;
    const eventId = router?.query.id;
    // setEmail(ref.current.value);
    try {
      const response = await fetch("/api/email-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log(data);
      //post request
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-8">
      <h1 className="text-[1.75rem] font-bold mb-8 "> {data.title} </h1>
      <div className="lg:flex lg:gap-4 lg:items-start">
        <img src={data.image} className="w-[694px] rounded-xl" />
        <div>
          <h3 className="capitalize text-[1.45rem] font-medium">{data.city}</h3>
          <p className="text-[1.25rem]"> {data.description} </p>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            action=""
          >
            <label htmlFor="">Get register for this event</label>
            <div className="flex gap-4">
              <input
                type="email"
                id="email"
                placeholder="insert your email here"
                autoFocus
                className="px-2 py-1 border-2 border-[#cbd5e1] rounded-md"
                ref={ref}
              />
              <button
                type="submit"
                className="text-[white] bg-[#020617] rounded-md px-4 py-1"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SingleEventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((ev) => {
    return {
      params: {
        id: ev.id.toString(),
        cat: ev.city.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let id = context?.params.id;
  const { allEvents } = await import("/data/data.json");
  let data = allEvents.find((event) => event.id === id);

  return {
    props: {
      data,
    },
  };
}

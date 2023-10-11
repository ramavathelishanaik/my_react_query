// import axios from "axios";
// import { useQuery } from "react-query";
import { useState } from "react";
import { useHomeData } from "../queryies";

const Home = () => {
  // const [polling, setPolling] = useState(false);
  const [refetchInterval, setRefetchInterval] = useState(2000);

  const { isLoading, data, isError, error } = useHomeData(
    refetchInterval,
    setRefetchInterval
  );

  console.log(data, "selected data");

  // const {
  //   isLoading,
  //   data,
  //   isError,
  //   error,
  //   refetch,
  //   isSuccess,
  //   isFetching,
  //   status,
  //   fetchStatus,
  // } = useQuery({
  //   queryKey: ["home"],
  //   queryFn: async () => {
  //     const response = await axios.get("http://localhost:4000/homepage");
  //     console.log(response);
  //     return response.data;
  //   },
  //   cacheTime: 60000,
  //   staleTime: 30000,
  //   refetchOnMount: true,
  //   refetchOnWindowFocus: true,
  //   refetchInterval: refetchInterval,
  //   refetchIntervalInBackground: true,
  //   enabled: false,
  //   onSuccess: (data) => {
  //     if (data.length === 3) {
  //       setRefetchInterval(0);
  //     }
  //     console.log("home page data is fetched successfully", data);
  //   },
  //   onError: (error) => {
  //     console.log("something went wrong while polling the data", error);
  //   },
  // });

  // console.log(isLoading, isFetching);

  // console.log(error, "error");
  // console.log(fetchStatus, "fetchstatus");

  // console.log(status, "status");

  // if (isFetching) {
  //   console.log("fetching...", isFetching);
  // }

  if (isLoading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>{error.message}</h2>
      </div>
    );
  }

  // if (isSuccess) {
  //   console.log("home data is fetched...", isSuccess);
  // }

  return (
    <div className="bg-blue-100 min-h-screen">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
          <p className="mt-2">Discover Amazing Things Here</p>
          <button className="mt-2 bg-gray-100 p-2 text-blue-500">
            Fetch HomePage Data
          </button>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {data?.map((eachItem) => {
            return (
              <div
                className="bg-white p-6 rounded-lg shadow-md"
                key={eachItem.id}
              >
                <h2 className="text-xl font-semibold">{eachItem.title}</h2>
                <h6 className="mt-2 font-medium text-blue-400">
                  {eachItem.subtitle}
                </h6>
                <p className="mt-1">{eachItem.description}</p>
              </div>
            );
          })} */}

          {data?.map((eachHeading) => {
            return (
              <div key={eachHeading}>
                <h2 className="text-xl font-semibold">{eachHeading}</h2>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};
export default Home;

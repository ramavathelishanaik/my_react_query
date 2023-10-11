import { useParams } from "react-router-dom";
import { useSuperherodetails } from "../queryies";

const SuperHeordetailspage = () => {
  const { heroId } = useParams();
  const { data, isLoading } = useSuperherodetails(heroId);
  console.log(isLoading, "loading");

  console.log(data, "data");

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <p>
        Instead of showing loading text in for each request for details page, we
        are <br /> using the data which is fetched in superheros page
      </p>
      <p className="mt-6">sueprhero details page {heroId}</p>

      <p className="mt-8">
        <p>{data.id}</p>
        <p>{data?.name}</p>
        <p>{data?.alterego}</p>
      </p>
    </div>
  );
};
export default SuperHeordetailspage;

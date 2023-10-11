import { useSuperHeros } from "../queryies";
import { Link } from "react-router-dom";

const Superheros = () => {
  const { data: list_of_superheros, isLoading } = useSuperHeros();

  if (isLoading) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <div>
      <h2>List of Superheros</h2>
      <div>
        {list_of_superheros?.map((each) => {
          return (
            <div key={each.id} className="flex ml-4 gap-x-4 mt-2">
              <Link to={`/initialdata/${each.id}`}>
                <p>{each.name} </p>
              </Link>
              {/* <p>{each.alterego}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Superheros;

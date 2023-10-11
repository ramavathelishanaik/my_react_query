import { useSuperheros, useIndianSuperheros } from "../queryies";

const Parallel = () => {
  const { data: superheroes, isLoading: superherosLoading } = useSuperheros();
  const { data: indiansuperheros, isLoading: indiansuperherosLoading } =
    useIndianSuperheros();

  if (superherosLoading || indiansuperherosLoading) {
    return (
      <div>
        <p> heros loading</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="">Parallel Quries</h1>
      <div className="flex justify-between w-full mt-10">
        <div>
          <p>superheros</p>
          {superheroes?.map((each) => {
            return (
              <div key={each.id}>
                <h2>{each.name}</h2>
                {/* <h6>{each.alterego}</h6> */}
              </div>
            );
          })}
        </div>
        <div>
          <p>indiansuperheroes</p>
          {indiansuperheros?.map((each) => {
            return (
              <div key={each.id}>
                <h2>{each.name}</h2>
                {/* <h6>{each.alterego}</h6> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Parallel;

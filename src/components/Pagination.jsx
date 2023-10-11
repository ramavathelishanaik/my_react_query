import { useColors } from "../queryies";
import { useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);
  console.log(page, "pagenumber");
  const { data, isLoading } = useColors(page);

  if (isLoading) {
    return (
      <div>
        <p>lOading...</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <p>Pagination</p>
      <div className="mt-2">
        {data?.map((eachColor) => {
          return (
            <div key={eachColor.id} className="flex gap-x-4">
              <p>{eachColor.name}</p>
              <p>{eachColor.hex}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-x-4">
        <button
          className="bg-gray-400 p-2"
          onClick={() => setPage((pre) => pre - 1)}
          disabled={page === 1}
        >
          pre
        </button>
        <button
          className="bg-gray-400 p-2"
          onClick={() => setPage((pre) => pre + 1)}
          disabled={page === 5}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default Pagination;

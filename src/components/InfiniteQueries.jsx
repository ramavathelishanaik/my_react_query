import { useInfinite } from "../queryies";
import { Fragment } from "react";

const InfiniteQueries = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfinite();
  //   console.log(data);

  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }
  return (
    <div className="p-6">
      <p>InfiniteQueries</p>
      <div className="mt-2">
        {data?.pages?.map((group, i) => {
          //   console.log(group, "group");
          return (
            <Fragment key={i}>
              {group?.map((color) => {
                // console.log("color:", color);
                return <h2 key={color.id}>{color.name}</h2>;
              })}
            </Fragment>
          );
        })}
      </div>
      <div>
        <button
          className="bg-gray-400 p-3 mt-4"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};
export default InfiniteQueries;

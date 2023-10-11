import {
  useQuery,
  useQueries,
  useQueryClient,
  useInfiniteQuery,
  useMutation,
} from "react-query";
import axios from "axios";

export const useHomeData = () => {
  const {
    isLoading,
    data,
    isError,
    error,
    // refetch,
    // isSuccess,
    // isFetching,
    // status,
    // fetchStatus,
  } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/homepage");
      // console.log(response);
      return response.data;
    },
    // cacheTime: 60000,
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true, //the remote data is in sync with ui
    // refetchInterval: refetchInterval,
    // refetchIntervalInBackground: true,
    // enabled: false,
    // onSuccess: (data) => {
    //   if (data.length === 3) {
    //     setRefetchInterval(0);
    //   }
    //   console.log("home page data is fetched successfully", data);
    // },
    // onError: (error) => {
    //   console.log("something went wrong while polling the data", error);
    // },
    select: (data) => {
      const headings = data?.map((each) => each.title);
      return headings;
    },
  });

  return { isLoading, data, isError, error };
};

export const useProductsData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/products");
      return response.data;
    },
  });
  return { data, isLoading };
};

export const useSingleProductDetails = (productId) => {
  const { data, isLoading } = useQuery({
    queryKey: ["each", productId],
    queryFn: async ({ queryKey }) => {
      const response = await axios.get(
        `http://localhost:4000/products/${queryKey[1]}`
        // or we can directly add the productId at the end of url
      );
      return response.data;
    },
  });
  return { data, isLoading };
};

export const useSuperheros = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["superheros"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/superheroes");
      return response.data;
    },
  });
  return { data, isLoading };
};

export const useIndianSuperheros = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["indiansuperheros"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:4000/indiansuperheroes"
      );
      return response.data;
    },
  });
  return { data, isLoading };
};

export const useCountries = (randomNumbers) => {
  // console.log(randomNumbers);
  const randomqueryResult = useQueries(
    randomNumbers.map((each) => ({
      queryKey: ["country", each],
      queryFn: async ({ queryKey }) => {
        const response = await axios.get(
          `http://localhost:4000/countries/${queryKey[1]}`
        );
        return response.data;
      },
    }))
  );
  return randomqueryResult;
};

export const useDependent = (email) => {
  const { data } = useQuery({
    queryKey: ["dependent", email],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:4000/users?email=${email}`
      );
      return response.data;
    },
  });
  return { data };
};

export const usePlaylist = (channelId) => {
  const { data } = useQuery({
    queryKey: ["playlist", channelId],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:4000/channels?id=${channelId}`
      );
      return response.data;
    },
    enabled: !!channelId,
  });

  return { data };
};

export const useSuperHeros = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["list_of_superheros"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:4000/superheroes`);
      return response.data;
    },
  });
  return { data, isLoading };
};

export const useSuperherodetails = (heroId) => {
  const queryclient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["superherodetails", heroId],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:4000/superheroes/${heroId}`
      );
      return response.data;
    },
    initialData: () => {
      const hero = queryclient
        .getQueryData("list_of_superheros")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
  return { data, isLoading };
};

export const useColors = (pageNumber) => {
  const { data, isLoading } = useQuery({
    queryKey: ["colours", pageNumber],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:4000/colors?_limit=2&_page=${pageNumber}`
      );
      return response.data;
    },
    enabled: pageNumber != undefined,
    keepPreviousData: true,
  });
  return { data, isLoading };
};

export const useInfinite = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["colors"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get(
        `http://localhost:4000/colors?_limit=2&_page=${pageParam}`
      );
      return response.data;
    },
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  return {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
};

export const useGetFriends = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["friends"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/friends");
      return response.data;
    },
  });
  return { data, isLoading, refetch };
};

export const useAddFriend = () => {
  const queryClient = useQueryClient();
  const {
    mutate: createFriend,
    data,
    isLoading,
  } = useMutation({
    mutationFn: async (name) => {
      const response = await axios.post("http://localhost:4000/friends", {
        name: name,
      });
      return response;
    },
    onSuccess: (response) => {
      console.log(response);
      console.log(response.data);
      const newData = response?.data;

      const oldData = queryClient.getQueryData("friends");
      console.log(oldData);

      // Ensure that the data is an array and add the new item
      const updatedData = Array.isArray(oldData)
        ? [...oldData, newData]
        : [newData];

      // Update the query data with the new array
      queryClient.setQueryData("friends", updatedData);
    },
  });
  return { createFriend, data, isLoading };
};

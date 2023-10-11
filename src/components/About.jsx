import { useState } from "react";
import { useGetFriends } from "../queryies";
import { useAddFriend } from "../queryies";
const About = () => {
  const [name, setName] = useState("");
  const { data, isLoading, refetch } = useGetFriends();
  console.log(data);
  const { createFriend, data: postData, isLoading: postLoad } = useAddFriend();

  console.log(postData, "postdata");
  console.log(postLoad, "postload");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") return;
    createFriend(name);
    console.log(name);
    setName("");
  };

  if (isLoading) {
    return (
      <div>
        <p>Loaing...</p>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-4xl font-bold">Post Request</h1>
        </div>
      </header>
      <form onSubmit={handleSubmit} className="ml-20 mt-10">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-200"
        />
        <div>
          <button className="ml-10">Add</button>
          <button className="ml-10" onClick={refetch}>
            get friends
          </button>
        </div>
      </form>
      <div className="mt-4 ml-10">
        {Array.isArray(data) ? (
          data.map((each) => (
            <div key={each.id}>
              <p>{each.name}</p>
            </div>
          ))
        ) : (
          // Handle the case where data is not an array, e.g., show a loading message or handle the error
          <p>Data is not available or is not an array.</p>
        )}
      </div>
    </div>
  );
};
export default About;

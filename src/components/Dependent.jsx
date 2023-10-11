import { useDependent, usePlaylist } from "../queryies";

const Dependent = ({ email }) => {
  //first query
  const { data: userData } = useDependent(email);
  const channel = userData && userData[0]?.channelId;

  //second query
  const { data: playlist } = usePlaylist(channel);
  const list_of_topics = playlist && playlist[0]?.playlist;

  return (
    <div>
      <div>
        <p>first we have email form the parent component as props</p>
        <p>ex: ramavath2gmail.com</p>
        <p className="mt-2">
          {" "}
          now with the help of email we are finding the user, and from the user
          object we get, we are <br /> finding the channelId
        </p>
      </div>
      <div className="mt-4">
        <p>
          after finding the channelId, we make a get request to find list of
          topics
        </p>
      </div>

      <div className="mt-6">
        {email}
        {channel ?? "channel id we get form the first get request"}
        {list_of_topics?.map((each) => {
          return (
            <div key={each}>
              <p>{each}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Dependent.propTypes = {
//   email: PropTypes.string.isRequired, // Validate that 'email' is a required string prop
// };

export default Dependent;

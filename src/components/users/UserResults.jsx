import React from "react";
import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItems from "./UserItems";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  /* const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); */

  const {users,loading}=useContext(GithubContext)

  

  /* const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setTimeout(()=>{
      setLoading(false);
    },2000)
  }; */

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 bg-base-100 text-gray-200">
        {users.map((user) => (
          <UserItems key={user.id} user={user}/>
        ))}
      </div>
    );
  }else{
     return <Spinner />
  }
}

export default UserResults;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItems({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md border-b compact side bg-neutral bg-opacity-40">
      <div className="flex-row items-center space-x-4 card-body ">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14 ">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link className="text-white text-opacity-40" to={`/user/${login}`}>Visit Profile</Link>
        </div>
      </div>
    </div>
  );
}

UserItems.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItems;

import React from "react";
import PropTypes from "prop-types";
import RepoItems from "./RepoItems";

function RepoList({ repos }) {
  return <div className="rounded-lg shadow-lg card bg-neutral bg-opacity-40">
      <div className="card-body">
          <h2 className="text-3xl my-4 font-bold card-title text-gray-200">
              Latest Repositories
              </h2>
              {repos.map((repo)=>(
                  <RepoItems key={repo.id} repo={repo} />
              ))}
          </div>
      </div>;
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;

import { FaEye, FaInfo, FaLink, FaUtensils, FaStar } from "react-icons/fa";
import React from "react";
import PropTypes from "prop-types";

function RepoItems({repo}) {

    const{
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    }=repo

  return <div className="mb-2 rounded-md card bg-neutral bg-opacity-70 hover:bg-opacity-100 ">
      <div className="card-body ">
        <h3 className="mb-2 text-xl font-semibold text-gray-400">
            <a href={html_url}>
            <FaLink className="inline mr-1"/> {name}
            </a>
        </h3>
        <p className="mb-3 text-gray-500">
            {description}
        </p>
        <div>
            <div className="mr-2 badge badge-info badge-lg">
                <FaEye className="mr-2" />{watchers_count}
            </div>
            <div className="mr-2 badge badge-success badge-lg">
                <FaStar className="mr-2" />{stargazers_count}
            </div>
            <div className="mr-2 badge badge-error badge-lg">
                <FaInfo className="mr-2" />{open_issues}
            </div>
            <div className="mr-2 badge badge-warning badge-lg">
                <FaUtensils className="mr-2" />{forks}
            </div>
        </div>
      </div>

  </div>;
}

RepoItems.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItems;

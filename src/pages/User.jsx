import {
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
  FaCode,
} from "react-icons/fa";
import React from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import GithubContext from "../context/github/GithubContext";
import RepoList from "../components/repos/RepoList";
import {getUserAndRepos} from '../context/github/GithubActions'

function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({type:'SET_LOADING'})
    const getUserData=async()=>{
      const userData=await getUserAndRepos(params.login)
      dispatch({type:'GET_USER_AND_REPOS',payload:userData})
    }

    getUserData()
  }, [dispatch,params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost text-white">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-auto xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8 sm:">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0 text-white">{name}</h2>
                <p className=" text-white">{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title text-white">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p className=" text-white">{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline text-white hover:bg-white"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg bg-base-100 stats">
            <div className="grid grid-cols-auto md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-7">
              {location && (
                <div className="stat shadow-md text-gray-600 bg-neutral bg-opacity-40 xl:col-span-2 lg:col-span-2 md:col-span-2">
                  <div className="stat-title text-md text-gray-200">
                    Location
                  </div>
                  <div className="text-lg stat-value text-gray-200">
                    {location}
                  </div>
                </div>
              )}
              {blog && (
                <div className="stat shadow-md text-gray-600 bg-neutral bg-opacity-40 xl:col-span-3 lg:col-span-3 md:col-span-3">
                  <div className="stat-title text-md text-gray-200">
                    Website
                  </div>
                  <div className="text-sm stat-value text-gray-200">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat shadow-md text-gray-600 bg-neutral bg-opacity-40 xl:col-span-2 lg:col-span-2 md:col-span-2">
                  <div className="stat-title text-md text-gray-200">
                    Twitter
                  </div>
                  <div className="text-sm stat-value text-gray-200">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow md bg-neutral bg-opacity-40 stats stats-vertical lg:stats-horizontal">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <div className="stat text-gray-600 bg-neutral bg-opacity-40">
            <div className="stat-figure text-info">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 text-gray-200">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-gray-200">
              {followers}
            </div>
          </div>
          <div className="stat text-gray-600 bg-neutral bg-opacity-40">
            <div className="stat-figure text-info">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 text-gray-200">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-gray-200">
              {following}
            </div>
          </div>
          <div className="stat text-gray-600 bg-neutral bg-opacity-40">
            <div className="stat-figure text-info">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 text-gray-200">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-gray-200">
              {public_repos}
            </div>
          </div>
          <div className="stat text-gray-600 bg-neutral bg-opacity-40">
            <div className="stat-figure text-info">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 text-gray-200">Public Gits</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl text-gray-200">
              {public_gists}
            </div>
          </div>
        </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default User;

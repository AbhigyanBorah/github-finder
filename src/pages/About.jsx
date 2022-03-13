import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4 text-gray-400">Github Finder</h1>
      <p className="mb-4 text-2xl font-light text-gray-400">
        A react app to search GitHub profiles and see profile details. I have
        created this app by the help of{" "}
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          React Front To Back
        </a>{" "}
        Course by <strong>Brad Traversy</strong>.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Hassib Moddasser
        </a>
      </p>
    </div>
  );
}

export default About;

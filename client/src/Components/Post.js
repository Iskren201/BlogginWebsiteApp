import React from "react";

const Post = () => {
  return (
    <>
      <div className="post">
        <div className="image">
          <img
            src="https://plus.unsplash.com/premium_photo-1664374288390-8a02d5614a8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHcxNUhmUW95elhVfHxlbnwwfHx8fHw%3D"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Cristmas Lorem ipsum dolor sit amet.</h2>
          <p className="info">
            <a href="" className="author">
              Iskren Iliev
            </a>
            <time>12/4/2023 10:32</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            eos?
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;

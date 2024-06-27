import React from "react";
import { Link } from "react-router-dom";

function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold"> Hello again</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">
              Explore More by connecting to codegreez
            </span>
          </div>
          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src="" alt="avatar" />
            </div>

            <div classNanme="textbox ">
              <input type="text" placeholder="Username" />
              <button type="submit">Let's Go</button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a member yet!?
                <Link className="text-red-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Username;

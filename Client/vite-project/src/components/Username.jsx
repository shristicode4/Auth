import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import style from "../style/Username.module.css";

function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={style.backgrnd}>
          <div className="title flex flex-col items-center">
            <h3 className="text-5xl font-bold"> Welcome</h3>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">
              Explore More by connecting to codegreez
            </span>
          </div>
          <form className="py-1">
            <div className="profile flex justify-center items-center py-4 border-1 border-gray-100 w-[390px] h-[150px] rounded-full shadow-lg cursor-pointer hover:border-gray-200 ">
              <img
                src={avatar}
                alt="avatar"
                className="w-24 h-24 object-cover rounded-full"
              />
            </div>

            <div className=" textbox flex flex-col items-center border-0 px-5 py-3 rounded-xl w-3/4 shadow-sm text-lg w-full focus:otline-none ">
              <input type="text" placeholder="Username" />
              <button className={style.btn} type="submit">
                Let's Go
              </button>
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

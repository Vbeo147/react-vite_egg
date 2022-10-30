import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../counterStore";
import "../css/egg.css";
import "animate.css";

function Count() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="egg_container">
        <button
          onClick={() => {
            dispatch(decrement());
            const element = document.getElementById("egg");
            element.classList.add(
              "animate__animated",
              "animate__headShake",
              "animate__fast"
            );
            element.addEventListener("animationend", () => {
              element.classList.remove(...element.classList);
            });
          }}
        >
          <img
            id="egg"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDw8PDQ8ODg8QDQ0OEBAPEA8ODQ0QFREWFhURExMYHSggGBolGxMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0dHx0tKzAtLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0rLS0tLS0tLS0rLS0rNy0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCAwQGB//EADEQAQABAgMFCAECBwAAAAAAAAABAgMEESEFEjFRYSIyQXGBkbHBckKhE1KCstHh8P/EABkBAQADAQEAAAAAAAAAAAAAAAABBAUDAv/EACQRAQACAQUAAQUBAQAAAAAAAAABAgMEERIhMUEiQlFhcTIT/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJlEzEDVOJtxxrp94eP8ArT8vcY7z8FOJtzwrp94P+tJ+Scdo9htze94eOxIkAAAAAAAAAAAAAAAAAAAAAETKNxX4raMRpb16+HoqZdTEdVWcen37srrl2uvvVTPx7KVslrdzK5Wla+QweXsBnbvV0d2qY+J9HuuS0eS52x1mO4WOF2jE6V6Tz8J/wu4tVFurKmTTzXuqwiVtWSAAAAAAAAAAAAAAAAAAACKqoiM54QiZ2jeSI36U2Nxk3Jyp0p/uZubPNuoX8OHj3LkiOUK8V3WOUEIhIkAABDrwWMm32ataf3p/0s4dRNOp8V82Dl3Hq5iqJ1jWGjE7xvCh+kpAAAAAAAAAAAAAAAAAAFRtLFb07lPCOM855M/U5d54wvafFERylqwWF/izr3Y49ejlgw853nx7y5eEbQuaKKaYyiIiOjTikR1EM+bTPamx9uKLkxGkTEVZcs2bqK8btDT25Uczg7gAAAO/ZuK3Z3KuE92eU8lvTZdvplT1GLf6oWubQU0gAAAAAAAAAAAAAAAA5NoYjcp071WkdOqvnycK/wBdcOPlZSs2I3npo77Qv8La3KYp6a9Za2OvGkQzMl+VpltdIc1JtCveuVdMoZeotveWlp67Uczg7gAAAB3HiJXeAxG/Tr3o0nr1amDLzr+2bmx8bOp3cgAAAAAAAAAAAAAAAFDjb38SuZ8I0jyZWa/K38aWKnGv9YWIzrp/KPl4x/6h6yf4l6FsMtoxd+LdMz48IjnLllycKvePHzsoc82TM7zvLUiNo2BIAAAADfgr25XE+E6S7YL8buOanKq9hqs1IAAAAAAAAAAAAAAOXaF3dtzlxnsx6/8AS4Z78af11w15XUkMtppick7zG0w8zG8drGNqad3Xz0XY1cbedqk6Wd/enDfv1XJzq9I8IhUy5bXWaY4pHTXDw6AAAAAAEp+OkLzAXd+iOcaT6NTBflRm5acbS6XZyAAAAAAAAAAAAAAVW17mdVNPKM585Z+rt3suaWvW6vVFwAAAAAAAAAABYbIua1U84zXNJb4U9VXyVqvqYAAAAAAAAAAAAAChxte9cqnrl7afTJzW3vLSwRtSGhydgAAAAAAAAAAG/A1btymec5e7rgtxyQ4543pK9hrM1IAAAAAAAAAAAAIqlE+DzlU5zM85mWNb2Za1eohCHoAAAAAAAAAABNM5TE8piU16tEvNo3iYejpbMMlKQAAAAAAAAAAABhd7tX4z8PNvJTX2HnYY0tYEgAAAAAAAAAAEkeol6O1wjyhs18hkz7LJ6QAAAAAAAAAAAAwvd2r8Z+Hm3kpr7DzsMZrAkAAAAAAAAAAAkj1EvRWu7HlHw2a+QybeyzekAAAAAAAAAAAAIqjOJjoifEw85Pj5saY7aseQhD0AAAAAAAAAAAmIzmI5zEJrHcPNvJejpbMeMlKQAAAAAAAAAAAAkFBjKN25VHXP0nVk5o43mGlhtvSGlydgAAAAAAAAAAG/BUb1ymOuftq7YK73hxzW2pK9hqs1IAAAAAAAAAAAAAKva9rWmv0n6UdXT7lvS3+1XKS6AAAAAAAAAAAsdkWtaq/6Y+13SV9spaq/lVnC8qJAAAAAAAAAAAAAkkacTZi5TNM+nSXPJXlXZ7pbjO6hqpmJmJ0mJ1ZO01mYlpxMT3CEPQAAAAAAAADKimapiI4zOSa1mZ2h5tO0byv8PaiimKY8P3lr46cKxDLvblO7Y9vIAAAAAAAAAAAAAACu2lhc+3TGv6o59VPU4t/qha0+XadpVah4vAAAAAAAAB+kLTZuF3e3VGs8I5RzX9Nh2+qVLPl3+mFjC4qgAAAAAAAAAAAAAAAIyBWY3Afqtx50/cKGfTfNVvFqPiyulUmNvVyJ38EJAAAAAD+I3WWBwPCq56U/cr2DT/dZSzZ/tqsohc2VUpAAAAAAAAAAAAAAAAAAHNicHRc46Tzj7ccmCt3XHltRXXdn3KeHajpx9lO+ltXxarqaz65qqZp70THnGSvNbR7DvF4nxjm87vQITTTM8ImfKJl7isz4ibxHrqtbPuVccqY66z7O9NLa3vThfU1jxY4fB0W+Gs854rlMNKKl8tr+ujJ2c0gAAAAAAAAAAAAAAAAAAAhEwJSImnPijaJGE2KP5afaHmcdZ+HqL2/JFiiOFNPtBGOsfBzt+WcRk9bRHjylIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k="
            alt=""
          />
        </button>
      </div>
      <div className="counter_container">
        <h1 className="animate__animated animate__slideInDown">{count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default Count;

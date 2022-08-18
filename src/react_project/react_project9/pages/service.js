import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import UserCard from "../components/usercard";
import SearchBar from "../components/searchbar";

export default function Service() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);

  var gitHubUrl = `https://api.github.com/users/${username}`;

  const getUserData = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    if (jsonData && jsonData.message !== "Not Found") {
      setUserData(jsonData);
      console.log(jsonData);
    } else if (username !== "") {
      console.log("Username does not exist");
    } else {
      setUserData({});
    }
  };

  useEffect(() => {
    getUserData();
  }, [username]);

  return (
    <div className="content">
      <Banner
        bannerTitle="Service"
        bannerDesc="Ullamco labore fugiat pariatur dolore qui magna ullamco ipsum mollit do voluptate dolore cupidatat. Eiusmod ullamco exercitation adipisicing ipsum. Veniam culpa enim nostrud veniam sint aliqua qui sit proident deserunt culpa duis consequat voluptate."
      />
      <SearchBar username={username} setUsername={setUsername} />
      <UserCard userData={userData} />
    </div>
  );
}

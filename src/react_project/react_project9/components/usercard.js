import React from "react";

export default function UserCard({ userData }) {
  return (
    <div className="datacontainer">
      {userData.avatar_url ? (
        <div className="dataitem">
          <img src={userData.avatar_url} alt="avatar" />
        </div>
      ) : (
        <div></div>
      )}
      {userData.login ? (
        <div className="dataitem">Login: {userData.login}</div>
      ) : (
        <div></div>
      )}
      {userData.name ? (
        <div className="dataitem">Name: {userData.name}</div>
      ) : (
        <div></div>
      )}
      {userData.blog ? (
        <div className="dataitem">Blog: {userData.blog}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

import React from "react";
import Fetcher from "./fetcher";
const url = "https://jsonplaceholder.typicode.com/users";

const CustomApp = () => {
  return (
    <Fetcher url={url}>
      {({ isLoading, err, users }) => {
        if (isLoading) {
          return <div>Loading..</div>;
        }
        if (err) {
          return <div>{err}</div>;
        }
        return (
          <div>
            {users.length > 0 && (
              <ul>
                {users.map((user) => {
                  return (
                    <>
                      <li key={user.id}>
                        <span className="txt_name">{user.name}</span>
                        <button>Remove</button>
                      </li>
                    </>
                  );
                })}
              </ul>
            )}
          </div>
        );
      }}
    </Fetcher>
  );
};

export default CustomApp;

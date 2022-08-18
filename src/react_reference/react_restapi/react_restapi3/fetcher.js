import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Fetcher = ({ url, children }) => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr("sorry something went wrong");
        setIsLoading(false);
      });
  }, [url]);

  return children({ users, err, isloading });
};

export default Fetcher;

import React, { Component, useState, useEffect } from "react";
import Banner from "../components/banner";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

export default function Service() {
  const nav = useNavigate();

  const btnNav = () => {
    nav("/");
  };
  return (
    <div className="inner_content">
      <Banner
        bannerTitle={"Service page"}
        bannerDesc={
          "Ea sint esse consequat Lorem nisi proident fugiat excepteur amet."
        }
      />
      <button onClick={btnNav}>Click to Homepage</button>
      <UserProfiles />
    </div>
  );
}

class UserProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        title: "",
        first: "",
        last: "",
      },
      image: "",
    };
    this.getUser = this.getUser.bind(this);
  }

  componentWillMount() {
    this.getUser();
  }

  getUser() {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Request failed");
      })
      .then((data) => {
        this.setState({
          name: data.results[0].name,
          image: data.results[0].picture.medium,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <h1>{`${this.state.name.title} ${this.state.name.first} ${this.state.name.last}`}</h1>
        <img alt="Profile" src={this.state.image} />
        <button onClick={this.getUser}>Get new User</button>
      </>
    );
  }
}

class CustomChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      err: null,
      isLoading: false,
    };
    this.deleteSearch = this.deleteSearch.bind(this);
  }
  deleteSearch(id) {
    console.log("delete this");
    let newData = this.state.users.filter((item) => item.id !== id);
    this.setState({
      users: newData,
    });
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    let api_url = "https://api.github.com/users";

    fetch(api_url)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server responds with error");
        }
        return res.json();
      })
      .then(
        (users) => {
          this.setState({
            users,
            isLoading: false,
          });
        },
        (err) => {
          this.setState({
            err,
            isLoading: false,
          });
        }
      );
  }

  render() {
    let { users, err, isLoading } = this.state;

    if (err) {
      return <div>{err.message}</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => {
              return (
                <li key={user.id}>
                  {user.login}
                  <button onClick={this.deleteSearch}>X</button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>No user found!</div>
        )}
      </>
    );
  }
}

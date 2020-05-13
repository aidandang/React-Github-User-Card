import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL_USER = "https://api.github.com/users/tetondan";

class UserCard extends Component {
  constructor() {
    super();
    this.state = { 
      user: null
    };
  }

  async componentDidMount() {
    let user = await axios.get(API_URL_USER);
    this.setState({ user: user.data });
  }

  render() {
    const user = {...this.state.user};
    return (
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-3">
              <img className="img-avatar rounded-circle" src={user.avatar_url} weight="120" height="120" alt="avatar" />
            </div>
            <div className="col-9 align-self-end">
              <span className="font-weight-bold">Profile</span>
            </div>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">
                Name:
              </div>
              <div className="col-9 align-self-center">
                {user.name}
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">
                Github Page:
              </div>
              <div className="col-9 align-self-center">
                <a href={user.html_url} className="text-primary">{user.html_url}</a>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">
                Public Repositories:
              </div>
              <div className="col-9 align-self-center">
                <a href={user.repos_url} className="text-primary">{user.public_repos}</a>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">
                Location:
              </div>
              <div className="col-9 align-self-center">
                {user.location}
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">
                Followers:
              </div>
              <div className="col-9 align-self-center">
                <Link to="/followers" className="text-primary">{user.followers}</Link>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">
                Following:
              </div>
              <div className="col-9 align-self-center">
                <a href={user.following_url} className="text-primary">{user.following}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default UserCard;

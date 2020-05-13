import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';

const API_URL_FOLLOWERS = "https://api.github.com/users/tetondan/followers";

class Followers extends Component {
  constructor() {
    super();
    this.state = {
      followers: null
    };
  }

  async componentDidMount() {
    let followers = await axios.get(API_URL_FOLLOWERS);
    this.setState({ followers: followers.data })
  }

  render() {
    const followers = {...this.state.followers};
    const keys = Object.keys(followers);

    return (
      keys.map(key => 
        <div key={uuid()} className="card mt-3">
          <div className="card-header">
            <div className="row">
              <div className="col-3">
                <img className="img-avatar rounded-circle" src={followers[key].avatar_url} weight="120" height="120" alt="avatar" />
              </div>
              <div className="col-9 align-self-center">
                <p><a href={`https://github.com/${followers[key].login}`} className="">https://github.com/{followers[key].login}</a></p>
              </div>
            </div>
          </div>
        </div>
      )
    )
  }
}

export default Followers;

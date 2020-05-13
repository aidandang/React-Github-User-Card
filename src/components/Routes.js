import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Followers from './Followers';
import UserCard from './UserCard';

export default function Routes() {
  return (
    <Switch>
       <Route
        exact
        path='/'
        render={(props) => <UserCard {...props} />}
      />
      <Route
        exact
        path='/followers'
        render={(props) => <Followers {...props} />}
      />
    </Switch>
  )
}
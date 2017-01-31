import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App.jsx';
import HomePage from '../components/home/HomePage';
import StoryCreate from '../components/stories/StoryCreate';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/new-story" component={StoryCreate} />
    </Route>
);

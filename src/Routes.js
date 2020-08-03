import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/main'

import List from './pages/list'
import Order from './pages/order'

import Config from './pages/config'
import Branch_limit from './pages/branch_limit'
import Product_limit from './pages/product_limit'
import Category from './pages/category'
import Stock from './pages/stock_branch'
import Settime from './pages/settime'
import Listorder from "./pages/list_order"

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/order' component={Order} />
        <Route exact path='/list' component={List} />
        <Route exact path='/config' component={Config} />
        <Route exact path='/branch-limit' component={Branch_limit} />
        <Route exact path='/product-limit' component={Product_limit} />
        <Route exact path='/category' component={Category} />
        <Route exact path='/stock' component={Stock} />
        <Route exact path='/time' component={Settime} />
        <Route exact path='/listorder' component={Listorder} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}


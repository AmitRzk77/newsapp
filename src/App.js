import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
       <BrowserRouter>
        <NavBar/>
        
          <Routes>
        
        
        <Route exact path ="/" element ={<News/>}   News key='general' pageSize={this.pageSize} country='in' category='general/'></Route>
        <Route exact path ="/Business" key='Business'   pageSize={this.pageSize} country='in' category='Business/' element={<News  />}></Route>
        <Route exact path ="/Entertainment" element={<News/>} News pageSize={this.pageSize} country='in' category='Entertainment' />
        <Route exact path ="/Health" element ={<News/>} News pageSize={this.pageSize} country='in' category='Health' />
        <Route exact path ="/Science"element ={<News/>} News pageSize={this.pageSize} country='in' category='Science' />
        <Route exact path ="/Sport"element ={<News/>} News pageSize={this.pageSize} country='in' category='Sports' />
        <Route exact path ="/technology"element ={<News/>} News pageSize={this.pageSize} country='in' category='technology' />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

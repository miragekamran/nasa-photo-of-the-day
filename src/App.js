import React from "react";
import "./App.css";
import Card from './components/cardComponents/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



import styled from "styled-components";



function App() {
  return (
    <div className="App">
      <p>
        <Card />
      </p>
    </div>
  );
}

export default App;

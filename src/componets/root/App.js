import React, { Component } from "react";
import { Routes, Route,} from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import Dasboard from "./Dasboard";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Navi/>
        <Routes>
        <Route path="/" element={ <Dasboard/>} />
        <Route path="/product" element={ <Dasboard/>} />
        <Route path="/cart" element={ <CartDetail/>} />

        </Routes>

       
      </Container>
    );
  }
}

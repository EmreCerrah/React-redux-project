import React, { Component } from "react";

import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dasboard from "./Dasboard";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Navi />
        <Dasboard />
      </Container>
    );
  }
}

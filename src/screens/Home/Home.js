import React, { Component } from "react";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
} from "native-base";

import { Image } from "react-native";

import Logo from "../../components/Logo/Logo";
import WhatsappIcon from "../../components/Logo/WhatsappIcon";

import styles from "./styles";

class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header} transparent>
          <Left style={styles.logo}>
            <Logo />
          </Left>
          <Right>
            <Button transparent>
              <WhatsappIcon />
            </Button>
            <Button light style={styles.listButton}>
              <Text>My Lists</Text>
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

export default Home;

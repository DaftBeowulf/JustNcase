import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class LoginButton extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button block success style={{backgroundColor:'#58CF8F'}}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
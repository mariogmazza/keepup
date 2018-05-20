import React, { Component } from "react";
import { connect } from 'react-redux'
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignOutMenu from "../Menus/SignOutMenu";
import SignInMenu from "../Menus/SignInMenu";
import { openModal } from '../../modal/modalActions'
import { logout } from '../../auth/authActions'


const actions ={
  openModal,
  logout
}

const mapState =(state)=>({
  auth:state.auth
})



class NavBar extends Component {
  

  handleSignIn = () => {
   this.props.openModal('LoginModal')
  };

  handleRegister=()=>{
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    const isAuthed = auth.authenticated
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Keep-Up
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          
          {isAuthed && <Menu.Item as={NavLink} to="/people" name="People" />}

          {isAuthed && (
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}
          {isAuthed ? (
            <SignInMenu currentUser={auth.currentUser} signOut={this.handleSignOut} />
          ) : (
            <SignOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(connect(mapState,actions)(NavBar));

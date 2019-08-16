import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { HepperLink } from '../../../components/HepperLink';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    disable: true
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      disable: true
    });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () =>
      this.handleDisableButton()
    );
  };

  handleDisableButton = () => {
    const { firstName, lastName, password, email } = this.state;
    if (firstName.length >= 2) {
      if (lastName.length >= 2) {
        if (password.length >= 3) {
          if (email.length >= 4) {
            this.setState({ disable: false });
          } else {
            this.setState({ disable: true });
          }
        } else {
          this.setState({ disable: true });
        }
      } else {
        this.setState({ disable: true });
      }
    } else {
      this.setState({ disable: true });
    }
  };

  render() {
    const { firstName, lastName, password, disable, email } = this.state;
    return (
      <>
        <FormEl onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value={firstName}
                onChange={this.handleInputChange}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={this.handleInputChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={this.handleInputChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                onChange={this.handleInputChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" color="secondary" />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <SignUpButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={disable}
          >
            Sign Up
          </SignUpButton>
          <Grid container justify="flex-end">
            <Grid item>
              <HepperLink to="/signin">
                Already have an account? Sign in
              </HepperLink>
            </Grid>
          </Grid>
        </FormEl>
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);

const FormEl = styled.form`
  width: 100%;
  margin-top: 12px;
`;

const SignUpButton = styled(Button)`
  margin-top: 24px;
  margin-bottom: 24px;
`;

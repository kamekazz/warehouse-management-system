import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { HepperLink } from '../../components/HepperLink';
import { connect } from 'react-redux';
import { userSignIn } from '../../redux/Auth/user.actions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <HepperLink color="inherit" to="/">
        Your Website
      </HepperLink>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <HepperLink color="inherit" to="/">
        Material-UI.
      </HepperLink>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    transform: 'scale(2)',
    marginBottom: '24px'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignInSide(props) {
  const classes = useStyles();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);

  const handleDisableButton = () => {
    if (email.length >= 4) {
      if (password.length >= 3) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    handleDisableButton();
  }, [email, password]);

  const handleSubmit = event => {
    event.preventDefault();
    const payload = { email, password };
    props.userSignIn(payload);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => setemail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={disable}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <HepperLink to="/registration">Forgot password?</HepperLink>
              </Grid>
              <Grid item>
                <HepperLink to="/signup">
                  "Don't have an account? Sign Up"
                </HepperLink>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = {
  userSignIn
};

export default connect(
  null,
  mapDispatchToProps
)(SignInSide);

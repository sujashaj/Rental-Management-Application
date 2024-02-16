import * as React from 'react';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useRentalContext } from '../context/RentalContext';
import { url } from '../constants';

const SignIn = () => {
  const { state, setState } = useRentalContext();
  const [EmailAddress, setEmailAddress] = useState('');
  const [Password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const defaultTheme = createTheme({});

  const navigate = useNavigate();

  const useAuthVerified = (() => {
    useEffect(() => {
      if (state.isAuthorized) {
        navigate('/dashboard');
      }
    }, [navigate]);
    return state.authVerified;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get('email'),
      password: data.get('password'),
    };

    try {
      const response = await fetch(`${url}/signin`, {
        method: 'POST',
        'credentials': 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log('Login successful!');
        console.log(responseData);

        setState({ type: 'SET_IS_AUTHORIZED', payload: true });
        navigate('/dashboard');
      } else {
        console.error('Login failed.');
        // Clearing the email and password fields
        setEmailAddress('');
        setPassword('');
        // Displaying error message
        setErrorMessage('Incorrect username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error
    }
  };

  return (useAuthVerified() && (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            // px: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main',
          }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={EmailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {errorMessage && (
              <Alert variant="outlined" severity="error" sx={{ mt: 6 }} 
                  onClose={() => {setErrorMessage('')}}>
                {errorMessage}
              </Alert>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  ));
}

export { SignIn };

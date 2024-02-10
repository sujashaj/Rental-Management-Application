import * as React from 'react';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useRentalContext } from '../context/RentalContext';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  typography: {
    fontSize: 8,
  },
});


function SignIn() {

  const { state, setState } = useRentalContext();
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
    const data = new FormData(event.currentTarget);
    const formData = {
        email: data.get('email'),
        password: data.get('password'),
    };
  
    console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
  
    // You can post the data to the desired endpoint here
    try {
        const response = await fetch('http://localhost:5000/signIn', {
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

            setState({ type: 'SET_IS_AUTHORIZED', payload: true});
            navigate('/dashboard');
        } else {
        console.error('Login failed.');
        
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
            marginTop: 4,
            px: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 24, height: 24 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
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
              size='small'
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
              size='small'
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
              sx={{ mt: 2, mb: 2 }}
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
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  ));
}

export { SignIn };
import { Box, Button, TextField, IconButton, InputAdornment, Paper } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Logo from '../Button/Logo';
import { createTheme } from '@mui/material/styles';


const theme = createTheme();


const LoginForm = ({ handleSubmit }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Paper
            elevation={24}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: theme.spacing(6),
                width: '30%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
        >
            <Logo />

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <br />
                <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Button
                    component={Link}
                    to="/register"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 1 }}
                >
                    Register
                </Button>
            </Box>
        </Paper>
    );
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
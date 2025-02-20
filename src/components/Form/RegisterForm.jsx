import { Box, Button, TextField, IconButton, InputAdornment, Paper } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Logo from '../Button/Logo';
import { createTheme } from '@mui/material/styles';


const theme = createTheme();

const RegisterForm = ({ handleSubmit }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
            <Typography component="h1" variant="h5">
                Register
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
                autoComplete="new-password"
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
            <TextField
                margin="normal"
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                autoComplete="new-password"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle confirm password visibility"
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
                Register
            </Button>
            <Button
                component={Link}
                to="/login"
                fullWidth
                variant="outlined"
                sx={{ mt: 1 }}
            >
                Back to Login
            </Button>
        </Box>
        </Paper>
    );
};

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
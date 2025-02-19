import { Box, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const RegisterForm = ({ handleSubmit }) => {
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
            <Typography component="h1" variant="h5">
                Register
            </Typography>
            <br />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
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
    );
};

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
import { Box, Button, TextField, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const RegisterForm = ({ handleSubmit }) => {
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
            
            <IconButton component={Link} to="/login" sx={{ mb: 2 }}>
                <ArrowBack />
            </IconButton>

            <Typography component="h1" variant="h5">
                Register
            </Typography>

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
        </Box>
    );
};

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
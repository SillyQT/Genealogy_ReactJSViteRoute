import { useEffect, useState } from 'react';
import { Container, CssBaseline, Avatar, Typography, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginForm from './LoginForm'; // Import LoginForm

const theme = createTheme();

const AuthLayout = () => {
    const [bgImage, setBgImage] = useState('');

    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const response = await fetch('https://source.unsplash.com/random/800x600');
                setBgImage(response.url);
            } catch (error) {
                console.error('Error fetching random image:', error);
            }
        };

        fetchRandomImage();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper
                    elevation={6}
                    style={{
                        marginTop: theme.spacing(8),
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: theme.spacing(2),
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <LoginForm handleSubmit={handleSubmit} /> {/* Sử dụng LoginForm */}
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default AuthLayout;
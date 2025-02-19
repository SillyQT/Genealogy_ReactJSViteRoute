import { useEffect, useState } from 'react';
import { Container, CssBaseline, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from "react-router-dom";

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

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper
                    elevation={6}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: theme.spacing(2),
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    
                    <Outlet /> {/* Sử dụng Outlet để hiển thị LoginForm hoặc RegisterForm */}
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default AuthLayout;
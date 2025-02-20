import { Container, CssBaseline, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import Logo from '../../component/Button/Logo';

const theme = createTheme();

const AuthLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                maxWidth="xs"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <Paper
                    elevation={24}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: theme.spacing(2),
                    }}
                >
                    <Logo />
                    <Outlet /> {/* Sử dụng Outlet để hiển thị LoginForm hoặc RegisterForm */}
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default AuthLayout;
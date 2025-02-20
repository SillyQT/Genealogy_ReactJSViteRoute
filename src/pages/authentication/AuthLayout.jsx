import {  Container, CssBaseline } from '@mui/material';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const AuthLayout = () => {
    const [background, setBackground] = useState(
        "https://picsum.photos/10/10/?blur=2"
    );

    useEffect(() => {
        const highResImage = new Image();
        highResImage.src = "https://picsum.photos/1920/1080/?blur=2";
        highResImage.onload = () => {
          setBackground(highResImage.src);
        };
      }, []);
    return (
        <Container
                component="main"
                maxWidth="fixed"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
                >
                <CssBaseline />
                <Outlet /> 
        </Container>
        
    );
};


export default AuthLayout;
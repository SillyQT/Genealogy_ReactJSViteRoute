import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import AppBar from "../../components/AppBar";
const Home = () => {
  
  return (
      <Container
              // component="Home"
              maxWidth="vm"
              style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center', 
                  minHeight: '100vh',
                  padding: 0,
              }}
              >
              <CssBaseline />
              <AppBar /> 
              
              <Outlet /> 
      </Container>
      
  );
};

export default Home;

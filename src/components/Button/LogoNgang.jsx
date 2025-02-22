import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Logo = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <Button onClick={handleLogoClick}>
            <img
                src="/genealogy_line_white.svg"
                alt="Genealogy Logo"
                style={{ cursor: 'pointer', height: '40px',
                    stroke: 'white',
                    margin: '10px'
                }}
            />
            <Typography variant="h5" style={{ color: 'white', textTransform: 'capitalize', fontWeight: 'bold' }}>
                Genealogy
            </Typography>
        </Button>
    );
};

export default Logo;
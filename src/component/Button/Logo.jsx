import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Box, Typography } from '@mui/material';

const Logo = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/dashboard');
    };

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton onClick={handleLogoClick} >
            <img
                src="/genealogy.svg"
                alt="Genealogy Logo"
                style={{ cursor: 'pointer', width: '150px' 
                    
                }}
            />
        </IconButton>
        <Typography variant="h4" gutterBottom style={{ color: '#1890ff', fontWeight: 'bold' }}>
        Genealogy
      </Typography>
        </Box>
    );
};

export default Logo;
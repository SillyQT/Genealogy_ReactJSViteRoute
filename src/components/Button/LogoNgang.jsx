import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';


const Logo = () => {
    const navigate = useNavigate();


    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <IconButton onClick={handleLogoClick} >
            <img
                src="/genealogy-white.svg"
                alt="Genealogy Logo"
                style={{ cursor: 'pointer', width: '150px' 
                    
                }}
            />
        </IconButton>
        <Typography variant="h4" gutterBottom style={{ color: '#1890ff', fontWeight: 'bold' }}>
        
      </Typography>
        </Box>
    );
};
Logo.propTypes = {
    customheight: PropTypes.object,
};

export default Logo;
import Box from '@mui/material/Box';
import Note from '../Note.jsx';


export default function NestedGridColumns() {
    const itemData = [
        Note,
        Note,
        Note,
        Note,
        Note,
        Note,
        Note,
        Note,
        Note,
        Note,
        Note,
        Note,
        Note,
        Note,
        Note,
    ];

    return (
        <Box sx={{ maxWidth: '1324px', padding: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', overflow: 'hidden' }}>

                {itemData.map((item, index) => (
                    <Note key={index} />
                ))}

        </Box>
    );
}
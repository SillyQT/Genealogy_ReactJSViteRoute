import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

export default function RecipeReviewCard() {

    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
      setChecked([event.target.checked, event.target.checked]);
    };
  
    const handleChange2 = (event) => {
      setChecked([event.target.checked, checked[1]]);
    };
  
    const handleChange3 = (event) => {
      setChecked([checked[0], event.target.checked]);
    };
  
    const children = (
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label="Bột mì"
          control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
        />
        <FormControlLabel
          label="Trứng gà"
          control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
        />
      </Box>
    );

    return (
        <Paper  sx={{ maxWidth: 345, margin: 2 }} elevation={24} >
            <CardHeader
                // avatar={
                //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //         R
                //     </Avatar>
                // }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Học làm Pasta"
                subheader="Ngày tạo 17/01/2025"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"
                alt="Paella dish"
            />
            <CardContent>
            <FormControlLabel
        label="Nguyên liệu cần mua"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
            </CardContent>
            <CardActions disableSpacing>
                <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                />
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                />

            </CardActions>
        </Paper>
    );
}
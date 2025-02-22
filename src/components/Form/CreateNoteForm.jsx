import { useState, useRef } from "react";
import { Box, Card, TextField, IconButton, Button, Typography, Stack, Divider, CircularProgress, Menu, MenuItem, Tooltip, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { styled } from "@mui/system";
import {
    FaImage,
    FaSmile,
    FaMapMarkerAlt,
    FaCaretDown,
    FaTimes,
} from "react-icons/fa";
import { MdColorLens, MdLabel } from "react-icons/md";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledCard = styled(Card)(({ theme, bgcolor }) => ({
    maxWidth: 600,
    margin: "20px auto",
    padding: theme.spacing(2),
    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
    backgroundColor: bgcolor || "white",
    position: "relative" // Add this line to enable absolute positioning of the close button
}));

const ExpandingTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        padding: "12px",
        "&.Mui-focused fieldset": {
            borderColor: "#1877f2"
        },
    }
});

const MediaPreview = styled(Box)({
    position: "relative",
    marginTop: 16,
    "& img": {
        width: "100%",
        maxHeight: 300,
        objectFit: "cover",
        borderRadius: 8
    }
});

const PostEditor = () => {
    const [selectedLabels, setSelectedLabels] = useState({});
    const [content, setContent] = useState("");
    const [media, setMedia] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [bgColor, setBgColor] = useState("white");
    const fileInputRef = useRef(null);
    const [isFormVisible, setIsFormVisible] = useState(true);
    /* Thời gian */

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate();
    const month = now.getMonth() + 1; // Lưu ý: getMonth() trả về giá trị từ 0-11
    const year = now.getFullYear();
    const formattedDateTime = `${hours}:${minutes} ${day} Tháng ${month}, ${year}`;


    const availableLabels = [
        "Ghi chú...",
    ];

    const handleMediaUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setIsUploading(true);
            const reader = new FileReader();
            reader.onloadend = () => {
                setMedia(reader.result);
                setIsUploading(false);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePrivacyClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePrivacyClose = (option) => {
        if (option) setBgColor(option);
        setAnchorEl(null);
    };

    const handleCheckboxinset = () => {
        availableLabels.push("Ghi chú...");
    };

    const handlePost = () => {
        const selectedLabelsList = Object.keys(selectedLabels).filter(label => selectedLabels[label]);
        console.log("Posting:", { content, media, labels: selectedLabelsList });
        setContent("");
        setMedia(null);
        setSelectedLabels({});
    };

    const removeMedia = () => {
        setMedia(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const isPostDisabled = !content.trim() && !media;

    const handleCheckboxChange = (label) => {
        setSelectedLabels(prev => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    const handleClose = () => {
        // Logic to close the form
        setIsFormVisible(false);
        // console.log("Form closed");
    };

    if (!isFormVisible) return null;

    return (
        <StyledCard bgcolor={bgColor}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
                <Box flexGrow={1}>
                    <ExpandingTextField
                        label="Têu đề"
                        fullWidth
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        variant="standard"
                    />
                    <Typography variant="caption" gutterBottom sx={{ display: 'block' }} alt="Date modified">
                        Đã chỉnh sửa {formattedDateTime}
                    </Typography>
                    {media && (
                        <MediaPreview>
                            <img src={media} alt="Upload preview" />
                            <IconButton
                                size="small"
                                sx={{
                                    position: "absolute",
                                    top: 8,
                                    right: 8,
                                    backgroundColor: "rgba(0,0,0,0.6)",
                                    color: "white",
                                    "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" }
                                }}
                                onClick={removeMedia}
                            >
                                <FaTimes />
                            </IconButton>
                        </MediaPreview>
                    )}

                    <Box mt={2}>
                        <FormGroup>
                            {availableLabels.map((label) => (
                                <FormControlLabel
                                    key={label}
                                    control={
                                        <Checkbox
                                            checked={selectedLabels[label] || false}
                                            onChange={() => handleCheckboxChange(label)}
                                            sx={{
                                                color: "#1967d2",
                                                "&.Mui-checked": {
                                                    color: "#1967d2"
                                                }
                                            }}
                                        />
                                    }
                                    label={label}
                                />
                            ))}
                        </FormGroup>
                    </Box>

                    {isUploading && (
                        <Box display="flex" justifyContent="center" my={2}>
                            <CircularProgress size={30} />
                        </Box>
                    )}

                    <Divider sx={{ my: 2 }} />

                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="subtitle2">Thêm vào ghi chú... </Typography>
                        <Stack direction="row" spacing={1}>
                            <input
                                type="file"
                                accept="image/*,video/*"
                                style={{ display: "none" }}
                                ref={fileInputRef}
                                onChange={handleMediaUpload}
                            />
                            <Tooltip title="Thêm hộp kiểm">
                                <IconButton color="primary" onClick={() => handleCheckboxinset()}>
                                    <CheckBoxIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Thêm ảnh">
                                <IconButton color="primary" onClick={() => fileInputRef.current.click()}>
                                    <FaImage />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Cảm xúc">
                                <IconButton color="primary">
                                    <FaSmile />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Gắn thẻ vị trí">
                                <IconButton color="primary">
                                    <FaMapMarkerAlt />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="GIF">
                                <IconButton color="primary">
                                    <MdLabel />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </Stack>

                    <Box mt={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            disabled={isPostDisabled}
                            onClick={handlePost}
                            sx={{
                                textTransform: "none",
                                backgroundColor: isPostDisabled ? "#e4e6eb" : "#1877f2",
                                "&:hover": {
                                    backgroundColor: isPostDisabled ? "#e4e6eb" : "#166fe5"
                                }
                            }}
                        >
                            Post
                        </Button>
                    </Box>

                    <Button
                        startIcon={<MdColorLens />}
                        endIcon={<FaCaretDown />}
                        variant="outlined"
                        onClick={handlePrivacyClick}
                        sx={{ mt: 1, textTransform: "none" }}
                    >
                        Color
                    </Button>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => handlePrivacyClose()}
                    >
                        {["white", "lightblue", "lightgreen", "lightpink", "lightyellow"].map((color) => (
                            <MenuItem key={color} onClick={() => handlePrivacyClose(color)}>
                                {color}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Stack>
            <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={handleClose}
                sx={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    textTransform: "none"
                }}
            >
                Huỷ
            </Button>
        </StyledCard>
    );
};

export default PostEditor;
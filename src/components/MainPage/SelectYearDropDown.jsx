import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import DateDropdown from "../../asset/Images/Icons/DateDropdownIcon.svg"
import { borderRadius, fontFamily, width } from "@mui/system";

export default function SelectYearDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemStyle = {
    fontFamily: "GmarketSansLight",
    fontSize: "23px",
    width: "200px",
    height: "39px",
    "&:hover": {
      backgroundColor: "#E7F0FF",
    },
  };

  const options = [
    "2022",
    "2023",
    "2024",
  ];

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "black", fontSize: "28px", fontFamily: "GmarketSansLight" }}
      >
        2024년
        <img src={DateDropdown} alt="" />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          sx: { borderRadius: "10px" },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} sx={menuItemStyle} onClick={handleClose}>
            {option + "년"}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

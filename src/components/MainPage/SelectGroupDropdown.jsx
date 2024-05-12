import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import TeamDropdownIcon from "../../asset/Images/Icons/TeamDropdownIcon.svg";
import { borderRadius, fontFamily, width } from "@mui/system";

export default function SelectGroupDropdown() {
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
    fontSize: "18px",
    width: "200px",
    height: "39px",
    "&:hover": {
      backgroundColor: "#E7F0FF",
    },
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "black", fontSize: "20px" }}
      >
        글로리아팀
        <img src={TeamDropdownIcon} alt="" />
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
        <MenuItem sx={menuItemStyle} onClick={handleClose}>
          제이어스팀
        </MenuItem>
        <MenuItem sx={menuItemStyle} onClick={handleClose}>
          강물예배팀
        </MenuItem>
        <MenuItem sx={menuItemStyle} onClick={handleClose}>
          구름팀
        </MenuItem>
      </Menu>
    </div>
  );
}

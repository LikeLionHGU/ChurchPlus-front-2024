import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import DateDropdown from "../../asset/Images/Icons/DateDropdownIcon.svg";
import { useNavigate } from "react-router-dom";
import { monthState, yearState } from "../../atom";
import { useRecoilState } from "recoil";

export default function ContiSheetYearDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [year, setYear] = useRecoilState(yearState);
  const [selectedYear, setSelectedYear] = React.useState(year);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (year) => {
    setAnchorEl(null);
    if (year) {
      setYear(year);
      navigate("/ContiStoragePage");
    }
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

  const options = ["2022", "2023", "2024"];

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "black",
          fontSize: "22px",
          fontFamily: "GmarketSansLight",
        }}
      >
        {selectedYear}년
        <img src={DateDropdown} alt="" />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        TransitionComponent={Fade}
        PaperProps={{
          sx: { borderRadius: "10px" },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} sx={menuItemStyle} onClick={() => handleClose(option)}>
            {option + "년"}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

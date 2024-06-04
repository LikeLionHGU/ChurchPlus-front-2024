import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import TeamDropdownIcon from "../../asset/Images/Icons/TeamDropdownIcon.svg";
import { borderRadius, fontFamily, width } from "@mui/system";
import { useState } from "react";
import groupList from "../../apis/groupList"
import { useEffect } from "react";
import PresentGroupName from "../../apis/getPresentGroupName";

export default function SelectGroupDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTeamClick = (group) => {
    localStorage.setItem("groupId", group.groupId);
    window.location.reload();
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

const memberId = localStorage.getItem("memberId");
const [groups,setGroups] = useState([]);
const groupId = localStorage.getItem("groupId");
const [presentGroupName, setPresentGroupName] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const fetchedGroups = await groupList(memberId);
      setGroups(fetchedGroups);
    };
    const fetchPresentGroupName = async () => {
      const fetchedPresentGroupName = await PresentGroupName(groupId);
      setPresentGroupName(fetchedPresentGroupName);
    }
    fetchGroups();
    fetchPresentGroupName();
  }, [memberId]);
console.log(presentGroupName);
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
        {presentGroupName.groupName}
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
        {groups.map((group, index) =>(
          <div key ={index}>
             <MenuItem sx={menuItemStyle} onClick={() => handleTeamClick(group)}>
          {group.groupName}
        </MenuItem>
          </div>
        ))}
        
      </Menu>
    </div>
  );
}

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ListItemButton, Typography } from "@mui/material";
import { MyBox, IconButtonMenu } from "./HeaderStyle";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";

interface IDrawerProps {
  lista: string[];
  onClickLogout: Function;
  onClickUserList: Function;
  handleDrawerClick: Function;
}

export default function TemporaryDrawer(props: IDrawerProps) {
  const [state, setState] = React.useState(false);

  const { lista, onClickLogout, onClickUserList, handleDrawerClick } = props;

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <React.Fragment>
      <IconButtonMenu
        aria-label="logout"
        size="large"
        onClick={toggleDrawer(true)}
      >
        <MenuOpenIcon fontSize="inherit" />
      </IconButtonMenu>
      <Drawer anchor={"bottom"} open={state} onClose={toggleDrawer(false)}>
        <MyBox
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {lista.map((text) => (
              <ListItemButton
                key={text}
                onClick={() => handleDrawerClick(text)}
              >
                <ListItemIcon>
                  {text === "User List" && <GroupSharpIcon />}
                  {text === "Logout" && <LogoutIcon />}
                  {text === "User Details" && <PersonSharpIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </MyBox>
      </Drawer>
    </React.Fragment>
  );
}

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ListItemButton } from "@mui/material";
import { MyBox, IconButtonMenu } from "../@theme/@styles/HeaderStyle";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";

const anchor = "bottom";

interface IDrawerProps {
  lista: string[];
  onClickLogout: Function;
  onClickUserList: Function;
}

export default function TemporaryDrawer(props: IDrawerProps) {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const { lista, onClickLogout, onClickUserList } = props;

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleClick = (text: string) => {
    if (text === "Logout") {
      onClickLogout();
    }
    if (text === "User List") {
      onClickUserList();
    }
    //aggiungere user details
  };

  const list = (anchor: string) => (
    <MyBox
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {lista.map((text, index) => (
          <ListItemButton key={text} onClick={() => handleClick(text)}>
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
  );

  return (
    <div>
      <IconButtonMenu
        aria-label="logout"
        size="large"
        onClick={toggleDrawer(anchor, true)}
      >
        <MenuOpenIcon fontSize="inherit" />
      </IconButtonMenu>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}

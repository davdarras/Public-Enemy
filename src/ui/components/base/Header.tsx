import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import { makeStyles } from "tss-react/mui";
import { SidebarNavProps } from ".";

export const Header = memo((props: SidebarNavProps) => {
  const { toggleDrawer } = props;

  const { classes } = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.burgerIcon}
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.globalTitle}
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
        >
          Public enemy
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

const useStyles = makeStyles()((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    paddingRight: "24px",
  },
  burgerIcon: {
    marginRight: "24px",
  },
  globalTitle: {
    flexGrow: 1,
  },
}));

Header.displayName = "Header";

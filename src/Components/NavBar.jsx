import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../Redux/Actions/LoginAction";
import { useEffect } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { cartDataGet } = useSelector((store) => store.productsFatch);
  const Data = useSelector((store) => store.LoginFatch);

  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    handleLogout();
  }, []);

  const handleLogout = () => {
    Dispatch(logout());
    Navigate("/");
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ position: "fixed", backgroundColor: "red" }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                textAlign: "start",
              }}
            >
              {Data.isLogged == true ? (
                <Link
                  to={"/home"}
                  style={{
                    textDecoration: "none",
                    color: "White",
                    display: "flex",
                    width: "200px",
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png"
                    style={{ height: "50px" }}
                    alt=""
                  />
                  <span style={{ margin: "10px" }}> MYWORLD.COM</span>
                </Link>
              ) : (
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "White",
                    display: "flex",
                    width: "200px",
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png"
                    style={{ height: "50px" }}
                    alt=""
                  />
                  <span style={{ margin: "10px" }}> MYWORLD.COM</span>
                </Link>
              )}
            </Typography>
            {Data.isLogged == false ? (
              <Link
                to={"/LogIn"}
                style={{ textDecoration: "none", color: "White" }}
              >
                {" "}
                <Button
                  sx={{ color: "white", border: "2px solid white" }}
                  variant="outlined"
                >
                  {" "}
                  login
                </Button>
              </Link>
            ) : (
              <Box sx={{ display: "flex" }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Button
                  sx={{
                    borderRadius: "30px",
                    backgroundColor: "white",
                    color: "black",
                    marginLeft: "20px",
                    marginRight: "30px",
                  }}
                  variant="text"
                >
                  Search
                </Button>
                {/* <Typography variant="h6">hii! ritesh...</Typography> */}
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{ color: "white" }}
                  >
                    Hii! {Data.user.fullName}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        marginLeft: "-50px",
                      }}
                      to={"/profile"}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>Orders</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
                <Link
                  to={"/cartpage"}
                  style={{ textDecoration: "none", color: "White" }}
                >
                  <ShoppingCartIcon sx={{ color: "white" }} />
                  <span style={{ color: "white" }}>
                    {cartDataGet == null ? 0 : cartDataGet.length}
                  </span>
                </Link>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;

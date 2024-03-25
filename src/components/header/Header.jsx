import styled from "styled-components";
import logo from "../../assets/logo.jpeg";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

export default function Header({ setIsLoggedIn }) {
  const [openSide, setOpenSide] = useState();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpenSide(newOpen);
  };

  const handleChange = async (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  function searchMovies(){
    if(search !== ''){
      navigate(`/movieSearch/${search}`)
    }
  }

  function logout() {
    localStorage.clear();
    // Atualizo o estado para false quando o usuário não estiver logado para o header não aparecer na página
    setIsLoggedIn(false);
    navigate("/userLogin");
  }

  return (
    <>
      <Container>
        <img src={logo} onClick={() => navigate("/")}></img>
        <div className="search">
          <form>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Pesquisar por filme..."
          />
          <IoSearchSharp className="searchIcon" onClick={()=> searchMovies()}/>
          </form>
        </div>
        <div>
          <Drawer open={openSide} onClose={toggleDrawer(false)} anchor="right">
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/configUser")}>
                    <ListItemIcon>
                      <FaUserCog size={25} />
                    </ListItemIcon>
                    <ListItemText primary={"Configurações de usuário"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/userRegistration")}>
                    <ListItemIcon>
                      <IoMdPersonAdd size={25} />
                    </ListItemIcon>
                    <ListItemText primary={"Cadastrar novo usuário"} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/movieRegister")}>
                    <ListItemIcon>
                      <MdOutlineAdd size={25} />
                    </ListItemIcon>
                    <ListItemText primary={"Cadastrar novo filme"} />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton onClick={() => logout()}>
                    <ListItemIcon>
                      <CiLogout size={25} />
                    </ListItemIcon>
                    <ListItemText primary={"Sair"} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <RxHamburgerMenu
            size={26}
            onClick={() => setOpenSide(!openSide)}
            className="menu"
          />
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
  background-color: #161616;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  .search {
    position: relative;
    .searchIcon {
      position: absolute;
      right: 10px;
      font-size: 25px;
      top: 10px;
      color: black;
    }
  }
  input {
    border: none;
    padding: 15px;
    border-radius: 10px;
    width: 400px;
  }
  .menu {
    cursor: pointer;
  }
  img {
    width: 75px;
    cursor: pointer;
  }
  .custom_input {
    display: flex;
    align-items: center;
    position: relative;
    max-width: 100%;
  }

  .input {
    font-size: 18px;
    padding: 5px 10px;
    width: 500px;
    padding-left: 35px;
    outline: none;
    background: #ffffff;
    color: #000000;
    border: 1px solid #c4d1eb;
    border-radius: 5px;
    box-shadow: 3px 3px 2px 0px #e2e2e2;
    transition: 0.3s ease;
  }

  .input:focus {
    background: #f2f2f2;
    border: 1px solid #5a7ec7;
    border-radius: 10px;
  }

  .input::placeholder {
    color: #dddddd;
  }

  .svg_icon {
    position: absolute;
    left: 10px;
    fill: #4660dc;
    width: 18px;
    height: 18px;
  }
`;

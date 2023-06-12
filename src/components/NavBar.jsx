import React from "react";
import { Box } from "@mui/material";
// import Paper from '@mui/material/Paper';
import Logo from "../assets/logo.png";
// import Button from "./Button"
import { Link } from "react-router-dom";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SearchIcon from '@mui/icons-material/Search';
import { Paper } from '@mui/material';

import "../App.css"
function NavBar() {
    return (
        <div>
            <Paper square={true} variant="elevation">
                <Box sx={{ display: "flex",justifyContent: "space-around",border:"1px solid black", backgroundColor:"#000000"}}>

                    <Box maxWidth='sm' sx={{ border:"1px solid black",height:70,width:"40%",display:"flex",justifyContent:"space-arround",alignItems: "center"}}>
                        <Link to="/">
                            <img src={Logo} alt="" width={100} height={90} />
                        </Link>
                    </Box>

                    <Box sx={{ display: "flex", width: "50%",border:"1px solid black" }}>

                        <Box sx={{display: "flex", justifyContent:"flex-end", alignItems: "center" }}>

                            <Box sx={{ margin: "10px 20px" }}>
                                <Link to="/contact" className="link">Contact</Link>
                                <Link to="/project" className="link">Project</Link>
                                <Link to="/about" className="link">About</Link>
                            </Box>
                            {/* <Box sx={{ margin: "0px 20px", width: "40% ", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Link to="" className="link"> Search</Link>
                                <Link to="" className="link">  Locate Me</Link>
                                <Button value="Order on McDelivery" variant="regular" sx={{
                                 fontSize: "18px", color: "#292929", '&:hover': { backgroundColor: "#ffbc0d" }, backgroundColor: "#ffbc0d", padding: "15px 30px"
                                }}></Button>
                            </Box> */}
                            {/* <Box>
                            </Box> */}
                        </Box>

                    </Box>



                </Box>
            </Paper>
                        <Box className="body-img body-color" sx={{ height: "675px", width: "75%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            
                        </Box>
        </div>
    );
}
export default NavBar;
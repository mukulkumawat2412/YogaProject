import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Left() {
    return ( 
        <>
         <div className="mt-3 col-md-3">
           <Link to={"/therepyform"}><Button type="submit" variant="contained" color="secondary" className="mt-3">Therepy Add</Button></Link> 
         </div>
        
        
        </>
     );
}

export default Left;
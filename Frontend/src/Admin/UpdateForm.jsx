


import { Box, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

function UpdateForm() {
  const [yname, setYName] = useState("");
  const [ydesc, setYDesc] = useState("");
  const [ytitle, setYTitle] = useState("");
  const [yimage, setYImage] = useState("");

  const { id } = useParams();
  const nevigate = useNavigate()


  useEffect(() => {
    axios.get(`https://yogaproject-zuhz.onrender.com/${id}`).then((data) => {
      if (data.status === 200) {
        setYName(data.data.myIdData.name);
        setYDesc(data.data.myIdData.YogaDescription);
        setYTitle(data.data.myIdData.title);
        setYImage(data.data.myIdData.image);
      }
    });
  }, [id]);

  


  function handleform(e) {
    
    e.preventDefault();

    let Data = new FormData();
    
    Data.append("yname", yname);
    Data.append("ydesc", ydesc);
    Data.append("ytitle", ytitle);  
    Data.append("yimage", yimage);
    

    axios.put(`https://yogaproject-zuhz.onrender.com/api/yogUpdate/${id}`, Data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        if(response.status===200){
          toast.success("Therepy Successfully Updated")
            nevigate("/dashboard")
        }
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  }

  return (
    <div className="flex flex-col justify-center w-full mt-4">
      <div className="w-full mt-4">
        <h1 className="text-3xl font-bold text-center text-purple-400">
          Update Yoga Therapy
        </h1>
        <form onSubmit={(e) => handleform(e)} >
          <Box
            sx={{
              "& > :not(style)": {},
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              mt: "12px",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className="w-11/12"
              value={yname}
              onChange={(e) => setYName(e.target.value)}
              id="outlined-basic"
              label="Naturopathy & Neurotherapy Name"
              variant="outlined"
              sx={{ mb: "7px" }}
            />
            <TextField
              className="w-11/12"
              value={ytitle}
              
              onChange={(e) => setYTitle(e.target.value)}
              id="outlined-basic"
              label="Naturopathy & Neurotherapy Title"
              variant="outlined"
              sx={{ mb: "7px" }}
            />
            <TextField
              className="w-11/12"
              value={ydesc}
              onChange={(e) => setYDesc(e.target.value)}
              id="outlined-basic"
              label="Naturopathy & Neurotherapy Description"
              variant="outlined"
              sx={{ mb: "7px" }}
            />
            <label>Image</label>
            <input
              className="input_field"
              type="file" name="file"
              onChange={(e)=>setYImage(e.target.files[0])}
            />
            <button
              type="submit"
              className="p-2 mt-3 text-white bg-green-500 rounded-lg"
            >
              Update Therapy
            </button>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;






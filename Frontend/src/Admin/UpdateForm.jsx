import { Box, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

function UpdateForm() {
  const [yname, setYName] = useState("");
  const [ydesc, setYDesc] = useState("");
  const [ytitle, setYTitle] = useState("");
  const [yimage, setYImage] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://yogaproject-zuhz.onrender.com/api/${id}`).then((data) => {
      if (data.status === 200) {
        setYName(data.data.myIdData.name);
        setYDesc(data.data.myIdData.YogaDescription);
        setYTitle(data.data.myIdData.title);
      }
    });
  }, [id]);

  function handleForm(e) {
    e.preventDefault();
    
    let formData = new FormData();
    formData.append("yname", yname);
    formData.append("ydesc", ydesc);
    formData.append("ytitle", ytitle);
    if (yimage) formData.append("yimage", yimage);

    axios
      .put(`https://yogaproject-zuhz.onrender.com/api/yogUpdate/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Therapy Successfully Updated!");
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        toast.error("Update failed, try again.");
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-center text-purple-600">
          Update Yoga Therapy
        </h1>
        <form onSubmit={handleForm} className="space-y-4">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              className="w-full"
              value={yname}
              onChange={(e) => setYName(e.target.value)}
              label="Naturopathy & Neurotherapy Name"
              variant="outlined"
            />

            <TextField
              className="w-full"
              value={ytitle}
              onChange={(e) => setYTitle(e.target.value)}
              label="Naturopathy & Neurotherapy Title"
              variant="outlined"
            />

            <TextField
              className="w-full"
              value={ydesc}
              onChange={(e) => setYDesc(e.target.value)}
              label="Naturopathy & Neurotherapy Description"
              variant="outlined"
              multiline
              rows={3}
            />

            <label className="text-gray-600 font-medium">Upload Image</label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={(e) => setYImage(e.target.files[0])}
            />

            <button
              type="submit"
              className="w-full p-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-200"
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

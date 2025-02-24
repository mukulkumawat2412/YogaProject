import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createYoga } from "../redux/slices/YogaSlice";
import { useNavigate } from "react-router-dom";

function Therepyform() {
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        navigate("/dashboard");

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("title", data.title);
        formData.append("YogaDescription", data.YogaDescription);
        formData.append("image", data.image[0]);

        dispatch(createYoga(formData));
    };

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 px-4 py-8">
            <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
                <h1 className="mb-6 text-2xl font-bold text-center text-purple-600">Add Yoga Therapy</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            {...register("name")}
                            label="Naturopathy & Neurotherapy Name"
                            variant="outlined"
                            className="w-full"
                        />

                        <TextField
                            {...register("title")}
                            label="Naturopathy & Neurotherapy Title"
                            variant="outlined"
                            className="w-full"
                        />

                        <TextField
                            {...register("YogaDescription")}
                            label="Naturopathy & Neurotherapy Description"
                            variant="outlined"
                            multiline
                            rows={3}
                            className="w-full"
                        />

                        <label className="text-gray-600 font-medium">Upload Image</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            type="file"
                            {...register('image')}
                        />

                        <button type="submit" className="w-full p-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                            Add Therapy
                        </button>
                    </Box>
                </form>
            </div>
        </div>
    );
}

export default Therepyform;

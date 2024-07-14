const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;  // Make sure to use VITE_ prefix if using Vite
const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const uploadImageToCloudinary = async file => {

    const uploadData = new FormData();

    uploadData.append('file', file);
    uploadData.append('upload_preset', upload_preset);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: 'POST',
        body: uploadData,
    });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
};

export default uploadImageToCloudinary;

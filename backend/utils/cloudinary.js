import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: 'dxwxo1zwc', 
  api_key: '579797798469792', 
  api_secret: 'QZurvcDL-9nHaauhFmE16OMK3XE'
});

const uploadOnCloudinary = async (localFilePath) => { 
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath.path, {
      resource_type: "auto",
    });

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { uploadOnCloudinary };

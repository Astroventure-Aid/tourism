import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: 'ddtv0ri6u', 
  api_key: '427416592485679', 
  api_secret: 'JNhVx0zaGxnJMNA5JFv6M4SgXjw'
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

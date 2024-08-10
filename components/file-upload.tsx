"use client";
import { UploadDropzone, UploadButton } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { Button } from "./ui/button";
interface FileUploadInterface {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

const FileUpload = ({ onChange, endpoint }: FileUploadInterface) => {
  const handleUpload = (resultData: CloudinaryUploadWidgetResults) => {
    const info = resultData.info as object;
    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url as string;
      onChange(url);
    }

    console.log("imaage", resultData);
  };
  // return (
  //   <UploadDropzone
  //     endpoint={endpoint}
  //     onClientUploadComplete={(res) => {
  //       onChange(res?.[0].url);
  //     }}
  //     onUploadError={(error) => {
  //       console.error("Upload Error", error);
  //       console.log("error.message", error.stack);
  //       toast.error(`${error?.message}`);
  //     }}
  //   ></UploadDropzone>
  return (
    <div>
      <CldUploadWidget
        uploadPreset="k2cykulx"
        // onUploadAddedAction={handleUpload}
        onSuccess={(result) => handleUpload(result)}
      >
        {({ open }) => <Button onClick={() => open()}>upload Image</Button>}
      </CldUploadWidget>
    </div>
  );
};
export default FileUpload;

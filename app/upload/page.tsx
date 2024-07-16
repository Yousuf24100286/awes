"use client";

import { UploadButton } from "@/lib/uploadthing";
import { toast } from "sonner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(files) => {
          console.log("url: ", files[0].url);
          toast.success("Upload Completed!");
        }}
        onUploadError={(error: Error) => {
          toast.error(`Upload failed! ${error.message}`);
        }}
      />
    </main>
  );
}
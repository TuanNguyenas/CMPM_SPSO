import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <label htmlFor="file-upload" className="custom-file-upload">
        Chọn tệp
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }} /* Ẩn input gốc */
      />
      {file && <p>File Name: {file.name}</p>}
    </div>
  );
};

export default FileUpload;

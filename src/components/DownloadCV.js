import React from "react";

const DownloadCV = () => {
  const downloadCvHandler = () => {
    const imagePath = "/cv.jpeg";

    const downloadLink = document.createElement("a");
    downloadLink.href = imagePath;
    downloadLink.download = "CV Ilham Quro.jpg";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };
  return (
    <button
      type="button"
      className="fixed h-[40px] w-[120px] bg-icon bottom-2 right-2 flex items-center justify-center text-white font-semibold rounded-full shadow-md shadow-slate-900"
      onClick={downloadCvHandler}
    >
      Download CV
    </button>
  );
};

export default DownloadCV;

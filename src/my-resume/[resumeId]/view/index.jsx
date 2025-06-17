// import React, { useEffect } from "react";
// import Header from "@/components/ui/custom/Header";
// import { Button } from "@/components/ui/button";
// import ResumePreview from "@/Dashboard/resume/components/ResumePreview";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import { useState } from "react";
// import { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { Navigate } from "react-router";
// import GlobalApi from "./../../../../service/GlobalApi";




// function ViewResume() {
//   const [resumeInfo, setResumeInfo] = useState();
//   const { resumeId } = useParams();
//   useEffect(() => {
//     GetResumeInfo();
//   }, []);
//   const GetResumeInfo = () => {
//     GlobalApi.GetResumeById(resumeId).then((resp) => {
//       console.log(resp.data.data);
//       setResumeInfo(resp.data.data);
//     });
//   };

//   const HandleDownload = () => {
//     window.print();
//   };

//   return (
//     <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
//       <div id="no-print">
//         <Header />
//         <div className="my-10 mx-10 md:mx-20 lg:mx-36 ">
//           <h2 className="text-center text-2xl font-medium">
//             Congrats ! your AI generated Resume is readyyy
//           </h2>
//           <p className="text-center text-gray-400">
//             Now you are ready to share your unique resume URL with your friends
//             and family
//           </p>
//           <div className="flex justify-between items-center px-44 my-10">
//             <Button className="cursor-pointer" onClick={HandleDownload}>
//               Download
//             </Button>
//             <Button className="cursor-pointer">Share</Button>
//           </div>
//         </div>
//       </div>
//       <div id="print-area" className="my-10 mx-10 md:mx-20 lg:mx-36 ">
//         <ResumePreview />
//       </div>
//     </ResumeInfoContext.Provider>
//   );
// }

// export default ViewResume;
import React, { useEffect, useState, useContext } from "react";
import Header from "@/components/ui/custom/Header";
import { Button } from "@/components/ui/button";
import ResumePreview from "@/Dashboard/resume/components/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../service/GlobalApi";

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const [canShare, setCanShare] = useState(false);
  const { resumeId } = useParams();

  useEffect(() => {
    GetResumeInfo();
    setCanShare(typeof navigator.share === "function"); // Detect Web Share API support
  }, []);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then((resp) => {
      console.log(resp.data.data);
      setResumeInfo(resp.data.data);
    });
  };

  const HandleDownload = () => {
    window.print();
  };

  const HandleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My AI Resume",
          text: "Check out my AI-generated resume!",
          url: window.location.href,
        });
        console.log("Resume shared successfully!");
      } catch (error) {
        console.error("Error sharing the resume:", error);
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />
        <div className="my-10 mx-10 md:mx-20 lg:mx-36 ">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your AI-generated Resume is ready
          </h2>
          <p className="text-center text-gray-400">
            Now you are ready to share your unique resume URL with your friends and family
          </p>
          <div className="flex justify-between items-center px-44 my-10">
            <Button className="cursor-pointer" onClick={HandleDownload}>
              Download
            </Button>
            {canShare && (
              <Button className="cursor-pointer" onClick={HandleShare}>
                Share
              </Button>
            )}
          </div>
        </div>
      </div>
      <div id="print-area" className="my-10 mx-10 md:mx-20 lg:mx-36 ">
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;

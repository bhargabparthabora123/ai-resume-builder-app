// import React from "react";

// function ExperiencePreview({ resumeInfo }) {
//   return (
//     <div className="my-6">
//       <h2
//         className="text-center font-bold text-sm mb-2"
//         style={{
//           color:'#EF4444' 
//         }}
//       >
//         Professional Experience
//       </h2>

//       <hr
//         style={{
//           borderColor: '#EF4444' 
//         }}
//       />

//       {resumeInfo?.experience.map((experience, index) => (
//         <div key={index} className="my-5 ">
//           <h2 className="font-bold text-sm ">{experience?.title}</h2>
//           <h2
//             className="text-xs flex justify-between"
//             style={{
//               color: '#EF4444' 
//             }}
//           >
//             {experience?.companyName},{experience?.city},{experience?.state}
//             <span>
//               {experience?.startDate} <span>To</span>{" "}
//               {experience?.currentlyWorking ? "Present" : experience.endDate}
//             </span>
//           </h2>

//           {/* <p className="text-xs my-2">{experience?.workSummary}</p> */}
//           <div dangerouslySetInnerHTML={{ __html: experience?.workSummary }} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ExperiencePreview;

import React from "react";

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: '#EF4444' }}
      >
        Professional Experience
      </h2>

      <hr style={{ borderColor: '#EF4444' }} />

      {(resumeInfo?.experience || []).map((experience, index) => (
        <div key={index} className="my-5">
          <h2 className="font-bold text-sm">{experience?.title}</h2>
          <h2
            className="text-xs flex justify-between"
            style={{ color: '#EF4444' }}
          >
            {experience?.companyName}, {experience?.city}, {experience?.state}
            <span>
              {experience?.startDate} <span>To</span>{" "}
              {experience?.currentlyWorking ? "Present" : experience?.endDate}
            </span>
          </h2>

          <div dangerouslySetInnerHTML={{ __html: experience?.workSummary }} />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;

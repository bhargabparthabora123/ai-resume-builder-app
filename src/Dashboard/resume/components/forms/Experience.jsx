// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import RichTextEditor from "./../RichTextEditor";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import { useContext } from "react";
// import { LoaderCircle } from "lucide-react";
// import { toast } from "sonner";
// import { getAIChatSession } from "./../../../../../service/AIModel";

// const formField = {
//   title: "",
//   companyName: "",
//   city: "",
//   startDate: "",
//   endDate: "",
//   workSummary: "",
// };

// function Experience() {
//   const [experienceList, setExperienceList] = useState([formField]);

//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   const [loading, setLoading] = useState(false);

//   const handleSave = async () => {
//     setLoading(true);
//     try {
//       // Simulate a delay (replace this with your actual API call)
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       toast("Experience saved successfully!");
//     } catch (error) {
//       toast.error("Failed to save experience.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (index, event) => {
//     const newEntries = experienceList.slice();
//     const { name, value } = event.target;
//     newEntries[index][name] = value;
//     setExperienceList(newEntries);
//   };

//   const AddNewExperience = () => {
//     setExperienceList([
//       ...experienceList,
//       {
//         title: "",
//         companyName: "",
//         city: "",
//         state: "",
//         startDate: "",
//         endDate: "",
//         workSummery: "",
//       },
//     ]);
//   };

//   const RemoveExperience = () => {
//     setExperienceList(experienceList.slice(0, -1));
//   };

//   const handleRichTextEditor = (e, name, index) => {
//     const newEntries = experienceList.slice();
//     newEntries[index][name] = e.target.value;
//     setExperienceList(newEntries);
//   };

//   useEffect(() => {
//     setResumeInfo({
//       ...resumeInfo,
//       experience: experienceList,
//     });
//   }, [experienceList]);

//   return (
//     <div>
//       <div className="p-5 shadow-lg rounded-lg border-t-violet-500 border-t-4 mt-10">
//         <h2 className="font-bold text-lg">Professional Experience</h2>
//         <p>Add your previous Job Experience</p>
//         <div>
//           {experienceList.map((item, index) => (
//             <div key={index}>
//               <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
//                 <div>
//                   <label className="text-xs">Position Title</label>
//                   <Input
//                     name="title"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs">Company Name</label>
//                   <Input
//                     name="companyName"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs">City</label>
//                   <Input
//                     name="city"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs">State</label>
//                   <Input
//                     name="state"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs">Start Date</label>
//                   <Input
//                     type="date"
//                     name="startDate"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs">End Date</label>
//                   <Input
//                     type="date"
//                     name="endDate"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>
//                 <div className="col-span-2">
//                   {/* work summary  */}

//                   <RichTextEditor
//                     index={index}
//                     onRichTextEditorChange={(event) =>
//                       handleRichTextEditor(event, "workSummary", index)
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-between">
//           <div className="flex gap-2">
//             <Button
//               variant="outline"
//               className="text-green-600"
//               onClick={AddNewExperience}
//             >
//               + Add More Experience
//             </Button>
//             <Button
//               variant="outline"
//               className="text-green-600"
//               onClick={RemoveExperience}
//             >
//               - Remove Experience
//             </Button>
//           </div>
//           <div className="mt-3 flex justify-end">
//             <Button type="button" disabled={loading} onClick={handleSave}>
//               {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;

/*********************************************/ 
// import React, { useEffect, useState, useContext } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import RichTextEditor from "./../RichTextEditor";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import { LoaderCircle } from "lucide-react";
// import { toast } from "sonner";
// import { useParams } from "react-router";
// import GlobalApi from "./../../../../../service/GlobalApi";

// const formField = {
//   title: "",
//   companyName: "",
//   city: "",
//   state: "",
//   startDate: "",
//   endDate: "",
//   workSummary: "",
// };

// function Experience() {
//   const [experienceList, setExperienceList] = useState([formField]);
//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   const [loading, setLoading] = useState(false);
//   const params = useParams();

//   const onSave = () => {
//     setLoading(true);
//     const data = {
//       data: {
//         experience: experienceList,
//       },
//     };

//     GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
//       (resp) => {
//         console.log(resp);
//         setLoading(false);
//         toast("Experience details updated successfully");
//         console.log("Experience details saved successfully:", resp);
//       },
//       (error) => {
//         setLoading(false);
//         toast.error("Failed to save experience details");
//         console.error("Error saving experience details:", error);
//       }
//     );
//   };

//   const handleChange = (index, event) => {
//     const newEntries = [...experienceList];
//     const { name, value } = event.target;
//     newEntries[index][name] = value;
//     setExperienceList(newEntries);
//   };

//   const AddNewExperience = () => {
//     setExperienceList([...experienceList, { ...formField }]);
//   };

//   const RemoveExperience = () => {
//     setExperienceList((prev) => prev.slice(0, -1));
//   };

//   const handleRichTextEditor = (e, name, index) => {
//     const newEntries = [...experienceList];
//     newEntries[index][name] = e.target.value;
//     setExperienceList(newEntries);
//   };

//   useEffect(() => {
//     setResumeInfo({
//       ...resumeInfo,
//       experience: experienceList,
//     });
//   }, [experienceList]);

//   return (
//     <div>
//       <div className="p-5 shadow-lg rounded-lg border-t-violet-500 border-t-4 mt-10">
//         <h2 className="font-bold text-lg">Professional Experience</h2>
//         <p>Add your previous Job Experience</p>
//         <div>
//           {experienceList.map((item, index) => (
//             <div key={index}>
//               <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
//                 <div>
//                   <label className="text-xs">Position Title</label>
//                   <Input
//                     name="title"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs">Company Name</label>
//                   <Input
//                     name="companyName"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs">City</label>
//                   <Input
//                     name="city"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs">State</label>
//                   <Input
//                     name="state"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs">Start Date</label>
//                   <Input
//                     type="date"
//                     name="startDate"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs">End Date</label>
//                   <Input
//                     type="date"
//                     name="endDate"
//                     onChange={(event) => handleChange(index, event)}
//                   />
//                 </div>

//                 <div className="col-span-2">
//                   <RichTextEditor
//                     index={index}
//                     onRichTextEditorChange={(event) =>
//                       handleRichTextEditor(event, "workSummary", index)
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-between">
//           <div className="flex gap-2">
//             <Button
//               variant="outline"
//               className="text-green-600"
//               onClick={AddNewExperience}
//             >
//               + Add More Experience
//             </Button>
//             <Button
//               variant="outline"
//               className="text-green-600"
//               onClick={RemoveExperience}
//             >
//               - Remove Experience
//             </Button>
//           </div>
//           <div className="mt-3 flex justify-end">
//             <Button type="button" disabled={loading} onClick={onSave}>
//               {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;


import React, { useEffect, useState, useContext } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RichTextEditor from "./../RichTextEditor";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { useParams } from "react-router";
import GlobalApi from "./../../../../../service/GlobalApi";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummary: "",
};

function Experience() {
  const [experienceList, setExperienceList] = useState([formField]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const onSave = () => {
    setLoading(true);

    // ✅ Validate required fields
    const isValid = experienceList.every(
      (item) =>
        item.title &&
        item.companyName &&
        item.city &&
        item.state &&
        item.startDate &&
        item.endDate &&
        item.workSummary
    );

    if (!isValid) {
      toast.error("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    const data = {
      data: {
        experience: experienceList,
      },
    };

    console.log("Sending experience data", JSON.stringify(data, null, 2));

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        setLoading(false);
        toast.success("Experience details updated successfully");
        console.log("Experience details saved successfully:", resp);
      },
      (error) => {
        setLoading(false);
        toast.error("Failed to save experience details");
        console.error("Error saving experience details:", error);
      }
    );
  };

  const handleChange = (index, event) => {
    const newEntries = [...experienceList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  // useEffect(()=>{
  //     resumeInfo && setExperienceList(resumeInfo?.experience); 
  // },[resumeInfo])
/********000000000000000000000000000000000000000000000000000000000000**********************/
useEffect(() => {
  if (JSON.stringify(resumeInfo.experience) !== JSON.stringify(experienceList)) {
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }
}, [experienceList]);


  

  const AddNewExperience = () => {
    setExperienceList([...experienceList, { ...formField }]);
  };

  const RemoveExperience = () => {
    if (experienceList.length > 1) {
      setExperienceList((prev) => prev.slice(0, -1));
    }
  };

  // ✅ Updated to receive value directly
  const handleRichTextEditor = (value, name, index) => {
    const newEntries = [...experienceList];
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-violet-500 border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add your previous Job Experience</p>
        <div>
          {experienceList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input
                    name="title"
                    value={item.title}
                    onChange={(event) => handleChange(index, event)}
                    
                  />
                </div>

                <div>
                  <label className="text-xs">Company Name</label>
                  <Input
                    name="companyName"
                    value={item.companyName}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div>
                  <label className="text-xs">City</label>
                  <Input
                    name="city"
                    value={item.city}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div>
                  <label className="text-xs">State</label>
                  <Input
                    name="state"
                    value={item.state}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    value={item.startDate}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    value={item.endDate}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div className="col-span-2">
                  <RichTextEditor
                    index={index}
                    onRichTextEditorChange={(value) =>
                      handleRichTextEditor(value, "workSummary", index)
                    }
                    value={item.workSummary}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="text-green-600"
              onClick={AddNewExperience}
            >
              + Add More Experience
            </Button>
            <Button
              variant="outline"
              className="text-green-600"
              onClick={RemoveExperience}
            >
              - Remove Experience
            </Button>
          </div>
          <div className="mt-3 flex justify-end">
            <Button type="button" disabled={loading} onClick={onSave}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;



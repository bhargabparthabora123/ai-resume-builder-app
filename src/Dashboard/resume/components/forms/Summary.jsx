// import React, { useEffect, useState, useContext } from "react";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import GlobalApi from "./../../../../../service/GlobalApi";
// import { useParams } from "react-router";
// import { LoaderCircle, Brain } from "lucide-react";
// import { toast } from "sonner";
// import { getAIChatSession } from "./../../../../../service/AIModel";

// const promptTemplate =
//   "Job Title: {jobTitle}, Depends on job title give me list of summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";

// function Summary({ enableNext }) {
//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   const [summary, setSummary] = useState("");
//   const [loading, setLoading] = useState(false);
//   const params = useParams();
//   const [aiGeneratedSummaryList, setaiGeneratedSummaryList] = useState([]);

//   useEffect(() => {
//     if (summary) {
//       setResumeInfo({
//         ...resumeInfo,
//         summary: summary,
//       });
//     }
//   }, [summary]);

//   const GenerateSummaryFromAI = async () => {
//     setLoading(true);
//     const prompt = promptTemplate.replace(
//       "{jobTitle}",
//       resumeInfo?.jobTitle || "Software Engineer"
//     );

//     try {
//       const chat = await getAIChatSession();
//       const result = await chat.sendMessage(prompt);
//       let text = await result.response.text();

//       text = text.trim().replace(/^```json\s*|```$/g, "");

//       try {
//         const json = JSON.parse(text);
//         setaiGeneratedSummaryList(json);
//       } catch (parseError) {
//         console.error("Parsing error:", parseError);
//         toast("AI response could not be parsed as JSON");
//       }
//     } catch (error) {
//       console.error("Error generating summary:", error);
//       toast("Failed to generate summary from AI");
//     }

//     setLoading(false);
//   };

//   const onSave = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const data = {
//       data: {
//         summary: summary,
//       },
//     };

//     GlobalApi.UpdateResumeDetail(params?.resumeId, data)
//       .then((resp) => {
//         enableNext(true);
//         toast("Details updated successfully");
//       })
//       .catch((error) => {
//         console.error("Save error:", error);
//         toast("Failed to save summary");
//       })
//       .finally(() => setLoading(false));
//   };

//   const groupedSummaries = {
//     Senior: [],
//     Mid: [],
//     Fresher: [],
//   };

//   aiGeneratedSummaryList.forEach((item) => {
//     const level = item.experience_level?.toLowerCase();
//     if (level.includes("senior")) groupedSummaries.Senior.push(item);
//     else if (level.includes("mid")) groupedSummaries.Mid.push(item);
//     else if (level.includes("fresher")) groupedSummaries.Fresher.push(item);
//   });

//   return (
//     <div>
//       {/* Summary Input Section */}
//       <div className="p-5 shadow-lg rounded-lg border-t-violet-500 border-t-4 mt-10">
//         <h2 className="font-bold text-lg">Summary</h2>
//         <p>Add summary for your job title</p>
//         <form className="mt-7" onSubmit={onSave}>
//           <div className="flex justify-between items-end">
//             <label htmlFor="">Add Summary</label>
//             <Button
//               variant="outline"
//               size="sm"
//               className="border border-violet-600 text-violet-600 flex gap-2"
//               type="button"
//               onClick={GenerateSummaryFromAI}
//               disabled={loading}
//             >
//               <Brain className="h-4 w-4" /> Generate from AI
//             </Button>
//           </div>

//           <Textarea
//             className="mt-5"
//             required
//             value={summary}
//             onChange={(e) => setSummary(e.target.value)}
//           />

//           <div className="flex justify-end mt-2">
//             <Button type="submit" disabled={loading}>
//               {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
//             </Button>
//           </div>
//         </form>
//       </div>

//       {/* AI Suggestions Section */}
//       {aiGeneratedSummaryList.length > 0 && (
//         <div className="mt-10 p-5 shadow-md rounded-lg border space-y-6">
//           <h2 className="font-bold text-lg mb-2">AI Suggestions</h2>

//           {["Senior", "Mid", "Fresher"].map(
//             (level) =>
//               groupedSummaries[level].length > 0 && (
//                 <div key={level}>
//                   <h3 className="font-semibold text-violet-700 mb-2">
//                     {level} Level:
//                   </h3>
//                   <div className="max-h-40 overflow-y-auto space-y-2 pr-1 border rounded-md p-2 bg-violet-50/30">
//                     {groupedSummaries[level].map((item, index) => (
//                       <div
//                         key={index}
//                         className="p-3 border border-violet-300 rounded-lg bg-white shadow-sm hover:bg-violet-50 cursor-pointer transition"
//                         onClick={() => setSummary(item.summary)}
//                       >
//                         <p className="text-sm text-gray-700 leading-snug">
//                           {item.summary}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Summary;

import React, { useEffect, useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "./../../../../../service/GlobalApi";
import { useParams } from "react-router";
import { LoaderCircle, Brain } from "lucide-react";
import { toast } from "sonner";
import { getAIChatSession } from "./../../../../../service/AIModel";

const promptTemplate =
  "Job Title: {jobTitle}, Depends on job title give me list of summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";

function Summary({ enableNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [aiGeneratedSummaryList, setaiGeneratedSummaryList] = useState([]);

  // ✅ Load summary from context when resumeInfo changes
  useEffect(() => {
    if (resumeInfo?.summary) {
      setSummary(resumeInfo.summary);
    }
  }, [resumeInfo]);

  const GenerateSummaryFromAI = async () => {
    setLoading(true);
    const prompt = promptTemplate.replace(
      "{jobTitle}",
      resumeInfo?.jobTitle || "Software Engineer"
    );

    try {
      const chat = await getAIChatSession();
      const result = await chat.sendMessage(prompt);
      let text = await result.response.text();

      text = text.trim().replace(/^```json\s*|```$/g, "");

      try {
        const json = JSON.parse(text);
        setaiGeneratedSummaryList(json);
      } catch (parseError) {
        console.error("Parsing error:", parseError);
        toast("AI response could not be parsed as JSON");
      }
    } catch (error) {
      console.error("Error generating summary:", error);
      toast("Failed to generate summary from AI");
    }

    setLoading(false);
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: {
        summary: summary,
      },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data)
      .then((resp) => {
        enableNext(true);

        // ✅ Update context with new summary
        setResumeInfo({
          ...resumeInfo,
          summary: summary,
        });

        toast("Details updated successfully");
      })
      .catch((error) => {
        console.error("Save error:", error);
        toast("Failed to save summary");
      })
      .finally(() => setLoading(false));
  };

  const groupedSummaries = {
    Senior: [],
    Mid: [],
    Fresher: [],
  };

  aiGeneratedSummaryList.forEach((item) => {
    const level = item.experience_level?.toLowerCase();
    if (level.includes("senior")) groupedSummaries.Senior.push(item);
    else if (level.includes("mid")) groupedSummaries.Mid.push(item);
    else if (level.includes("fresher")) groupedSummaries.Fresher.push(item);
  });

  return (
    <div>
      {/* Summary Input Section */}
      <div className="p-5 shadow-lg rounded-lg border-t-violet-500 border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add summary for your job title</p>
        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label htmlFor="">Add Summary</label>
            <Button
              variant="outline"
              size="sm"
              className="border border-violet-600 text-violet-600 flex gap-2"
              type="button"
              onClick={GenerateSummaryFromAI}
              disabled={loading}
            >
              <Brain className="h-4 w-4" /> Generate from AI
            </Button>
          </div>

          <Textarea
            className="mt-5"
            required
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />

          <div className="flex justify-end mt-2">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {/* AI Suggestions Section */}
      {aiGeneratedSummaryList.length > 0 && (
        <div className="mt-10 p-5 shadow-md rounded-lg border space-y-6">
          <h2 className="font-bold text-lg mb-2">AI Suggestions</h2>

          {["Senior", "Mid", "Fresher"].map(
            (level) =>
              groupedSummaries[level].length > 0 && (
                <div key={level}>
                  <h3 className="font-semibold text-violet-700 mb-2">
                    {level} Level:
                  </h3>
                  <div className="max-h-40 overflow-y-auto space-y-2 pr-1 border rounded-md p-2 bg-violet-50/30">
                    {groupedSummaries[level].map((item, index) => (
                      <div
                        key={index}
                        className="p-3 border border-violet-300 rounded-lg bg-white shadow-sm hover:bg-violet-50 cursor-pointer transition"
                        onClick={() => setSummary(item.summary)}
                      >
                        <p className="text-sm text-gray-700 leading-snug">
                          {item.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Summary;

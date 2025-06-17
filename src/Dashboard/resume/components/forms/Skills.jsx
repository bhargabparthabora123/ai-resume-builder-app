import React from "react";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import "@smastrom/react-rating/style.css";
import { toast } from "sonner";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";        
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import GlobalApi from "./../../../../../service/GlobalApi";
import { getAIChatSession } from "./../../../../../service/AIModel";
import { useUser } from "@clerk/clerk-react"; 
import { useNavigate } from "react-router-dom";

function Skills() {
  const [skillsList, setSkillsList] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const {resumeId} = useParams();

   const [loading, setLoading] = useState(false);
    const AddNewSkills = () => {
        setSkillsList([...skillsList,
            {
                name: "",
                rating: 0
            }
        ])
    }

    const RemoveSkills = () => {

        setSkillsList(skillsList=>skillsList.slice(0, -1));

    }

    const onSave = async () => {
      setLoading(true);
      const data ={
           data:{
            skills: skillsList
           }

      }
      GlobalApi.UpdateResumeDetail( resumeId, data ).then(resp=>{
        console.log(resp);
        setLoading(false);
        toast.success("Skills saved successfully!");
      },(error)=>{
        setLoading(false);
        console.log("error updating resume", error);
        toast.error("Failed to save skills.");
      })
    }


    useEffect(() => {

        setResumeInfo({
            ...resumeInfo,
            skills: skillsList
        })
    },[skillsList])

  const handleChange = (index, name, value) => {

      const newEntries = skillsList.slice();
  
    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-violet-500 border-t-4 mt-10">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add your top professional key skills</p>

      <div>
        {skillsList.map((item, index) => (
          <div className="flex  justify-between mb-2 border rounded-lg p-3 ">
            <div>
              <label className="text-xs">Name</label>
              <Input
                className="w-full"
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
            </div>
            <Rating
              style={{ maxWidth: 120 }}
              value={item.rating}
              onChange={(v) => handleChange(index, "rating", v)}
            />
          </div>
        ))}
      </div>
     
    <div className="flex justify-between">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="text-green-600"
                  onClick={AddNewSkills}
                >
                  + Add More Skills
                </Button>
                <Button
                  variant="outline"
                  className="text-green-600"
                  onClick={RemoveSkills}
                >
                  - Remove Skills
                </Button>
              </div>
              <div className="mt-3 flex justify-end">
                <Button type="button" disabled={loading} onClick={onSave}>
                  {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
                </Button>
              </div>
            </div>

    </div>
  );
}

export default Skills;

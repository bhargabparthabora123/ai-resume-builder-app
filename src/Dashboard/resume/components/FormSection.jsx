import React, { useContext } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Summary from "./forms/Summary";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";
import { Navigate, useParams } from "react-router";
import ThemeColor from "./ThemeColor";


function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext,setEnableNext]=useState(false)
  const {resumeId}=useParams()
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* <Button variant="outline2" size="sm" className="flex gap-2">
          <LayoutGrid />
          Theme
        </Button> */}
        <ThemeColor/>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />{" "}
            </Button>
          )}
          <Button
          disabled={!enableNext}
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>
      {/* PERSONAL DETAILS */}

            {activeFormIndex == 1 ? <PersonalDetail  enableNext={(v)=>

              setEnableNext(v)
      }/> 
    :activeFormIndex==2?
    <Summary enableNext={(v)=>

      setEnableNext(v)
}/>:
    activeFormIndex==3?
    <Experience/>

    :activeFormIndex==4?
    <Education />

    :activeFormIndex==5?
    <Skills/>

    :activeFormIndex==6?
    <Navigate to={'/my-resume/'+resumeId+'/view'}/>
    :null
    
    
    }

      {/* summary */}


      {/* experience */}

      {/* educational detail */}

      {/* skills */}
    </div>
  );
}

export default FormSection;

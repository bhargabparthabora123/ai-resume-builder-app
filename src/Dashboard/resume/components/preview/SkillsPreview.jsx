import React from "react";

function SkillsPreview({ resumeInfo} ) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: '#EF4444' ,
        }}
      >
       Skills
      </h2>

      <hr
        style={{
          borderColor: '#EF4444' ,
        }}
      />
    <div className="grid grid-cols-2 gap-3 my-4">
        {resumeInfo?.skills.map((skill,index)=>(
            <div key={index} className="flex items-center justify-between my-2">
                <h2 className="text-xs font-bold">{skill?.name}</h2>
                <div className="h-2 bg-gray-200 w-[120px]">
                    <div className="h-2" 
                    style={{
                        backgroundColor: '#EF4444' ,//changed
                        width: skill?.rating*20 + "%"
                    }}></div>
                </div>
            </div>
        ))}
    </div>

    </div>
  );
}

export default SkillsPreview;

import React, { useEffect } from "react";
import { useContext } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router";
import { useState } from "react";
import GlobalApi from "./../../../../../service/GlobalApi";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

function PersonalDetail({ enableNext }) {
  const params = useParams();

  
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  
  const [formData, setFormData] = useState();
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(params);
  }, []);

  
  
  const handleInputChange = (e) => {
    enableNext(false);

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  
  };
  
  
  useEffect(() => {
  // Enable Next button when component loads
  enableNext(true);

  // Initialize formData with existing resume info
  // setFormData(resumeInfo);
}, []);

  const onSave = (e) => {
    e.preventDefault();
    enableNext(true);
    setLoading(true);
    const data = {
      data: formData,
    };
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enableNext(true);
        setLoading(false);
        toast.success("Details updated successfully")

      },
      (error) => {
        setLoading(false);
        console.log("error updating resume", error);
        toast.error("Failed to save personal details.");
      }
    );
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-violet-500 border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get started with basic information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 gap-3 mt-5">
          <div>
            <label className="text-sm">First Name</label>
            <Input name="firstName" required defaultValue={resumeInfo?.firstName} onChange={handleInputChange} />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input name="lastName" required defaultValue={resumeInfo?.lastName} onChange={handleInputChange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input name="jobTitle" required defaultValue={resumeInfo?.jobTitle} onChange={handleInputChange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input name="address" required defaultValue={resumeInfo?.address} onChange={handleInputChange} />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input name="phone" required defaultValue={resumeInfo?.phone} onChange={handleInputChange} />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <Input name="email" required defaultValue={resumeInfo?.email} onChange={handleInputChange} />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;

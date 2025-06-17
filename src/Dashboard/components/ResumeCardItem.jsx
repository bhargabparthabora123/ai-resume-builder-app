import React from "react";
import { Loader2Icon, MoreVertical, Notebook } from "lucide-react";
import { useState } from "react";
// import { toast } from "react-hot-toast";
// import GlobalApi from "@/service/GlobalApi";
import { useNavigate } from "react-router-dom";
import GlobalApi from './../../../service/GlobalApi'
import { toast } from 'sonner'
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
function ResumeCardItem({ resume ,refreshData}) {
  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  // const onMenuClick=(url)=>{
  //   navigation(url)
  // }

  const onDelete=()=>{
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(resp=>{
      console.log(resp);
      toast('Resume Deleted!');
      refreshData()
      setLoading(false);
      setOpenAlert(false);
    },(error)=>{
      setLoading(false);
    })
  }
  return (
    <div className=" hover:scale-105 transition-all hover:shadow-md shadow-violet-400 cursor-pointer rounded-lg">
      <Link to={"/dashboard/resume/" + resume.documentId + "/edit"}>
        <div>
          <div
            className="p-14 border-t-red-500  bg-conic-180 from-indigo-400 via-indigo-50 to-indigo-400
          flex items-center justify-center h-[280px] bg-gray-200 border-2 border-violet-300 rounded-lg
            hover:scale-105 transition-all hover:shadow-md shadow-violet-400 cursor-pointer"
          >
            {/* <Notebook /> */}
            <img src="./cv.jpg" width={60} height={60} />
          </div>

          {/* <h2 className="text-center my-1">{resume.Title}</h2> */}
        </div>
      </Link>
      <div
        className="border p-3 flex justify-between  text-white rounded-b-lg shadow-lg"
        style={{
          borderColor: "#EF4444",
          backgroundColor: "#EF4444",
        }}
      >
        <h2 className="text-sm">{resume.Title}</h2>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-4 w-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() =>
                navigation("/dashboard/resume/" + resume.documentId + "/edit")
              }
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigation("/my-resume/" + resume.documentId + "/view")
              }
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigation("/my-resume/" + resume.documentId + "/view")
              }
            >
              Download
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenAlert(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="hover:bg-red-600" onClick={() => setOpenAlert(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} disabled={loading}>
                {loading ? <Loader2Icon className="animate-spin" /> : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default ResumeCardItem;

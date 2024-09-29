import React from "react";
// import { useUser } from "@clerk/clerk-react";
import { useHomestayRecord } from "../../contexts/homestay.context";
import AddRecordForm from "./AddRecordForm";
import { HomestayRecordTable } from "../dashboard/Homestay.Record.Table"

const Dashboard = () => {
    return (
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <div className="text-center text-4xl md:text-5xl md:leading-snug font-bold  my-2">
            Welcome {user?.firstName}! Here are the homestay:    
        </div> 
        <AddRecordForm />
        <HomestayRecordTable />
      </div>
    );
};

export default Dashboard;

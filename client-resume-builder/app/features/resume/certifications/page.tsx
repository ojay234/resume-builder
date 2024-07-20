import React from "react";
import Sidebar from "@/components/page-sections/builder/Sidebar";
import CertificateSummary from "./CertificateSummary";

function CertificationsPage() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="md:ml-[20%] w-full">
        <CertificateSummary />
      </div>
    </div>
  );
}

export default CertificationsPage;

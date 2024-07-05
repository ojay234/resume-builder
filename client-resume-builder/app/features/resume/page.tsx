import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-center font-bold text-3xl">
        How would you like to start
      </h1>
      <div className="flex mx-auto gap-6">
        <Link
          href="/features/resume/templates"
          className="flex flex-col gap-2 items-center justify-center p-4 rounded-lg border-2"
        >
          <h4>Build a New Resume</h4>
          <p>We will guide you through each section</p>
        </Link>
        <Link
          href="/features/resume/templates"
          className="flex flex-col gap-2 items-center justify-center p-4 rounded-lg border-2"
        >
          <h4>Build a New Resume</h4>
          <p>We will guide you through each section</p>
        </Link>
      </div>
    </div>
  );
}

export default page;

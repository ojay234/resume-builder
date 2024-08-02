"use client";
import templates from "@/data/templates";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center font-bold text-3xl">choose your template</h1>
      <div className="flex gap-8 flex-wrap">
        {templates.map((temp, index) => (
          <div
            key={index}
            className="cusor-pointer hover:border-2 border-gray-500 w-fit"
          >
            <Link href="/features/resume/personal-details">
              <Image
                src={temp.imgSrc}
                width={400}
                height={600}
                alt={temp.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;

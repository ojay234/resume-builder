import Header from "@/components/page-sections/builder/Header";
import React from "react";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section
      className="px-10
    "
    >
      <Header />
      <div>{children}</div>
    </section>
  );
}

export default layout;

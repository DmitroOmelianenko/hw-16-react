import React from "react";

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "20px" }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;

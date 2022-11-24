import React from "react";

export default function Footer() {
  return (
    <footer
      className="
             fixed
             inset-x-0
             bottom-0
             h-12
             p-0"
    >
      <div className="text-center bg-gray-900 text-white ">
        <div className="text-center p-4">
          © 2022 Copyright:
          <a className="text-white" href="https://www.ludmilpaulo.com/">
            Designed by Ludmil Paulo
          </a>
        </div>
      </div>
    </footer>
  );
}

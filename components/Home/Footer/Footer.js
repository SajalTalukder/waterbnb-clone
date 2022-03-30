import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-5 py-10 text-gray-800">
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[77%] mx-auto">
        <div>
          <p className="font-bold text-md uppercase mb-2">About</p>
          <p className="footerLink">Not affiliated with Airbnb</p>
          <p className="footerLink">Demo Build</p>
          <p className="footerLink">For educational</p>
          <p className="footerLink">And portfolio</p>
          <p className="footerLink"> Purposes</p>
        </div>
        <div>
          <p className="font-bold text-md uppercase mb-2">MySelf</p>
          <p className="footerLink">Sajal Talukder</p>
          <p className="footerLink">Fontend Developer</p>
          <p className="footerLink">React Developer</p>
          <p className="footerLink">Next Js Developer</p>
          <p className="footerLink"> JavaScript</p>
        </div>
        <div>
          <p className="font-bold text-md uppercase mb-2">Technology</p>
          <p className="footerLink">React</p>
          <p className="footerLink">Next Js</p>
          <p className="footerLink">Tailwind Css</p>
          <p className="footerLink">Mapbox</p>
          <p className="footerLink">Hero Icon</p>
        </div>
        <div>
          <p className="font-bold text-md uppercase mb-2">SUPPORT</p>
          <p className="footerLink">How AirBnb work</p>
          <p className="footerLink">Newsroom</p>
          <p className="footerLink">Help</p>
          <p className="footerLink">AirBnb plus</p>
          <p className="footerLink"> Help center</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

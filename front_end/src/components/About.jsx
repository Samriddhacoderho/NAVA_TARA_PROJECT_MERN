import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row border border-gray-200 rounded-lg shadow-lg w-full">
        <img
          className="w-full md:w-1/2 h-64 md:h-auto object-cover"
          src="https://www.faulkner.edu/wp-content/uploads/Male-teacher-sitting-with-elementary-students-and-drawing.jpg"
          alt="Login Page"
        />
        <div className="p-6 md:w-1/2 flex flex-col justify-center">
          <div className="min-h-screen flex items-start justify-center">
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About Us
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium consectetur reiciendis, tempora fuga error
                blanditiis? Voluptatem, aliquam quia quam non qui porro
                inventore cumque dicta debitis sequi fuga voluptatum numquam,
                commodi blanditiis maiores dolorum iure odit repudiandae
                temporibus delectus aut autem amet! Iure, saepe necessitatibus
                obcaecati placeat expedita provident, architecto blanditiis
                praesentium consequatur, minima recusandae! Voluptate excepturi,
                quod quo sequi molestias numquam cumque neque! Fuga quod ipsum
                dignissimos repellat, architecto rem, ab quasi consequuntur quo
                dolorum esse? Placeat delectus sint unde accusamus qui,
                consectetur soluta ut ratione libero corrupti repellat autem,
                quam magnam eaque quisquam. Dolore labore quod illo excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

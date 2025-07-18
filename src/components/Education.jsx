import React from 'react'

function Education() {
  return (
    <div id="education" className="py-16 px-4 md:px-24 bg-gradient-to-b text-white">
      <h3 className="text-3xl font-bold text-center mb-12 text-violet-500">
        Education
      </h3>

      <div className="space-y-8 max-w-3xl mx-auto">
        <div className="flex items-start">
          <span className="border-2 border-violet-500 text-violet-600 px-4 py-2 rounded-md mr-4 font-semibold whitespace-nowrap">
            2015 - 2019
          </span>
          <p className="text-lg mt-2">
            Bachelors in Mechanical Engineering, <strong>JNTU Kakinada</strong>.
          </p>
        </div>

        <div className="flex items-start">
          <span className="border-2 border-violet-500 text-violet-600 px-4 py-2 rounded-md mr-4 font-semibold whitespace-nowrap">
            2013 - 2015
          </span>
          <p className="text-lg mt-2">
            Secondary Higher Education, <strong>State Board, Andhra Pradesh</strong>.
          </p>
        </div>
      </div>
    </div>

  )
}

export default Education

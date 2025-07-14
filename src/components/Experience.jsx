import React from 'react'

function Experience() {
    return (
        <div id="experience" className="py-16 px-4 md:px-24 bg-gradient-to-b from-indigo-100 via-white to-violet-100  text-gray-900">
            <h3 className="text-3xl font-bold text-center mb-12 text-violet-500">
                Experience
            </h3>

            <div className="relative border-l-4 border-blue-500 pl-6 space-y-10 max-w-2xl mx-auto">

                {/* First Experience */}
                <div className="relative">
                    <div className="absolute -left-[0.65rem] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                    <p className="text-sm text-violet-500 font-semibold">2022 - Present</p>
                    <p className="text-sm font-medium">
                        <strong className='text-violet-500 text-lg'>Software Associate</strong><br />
                        Hyderabad · I developed 15+ reusable Angular components to speed up
                        development and improve maintainability. Implemented RBAC and MFA (via Twilio) to enhance security,
                        cutting unauthorized access by 40%. Optimized MySQL queries with Liquibase, improving API performance by 75%, and automated CI/CD pipelines in Azure DevOps to reduce deployment time and errors.
                    </p>
                </div>

                {/* Second Experience */}
                <div className="relative">
                    <div className="absolute -left-[0.65rem] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                    <p className="text-sm text-violet-500 font-semibold">2020 - 2022</p>
                    <p className="text-sm font-medium">
                        <strong className='text-violet-500 text-lg'>Software Intern</strong><br />
                        Vijayawada · Worked on Java backend systems and gained foundational experience in REST APIs and database integration.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Experience

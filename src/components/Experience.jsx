import React from 'react';
import { FaBuilding, FaAward } from 'react-icons/fa';

function Experience() {
    return (
        <div id="experience" className="py-16 px-4 md:px-24 bg-gradient-to-b text-white">
            <h3 className="text-3xl font-bold text-center mb-12 text-violet-500">
                Experience
            </h3>
            <div className="relative border-l-4 border-blue-500 pl-6 space-y-10 max-w-2xl mx-auto">
                {/* First Experience */}
                <div className="relative animate-fade-in">
                    <div className="absolute -left-[0.65rem] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-black"></div>
                    <div className="flex items-center gap-2 mb-1">
                        <FaBuilding className="text-blue-500" />
                        <span className="text-sm text-violet-500 font-semibold">2022 - Present</span>
                    </div>
                    <p className="text-sm font-medium">
                        <strong className='text-violet-500 text-lg'>Software Associate</strong> <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs ml-2">System Soft Technologies</span><br />
                        Hyderabad · I developed 15+ reusable Angular components to speed up development and improve maintainability. <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"><FaAward /> RBAC & MFA (Twilio)</span> to enhance security, cutting unauthorized access by 40%. Optimized MySQL queries with Liquibase, improving API performance by 75%, and automated CI/CD pipelines in Azure DevOps to reduce deployment time and errors.
                    </p>
                </div>
                {/* Second Experience */}
                <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="absolute -left-[0.65rem] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-black"></div>
                    <div className="flex items-center gap-2 mb-1">
                        <FaBuilding className="text-blue-500" />
                        <span className="text-sm text-violet-500 font-semibold">2020 - 2022</span>
                    </div>
                    <p className="text-sm font-medium">
                        <strong className='text-violet-500 text-lg'>Software Intern</strong> <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs ml-2">Internship</span><br />
                        Vijayawada · Worked on Java backend systems and gained foundational experience in REST APIs and database integration.
                    </p>
                </div>
            </div>
            <style>{`
                @keyframes fade-in {
                  0% { opacity: 0; transform: translateY(20px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                  animation: fade-in 0.8s ease;
                }
            `}</style>
        </div>
    );
}

export default Experience;

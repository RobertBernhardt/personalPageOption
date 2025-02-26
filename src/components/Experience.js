// Experience.js - Experience section component

const Experience = () => {
    const experiences = [
      {
        role: "Founder",
        company: "Joridiro",
        location: "Ulm",
        period: "2022 - 2023",
        description: "Founded and led my second startup venture, applying lessons learned from previous entrepreneurial experiences. Developed business strategies, managed operations, and navigated the challenges of building a company from the ground up.",
        achievements: [
          "Developed and launched a scalable product within a competitive market",
          "Managed cross-functional teams including development, design, and marketing",
          "Created sustainable business models and revenue strategies"
        ],
        skills: ["Leadership", "Business Strategy", "Product Development"],
        color: "blue"
      },
      {
        role: "Project Management",
        company: "Pierre Guerin",
        location: "Ulm",
        period: "2021 - 2022",
        description: "Managed complex projects requiring meticulous attention to detail and coordination across multiple stakeholders. Implemented effective project management methodologies to ensure timely deliveries and quality outcomes.",
        achievements: [
          "Successfully delivered multiple high-stakes projects under tight deadlines",
          "Improved project workflow efficiency by implementing agile methodologies",
          "Facilitated effective communication between technical teams and business stakeholders"
        ],
        skills: ["Project Planning", "Stakeholder Management", "Process Optimization"],
        color: "amber"
      },
      {
        role: "Founder",
        company: "Tourio",
        location: "Berlin",
        period: "2017 - 2020",
        description: "Launched and operated my first startup venture, gaining invaluable experience in entrepreneurship. Managed all aspects of the business including product development, marketing, user acquisition, and financial planning.",
        achievements: [
          "Secured seed funding and managed investor relations",
          "Built and led a team of 5 employees through various growth stages",
          "Developed market entry strategies and product-market fit analyses"
        ],
        skills: ["Entrepreneurship", "Marketing", "Business Development"],
        color: "blue"
      },
      {
        role: "Event Management",
        company: "OlympiaLust",
        location: "Munich",
        period: "2016 - 2017",
        description: "Coordinated and executed various events, ensuring seamless operations and exceptional attendee experiences. Managed logistics, vendor relationships, and promotional activities.",
        achievements: [
          "Successfully managed events with 500+ attendees",
          "Developed promotional strategies that increased attendance by 35%",
          "Negotiated with vendors to optimize costs while maintaining quality"
        ],
        skills: ["Event Planning", "Logistics", "Team Coordination"],
        color: "slate"
      }
    ];
    
    return (
      <section id="experience" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-12 text-center">My Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
            
            {/* Experience cards */}
            <div className="space-y-12 relative">
              {experiences.map((exp, index) => (
                <div key={`${exp.company}-${exp.period}`} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className={`w-5 h-5 rounded-full bg-white border-4 border-${exp.color}-500 z-10`}></div>
                  </div>
                  
                  {/* Year tag on mobile */}
                  <div className="md:hidden mb-3 bg-slate-200 text-slate-800 inline-block px-4 py-1 rounded-full text-sm font-medium w-fit">
                    {exp.period}
                  </div>
                  
                  {/* Card */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="card bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500 hover:border-blue-600 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                          <p className="text-blue-600">{exp.company}, {exp.location}</p>
                        </div>
                        <div className="hidden md:block bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-slate-700 mb-4">{exp.description}</p>
                      
                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-slate-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {exp.company === "Tourio" && (
                        <div className="mt-4 text-sm text-slate-500 italic joke-text">
                          Survived my first startup without <span className="crossed-out">too much</span> emotional damage.
                        </div>
                      )}
                      {exp.company === "Pierre Guerin" && (
                        <div className="mt-4 text-sm text-slate-500 italic joke-text">
                          Discovered that Gantt charts are both the solution and cause of project management problems.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
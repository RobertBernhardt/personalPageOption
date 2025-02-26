// Skills.js - Skills section component

const Skills = () => {
    const skillCategories = [
      {
        title: "Entrepreneurship",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        skills: [
          { name: "Business Strategy", level: 90 },
          { name: "Organization & Management", level: 85 },
          { name: "Finding Creative Solutions", level: 95 },
          { name: "Strategic Thinking", level: 90 }
        ],
        description: "Built and managed two companies from the ground up, handling everything from strategy to day-to-day operations."
      },
      {
        title: "Development",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        ),
        skills: [
          { name: "Full-Stack Development", level: 70, note: "self-taught amateur" },
          { name: "Web Design", level: 75 },
          { name: "AI Prompting", level: 95, note: "expert level" },
          { name: "Product Management", level: 80, note: "learning" }
        ],
        description: "Self-taught developer with experience in creating web applications and leveraging AI tools to enhance productivity."
      },
      {
        title: "Communication",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        ),
        skills: [
          { name: "Writing", level: 90 },
          { name: "Effective Communication", level: 85 },
          { name: "Social Media", level: 75 },
          { name: "Content Creation", level: 85 }
        ],
        description: "Published author with a knack for clear communication and engaging content creation across multiple platforms."
      },
      {
        title: "Business Operations",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        skills: [
          { name: "Bookkeeping", level: 75 },
          { name: "Project Management", level: 85 },
          { name: "Marketing", level: 70 },
          { name: "Customer Relations", level: 80 }
        ],
        description: "Experienced in managing the operational aspects of business, from financial tracking to project execution and customer engagement."
      }
    ];
    
    const [activeCategory, setActiveCategory] = React.useState(0);
    
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Categories navigation */}
            <div className="md:w-1/4">
              <div className="bg-slate-50 rounded-xl p-4 sticky top-20">
                <h3 className="text-lg font-bold mb-4 text-slate-800">Categories</h3>
                <div className="space-y-2">
                  {skillCategories.map((category, index) => (
                    <button
                      key={category.title}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-all ${
                        activeCategory === index 
                          ? "bg-blue-100 text-blue-800" 
                          : "text-slate-600 hover:bg-slate-200"
                      }`}
                      onClick={() => setActiveCategory(index)}
                    >
                      <div className="mr-3 text-blue-600">
                        {React.cloneElement(category.icon, { 
                          className: `h-5 w-5 ${activeCategory === index ? "text-blue-600" : "text-slate-400"}`
                        })}
                      </div>
                      <span>{category.title}</span>
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800 joke-text">
                    Skills self-assessed with only moderate delusion inflation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Skills display */}
            <div className="md:w-3/4">
              <div className="bg-white rounded-xl">
                <div className="flex items-center mb-6">
                  {React.cloneElement(skillCategories[activeCategory].icon, { className: "h-10 w-10 text-blue-600 mr-3" })}
                  <h3 className="text-2xl font-bold text-slate-900">{skillCategories[activeCategory].title}</h3>
                </div>
                
                <p className="text-slate-700 mb-8">{skillCategories[activeCategory].description}</p>
                
                <div className="space-y-6">
                  {skillCategories[activeCategory].skills.map((skill) => (
                    <div key={skill.name} className="card p-4 border border-slate-200 rounded-lg hover:border-blue-200">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-slate-800">{skill.name}</h4>
                          {skill.note && (
                            <span className="text-xs text-slate-500 italic">{skill.note}</span>
                          )}
                        </div>
                        <span className="text-blue-600 font-medium">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {activeCategory === 1 && (
                  <div className="mt-8 p-5 bg-slate-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-slate-800 mb-2">Tech Stack Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "React", "Node.js", "HTML/CSS", "Tailwind CSS", "Python", "SQL", "Git", "AI Tools"].map(tech => (
                        <span key={tech} className="bg-white text-slate-700 px-3 py-1 rounded-md shadow-sm text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
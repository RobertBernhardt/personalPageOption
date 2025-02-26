// CurrentProjects.js - Current projects section component

const CurrentProjects = () => {
    const projects = [
      {
        title: "Web Projects",
        description: "Creating a portfolio of web applications that showcase my technical skills and provide practical value to users.",
        status: 70,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        ),
        tasks: [
          { text: "E-commerce platform for digital products", completed: true },
          { text: "Interactive data visualization tools", completed: false },
          { text: "AI-assisted writing application", completed: false },
          { text: "Personal portfolio website", completed: true }
        ],
        quirk: "The portfolio website is this one. Yes, I'm building a website about building websites. It's very meta."
      },
      {
        title: "Product Management",
        description: "Developing expertise in product management to better bridge the gap between business objectives and technical implementation.",
        status: 45,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        ),
        tasks: [
          { text: "Product management certification", completed: false },
          { text: "User research methodologies", completed: true },
          { text: "Agile project management", completed: true },
          { text: "Product roadmap development", completed: false }
        ],
        quirk: "Turns out that 'move fast and break things' doesn't apply when you're the one fixing what breaks."
      },
      {
        title: "Social Media Presence",
        description: "Building a cohesive and engaging online presence to share insights, promote books, and connect with like-minded individuals.",
        status: 60,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        ),
        tasks: [
          { text: "Content strategy development", completed: true },
          { text: "Regular blog posts on Substack", completed: true },
          { text: "Twitter engagement growth", completed: false },
          { text: "Cross-platform content syndication", completed: false }
        ],
        quirk: "I've learned that the most engaging content is often the result of 3AM thoughts I had no intention of sharing."
      }
    ];
    
    return (
      <section id="current-projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 text-center">Currently Working On...</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Because apparently I didn't think two startups and four books were enough to keep me busy
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="card bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
                {/* Progress bar */}
                <div className="h-2 bg-slate-100">
                  <div 
                    className="h-full bg-blue-500"
                    style={{ width: `${project.status}%` }}
                  ></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-lg bg-blue-50 mr-4">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                      <div className="text-blue-600 text-sm">
                        {project.status}% complete
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-6">{project.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {project.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
                          task.completed ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
                        }`}>
                          {task.completed ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm ${task.completed ? "text-slate-700" : "text-slate-600"}`}>
                          {task.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-sm text-slate-500 italic joke-text border-t border-slate-100 pt-4">
                    {project.quirk}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block bg-blue-50 px-6 py-3 rounded-lg">
              <p className="text-blue-800">
                <span className="font-bold">Pro tip:</span> Want to follow my journey? Connect with me on social media for regular updates, occasional wisdom, and <span className="italic">frequent</span> moments of self-deprecating humor.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
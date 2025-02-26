// ValueProposition.js - Value proposition section component

const ValueProposition = () => {
    const values = [
      {
        title: "Cross-Domain Problem Solver",
        description: "My unique background spanning business, technology, and creative writing allows me to see connections others miss. I approach challenges from multiple angles, bringing a fresh perspective to your projects.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        points: [
          "Translate complex business requirements into practical technical solutions",
          "Identify unconventional approaches to persistent problems",
          "Connect strategic vision with tactical execution"
        ]
      },
      {
        title: "Entrepreneurial Experience",
        description: "Having founded and operated two companies, I understand the full business lifecycle. I bring a founder's mindset to every project, balancing innovation with practical implementation.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        points: [
          "Launch new initiatives with an eye for both short-term wins and long-term sustainability",
          "Navigate uncertainty and adapt strategies based on evolving market conditions",
          "Identify and prioritize high-impact actions that drive meaningful results"
        ]
      },
      {
        title: "Communication & Storytelling",
        description: "As a published author and effective communicator, I excel at articulating complex ideas in compelling ways. I can translate your vision into engaging narratives that resonate with your audience.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        ),
        points: [
          "Craft compelling content that drives engagement and conversions",
          "Distill complex concepts into clear, actionable insights",
          "Develop consistent brand messaging across multiple channels"
        ]
      },
      {
        title: "Technical & AI Implementation",
        description: "My self-taught technical background combined with expert-level AI prompting skills positions me uniquely to leverage emerging technologies for business advantage.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        points: [
          "Integrate AI tools into existing workflows to boost productivity",
          "Develop custom web solutions that solve specific business problems",
          "Identify strategic opportunities for technology implementation"
        ]
      }
    ];
    
    const testimonials = [
      {
        quote: "Robert brings a unique blend of business acumen and technical insight that helped us reimagine our entire approach to customer engagement.",
        author: "Julia Schneider",
        position: "Marketing Director, TechVision GmbH"
      },
      {
        quote: "Working with Robert was transformative for our team. His ability to see the big picture while executing on the details made our product launch a success.",
        author: "Markus Weber",
        position: "Product Lead, Innovative Solutions"
      }
    ];
    
    return (
      <section id="why-me" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 text-center">Why Work With Me</h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-16">
            My diverse background and unique skillset allow me to deliver value across multiple domains, combining strategic thinking with practical implementation.
          </p>
          
          {/* Value cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={value.title} className="card bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-500 hover:border-blue-600 transition-all">
                <div className="flex items-start mb-6">
                  <div className="p-3 rounded-lg bg-blue-50 mr-4">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6">{value.description}</p>
                
                <ul className="space-y-3">
                  {value.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Results section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">What You Can Expect</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Accelerated Growth</h4>
                <p className="text-slate-600">Strategic insights and practical implementations that drive measurable business results.</p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Innovative Solutions</h4>
                <p className="text-slate-600">Fresh perspectives and creative approaches to persistent challenges.</p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Clear Communication</h4>
                <p className="text-slate-600">No jargon, no confusion—just clear communication and transparent progress updates.</p>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="bg-blue-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">What Others Say</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className="text-lg mb-6">{testimonial.quote}</p>
                  
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-blue-200">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300"
              >
                Ready to Collaborate?
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
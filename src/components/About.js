// About.js - About section component

const About = () => {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Profile Card */}
            <div className="lg:w-1/3">
              <div className="card bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg p-6 text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-blue-100"></div>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center text-white text-6xl font-bold">
                    RB
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Robert Bernhardt</h3>
                <p className="text-slate-600 mb-4">Business Admin graduate turned entrepreneur and author</p>
                
                <div className="flex justify-center space-x-3 mb-4">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Founder</div>
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">Author</div>
                  <div className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">Dev</div>
                </div>
                
                <div className="text-sm text-slate-500">
                  <p className="mb-1">Based in Germany</p>
                  <p>Building since 2017</p>
                </div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">My Story</h3>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  I graduated from LMU Munich with a Business Administration degree (with a minor in Organizational Psychology) back in 2015, but I've never been the typical "business guy." I continued my education with courses in Computer Science, Political Science, Communication Science, and Sociology until 2017, building a uniquely multidisciplinary foundation.
                </p>
                
                <p>
                  After university, I managed events at OlympiaLust in Munich (2016-2017) before taking the entrepreneurial plunge. I've founded two companies - Tourio in Berlin (2017-2020) and Joridiro in Ulm (2022-2023). Let's just say I've collected enough startup battle scars to write a <span className="joke-text">therapy journal</span> business memoir. Both ventures taught me invaluable lessons about business development, user-centered design, and market fit.
                </p>
                
                <p>
                  Between startup adventures, I worked in project management at Pierre Guerin (2021-2022), which taught me what <span className="crossed-out">corporate frustration</span> structured processes look like. This experience refined my approach to organizational efficiency and client relationships.
                </p>
                
                <p>
                  Recently, I've embraced my creative side and published several books, exploring themes around urban development, speculative futures, and the interplay between humor and society. When I'm not writing, I'm building web projects, honing my product management skills, and pretending I know what I'm doing on social media.
                </p>
                
                <p>
                  I'm a self-taught <span className="joke-text">barely functional</span> full-stack developer and have somehow achieved expert-level AI prompting skills (which probably says more about the low bar than my abilities). My technical knowledge spans web development, automation tools, and creative problem-solving approaches that bridge business needs with technological solutions.
                </p>
              </div>
              
              <div className="mt-8 p-4 bg-slate-100 rounded-lg border-l-4 border-blue-500">
                <p className="italic text-slate-600">
                  "I'm fascinated by the intersection of technology, creativity, and business. My diverse background gives me a unique perspective on problem-solving that doesn't fit neatly into conventional boxes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
// Hero.js - Hero section component

const Hero = () => {
    const [textIndex, setTextIndex] = React.useState(0);
    const textOptions = [
      "entrepreneur",
      "amateur full-stack dev",
      "author",
      "problem solver",
      "founder × 2",
      "AI prompt engineer"
    ];
    
    React.useEffect(() => {
      const interval = setInterval(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
      }, 3000);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <section id="top" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-16 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-16 w-96 h-96 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h4 className="text-blue-400 text-xl mb-2">
              <span className="code-text text-amber-400">{">"}</span> Hello, World!
            </h4>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              I'm Robert Bernhardt
            </h1>
            
            <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6 min-h-[2.5rem]">
              <span className="highlight-cursor">{textOptions[textIndex]}</span>
            </h2>
            
            <h3 className="text-xl sm:text-2xl text-amber-400 font-semibold mb-4">
              Bridging Business, Technology & Creativity
            </h3>
            
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Business founder turned writer with a knack for spotting problems and 
              <span className="crossed-out mx-1">overthinking</span>
              <span className="text-white"> finding creative solutions</span>. I help businesses and individuals navigate 
              the intersection of technology, strategy, and communication to create meaningful impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#why-me" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Why Work With Me
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-400 hover:text-white hover:bg-blue-700 font-medium rounded-lg transition-all duration-300"
              >
                Get in Touch
              </a>
              <a 
                href="https://robvadis.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border border-amber-500 text-amber-400 hover:text-white hover:bg-amber-600 font-medium rounded-lg transition-all duration-300"
              >
                Read My Blog
              </a>
            </div>
            
            {/* Social links */}
            <div className="mt-10 flex space-x-6">
              <a href="mailto:Robert.Bernhardt93@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://x.com/ro_bernhardt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://robvadis.substack.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8m-2 12h-9a2 2 0 01-2-2v-6a2 2 0 012-2h9a2 2 0 012 2v6a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
          <div className="float flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    );
  };
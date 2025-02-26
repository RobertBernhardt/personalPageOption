// Navbar.js - Navigation component

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    
    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/90 py-2 backdrop-blur-md" : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#top" className="text-xl sm:text-2xl font-bold tracking-tighter">
            <span className="text-white">Robert</span>
            <span className="text-blue-400">.dev</span>
            <span className="code-text text-amber-400">()</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Skills', 'Why Me', 'Books', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item === 'Why Me' ? 'why-me' : item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? "text-white" : "text-white"} bg-blue-600 p-2 rounded-md shadow-md hover:bg-blue-700 transition-colors`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 shadow-lg">
            <div className="container mx-auto px-4 py-3">
              {['About', 'Experience', 'Skills', 'Why Me', 'Books', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item === 'Why Me' ? 'why-me' : item.toLowerCase()}`}
                  className="block py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  };
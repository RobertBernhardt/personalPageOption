// Footer.js - Footer component

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-slate-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold tracking-tighter mb-2">
                <span className="text-white">Robert</span>
                <span className="text-blue-400">.dev</span>
                <span className="code-text text-amber-400">()</span>
              </div>
              <p className="text-slate-400 max-w-md">
                Entrepreneur, writer, and self-taught developer with a passion for exploring the intersection of technology, creativity, and business.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-3 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  {['About', 'Experience', 'Skills', 'Why Me', 'Books', 'Contact'].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item === 'Why Me' ? 'why-me' : item.toLowerCase()}`} 
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-3 text-white">Connect</h4>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="mailto:Robert.Bernhardt93@gmail.com" 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://x.com/ro_bernhardt" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://robvadis.substack.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Substack
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-lg font-bold mb-3 text-white">Newsletter</h4>
                <p className="text-slate-400 mb-3">Get updates on my latest projects and writings.</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-slate-800 text-white px-4 py-2 rounded-l-lg focus:outline-none border border-slate-700 focus:border-blue-500"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-500 mb-4 md:mb-0">
              © {currentYear} Robert Bernhardt. All rights reserved.
            </div>
            
            <div className="text-sm text-slate-500">
              <span className="joke-text">Powered by coffee, curiosity, and a healthy dose of impostor syndrome.</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
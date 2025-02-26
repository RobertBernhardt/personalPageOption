// Books.js - Books section component

const Books = () => {
    const books = [
      {
        title: "Cities of the Future",
        year: "2024",
        languages: "D / E",
        description: "An exploration of how urban spaces might evolve in response to technological, social, and environmental changes.",
        cover: "#4b6cb7",
        tags: ["Urban Development", "Futurism", "Sustainability"]
      },
      {
        title: "What Could Have Been",
        year: "2024",
        languages: "D / E",
        description: "A speculative journey through alternative histories and the cascading consequences of pivotal moments.",
        cover: "#1e3a8a",
        tags: ["Speculative Fiction", "Alternative History", "Social Impact"]
      },
      {
        title: "Why so Serious?",
        year: "2024/2025",
        languages: "D / E",
        description: "An examination of humor as a lens for understanding society, culture, and human psychology.",
        cover: "#f59e0b",
        tags: ["Social Commentary", "Humor Theory", "Cultural Analysis"]
      },
      {
        title: "Joker Shrugged",
        year: "2024/2025",
        languages: "D / E",
        description: "A philosophical take on comedy, chaos, and meaning in a world that often takes itself too seriously.",
        cover: "#7c3aed",
        tags: ["Philosophy", "Comedy", "Contemporary Thought"]
      }
    ];
    
    const [hoveredBook, setHoveredBook] = React.useState(null);
    
    return (
      <section id="books" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 text-center">My Books</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Where I explore big ideas through words (and occasionally make terrible puns)
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <div 
                key={book.title}
                className="book-card relative"
                onMouseEnter={() => setHoveredBook(index)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                {/* Book cover */}
                <div 
                  className="aspect-[2/3] rounded-lg shadow-lg overflow-hidden transition-all duration-300"
                  style={{ 
                    background: `linear-gradient(to bottom right, ${book.cover}, rgba(0,0,0,0.7))`,
                    transform: hoveredBook === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  <div className="h-full p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-white/70 mb-1">{book.languages} • {book.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{book.title}</h3>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {book.tags.map(tag => (
                        <span key={tag} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Book description (shown on hover) */}
                <div 
                  className={`absolute inset-0 bg-white shadow-lg rounded-lg p-6 transition-all duration-300 ${
                    hoveredBook === index ? 'opacity-100 translate-y-4' : 'opacity-0 translate-y-0 pointer-events-none'
                  }`}
                >
                  <div className="text-xs text-slate-500 mb-1">{book.languages} • {book.year}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{book.title}</h3>
                  <p className="text-slate-700 text-sm">{book.description}</p>
                  
                  {book.title === "Why so Serious?" && (
                    <div className="mt-4 text-xs italic text-slate-500 joke-text">
                      Spoiler alert: Because reality is best faced with a smirk.
                    </div>
                  )}
                  
                  {book.title === "Joker Shrugged" && (
                    <div className="mt-4 text-xs italic text-slate-500 joke-text">
                      Yes, it's a play on Atlas Shrugged, but with 100% fewer page-long monologues.
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">About My Writing</h3>
            
            <div className="space-y-4 text-slate-700">
              <p>
                My books explore the intersection of cities, technology, society, and human psychology. I'm fascinated by how our built environments shape our lives, how history could have unfolded differently, and the role of humor in making sense of our complex world.
              </p>
              
              <p>
                Each book is available in both German (D) and English (E), reflecting my desire to engage with readers across different cultural contexts. Writing in multiple languages challenges me to consider how ideas translate across cultural boundaries.
              </p>
              
              <div className="flex items-center gap-4 mt-6">
                <a 
                  href="https://robvadis.substack.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Read My Blog
                </a>
                
                <span className="text-slate-400">•</span>
                
                <a 
                  href="https://x.com/ro_bernhardt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Follow for updates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
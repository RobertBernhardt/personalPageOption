// Contact.js - Contact section component

const Contact = () => {
    const [formState, setFormState] = React.useState({
      name: '',
      email: '',
      message: '',
      subject: 'general'
    });
    
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormState(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // In a real implementation, this would send the form data to a server
      // For now, we'll just simulate a successful submission
      setTimeout(() => {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          message: '',
          subject: 'general'
        });
      }, 1000);
    };
    
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 text-center text-white">Get In Touch</h2>
          <p className="text-blue-300 text-center max-w-2xl mx-auto mb-12">
            Have a project idea? Want to collaborate? Or just want to say hello?
          </p>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-2/5">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-300 mb-1">Email</h4>
                      <a href="mailto:Robert.Bernhardt93@gmail.com" className="text-white hover:text-blue-200 transition-colors">Robert.Bernhardt93@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-300 mb-1">Phone</h4>
                      <a href="tel:+4915128416894" className="text-white hover:text-blue-200 transition-colors">+49 151 28416894</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-900/50 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-blue-300 mb-1">Social Media</h4>
                      <div className="flex space-x-4 mt-2">
                        <a href="https://x.com/ro_bernhardt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                        <a href="https://robvadis.substack.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8m-2 12h-9a2 2 0 01-2-2v-6a2 2 0 012-2h9a2 2 0 012 2v6a2 2 0 01-2 2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-5 bg-blue-900/30 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Quick Response Promise</h4>
                  <p className="text-blue-200">
                    I typically respond to messages within 24 hours. If I take longer, I'm probably stuck in a coding rabbit hole or <span className="italic joke-text">contemplating the existential implications of semicolons</span>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="bg-green-900/30 text-green-300 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h4 className="text-lg font-bold">Message Sent Successfully!</h4>
                    </div>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="mt-4 px-4 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-blue-300 mb-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formState.name} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-3 bg-white/10 rounded-lg focus:bg-white/20 text-white border border-blue-900/50 focus:border-blue-500 outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-blue-300 mb-2">Your Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formState.email} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-3 bg-white/10 rounded-lg focus:bg-white/20 text-white border border-blue-900/50 focus:border-blue-500 outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-blue-300 mb-2">Subject</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={formState.subject} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 bg-white/10 rounded-lg focus:bg-white/20 text-white border border-blue-900/50 focus:border-blue-500 outline-none transition-colors"
                      >
                        <option value="general" className="bg-slate-800">General Inquiry</option>
                        <option value="project" className="bg-slate-800">Project Collaboration</option>
                        <option value="book" className="bg-slate-800">Book Related</option>
                        <option value="speaking" className="bg-slate-800">Speaking Opportunity</option>
                        <option value="other" className="bg-slate-800">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-blue-300 mb-2">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formState.message} 
                        onChange={handleChange} 
                        required 
                        rows="5" 
                        className="w-full px-4 py-3 bg-white/10 rounded-lg focus:bg-white/20 text-white border border-blue-900/50 focus:border-blue-500 outline-none transition-colors resize-none"
                        placeholder="Hello Robert, I'd like to discuss..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        required 
                        className="mt-1 mr-3"
                      />
                      <label htmlFor="terms" className="text-sm text-blue-300">
                        I understand that this form doesn't <span className="italic">actually</span> send emails since it's just a frontend demo. In a real implementation, we'd have proper backend functionality.
                      </label>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
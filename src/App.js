// App.js - Main application component

const App = () => {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <ValueProposition />
          <Books />
          <CurrentProjects />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  };
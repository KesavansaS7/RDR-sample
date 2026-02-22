import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { BookOpen, Gamepad2, Skull, ScrollText, Users, Star, Video } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Fetching Logic Hook
const useRDR2Data = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/sections/')
      .then(response => {
        setSections(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return { sections, loading };
}

const getIcon = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('intro')) return <BookOpen size={24} />;
  if (lowerTitle.includes('gameplay')) return <Gamepad2 size={24} />;
  if (lowerTitle.includes('synopsis')) return <ScrollText size={24} />;
  if (lowerTitle.includes('development')) return <Users size={24} />;
  if (lowerTitle.includes('reception')) return <Star size={24} />;
  return <Skull size={24} />;
};

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const SectionPage = ({ section }) => {
  const isGameplay = section.title.toLowerCase().includes('gameplay');

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="section-card"
    >
      <h2 className="section-title">
        <span className="icon">{getIcon(section.title)}</span>
        {section.title}
      </h2>
      <p className="content">{section.content}</p>
      
      {isGameplay && (
        <div className="video-container">
          <h3 className="video-title"><Video className="inline-icon" /> Gameplay Footage</h3>
          <div className="video-wrapper">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/eaW0tYpxyp0?autoplay=0" 
              title="Red Dead Redemption 2: Official Gameplay Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const AnimatedRoutes = ({ sections }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        {sections.map((section, index) => {
          const path = index === 0 ? '/' : `/${section.title.toLowerCase().replace(/\s+/g, '-')}`;
          return (
            <Route key={section.id} path={path} element={<SectionPage section={section} />} />
          );
        })}
        <Route path="*" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="section-card">
            <h2>404 - Lost in the Wilderness</h2>
            <p>This trail leads nowhere, partner.</p>
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const { sections, loading } = useRDR2Data();

  if (loading) {
    return <div className="loading">Loading the Frontier...</div>;
  }

  if (!sections.length) {
    return (
      <div className="container">
        <div className="section-card">
            <h2>No Content Found</h2>
            <p>Is the Django server running?</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app-layout">
        <header className="header">
          <h1>Red Dead Redemption 2</h1>
          <p className="subtitle">An Outlaw's Tale</p>
        </header>

        <nav className="navbar">
          {sections.map((section, index) => {
             const path = index === 0 ? '/' : `/${section.title.toLowerCase().replace(/\s+/g, '-')}`;
             return (
               <NavLink 
                 key={section.id} 
                 to={path} 
                 className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
               >
                 <span className="nav-icon">{getIcon(section.title)}</span>
                 <span className="nav-text">{section.title}</span>
               </NavLink>
             );
          })}
        </nav>
        
        <main className="container">
           <AnimatedRoutes sections={sections} />
        </main>

        <footer className="footer">
          <p>Not officially affiliated with Rockstar Games. Built for demonstration.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
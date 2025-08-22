'use client';

import { useState, useEffect, useRef } from 'react';

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

// Header Component
const Header = ({ onWaitlistClick }: { onWaitlistClick: () => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
      <div className="section-content">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-700 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="LockedInAppLogoLock1.png"
                alt="Locked In App Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">Locked In</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
          </nav>
          
          {/* Desktop CTA Button */}
          <button 
            className="hidden md:block btn-primary text-sm px-6 py-2"
            onClick={onWaitlistClick}
          >
            Join Waitlist
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="/privacy" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy
              </a>
              <button 
                className="btn-primary text-sm px-6 py-2 w-full text-center"
                onClick={() => {
                  onWaitlistClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                Join Waitlist
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component with iPhone Mockup
const HeroSection = ({ onWaitlistClick }: { onWaitlistClick: () => void }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  
  const quotes = [
    "Stay focused. Stay productive. Stay Locked In.",
    "Unlock your potential with every Locked In.",
    "Distractions are the enemy of progress.",
    "Your future self will thank you.",
    "Excellence is not a skill, it's a habit.",
    "The pain of staying here, or the pain of change?"
  ];

  const screenshots = [
    'HabitScreenshot1.png',
    'HabitScreenshot2.png',
    'HabitScreenshot3.png',
    'HabitScreenshot4.png',
    'HabitScreenshot5.png',
    'HabitScreenshot6.png',
    'HabitScreenshot7.png'
  ];

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    
    const screenshotInterval = setInterval(() => {
      setCurrentScreenshotIndex((prev) => (prev + 1) % screenshots.length);
    }, 3500); // Slightly longer to account for 7 screenshots
    
    return () => {
      clearInterval(quoteInterval);
      clearInterval(screenshotInterval);
    };
  }, [quotes.length, screenshots.length]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-20">
      {/* Background texture and effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,59,48,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,59,48,0.1),transparent_50%)]"></div>
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}></div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-red-700 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-red-600 rounded-full opacity-40 animate-ping"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-red-300 rounded-full opacity-50 animate-pulse"></div>
      
      <div className="section-content flex flex-col lg:flex-row items-center justify-between z-10 relative gap-12">
        {/* Left side - Text content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl order-2 lg:order-1">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto lg:mx-0 mb-6">
              <img
                src="LockedInAppLogoLock1.png"
                alt="Locked In App Logo"
                width={96}
                height={96}
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Locked In
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            The iOS app for getting everything under control
          </p>
          
          {/* Animated Quote */}
          <div className="h-20 md:h-24 mb-8">
            <div className="relative">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 quote-animation font-medium">
                {quotes[currentQuoteIndex]}
              </p>
              <div className="absolute -bottom-2 left-1/2 lg:left-0 transform lg:transform-none -translate-x-1/2 lg:translate-x-0 w-16 h-0.5 bg-gradient-to-r from-red-700 to-transparent lg:from-red-700 lg:to-transparent"></div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn-primary text-lg px-8 py-4 shadow-lg shadow-red-500/25 w-full sm:w-auto" onClick={onWaitlistClick}>
              Join Waitlist
            </button>
          </div>
          
          {/* Social proof */}
          <div className="text-gray-500 text-sm mt-6">
            <p>Coming soon to the App Store</p>
          </div>
        </div>
        
        {/* Right side - iPhone Mockup */}
        <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
          <div className="relative">
            {/* iPhone Frame - Adjusted for 2868x1320 aspect ratio (2.17:1) in vertical orientation */}
            <div className="iphone-mockup iphone-mockup-vertical rounded-[3rem] p-2 md:p-3 shadow-2xl shadow-black/50 border-4 md:border-6 border-gray-800 relative">
              {/* Screen */}
              <div className="w-full h-full iphone-screen rounded-[2.5rem] overflow-hidden relative">
                {/* Screenshot Content */}
                <div className="w-full h-full relative">
                  <img
                    key={currentScreenshotIndex} // Force re-render for smooth transitions
                    src={screenshots[currentScreenshotIndex]}
                    alt={`Locked In App Screenshot ${currentScreenshotIndex + 1}`}
                    className="object-cover rounded-[2rem] iphone-screenshot w-full h-full"
                  />
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
              </div>
              
              {/* Camera Notch removed */}
            </div>
            
            {/* Floating Elements around iPhone */}
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-red-400 rounded-full opacity-40 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store contact form data in localStorage
    const existingContacts = JSON.parse(localStorage.getItem('lockedin-contacts') || '[]');
    const newContact = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    existingContacts.push(newContact);
    localStorage.setItem('lockedin-contacts', JSON.stringify(existingContacts));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section bg-gray-100">
      <div className="section-content">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-black">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Have questions about Locked In? Want to join our beta testing program? 
                We&apos;d love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-red-600 mr-3">📧</span>
                  <a href="mailto:brochop02@gmail.com" className="text-black hover:text-red-600 transition-colors">
                    brochop02@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black"
                      required
                    />
                  </div>
                  
                  <div>
                    <textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-black"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We&apos;ll get back to you soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ onAdminClick }: { onAdminClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer 
      className="bg-black py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="section-content">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Locked In</h3>
          <p className="text-gray-400 mb-6">
            Stay focused. Stay productive. Stay locked in.
          </p>
          
          <div className="flex justify-center space-x-8 mb-6">
            <a href="mailto:brochop02@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Admin Panel Access Button */}
          {isHovered && (
            <button 
              onClick={onAdminClick}
              className="mt-6 btn-primary text-sm px-6 py-2"
            >
              Admin Panel
            </button>
          )}
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Locked In. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Waitlist Modal Component
const WaitlistModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store email in localStorage
    const existingEmails = JSON.parse(localStorage.getItem('lockedin-waitlist') || '[]');
    if (!existingEmails.includes(email)) {
      existingEmails.push(email);
      localStorage.setItem('lockedin-waitlist', JSON.stringify(existingEmails));
    }
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Close modal after 3 seconds
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8">
        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-black mb-2">Join the Waitlist</h2>
              <p className="text-gray-600">Be the first to know when Locked In launches!</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent text-black"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
            
            <button 
              onClick={onClose}
              className="w-full mt-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              Cancel
            </button>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">You&apos;re on the list!</h3>
            <p className="text-gray-600">We&apos;ll notify you as soon as Locked In is ready.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Admin Panel Component (hidden, accessible via footer hover)
const AdminPanel = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'waitlist' | 'contacts'>('waitlist');
  const [waitlistEmails, setWaitlistEmails] = useState<string[]>([]);
  const [contacts, setContacts] = useState<{name: string; email: string; message: string; timestamp: string}[]>([]);

  useEffect(() => {
    if (isOpen) {
      const storedEmails = JSON.parse(localStorage.getItem('lockedin-waitlist') || '[]');
      const storedContacts = JSON.parse(localStorage.getItem('lockedin-contacts') || '[]');
      setWaitlistEmails(storedEmails);
      setContacts(storedContacts);
    }
  }, [isOpen]);

  const exportWaitlist = () => {
    const csvContent = `data:text/csv;charset=utf-8,Email\n${waitlistEmails.join('\n')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'waitlist-emails.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportContacts = () => {
    const csvContent = `data:text/csv;charset=utf-8,Name,Email,Message,Timestamp\n${contacts.map(c => `"${c.name}","${c.email}","${c.message}","${c.timestamp}"`).join('\n')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'contact-submissions.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-black">Admin Panel</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-2xl">×</button>
        </div>
        
        {/* Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('waitlist')}
            className={`pb-2 px-4 font-medium ${
              activeTab === 'waitlist' 
                ? 'text-red-700 border-b-2 border-red-700' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Waitlist ({waitlistEmails.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`pb-2 px-4 font-medium ${
              activeTab === 'contacts' 
                ? 'text-red-700 border-b-2 border-red-700' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Contacts ({contacts.length})
          </button>
        </div>
        
        {/* Waitlist Tab */}
        {activeTab === 'waitlist' && (
          <div>
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Total waitlist emails: <span className="font-bold text-black">{waitlistEmails.length}</span>
              </p>
              <button 
                onClick={exportWaitlist}
                className="btn-primary"
                disabled={waitlistEmails.length === 0}
              >
                Export Waitlist to CSV
              </button>
            </div>
            
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {waitlistEmails.map((email, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">{email}</span>
                </div>
              ))}
              {waitlistEmails.length === 0 && (
                <p className="text-gray-500 text-center py-8">No waitlist emails collected yet.</p>
              )}
            </div>
          </div>
        )}
        
        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div>
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Total contact submissions: <span className="font-bold text-black">{contacts.length}</span>
              </p>
              <button 
                onClick={exportContacts}
                className="btn-primary"
                disabled={contacts.length === 0}
              >
                Export Contacts to CSV
              </button>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {contacts.map((contact, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-black">
                    <div><strong>Name:</strong> {contact.name}</div>
                    <div><strong>Email:</strong> {contact.email}</div>
                    <div><strong>Date:</strong> {new Date(contact.timestamp).toLocaleDateString()}</div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-200 text-black">
                    <strong>Message:</strong> {contact.message}
                  </div>
                </div>
              ))}
              {contacts.length === 0 && (
                <p className="text-gray-500 text-center py-8">No contact submissions yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Password Modal Component for Admin Panel
const PasswordModal = ({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: () => void }) => {
  const [password, setPassword] = useState('');
  const [isIncorrect, setIsIncorrect] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Admin123') {
      onSuccess();
      setPassword('');
      setIsIncorrect(false);
    } else {
      setIsIncorrect(true);
      setPassword('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-black mb-2">Admin Access</h2>
          <p className="text-gray-600">Enter password to access admin panel</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (isIncorrect) setIsIncorrect(false);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent text-black"
              required
              autoFocus
            />
          </div>
          
          {isIncorrect && (
            <p className="text-red-700 text-sm text-center">Incorrect password. Please try again.</p>
          )}
          
          <button type="submit" className="btn-primary w-full">
            Access Admin Panel
          </button>
        </form>
        
        <button 
          onClick={onClose}
          className="w-full mt-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// Main Page Component
export default function Home() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const handleAdminPanelSuccess = () => {
    setIsAdminPanelOpen(true);
    setIsPasswordModalOpen(false);
  };

  return (
    <main className="min-h-screen">
      <Header onWaitlistClick={() => setIsWaitlistModalOpen(true)} />
      <HeroSection onWaitlistClick={() => setIsWaitlistModalOpen(true)} />
      <ContactSection />
      <Footer onAdminClick={() => setIsPasswordModalOpen(true)} />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
      <AdminPanel isOpen={isAdminPanelOpen} onClose={() => setIsAdminPanelOpen(false)} />
      <PasswordModal isOpen={isPasswordModalOpen} onClose={() => setIsPasswordModalOpen(false)} onSuccess={handleAdminPanelSuccess} />
    </main>
  );
}

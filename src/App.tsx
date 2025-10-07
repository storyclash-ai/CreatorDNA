import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Zap, Target, Users, ArrowRight, Menu, X } from 'lucide-react';
import HowItWorks from './components/HowItWorks';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    brandName: '',
    domain: '',
    preferences: ''
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => {
  // Script laden
  const s = document.createElement('script');
  s.src = 'https://js.hsforms.net/forms/embed/v2.js';
  s.async = true;
  s.onload = () => {
    // nicht doppelt einfügen
    if (document.querySelector('#hs-form-target .hbspt-form')) return;

    (window as any).hbspt.forms.create({
      region: 'na1',
      portalId: '4268479',
      formId: 'ecc40a1f-7a44-4ac4-ae15-bb2abaf6d635',
      target: '#hs-form-target',
      css: '/hs.css', // <- dein Stylesheet
    });
  };
  document.head.appendChild(s);
}, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const domain = formData.get('domain') as string;
    
    setFormData(prev => ({ ...prev, domain }));
    scrollToForm();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/Storyclash-ai-grau.svg" 
                  alt="Storyclash.ai" 
                  className="h-8 w-auto"
                />
              </div>
              <span className="h-5 md:h-6 w-px bg-gray-200 mx-1 md:mx-0.5" aria-hidden="true"></span>
              <img 
                src="/MDPrimer.svg" 
                alt="CreatorDNA" 
                aria-label="CreatorDNA"
                className="h-5 md:h-6 w-auto"
              />
            </div>

            <div className="hidden md:block">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                ✨ Start the magic →
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <img 
                  src="/MDPrimer.svg" 
                  alt="CreatorDNA" 
                  aria-label="CreatorDNA"
                  className="h-5 w-auto"
                />
                <button
                  onClick={() => {
                    scrollToForm();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-md text-sm font-semibold text-center"
                >
                  ✨ Start the magic →
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[80vh] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="mx-auto max-w-[980px] px-4 pt-56 pb-40 text-center relative z-10">
          <div className="flex justify-center">
            <img 
              src="/Storyclash_ai_logo_icons copy.svg" 
              alt="Storyclash AI Icon" 
              className="h-10 w-auto"
            />
          </div>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Find Your Perfect <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600"><br />Creator Match</span> in Seconds, <br />Not Weeks
          </h1>
          
          <p className="mt-6 text-lg text-gray-500 max-w-[760px] mx-auto leading-relaxed">
            From brand to creators in seconds - our AI researches your brand, competitors, and market to build a creator persona and match you with the perfect influencers.
          </p>
          
          <form onSubmit={handleHeroSubmit} className="mt-8">
            <div className="mx-auto w-full max-w-[560px]">
              <input
                type="text"
                name="domain"
                placeholder="Enter your domain…"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white text-base font-medium hover:opacity-90 transition-all duration-300"
            >
              ✨ Start the magic →
            </button>
          </form>
          
          <p className="mt-3 text-xs text-gray-400">
            Free trial • No credit card
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md shadow-gray-100 p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Watch CreatorDNA in Action</h3>
              <p className="text-gray-600">See how AI finds the perfect creators for your brand</p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src="https://www.youtube.com/embed/iin3uhVIexo"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three intelligent systems working together to find your perfect creator matches
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Brand Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Instantly recognize your brand and audience to set the stage for precise creator matching.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                See competitors and collaborations mapped automatically to understand your market position.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                CreatorDNA builds data-driven personas and matches them with real creators aligned to your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

  {/* Lead Form Section */}
<section id="form-section" className="py-20 px-6">
  <div className="max-w-lg mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Request Your Free AI-Sourced Creator Matches
      </h2>
      <p className="text-xl text-gray-600">
        Sign up and receive personalized creator suggestions tailored to your brand - no credit card required.
      </p>
    </div>

    {/* HubSpot Embed mit Wrapper-Klasse für CSS */}
    <div className="creatorDNA-hs bg-white rounded-xl shadow-lg shadow-gray-100 p-10">
 <div id="hs-form-target" />
    </div>
  </div>
</section>

      <section aria-label="Trusted by customers" className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x lg:divide-x divide-gray-200">
            <div role="group" aria-label="stat" className="py-4 md:py-0 text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                400+
              </div>
              <div className="text-sm text-gray-500 mt-1 leading-tight">
                Brands Using Our AI
              </div>
            </div>
            <div role="group" aria-label="stat" className="py-4 md:py-0 text-center md:px-6 lg:px-8">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                5M+
              </div>
              <div className="text-sm text-gray-500 mt-1 leading-tight">
                Creator Profiles Analyzed
              </div>
            </div>
            <div role="group" aria-label="stat" className="py-4 md:py-0 text-center md:px-6 lg:px-8">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                300+
              </div>
              <div className="text-sm text-gray-500 mt-1 leading-tight">
                Five-Star Reviews
              </div>
            </div>
            <div role="group" aria-label="stat" className="py-4 md:py-0 text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                87%
              </div>
              <div className="text-sm text-gray-500 mt-1 leading-tight">
                Campaign Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-100 py-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Powered by AI • Built by{' '}
            <a 
              href="https://storyclash.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Storyclash.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

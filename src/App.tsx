import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  FileText,
  Calculator,
  Briefcase,
  Scale,
  Cpu,
  Search,
  Building2,
  Menu,
  X,
  ExternalLink,
  MessageSquare,
  ChevronRight,
  Sparkles,
  Star,
  Check,
  Send,
  BookOpen,
  PieChart,
  Layers
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedServiceModal, setSelectedServiceModal] = useState<any>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Audit & Assurance',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'Audit & Assurance', message: '' });
      alert('Thank you for contacting Double-Edge Management Resource. A professional consultant will reach out to you shortly.');
    }, 1500);
  };

  const services = [
    {
      id: 'audit',
      title: 'Audit & Assurance',
      tagline: 'Independent verification and financial confidence',
      description: 'Comprehensive statutory audits, private audits, transaction audits, systems audits, robust internal controls, and independent financial reviews designed to enhance credibility and stakeholder trust.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.49_PM_5de1a8f3.jpeg',
      icon: FileText,
      details: [
        'Statutory Financial Audits',
        'Private & Special Purpose Audits',
        'Internal Control Systems Evaluation',
        'Transaction & Due Diligence Audits',
        'Independent Financial Reviews'
      ]
    },
    {
      id: 'taxation',
      title: 'Taxation & Tax Advisory',
      tagline: 'Strategic tax planning and compliance management',
      description: 'Expert guidance on Company Income Tax, Personal Income Tax (PAYE), Value Added Tax (VAT), withholding tax, transfer pricing, tax audit support, and proactive tax optimization for corporate entities.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_7.25.10_PM_c4aa5b96.jpeg',
      icon: Calculator,
      details: [
        'Company Income Tax & PAYE Compliance',
        'VAT and Withholding Tax Advisory',
        'Tax Audit & Investigation Support',
        'Transfer Pricing Documentation',
        'Strategic Tax Planning & Advisory'
      ]
    },
    {
      id: 'accounting',
      title: 'Accounting & Bookkeeping',
      tagline: 'Precision financial record management',
      description: 'Reliable day-to-day bookkeeping, financial record management, accounting systems setup, payroll administration, and preparation of IFRS-compliant financial statements.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.50_PM_3549292e.jpeg',
      icon: Briefcase,
      details: [
        'General Ledger & Bookkeeping Services',
        'IFRS Financial Statement Preparation',
        'Payroll Management & Administration',
        'Management Accounts & Cash Flow Forecasts',
        'Accounting Software Implementation'
      ]
    },
    {
      id: 'consulting',
      title: 'Business & Management Consulting',
      tagline: 'Driving operational efficiency and scalable growth',
      description: 'Tailored strategic advisory, business performance improvement, restructuring, feasibility studies, and operational efficiency assessments to position your enterprise for market leadership.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.50_PM__1__a5db6df9.jpeg',
      icon: TrendingUp,
      details: [
        'Strategic Planning & Execution',
        'Business Performance Optimization',
        'Feasibility Studies & Market Entry',
        'Corporate Restructuring',
        'Operational Efficiency Reviews'
      ]
    },
    {
      id: 'hr',
      title: 'Human Resource Management',
      tagline: 'Empowering organisations through exceptional human capital',
      description: 'Comprehensive HR solutions including executive recruitment, structured employee training, performance appraisal systems, manpower audits, and robust HR policies and procedures.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.50_PM_3549292e.jpeg',
      icon: Users,
      details: [
        'Executive Search & Talent Recruitment',
        'Manpower Audits & Restructuring',
        'Staff Training & Capacity Building',
        'Performance Management Systems',
        'HR Policy & Handbook Development'
      ]
    },
    {
      id: 'due-diligence',
      title: 'Due Diligence & Investigation',
      tagline: 'Mitigating risk with thorough independent inquiry',
      description: 'Rigorous financial investigations, background checks, asset verification, business partner vetting, and comprehensive risk assessments for mergers, acquisitions, and strategic partnerships.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.49_PM_5de1a8f3.jpeg',
      icon: Search,
      details: [
        'Mergers & Acquisitions Due Diligence',
        'Financial Forensic Investigations',
        'Corporate Background Verification',
        'Asset Tracing & Risk Assessment',
        'Vendor & Partner Vetting'
      ]
    },
    {
      id: 'it-process',
      title: 'IT & Business Process Improvement',
      tagline: 'Modernising operations for the digital economy',
      description: 'Integration of cutting-edge business software, enterprise accounting systems, business intelligence dashboards, digital workflow automation, and technology implementation support.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_7.25.10_PM_c4aa5b96.jpeg',
      icon: Cpu,
      details: [
        'Enterprise Software Implementation',
        'Business Process Reengineering (BPR)',
        'Financial Management Systems Setup',
        'Digital Workflow Automation',
        'IT Risk & Security Assessment'
      ]
    },
    {
      id: 'litigation',
      title: 'Litigation Support',
      tagline: 'Expert forensic accounting and dispute resolution',
      description: 'Specialised financial investigations, expert accounting analysis, quantification of economic damages, and robust documentation supporting legal counsel in financial disputes.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.49_PM_5de1a8f3.jpeg',
      icon: Scale,
      details: [
        'Forensic Accounting Analysis',
        'Quantification of Economic Damages',
        'Expert Witness Testimony Support',
        'Shareholder & Partner Dispute Support',
        'Fraud Investigation & Documentation'
      ]
    }
  ];

  const showcaseItems = [
    {
      title: 'Corporate Governance & Statutory Audits',
      category: 'Audit & Assurance',
      focus: 'Ensuring absolute financial transparency and statutory compliance for corporate entities across Nigeria.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.49_PM_5de1a8f3.jpeg',
      metric: '100% Regulatory Alignment'
    },
    {
      title: 'Executive Tax Planning & Advisory',
      category: 'Taxation Services',
      focus: 'Optimising corporate tax structures and ensuring seamless interaction with tax authorities.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_7.25.10_PM_c4aa5b96.jpeg',
      metric: 'Strategic Risk Mitigation'
    },
    {
      title: 'Strategic Management Seminars',
      category: 'Business Consulting',
      focus: 'Empowering C-suite executives and management teams with actionable leadership and operational frameworks.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.50_PM__1__a5db6df9.jpeg',
      metric: 'Capacity Building'
    },
    {
      title: 'Financial System Restructuring',
      category: 'Process Improvement',
      focus: 'Modernising accounting ledgers, internal controls, and enterprise reporting workflows.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.50_PM_3549292e.jpeg',
      metric: 'Operational Efficiency'
    },
    {
      title: 'Human Capital & Manpower Audits',
      category: 'Human Resources',
      focus: 'Evaluating workforce capability, organizational design, and performance appraisal systems.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.50_PM__1__a5db6df9.jpeg',
      metric: 'Talent Optimisation'
    },
    {
      title: 'Forensic Accounting & Investigations',
      category: 'Due Diligence',
      focus: 'Independent financial investigations and risk assessment for complex commercial transactions.',
      image: '/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.49_PM_5de1a8f3.jpeg',
      metric: 'Absolute Rigor'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#252A30] flex flex-col selection:bg-[#C5A46D]/30 selection:text-[#101C2C]">
      
      {/* WhatsApp Floating Widget */}
      <a
        href="https://wa.me/2348037136855?text=Hello%20Double-Edge%20Management,%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20professional%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce group"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-sm pl-0 group-hover:pl-2">
          Chat with us
        </span>
      </a>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#101C2C]/95 backdrop-blur-md border-b border-[#C5A46D]/20 text-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded bg-[#C5A46D] flex items-center justify-center text-[#101C2C] font-bold text-xl shadow-lg">
              DE
            </div>
            <div>
              <span className="font-serif font-bold text-lg tracking-wide block text-white group-hover:text-[#C5A46D] transition-colors">
                DOUBLE-EDGE
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#C5A46D] font-medium block">
                Management Resource
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-[#C5A46D] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#C5A46D] transition-colors">About Us</a>
            <a href="#services" className="hover:text-[#C5A46D] transition-colors">Services</a>
            <a href="#why-us" className="hover:text-[#C5A46D] transition-colors">Why Choose Us</a>
            <a href="#showcase" className="hover:text-[#C5A46D] transition-colors">Expertise</a>
            <a href="#approach" className="hover:text-[#C5A46D] transition-colors">Our Approach</a>
            <a href="#contact" className="hover:text-[#C5A46D] transition-colors">Contact</a>
          </nav>

          {/* CTA Header Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#contact"
              className="bg-[#C5A46D] hover:bg-[#b0905c] text-[#101C2C] font-semibold px-5 py-2.5 rounded text-sm transition-all duration-200 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Speak With Our Team
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F8F7F3] hover:text-[#C5A46D] p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#101C2C] border-b border-[#C5A46D]/20 px-4 pt-2 pb-6 space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium hover:text-[#C5A46D] border-b border-white/5"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium hover:text-[#C5A46D] border-b border-white/5"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium hover:text-[#C5A46D] border-b border-white/5"
            >
              Services
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium hover:text-[#C5A46D] border-b border-white/5"
            >
              Why Choose Us
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium hover:text-[#C5A46D] border-b border-white/5"
            >
              Expertise
            </a>
            <a
              href="#approach"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium hover:text-[#C5A46D] border-b border-white/5"
            >
              Our Approach
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium hover:text-[#C5A46D]"
            >
              Contact
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block bg-[#C5A46D] text-[#101C2C] font-semibold py-2.5 rounded text-sm shadow"
              >
                Speak With Our Team
              </a>
            </div>
          </div>
        )}
      </header>

      {/* SECTION 1: HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-[#101C2C] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-11-23_at_7.25.10_PM_c4aa5b96.jpeg"
            alt="Tax consulting financial report"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101C2C] via-[#101C2C]/90 to-[#101C2C]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center lg:text-left w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-[#C5A46D]/15 border border-[#C5A46D]/40 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-ping"></span>
              <span className="text-[#C5A46D] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                CONSULTING | MANAGEMENT | ADVISORY
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Strategic Insight. Professional Excellence. <span className="text-[#C5A46D] italic">Sustainable Growth.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#F8F7F3]/90 font-light mb-10 leading-relaxed max-w-2xl">
              At Double-Edge Management Resource, we provide professional business, financial, and management solutions that empower organisations to operate efficiently, make informed decisions, and achieve sustainable success.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#services"
                className="w-full sm:w-auto bg-[#C5A46D] hover:bg-[#b0905c] text-[#101C2C] font-semibold px-8 py-4 rounded text-base transition-all duration-200 shadow-xl text-center transform hover:-translate-y-0.5"
              >
                Explore Our Services
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-2 border-[#C5A46D] font-semibold px-8 py-3.5 rounded text-base transition-all duration-200 text-center"
              >
                Speak With Our Team
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-3 text-[#C5A46D] text-sm font-medium">
              <MapPin className="w-4 h-4 text-[#C5A46D]" />
              <span>Ikeja, Lagos, Nigeria</span>
              <span className="text-white/30">|</span>
              <span className="text-white/80">Associated with Consulting & Advisory Home</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT DOUBLE-EDGE MANAGEMENT */}
      <section id="about" className="py-24 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C5A46D] font-semibold text-sm tracking-widest uppercase block mb-3">
              ABOUT DOUBLE-EDGE MANAGEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101C2C]">
              Professional Insight That Drives Business Forward.
            </h2>
            <div className="w-20 h-1 bg-[#C5A46D] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6 text-[#252A30] leading-relaxed text-base sm:text-lg">
              <p>
                Double-Edge Management Resource is an elite professional consulting firm rooted in financial expertise, operational rigor, and strategic advisory. Operating from our strategic hub in Ikeja, Lagos, we deliver uncompromising professional standards tailored to the dynamic realities of the Nigerian economic landscape.
              </p>
              <p>
                As an integral practice associated with <strong className="text-[#101C2C] font-semibold">Consulting & Advisory Home</strong>—which encompasses esteemed professional entities such as <strong className="text-[#101C2C] font-semibold">Abikoye Olumide & Co.</strong> and <strong className="text-[#101C2C] font-semibold">Koye Consulting</strong>—we bring decades of collective industry experience across taxation, statutory audit, corporate governance, and management transformation.
              </p>
              <p>
                Our philosophy centers on bridging the gap between complex regulatory requirements and practical corporate execution. Whether supporting burgeoning Nigerian enterprises or multinational corporations navigating local compliance, our seasoned professionals apply uncompromising integrity and acute business acumen to every engagement.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.50_PM__1__a5db6df9.jpeg"
                  alt="Professional document review and consulting workspace"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C2C]/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif italic text-lg text-[#C5A46D] mb-1">"Excellence is not an act, but a habit."</p>
                  <p className="text-xs uppercase tracking-wider text-white/80">Committed to Nigerian & International Business Standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 hover:border-[#C5A46D] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#101C2C] text-[#C5A46D] rounded flex items-center justify-center mb-6 group-hover:bg-[#C5A46D] group-hover:text-[#101C2C] transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#101C2C] mb-3">Professional Integrity</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Uncompromising adherence to ethical codes, strict confidentiality, and transparent professional conduct in every client mandate.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 hover:border-[#C5A46D] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#101C2C] text-[#C5A46D] rounded flex items-center justify-center mb-6 group-hover:bg-[#C5A46D] group-hover:text-[#101C2C] transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#101C2C] mb-3">Client-Focused Solutions</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Deeply customized strategies crafted around your specific organisational structure, industry dynamics, and growth objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 hover:border-[#C5A46D] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#101C2C] text-[#C5A46D] rounded flex items-center justify-center mb-6 group-hover:bg-[#C5A46D] group-hover:text-[#101C2C] transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#101C2C] mb-3">Operational Excellence</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Rigorous process reviews and workflow enhancements designed to eliminate waste, maximize efficiency, and boost profitability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 hover:border-[#C5A46D] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#101C2C] text-[#C5A46D] rounded flex items-center justify-center mb-6 group-hover:bg-[#C5A46D] group-hover:text-[#101C2C] transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#101C2C] mb-3">Strategic Value Addition</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Delivering insights that extend beyond basic compliance to create measurable long-term value for stakeholders and investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PROFESSIONAL SERVICES */}
      <section id="services" className="py-24 bg-[#101C2C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C5A46D] font-semibold text-sm tracking-widest uppercase block mb-3">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Comprehensive Solutions for Modern Businesses.
            </h2>
            <div className="w-20 h-1 bg-[#C5A46D] mx-auto mt-4"></div>
            <p className="text-stone-300 mt-4 text-base sm:text-lg">
              Explore our full suite of professional audit, taxation, advisory, and management services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-[#18263a] rounded-lg overflow-hidden border border-[#C5A46D]/20 hover:border-[#C5A46D] transition-all duration-300 flex flex-col group shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18263a] via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-[#101C2C] p-2.5 rounded text-[#C5A46D] shadow">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-xl text-white mb-2 group-hover:text-[#C5A46D] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-medium text-[#C5A46D] uppercase tracking-wider mb-3">
                        {service.tagline}
                      </p>
                      <p className="text-stone-300 text-sm leading-relaxed mb-6 line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedServiceModal(service)}
                      className="inline-flex items-center space-x-2 text-sm font-semibold text-[#C5A46D] hover:text-white transition-colors pt-2 border-t border-white/10"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE DOUBLE-EDGE MANAGEMENT? */}
      <section id="why-us" className="py-24 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-23_at_6.49.50_PM_3549292e.jpeg"
                  alt="Document preparation and financial analysis workspace"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C2C]/50 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#101C2C] text-white p-6 rounded-lg shadow-2xl hidden sm:block max-w-xs border border-[#C5A46D]/30">
                <p className="font-serif font-bold text-lg text-[#C5A46D] mb-1">Trusted Expertise</p>
                <p className="text-xs text-stone-300">Rooted in deep knowledge of Nigerian fiscal policies and global best practices.</p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#C5A46D] font-semibold text-sm tracking-widest uppercase block mb-3">
                  WHY PARTNER WITH US
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101C2C] mb-6">
                  A Trusted Partner in Business Excellence.
                </h2>
                <p className="text-stone-700 text-base leading-relaxed mb-8">
                  Organisations across Nigeria and beyond choose Double-Edge Management Resource because we combine rigorous technical competence with pragmatic, results-oriented problem solving.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'Deep understanding of the Nigerian business environment and regulatory frameworks.',
                  'Highly experienced professional personnel with multidisciplinary expertise.',
                  'Commitment to timely service delivery without compromising rigorous accuracy.',
                  'Strict confidentiality, professional ethics, and uncompromising governance standards.',
                  'Practical, solution-oriented advice addressing the root causes of business challenges.',
                  'Proactive value-added professional support tailored to local and international requirements.'
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#101C2C] text-[#C5A46D] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-stone-700 font-medium text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR PROFESSIONAL EXPERTISE & ENGAGEMENTS */}
      <section id="showcase" className="py-24 bg-[#101C2C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C5A46D] font-semibold text-sm tracking-widest uppercase block mb-3">
              EXCELLENCE AND PROFESSIONAL STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Our Professional Engagements & Expertise.
            </h2>
            <div className="w-20 h-1 bg-[#C5A46D] mx-auto mt-4"></div>
            <p className="text-stone-300 mt-4 text-base sm:text-lg">
              Showcasing our core areas of advisory impact, corporate governance, and executive capacity building across industries in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#18263a] rounded-lg overflow-hidden border border-[#C5A46D]/20 hover:border-[#C5A46D] transition-all duration-300 group shadow-xl flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#101C2C]/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-semibold text-[#C5A46D] border border-[#C5A46D]/30">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white mb-2 group-hover:text-[#C5A46D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-stone-300 text-xs leading-relaxed mb-4">
                      {item.focus}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-stone-400">Impact Metric</span>
                    <span className="text-xs font-bold text-[#C5A46D]">{item.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR APPROACH AND PROFESSIONAL COMMITMENT */}
      <section id="approach" className="py-24 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C5A46D] font-semibold text-sm tracking-widest uppercase block mb-3">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#101C2C]">
              Adding Value Beyond Expectations.
            </h2>
            <div className="w-20 h-1 bg-[#C5A46D] mx-auto mt-4"></div>
            <p className="text-stone-600 mt-4 text-base">
              Our structured four-stage engagement methodology ensures clarity, rigorous analysis, and actionable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                step: '01',
                title: 'Understanding Your Needs',
                desc: 'We thoroughly investigate your organisation, strategic objectives, operational challenges, and professional requirements.'
              },
              {
                step: '02',
                title: 'Professional Assessment',
                desc: 'Our specialists examine relevant business processes, financial structures, management practices, and compliance standards.'
              },
              {
                step: '03',
                title: 'Strategic Recommendations',
                desc: 'We develop practical, actionable recommendations tailored specifically to your business environment and industry realities.'
              },
              {
                step: '04',
                title: 'Continuous Support',
                desc: 'We provide ongoing professional guidance and support to help clients strengthen operations and sustain long-term growth.'
              }
            ].map((stage, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 relative group hover:border-[#C5A46D] transition-colors">
                <div className="text-4xl font-serif font-bold text-[#C5A46D] mb-4 opacity-80 group-hover:opacity-100">
                  {stage.step}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#101C2C] mb-3">{stage.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

          {/* Our Commitment to You */}
          <div className="bg-[#101C2C] text-white rounded-xl p-8 sm:p-12 shadow-2xl border border-[#C5A46D]/30">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[#C5A46D] font-semibold text-xs tracking-widest uppercase block mb-2">
                OUR PROMISE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-6">
                Our Commitment to You
              </h3>
              <p className="text-stone-300 text-base leading-relaxed mb-8">
                At Double-Edge Management Resource, every mandate is executed with an unwavering commitment to <strong className="text-white">integrity, strict confidentiality, professional rigor, accountability, and timely delivery</strong>. We treat your business success as our ultimate professional benchmark.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[#C5A46D]">
                <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Integrity</span>
                <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Confidentiality</span>
                <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Professionalism</span>
                <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Accountability</span>
                <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">Timely Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT AND FINAL CALL TO ACTION */}
      <section id="contact" className="py-24 bg-[#101C2C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C5A46D] font-semibold text-sm tracking-widest uppercase block mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Let's Build a Stronger Future for Your Business.
            </h2>
            <div className="w-20 h-1 bg-[#C5A46D] mx-auto mt-4"></div>
            <p className="text-stone-300 mt-4 text-base sm:text-lg">
              Whether you require professional audit services, tax support, business advisory, accounting assistance, or management consulting, Double-Edge Management is ready to understand your needs and provide the right professional support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information & Map Link */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#18263a] p-8 rounded-xl border border-[#C5A46D]/20 shadow-xl space-y-6">
                <h3 className="font-serif font-bold text-2xl text-white">Office Headquarters</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded bg-[#101C2C] text-[#C5A46D] flex items-center justify-center shrink-0 border border-[#C5A46D]/30">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">Business Name</p>
                      <p className="text-white font-medium">Double-Edge Management Resource</p>
                      <p className="text-xs text-stone-400 mt-0.5">Associated with Consulting & Advisory Home</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded bg-[#101C2C] text-[#C5A46D] flex items-center justify-center shrink-0 border border-[#C5A46D]/30">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">Office Address</p>
                      <p className="text-stone-200 text-sm leading-relaxed">
                        6 Olaribiro Street, off Adegbeyemi Street, off Allen Avenue, Ikeja, Lagos, Nigeria.
                      </p>
                      <a
                        href="https://maps.app.goo.gl/RqxsmDY1ziPe4iJf7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs text-[#C5A46D] hover:underline mt-2 font-semibold"
                      >
                        <span>View on Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded bg-[#101C2C] text-[#C5A46D] flex items-center justify-center shrink-0 border border-[#C5A46D]/30">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">Phone / WhatsApp</p>
                      <a href="tel:08037136855" className="text-stone-200 text-sm hover:text-[#C5A46D] transition-colors block">
                        0803 713 6855
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded bg-[#101C2C] text-[#C5A46D] flex items-center justify-center shrink-0 border border-[#C5A46D]/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">Email Address</p>
                      <a href="mailto:info@doubleedgeabikoye.com" className="text-stone-200 text-sm hover:text-[#C5A46D] transition-colors block">
                        info@doubleedgeabikoye.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded bg-[#101C2C] text-[#C5A46D] flex items-center justify-center shrink-0 border border-[#C5A46D]/30">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">Working Hours</p>
                      <p className="text-stone-200 text-sm">Monday – Friday: 8:00 AM – 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <a
                    href="https://wa.me/2348037136855?text=Hello%20Double-Edge%20Management,%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20professional%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold py-3 px-6 rounded flex items-center justify-center space-x-2 transition-all shadow-lg text-sm"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#18263a] p-8 sm:p-10 rounded-xl border border-[#C5A46D]/20 shadow-xl">
                <h3 className="font-serif font-bold text-2xl text-white mb-2">Send Us a Message</h3>
                <p className="text-stone-300 text-sm mb-6">
                  Complete the form below and our professional advisory team will respond promptly.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#C5A46D] font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Adebayo Ogunlesi"
                        className="w-full bg-[#101C2C] border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#C5A46D] font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. adebayo@company.com"
                        className="w-full bg-[#101C2C] border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#C5A46D] font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 08030000000"
                        className="w-full bg-[#101C2C] border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#C5A46D] font-semibold mb-2">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#101C2C] border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C5A46D]"
                      >
                        <option value="Audit & Assurance">Audit & Assurance</option>
                        <option value="Taxation & Tax Advisory">Taxation & Tax Advisory</option>
                        <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                        <option value="Business & Management Consulting">Business & Management Consulting</option>
                        <option value="Human Resource Management">Human Resource Management</option>
                        <option value="Due Diligence & Investigation">Due Diligence & Investigation</option>
                        <option value="IT & Business Process Improvement">IT & Business Process Improvement</option>
                        <option value="Litigation Support">Litigation Support</option>
                        <option value="General Enquiry">General Advisory Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A46D] font-semibold mb-2">
                      Your Message / Inquiry *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your business needs or specific advisory requirements..."
                      className="w-full bg-[#101C2C] border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C5A46D]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C5A46D] hover:bg-[#b0905c] text-[#101C2C] font-bold py-3.5 px-6 rounded transition-all shadow-lg flex items-center justify-center space-x-2 text-base"
                  >
                    <span>Submit Professional Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {formSubmitted && (
                    <div className="bg-emerald-900/40 border border-emerald-500 text-emerald-200 p-3 rounded text-center text-sm font-medium animate-pulse">
                      Message sent successfully! Our team will contact you shortly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b131e] text-stone-400 py-16 border-t border-[#C5A46D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded bg-[#C5A46D] flex items-center justify-center text-[#101C2C] font-bold text-base">
                  DE
                </div>
                <span className="font-serif font-bold text-lg text-white">DOUBLE-EDGE</span>
              </div>
              <p className="text-sm leading-relaxed text-stone-400">
                Professional business, financial, and management consulting firm based in Ikeja, Lagos, Nigeria. Associated with Consulting & Advisory Home.
              </p>
              <div className="text-xs text-[#C5A46D] font-medium">
                Strategic Insight. Professional Excellence.
              </div>
            </div>

            <div>
              <h4 className="font-serif font-bold text-white text-base mb-4 border-b border-white/10 pb-2">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-[#C5A46D] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#C5A46D] transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-[#C5A46D] transition-colors">Our Services</a></li>
                <li><a href="#why-us" className="hover:text-[#C5A46D] transition-colors">Why Choose Us</a></li>
                <li><a href="#showcase" className="hover:text-[#C5A46D] transition-colors">Expertise</a></li>
                <li><a href="#contact" className="hover:text-[#C5A46D] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-white text-base mb-4 border-b border-white/10 pb-2">Professional Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-[#C5A46D] transition-colors">Audit & Assurance</a></li>
                <li><a href="#services" className="hover:text-[#C5A46D] transition-colors">Taxation & Tax Advisory</a></li>
                <li><a href="#services" className="hover:text-[#C5A46D] transition-colors">Accounting & Bookkeeping</a></li>
                <li><a href="#services" className="hover:text-[#C5A46D] transition-colors">Management Consulting</a></li>
                <li><a href="#services" className="hover:text-[#C5A46D] transition-colors">Human Resource Management</a></li>
                <li><a href="#services" className="hover:text-[#C5A46D] transition-colors">Due Diligence & Investigation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-white text-base mb-4 border-b border-white/10 pb-2">Headquarters</h4>
              <p className="text-sm text-stone-300 leading-relaxed mb-4">
                6 Olaribiro Street, off Adegbeyemi Street, off Allen Avenue, Ikeja, Lagos, Nigeria.
              </p>
              <p className="text-sm text-[#C5A46D] font-medium mb-1">Phone / WhatsApp:</p>
              <p className="text-sm text-stone-300">0803 713 6855</p>
              <p className="text-sm text-[#C5A46D] font-medium mt-3 mb-1">Email:</p>
              <p className="text-sm text-stone-300">info@doubleedgeabikoye.com</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-xs text-stone-500">
            <p>© {new Date().getFullYear()} Double-Edge Management Resource. All rights reserved. Associated with Consulting & Advisory Home.</p>
          </div>
        </div>
      </footer>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#101C2C] border border-[#C5A46D]/40 rounded-xl max-w-2xl w-full p-6 sm:p-8 text-white relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-2"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#C5A46D] text-[#101C2C] rounded flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl text-white">{selectedServiceModal.title}</h3>
                <p className="text-xs text-[#C5A46D] uppercase tracking-wider">{selectedServiceModal.tagline}</p>
              </div>
            </div>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedServiceModal.description}
            </p>

            <div className="mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A46D] mb-3">Key Service Scope & Offerings:</h4>
              <ul className="space-y-2">
                {selectedServiceModal.details.map((detail: string, idx: number) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-stone-200">
                    <Check className="w-4 h-4 text-[#C5A46D]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedServiceModal(null)}
                className="flex-1 bg-[#C5A46D] hover:bg-[#b0905c] text-[#101C2C] font-semibold py-3 px-6 rounded text-center text-sm transition-all"
              >
                Enquire About This Service
              </a>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-semibold py-3 px-6 rounded text-center text-sm transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

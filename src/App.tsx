import React, { useState } from 'react';
import logoImg from './assets/images/prime_cabs_logo_1791874924583.jpg';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Calendar, 
  Car, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  User, 
  Users, 
  Plane, 
  Briefcase, 
  Building2, 
  Navigation, 
  Sparkles,
  ArrowRight,
  Star,
  HelpCircle,
  PhoneCall
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form state for Booking Enquiry
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    pickupLocation: '',
    destination: '',
    travelDate: '',
    pickupTime: '',
    serviceType: 'Mumbai Airport Taxi',
    additionalRequirements: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobileNumber || !formData.pickupLocation) {
      setFormError('Please fill in your Full Name, Mobile Number, and Pickup Location.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);

    const message = `Hello Prime Cabs Services,\n\nI would like to enquire about a booking:\n- Name: ${formData.fullName}\n- Mobile: ${formData.mobileNumber}\n- Pickup: ${formData.pickupLocation}\n- Destination: ${formData.destination || 'N/A'}\n- Date: ${formData.travelDate || 'N/A'}\n- Time: ${formData.pickupTime || 'N/A'}\n- Service: ${formData.serviceType}\n- Notes: ${formData.additionalRequirements || 'N/A'}\n\nPlease confirm availability and fares.`;
    
    const whatsappUrl = `https://wa.me/919421994626?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fleetData = [
    {
      category: "MUV / 7-Seater",
      name: "ERTIGA",
      desc: "Spacious 7-seater MUV ideal for family outings, airport luggage space, group travel, and comfortable outstation trips.",
      image: "/Public/1791872303102.png"
    },
    {
      category: "Sedan / City Cab",
      name: "SWIFT DIZER",
      desc: "Reliable and comfortable sedan perfect for everyday city commuting, airport transfers, and local Navi Mumbai travel.",
      image: "/Public/1791871812646.png"
    },
    {
      category: "Compact Sedan",
      name: "AURA",
      desc: "Sleek and economical compact sedan offering smooth rides for business appointments, shopping, and point-to-point travel.",
      image: "/Public/1791874328338.png"
    },
    {
      category: "Premium SUV",
      name: "INNOVA",
      desc: "Top-tier premium comfort, luxurious seating, and maximum luggage capacity for long-distance outstation and family tours.",
      image: "/Public/1791872303102.png"
    }
  ];

  const servicesList = [
    {
      title: "Mumbai Airport Taxi Service | Mumbai Airport Cab Booking",
      desc: "Looking for a reliable Mumbai Airport Taxi or Cab Booking? Prime Cabs Services Navi Mumbai offers Mumbai Airport pickup, drop, hotel transfers and airport taxi services to Navi Mumbai and other destinations.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hi Prime Cabs Services, I would like to book a Mumbai Airport Taxi Service. Please share availability and fares."
    },
    {
      title: "Hourly Taxi Rental in Navi Mumbai | Cab on Rent",
      desc: "Looking for Hourly Taxi Rental in Navi Mumbai? Prime Cabs Services Navi Mumbai offers hourly cab booking for business meetings, shopping, hotel transfers, appointments and multiple-stop journeys. Contact us to confirm availability and rental rates.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hi Prime Cabs Services, I need an Hourly Taxi Rental in Navi Mumbai. Please share package details and rates."
    },
    {
      title: "Navi Mumbai Local Taxi Service | Cab Booking",
      desc: "Looking for a reliable Local Taxi Service in Navi Mumbai? Prime Cabs Services Navi Mumbai offers local cab booking, point-to-point travel, hourly taxi rental, full-day taxi service and convenient transportation for your daily travel needs.",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hi Prime Cabs Services, I want to book a Navi Mumbai Local Taxi Service. Please let me know availability."
    },
    {
      title: "Corporate Taxi Service in Navi Mumbai | Business Cab Booking",
      desc: "Looking for a reliable Corporate Taxi Service in Navi Mumbai? Prime Cabs Services Navi Mumbai offers corporate travel, office pickup and drop, business meeting transfers, employee transportation and airport transfers for corporate clients.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hi Prime Cabs Services, I am inquiring about Corporate Taxi Services in Navi Mumbai for office/business travel."
    },
    {
      title: "Hotel Pickup & Drop Taxi Service in Navi Mumbai",
      desc: "Looking for a reliable Hotel Pickup and Drop Taxi Service in Navi Mumbai? Prime Cabs Services Navi Mumbai offers hotel transfers, airport-to-hotel taxis, hotel-to-airport cabs, corporate guest transfers and pickup and drop services for hotels and business travellers.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hi Prime Cabs Services, I need Hotel Pickup & Drop Taxi Service in Navi Mumbai. Please assist with booking."
    },
    {
      title: "Outstation Taxi Service in Navi Mumbai | One Way & Round Trip Cab Booking",
      desc: "Looking for an Outstation Taxi from Navi Mumbai? Prime Cabs Services Navi Mumbai offers one-way and round-trip taxi booking for intercity travel, family trips, business travel and long-distance journeys to Mumbai, Pune and other destinations.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hi Prime Cabs Services, I want to book an Outstation Taxi from Navi Mumbai for a trip. Please share fares and availability."
    },
    {
      title: "Car Rental in Navi Mumbai | Taxi Rental Service",
      desc: "Looking for Car Rental in Navi Mumbai? Prime Cabs Services Navi Mumbai offers full-day taxi rental, hourly car rental, local travel, corporate bookings, hotel transfers and outstation cab services. Contact us to confirm vehicle availability and fares.",
      image: "https://images.unsplash.com/photo-1550355191-aa80b5b2e92c?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hi Prime Cabs Services, I am looking for Car Rental in Navi Mumbai. Please provide details."
    }
  ];

  const whyChooseList = [
    {
      title: "Quick Booking Enquiries",
      desc: "Easily connect with Prime Cabs Services via phone or WhatsApp to discuss your travel schedule and get prompt assistance.",
      icon: <Clock className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Convenient Taxi Booking",
      desc: "Seamlessly book local, outstation, or airport rides with direct customer support for your peace of mind.",
      icon: <Car className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Local and Outstation Travel",
      desc: "From point-to-point city commutes within Navi Mumbai to long-distance intercity journeys, we cater to all travel routes.",
      icon: <Navigation className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Airport Pickup and Drop",
      desc: "Timely airport transfers to and from Mumbai Airport with convenient pickup coordination and comfortable vehicles.",
      icon: <Plane className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Corporate Travel Services",
      desc: "Reliable business cab bookings, office commutes, client pickups, and corporate employee transportation solutions.",
      icon: <Briefcase className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Direct Phone and WhatsApp Contact",
      desc: "No complicated apps required—reach out directly via call or WhatsApp at 9421994626 to confirm your trip instantly.",
      icon: <MessageSquare className="w-8 h-8 text-amber-500" />
    }
  ];

  const faqList = [
    {
      q: "How can I book a taxi with Prime Cabs Services?",
      a: "You can easily book a taxi by calling us directly at 9421994626 or by sending us a message on WhatsApp. You can also fill out our quick booking enquiry form on this website to share your travel details."
    },
    {
      q: "Do you provide Mumbai Airport pickup and drop?",
      a: "Yes, Prime Cabs Services Navi Mumbai offers dependable Mumbai Airport pickup, drop, and hotel transfers to ensure timely and stress-free travel to and from the airport."
    },
    {
      q: "Can I book a local taxi in Navi Mumbai?",
      a: "Yes! We provide convenient local taxi services in Navi Mumbai for daily commutes, shopping trips, appointments, point-to-point travel, and full-day sightseeing."
    },
    {
      q: "Do you offer hourly taxi rental?",
      a: "Yes, we offer hourly taxi rental packages in Navi Mumbai for business meetings, multiple stops, and flexible city itineraries. Contact us to discuss your required hours and rates."
    },
    {
      q: "Do you provide corporate taxi services?",
      a: "Yes, we cater to corporate clients for office commutes, business meetings, employee transportation, and executive airport transfers in Navi Mumbai."
    },
    {
      q: "Can I arrange hotel pickup and drop?",
      a: "Yes, our hotel transfer services cover airport-to-hotel cabs, hotel-to-airport drops, and guest transportation for hotels and business travelers."
    },
    {
      q: "Do you offer one-way and round-trip outstation taxi bookings?",
      a: "Yes, Prime Cabs Services provides both one-way and round-trip outstation taxi bookings from Navi Mumbai to Pune, Mumbai, Nashik, Shirdi, Mahabaleshwar, and other destinations."
    },
    {
      q: "How can I confirm vehicle availability and fares?",
      a: "You can instantly confirm vehicle availability, seating options, and fare estimates by calling 9421994626 or chatting with us on WhatsApp."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* SECTION 1 — STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md shadow-amber-500/20 border border-amber-500/30">
              <img src={logoImg} alt="Prime Cabs Services Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black tracking-tight text-white">
                PRIME <span className="text-amber-500">CABS</span>
              </span>
              <span className="block text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Navi Mumbai Services
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-300">
            <button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition">Services</button>
            <button onClick={() => scrollToSection('fleet')} className="hover:text-amber-400 transition">Our Fleet</button>
            <button onClick={() => scrollToSection('why-choose')} className="hover:text-amber-400 transition">Why Us</button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-amber-400 transition">How It Works</button>
            <button onClick={() => scrollToSection('enquiry')} className="hover:text-amber-400 transition">Enquire</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-amber-400 transition">FAQ</button>
          </nav>

          {/* Right Phone & Call Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="tel:+919421994626"
              className="flex items-center gap-2 text-slate-200 hover:text-amber-400 font-bold transition text-sm sm:text-base"
            >
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-500 shadow-inner">
                <Phone className="w-4 h-4" />
              </div>
              <span>9421994626</span>
            </a>

            <a
              href="tel:+919421994626"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center gap-2 text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3 font-semibold text-slate-200">
              <button onClick={() => scrollToSection('services')} className="text-left py-2 border-b border-slate-800/60 hover:text-amber-400">Services</button>
              <button onClick={() => scrollToSection('fleet')} className="text-left py-2 border-b border-slate-800/60 hover:text-amber-400">Our Fleet</button>
              <button onClick={() => scrollToSection('why-choose')} className="text-left py-2 border-b border-slate-800/60 hover:text-amber-400">Why Us</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left py-2 border-b border-slate-800/60 hover:text-amber-400">How It Works</button>
              <button onClick={() => scrollToSection('enquiry')} className="text-left py-2 border-b border-slate-800/60 hover:text-amber-400">Enquire</button>
              <button onClick={() => scrollToSection('faq')} className="text-left py-2 border-b border-slate-800/60 hover:text-amber-400">FAQ</button>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a 
                href="tel:+919421994626"
                className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-3 rounded-xl text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call 9421994626
              </a>
              <a 
                href="https://wa.me/919421994626?text=Hi%20Prime%20Cabs%20Services,%20I%20would%20like%20to%20book%20a%20taxi."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold px-4 py-3 rounded-xl text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* SECTION 2 — HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 py-16 lg:py-24">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Public/1791871812646.png" 
            alt="Prime Cabs Services Navi Mumbai Taxi Booking" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 transform animate-pulse duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Navi Mumbai's Trusted Cab Service</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Reliable Taxi Service in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Navi Mumbai</span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-amber-300/90">
                Airport Transfers, Local Taxi, Corporate Travel & Outstation Cabs
              </p>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Looking for a reliable taxi or cab booking service? Prime Cabs Services Navi Mumbai offers airport pickup and drop, local taxi services, hourly rentals, corporate travel, hotel transfers, car rental and outstation journeys.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="tel:+919421994626"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 transition flex items-center justify-center gap-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: 9421994626</span>
                </a>

                <a
                  href="https://wa.me/919421994626?text=Hi%20Prime%20Cabs%20Services,%20I%20would%20like%20to%20book%20a%20taxi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-green-600/20 transition flex items-center justify-center gap-3 text-lg"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Floating Booking Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
                <div className="absolute -top-3 right-6 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Quick Book
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">Book Your Ride</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Contact Prime Cabs Services to schedule your journey effortlessly.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <span className="font-semibold text-sm text-slate-800">Airport Transfers (Pickup & Drop)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <span className="font-semibold text-sm text-slate-800">Local Taxi Service & Hourly Rentals</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <span className="font-semibold text-sm text-slate-800">Corporate & Hotel Guest Travel</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <span className="font-semibold text-sm text-slate-800">Outstation Taxi (One-Way & Round Trip)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/919421994626?text=Hi%20Prime%20Cabs%20Services,%20I%20would%20like%20to%20book%20a%20taxi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-green-600/20"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Book on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919421994626"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now: 9421994626</span>
                  </a>
                </div>

                <p className="text-center text-xs text-slate-500 mt-4 italic">
                  Contact us to confirm availability and fares.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR FLEET */}
      <section id="fleet" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              Our Fleet
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
              Choose the Right Taxi from Airport
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Explore suitable taxi options for local journeys, airport transfers, business travel and outstation trips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((car, index) => (
              <div 
                key={index}
                className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl hover:border-amber-500/50 transition flex flex-col"
              >
                <div className="relative h-52 overflow-hidden bg-slate-800">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm border border-slate-700">
                    {car.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{car.name}</h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">{car.desc}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                    <a
                      href="tel:+919421994626"
                      className="bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 border border-slate-700 font-semibold py-2.5 px-3 rounded-xl text-center text-sm transition flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>

                    <a
                      href={`https://wa.me/919421994626?text=${encodeURIComponent(`Hi Prime Cabs Services, I would like to enquire about booking the ${car.name}. Please share details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 px-3 rounded-xl text-center text-sm transition flex items-center justify-center gap-1.5 shadow-md shadow-green-600/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — OUR SERVICES */}
      <section id="services" className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
              Our Taxi Services in Navi Mumbai
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Convenient transportation for airport transfers, local journeys, corporate travel, hotel pickups and outstation trips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div 
                key={index}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/80 shadow-xl hover:border-amber-500/50 transition flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{service.title}</h3>
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">{service.desc}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                    <a
                      href="tel:+919421994626"
                      className="bg-slate-950 hover:bg-slate-800 text-amber-400 border border-slate-700 font-semibold py-2.5 px-3 rounded-xl text-center text-sm transition flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={`https://wa.me/919421994626?text=${encodeURIComponent(service.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2.5 px-3 rounded-xl text-center text-sm transition flex items-center justify-center gap-1.5 shadow-md shadow-green-600/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="tel:+919421994626"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 transition text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now to Book Your Ride</span>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 5 — DETAILED SERVICE INFORMATION */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Alternating 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                Local & Outstation
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Taxi Service in Navi Mumbai for Local and Outstation Travel
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Whether you need a quick pickup for daily errands within Navi Mumbai, hourly rentals for business appointments, or comfortable outstation cab bookings to Pune, Mumbai, or nearby destinations, Prime Cabs Services provides dependable transportation tailored to your itinerary.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="tel:+919421994626" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call 9421994626
                </a>
                <a href="https://wa.me/919421994626?text=Hi%20Prime%20Cabs%20Services,%20I%20need%20a%20local%20or%20outstation%20taxi." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> WhatsApp Chat
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 h-80 sm:h-96">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80" 
                alt="Local and Outstation Travel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Alternating 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 h-80 sm:h-96">
              <img 
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80" 
                alt="Convenient Booking" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                Easy Communication
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Taxi Service with Convenient Booking
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Explain how customers can contact Prime Cabs Services to discuss their journey, pickup and destination, travel requirements, availability and fare. Our team ensures transparent communication and prompt responses for all booking inquiries.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="tel:+919421994626" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href="https://wa.me/919421994626?text=Hi%20Prime%20Cabs%20Services,%20I%20want%20to%20discuss%20my%20travel%20requirements." target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* 4 Visual Categories */}
          <div className="pt-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Taxi Booking for Different Travel Needs
              </h3>
              <p className="text-slate-400 text-sm sm:text-base">
                Specialized transportation solutions tailored for every occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Category 1 */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-400">
                  <Plane className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white">Airport Transfers</h4>
                <p className="text-slate-400 text-sm">Reliable pickups and drops for Mumbai Airport travellers.</p>
                <div className="pt-2 flex gap-2 justify-center">
                  <a href="tel:+919421994626" className="p-2 bg-slate-900 rounded-lg text-amber-400 hover:bg-slate-800"><Phone className="w-4 h-4" /></a>
                  <a href="https://wa.me/919421994626?text=Hi,%20I%20need%20Airport%20Transfer%20taxi." target="_blank" rel="noopener noreferrer" className="p-2 bg-green-600 rounded-lg text-white hover:bg-green-500"><MessageSquare className="w-4 h-4" /></a>
                </div>
              </div>

              {/* Category 2 */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-400">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white">Corporate Travel</h4>
                <p className="text-slate-400 text-sm">Business meeting transfers and employee commutes.</p>
                <div className="pt-2 flex gap-2 justify-center">
                  <a href="tel:+919421994626" className="p-2 bg-slate-900 rounded-lg text-amber-400 hover:bg-slate-800"><Phone className="w-4 h-4" /></a>
                  <a href="https://wa.me/919421994626?text=Hi,%20I%20need%20Corporate%20Travel%20taxi." target="_blank" rel="noopener noreferrer" className="p-2 bg-green-600 rounded-lg text-white hover:bg-green-500"><MessageSquare className="w-4 h-4" /></a>
                </div>
              </div>

              {/* Category 3 */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-400">
                  <Building2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white">Hotel Transfers</h4>
                <p className="text-slate-400 text-sm">Seamless pickup and drop services for hotel guests.</p>
                <div className="pt-2 flex gap-2 justify-center">
                  <a href="tel:+919421994626" className="p-2 bg-slate-900 rounded-lg text-amber-400 hover:bg-slate-800"><Phone className="w-4 h-4" /></a>
                  <a href="https://wa.me/919421994626?text=Hi,%20I%20need%20Hotel%20Transfer%20taxi." target="_blank" rel="noopener noreferrer" className="p-2 bg-green-600 rounded-lg text-white hover:bg-green-500"><MessageSquare className="w-4 h-4" /></a>
                </div>
              </div>

              {/* Category 4 */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-400">
                  <Navigation className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white">Outstation Travel</h4>
                <p className="text-slate-400 text-sm">One-way and round-trip intercity cab bookings.</p>
                <div className="pt-2 flex gap-2 justify-center">
                  <a href="tel:+919421994626" className="p-2 bg-slate-900 rounded-lg text-amber-400 hover:bg-slate-800"><Phone className="w-4 h-4" /></a>
                  <a href="https://wa.me/919421994626?text=Hi,%20I%20need%20Outstation%20Travel%20taxi." target="_blank" rel="noopener noreferrer" className="p-2 bg-green-600 rounded-lg text-white hover:bg-green-500"><MessageSquare className="w-4 h-4" /></a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6 — WHY CHOOSE PRIME CABS SERVICES */}
      <section id="why-choose" className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
              Why Choose Prime Cabs Services
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Dedicated to providing prompt assistance, comfortable vehicles, and reliable travel support in Navi Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseList.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl hover:border-amber-500/50 transition group space-y-4"
              >
                <div className="w-16 h-16 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center group-type group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7 — LOCAL TRAVEL BANNER */}
      <section className="relative py-20 bg-slate-900 overflow-hidden border-t border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80" 
            alt="Local Taxi Service Navi Mumbai" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            LOCAL TAXI SERVICE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Taxi Services in Navi Mumbai
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Contact Prime Cabs Services for local taxi bookings, airport transfers, hotel pickups and travel to other destinations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:+919421994626"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 transition flex items-center justify-center gap-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: 9421994626</span>
            </a>
            <a
              href="https://wa.me/919421994626?text=Hi%20Prime%20Cabs%20Services,%20I%20would%20like%20to%20book%20a%20local%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-green-600/20 transition flex items-center justify-center gap-2 text-lg"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8 — HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
              Book Your Taxi in 3 Easy Steps
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Simple and direct booking process with Prime Cabs Services Navi Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center space-y-4 relative">
              <div className="w-12 h-12 bg-amber-500 text-slate-950 font-black rounded-xl flex items-center justify-center mx-auto text-xl shadow-lg shadow-amber-500/20">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Share Your Journey</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Contact Prime Cabs Services by phone or WhatsApp and share your pickup location, destination and travel requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center space-y-4 relative">
              <div className="w-12 h-12 bg-amber-500 text-slate-950 font-black rounded-xl flex items-center justify-center mx-auto text-xl shadow-lg shadow-amber-500/20">
                2
              </div>
              <h3 className="text-xl font-bold text-white">Confirm Availability and Fare</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Discuss your preferred travel arrangements and confirm vehicle availability and rental rates with the business.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center space-y-4 relative">
              <div className="w-12 h-12 bg-amber-500 text-slate-950 font-black rounded-xl flex items-center justify-center mx-auto text-xl shadow-lg shadow-amber-500/20">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Confirm Your Booking</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Confirm your journey details directly with Prime Cabs Services and enjoy your ride.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a
              href="https://wa.me/919421994626?text=Hi%20Prime%20Cabs%20Services,%20I%20would%20like%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-green-600/20 transition text-lg"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Book via WhatsApp Now</span>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 9 — BOOKING ENQUIRY SECTION */}
      <section id="enquiry" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                Booking Enquiry
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Tell Us Where You're Headed
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Share your travel requirements with Prime Cabs Services Navi Mumbai to enquire about your taxi booking. Fill out the form or contact us directly.
              </p>

              <div className="space-y-4 pt-4">
                <a 
                  href="tel:+919421994626"
                  className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition group"
                >
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-semibold uppercase">Call Us Directly</span>
                    <span className="text-lg font-bold text-white">9421994626</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919421994626?text=Hi%20Prime%20Cabs%20Services,%20I%20have%20an%20enquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 hover:border-green-500/50 transition group"
                >
                  <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-semibold uppercase">WhatsApp Chat</span>
                    <span className="text-lg font-bold text-white">+91 94219 94626</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-2">Taxi Booking Enquiry</h3>
              <p className="text-slate-400 text-sm mb-6">
                Submit your details to open a prefilled WhatsApp message with Prime Cabs Services.
              </p>

              {formError && (
                <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
                  {formError}
                </div>
              )}

              {formSubmitted && (
                <div className="mb-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
                  Enquiry prepared! WhatsApp has been opened with your details. Please send the message to confirm with Prime Cabs Services.
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name" 
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Mobile Number *</label>
                    <input 
                      type="tel" 
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number" 
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Pickup Location *</label>
                    <input 
                      type="text" 
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      placeholder="Enter pickup address / area" 
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Destination</label>
                    <input 
                      type="text" 
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      placeholder="Enter destination" 
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Travel Date</label>
                    <input 
                      type="date" 
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Pickup Time</label>
                    <input 
                      type="time" 
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Service Type</label>
                    <select 
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Mumbai Airport Taxi">Mumbai Airport Taxi</option>
                      <option value="Hourly Taxi Rental">Hourly Taxi Rental</option>
                      <option value="Navi Mumbai Local Taxi">Navi Mumbai Local Taxi</option>
                      <option value="Corporate Taxi Service">Corporate Taxi Service</option>
                      <option value="Hotel Pickup and Drop">Hotel Pickup and Drop</option>
                      <option value="Outstation Taxi">Outstation Taxi</option>
                      <option value="Car Rental">Car Rental</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Additional Requirements</label>
                  <textarea 
                    name="additionalRequirements"
                    value={formData.additionalRequirements}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Mention luggage, flight number, or special requests..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl transition shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 text-base"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>

                <p className="text-center text-xs text-slate-500">
                  Business must confirm availability and fares directly upon receiving your enquiry.
                </p>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 10 — TESTIMONIALS */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
              Customer Reviews
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Read customer feedback about Prime Cabs Services.
            </p>
          </div>

          {/* Placeholder for genuine customer reviews */}
          <div className="max-w-xl mx-auto bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center space-y-4 shadow-xl">
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto text-amber-400">
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
            </div>
            <h3 className="text-lg font-bold text-white">Client Reviews Coming Soon</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We value our passengers' feedback. Genuine customer reviews for Prime Cabs Services Navi Mumbai will be showcased here.
            </p>
            <div className="pt-2">
              <a 
                href="tel:+919421994626"
                className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm hover:underline"
              >
                <Phone className="w-4 h-4" /> Call to share your experience
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section id="faq" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Find answers to common questions about our taxi booking services in Navi Mumbai.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-white text-base sm:text-lg flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-amber-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-900/60 mt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 12 — FINAL CALL TO ACTION */}
      <section className="relative py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-amber-400 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            Book With Confidence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Ready to Plan Your Next Journey?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Contact Prime Cabs Services Navi Mumbai for taxi booking enquiries, airport transfers, local travel and outstation journeys.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="tel:+919421994626"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 transition flex items-center justify-center gap-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: 9421994626</span>
            </a>
            <a
              href="https://wa.me/919421994626?text=Hi%20Prime%20Cabs%20Services,%20I%20am%20ready%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-green-600/20 transition flex items-center justify-center gap-2 text-lg"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 13 — FOOTER */}
      <footer className="bg-slate-950 pt-16 pb-12 border-t border-slate-900 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-900">
            
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/30">
                  <img src={logoImg} alt="Prime Cabs Services Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl font-black text-white tracking-tight">
                  PRIME <span className="text-amber-500">CABS</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Prime Cabs Services Navi Mumbai offers dependable Mumbai Airport transfers, local taxi bookings, hourly rentals, corporate travel, hotel pickups and outstation cab services.
              </p>
              <div className="pt-2">
                <p className="text-white font-semibold text-xs uppercase tracking-widest text-amber-400">Navi Mumbai, Maharashtra</p>
              </div>
            </div>

            {/* Middle Column */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">Quick Links</h4>
              <ul className="space-y-2.5 font-medium">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition">Services</button></li>
                <li><button onClick={() => scrollToSection('fleet')} className="hover:text-amber-400 transition">Our Fleet</button></li>
                <li><button onClick={() => scrollToSection('why-choose')} className="hover:text-amber-400 transition">Why Choose Us</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-amber-400 transition">How It Works</button></li>
                <li><button onClick={() => scrollToSection('enquiry')} className="hover:text-amber-400 transition">Enquiry Form</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-amber-400 transition">FAQ</button></li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">Contact Information</h4>
              <div className="space-y-3">
                <a href="tel:+919421994626" className="flex items-center gap-3 hover:text-amber-400 transition">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-amber-500 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-white">9421994626</span>
                </a>

                <a href="https://wa.me/919421994626?text=Hi%20Prime%20Cabs%20Services" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-green-400 transition">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-green-500 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-white">+91 94219 94626</span>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300">Navi Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026 Prime Cabs Services Navi Mumbai. All Rights Reserved.</p>
            <p>Professional Taxi & Cab Booking Services in Navi Mumbai</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

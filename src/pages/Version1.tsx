import React, { useState, useEffect } from 'react';
import {
    Leaf,
    MapPin,
    MessageCircle,
    Send,
    Instagram,
    Facebook,
    Twitter,
    Calendar,
    Play,
    ChevronRight,
    Star,
    Menu,
    X,
    Phone,
    Video
} from 'lucide-react';

// --- Tipos e Interfaces ---

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    imageUrl: string;
    type: 'article' | 'video';
}

interface Testimonial {
    id: number;
    name: string;
    result: string;
    quote: string;
}

// --- Datos Simulados (Mock Data) ---

const services: Service[] = [
    {
        id: 1,
        title: "Control de Peso",
        description: "Planes personalizados enfocados en la pérdida de grasa y mantenimiento muscular sin pasar hambre.",
        icon: <Leaf className="w-8 h-8" />
    },
    {
        id: 2,
        title: "Nutrición Deportiva",
        description: "Estrategias de alimentación para maximizar tu rendimiento atlético y acelerar la recuperación.",
        icon: <Play className="w-8 h-8" />
    },
    {
        id: 3,
        title: "Nutrición Clínica",
        description: "Manejo dietético para diabetes, hipertensión, SOP y otras condiciones metabólicas.",
        icon: <Star className="w-8 h-8" />
    },
    {
        id: 4,
        title: "Coaching Online",
        description: "Seguimiento continuo vía app, revisión de medidas y ajustes semanales estés donde estés.",
        icon: <Video className="w-8 h-8" />
    }
];

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Mitos sobre los Carbohidratos",
        excerpt: "¿Realmente engordan por la noche? Desmentimos las creencias más comunes con ciencia.",
        category: "Educación",
        date: "10 Ene 2024",
        imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: 'article'
    },
    {
        id: 2,
        title: "Vlog: Un día en mi plato",
        excerpt: "Acompáñame a ver qué como en un día de entrenamiento pesado. ¡Incluye recetas!",
        category: "Vlog",
        date: "05 Ene 2024",
        imageUrl: "https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: 'video'
    },
    {
        id: 3,
        title: "Suplementos que SÍ funcionan",
        excerpt: "Guía básica sobre creatina, proteína y cafeína. No gastes tu dinero en placebos.",
        category: "Suplementación",
        date: "28 Dic 2023",
        imageUrl: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: 'article'
    }
];

const testimonials: Testimonial[] = [
    { id: 1, name: "Ana García", result: "-12kg en 4 meses", quote: "Lo mejor fue que nunca sentí que estaba a dieta. Aprendí a comer." },
    { id: 2, name: "Carlos Ruiz", result: "Ganancia Muscular", quote: "Mis marcas en el gimnasio subieron increíblemente con el plan de carga." },
    { id: 3, name: "Lucía Méndez", result: "Control Hormonal", quote: "Mis síntomas de SOP disminuyeron drásticamente solo cambiando mi alimentación." },
];

// --- Componentes ---

const FloatingActions = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

            {/* Botones secundarios */}
            <div className={`transition-all duration-300 flex flex-col gap-3 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-info text-white shadow-lg hover:scale-110 transition-transform"
                    aria-label="Telegram"
                >
                    <Send className="w-6 h-6" />
                </a>
                <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-success text-white shadow-lg hover:scale-110 transition-transform"
                    aria-label="WhatsApp"
                >
                    <MessageCircle className="w-6 h-6" />
                </a>
            </div>

            {/* Botón Principal (Chat Toggle) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`btn btn-circle btn-lg shadow-xl transition-all duration-300 ${isOpen ? 'btn-error rotate-45' : 'btn-primary'}`}
            >
                {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
            </button>
        </div>
    );
};

const Navbar = ({ activeSection, scrollTo }: { activeSection: string, scrollTo: (id: string) => void }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'servicios', label: 'Servicios' },
        { id: 'vlog', label: 'Blog & Vlog' },
        { id: 'ubicacion', label: 'Consulta' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-base-100/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-2 font-bold text-2xl text-primary cursor-pointer" onClick={() => scrollTo('inicio')}>
                    <div className="bg-primary text-primary-content p-1.5 rounded-lg">
                        <Leaf size={24} />
                    </div>
                    <span>Nutri<span className="text-base-content">Life</span></span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className={`text-sm font-semibold uppercase tracking-wide hover:text-primary transition-colors ${activeSection === link.id ? 'text-primary border-b-2 border-primary' : 'text-base-content/70'}`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button onClick={() => scrollTo('contacto')} className="btn btn-primary btn-sm rounded-full px-6">
                        Agendar Cita
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden btn btn-ghost btn-circle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-base-100 shadow-xl p-4 flex flex-col gap-4 md:hidden border-t border-base-200">
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => { scrollTo(link.id); setMobileMenuOpen(false); }}
                            className="text-left font-semibold py-2 px-4 hover:bg-base-200 rounded-lg"
                        >
                            {link.label}
                        </button>
                    ))}
                    <button onClick={() => { scrollTo('contacto'); setMobileMenuOpen(false); }} className="btn btn-primary w-full">
                        Agendar Cita
                    </button>
                </div>
            )}
        </nav>
    );
};

const Hero = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
    return (
        <section id="inicio" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-base-200/30">

            {/* Decorative Blobs */}
            <div className="absolute top-20 right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="badge badge-accent badge-outline font-bold p-3">Nueva Agenda Abierta 2024</div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight text-base-content">
                        Nutrición que <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Transforma</span>
                    </h1>
                    <p className="text-xl text-base-content/70 max-w-lg">
                        Olvídate de las dietas restrictivas. Aprende a nutrir tu cuerpo, potenciar tu energía y alcanzar tus metas con ciencia y empatía.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button onClick={() => scrollTo('servicios')} className="btn btn-primary btn-lg rounded-full px-8 shadow-lg shadow-primary/30">
                            Ver Servicios
                        </button>
                        <button onClick={() => scrollTo('vlog')} className="btn btn-outline btn-lg rounded-full px-8 gap-2">
                            <Play size={20} /> Ver Vlog
                        </button>
                    </div>

                    <div className="flex items-center gap-4 pt-8">
                        <div className="avatar-group -space-x-4">
                            <div className="avatar border-2 border-base-100">
                                <div className="w-10">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="client" />
                                </div>
                            </div>
                            <div className="avatar border-2 border-base-100">
                                <div className="w-10">
                                    <img src="https://i.pravatar.cc/100?img=5" alt="client" />
                                </div>
                            </div>
                            <div className="avatar border-2 border-base-100">
                                <div className="w-10">
                                    <img src="https://i.pravatar.cc/100?img=8" alt="client" />
                                </div>
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-base-content/80">
                            <span className="text-primary">+500</span> Pacientes felices
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-base-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Nutricionista Profesional"
                            className="w-full h-auto object-cover"
                        />

                        {/* Floating Card Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 bg-base-100/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-base-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-lg">Dra. Sofia Verde</p>
                                    <p className="text-xs text-base-content/60">Especialista en Nutrición Deportiva</p>
                                </div>
                                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                                    <Leaf size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesSection = () => {
    return (
        <section id="servicios" className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-black mb-4">Mis Servicios</h2>
                    <p className="text-base-content/70">Diseñados para adaptarse a tu estilo de vida, no al revés.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div key={service.id} className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="card-title text-xl mb-2">{service.title}</h3>
                                <p className="text-sm text-base-content/70 mb-4">{service.description}</p>
                                <div className="card-actions">
                                    <button className="btn btn-ghost btn-sm text-primary gap-1 group-hover:gap-2 transition-all">
                                        Saber más <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-neutral text-neutral-content">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-accent mb-2">Historias de Éxito</h2>
                        <p className="text-neutral-content/70">Resultados reales de personas reales.</p>
                    </div>
                    <button className="btn btn-outline btn-accent rounded-full">Ver Portafolio Completo</button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div key={item.id} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 relative">
                            <div className="absolute -top-4 -left-4 bg-accent text-accent-content p-2 rounded-lg">
                                <Star size={24} fill="currentColor" />
                            </div>
                            <p className="italic text-lg mb-6 text-gray-300">"{item.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                        <span className="text-xl">{item.name.charAt(0)}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold">{item.name}</p>
                                    <p className="text-accent text-sm font-bold">{item.result}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BlogVlogSection = () => {
    return (
        <section id="vlog" className="py-20 bg-base-200/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="uppercase tracking-widest text-primary font-bold text-xs">Contenido Exclusivo</span>
                    <h2 className="text-4xl font-black mt-2">Blog & Vlog</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="card bg-base-100 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer h-full flex flex-col">
                            <div className="relative h-48 w-full overflow-hidden">
                                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 badge badge-secondary font-bold">
                                    {post.type === 'video' ? <span className="flex items-center gap-1"><Play size={12} /> Video</span> : 'Artículo'}
                                </div>
                            </div>
                            <div className="card-body p-6 flex-1">
                                <div className="flex justify-between items-center text-xs text-base-content/50 mb-3">
                                    <span className="badge badge-ghost badge-sm">{post.category}</span>
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                </div>
                                <h3 className="card-title text-lg font-bold hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-sm text-base-content/70 mt-2 line-clamp-3">{post.excerpt}</p>
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-link btn-sm text-primary no-underline px-0">Leer ahora</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const LocationSection = () => {
    return (
        <section id="ubicacion" className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="card lg:card-side bg-base-100 shadow-2xl border border-base-200 overflow-hidden">

                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-primary text-primary-content">
                        <h2 className="text-4xl font-black mb-6">Visítame en Consulta</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">Ubicación Central</h3>
                                    <p className="opacity-90">Av. Libertador 1234, Edificio Médico "Salud Integral"</p>
                                    <p className="opacity-90">Piso 4, Consultorio 402</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">Horarios</h3>
                                    <p className="opacity-90">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                                    <p className="opacity-90">Sábados: Previa Cita</p>
                                </div>
                            </div>

                            <div className="pt-6">
                                <button className="btn btn-secondary w-full lg:w-auto shadow-lg border-none text-secondary-content">
                                    <MapPin className="mr-2" /> Abrir en Waze / Google Maps
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 h-80 lg:h-auto relative bg-base-200">
                        {/* Embed de Mapa simulado para el ejemplo */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0635677864836!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1530661642138"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Mapa del consultorio"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content pt-16 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 font-bold text-2xl text-white mb-4">
                            <Leaf size={24} />
                            <span>NutriLife</span>
                        </div>
                        <p className="opacity-70 max-w-sm">
                            Transformando vidas a través de la alimentación consciente. Tu salud es el proyecto más importante.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="btn btn-circle btn-ghost btn-sm hover:bg-primary hover:text-white"><Instagram size={20} /></a>
                            <a href="#" className="btn btn-circle btn-ghost btn-sm hover:bg-primary hover:text-white"><Facebook size={20} /></a>
                            <a href="#" className="btn btn-circle btn-ghost btn-sm hover:bg-primary hover:text-white"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Enlaces Rápidos</h4>
                        <ul className="space-y-2 opacity-70">
                            <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
                            <li><a href="#servicios" className="hover:text-primary transition-colors">Planes Nutricionales</a></li>
                            <li><a href="#vlog" className="hover:text-primary transition-colors">Blog Saludable</a></li>
                            <li><a href="#ubicacion" className="hover:text-primary transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Legal</h4>
                        <ul className="space-y-2 opacity-70">
                            <li><a href="#" className="hover:text-primary transition-colors">Aviso de Privacidad</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-sm opacity-50">
                    <p>&copy; {new Date().getFullYear()} NutriLife. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default function Version1() {
    const [activeSection, setActiveSection] = useState('inicio');

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        // Definimos el tema de DaisyUI (puedes cambiar 'emerald' por 'forest', 'lemonade', etc.)
        <div data-theme="emerald" className="font-sans text-base-content bg-base-100 min-h-screen selection:bg-primary selection:text-white">
            <Navbar activeSection={activeSection} scrollTo={scrollTo} />

            <main>
                <Hero scrollTo={scrollTo} />
                <ServicesSection />
                <TestimonialsSection />
                <BlogVlogSection />
                <LocationSection />
            </main>

            <Footer />
            <FloatingActions />
        </div>
    );
}

import React, { useState } from 'react';
import {
    Leaf,
    MapPin,
    MessageCircle,
    Send,
    Instagram,
    Facebook,
    Twitter,
    Play,
    ArrowRight,
    Menu,
    X,
    Zap,
    TrendingUp,
    User,
    Clock
} from 'lucide-react';

// --- Datos ---

const services = [
    {
        id: 1,
        title: "Plan Integral",
        price: "$80",
        desc: "Nutrición + Entrenamiento",
        icon: <Zap size={20} />,
        color: "bg-indigo-100 text-indigo-600"
    },
    {
        id: 2,
        title: "Consulta Online",
        price: "$50",
        desc: "Vía Zoom (45 min)",
        icon: <User size={20} />,
        color: "bg-rose-100 text-rose-600"
    },
    {
        id: 3,
        title: "Menú Semanal",
        price: "$30",
        desc: "Recetas y lista de súper",
        icon: <Leaf size={20} />,
        color: "bg-emerald-100 text-emerald-600"
    }
];

const posts = [
    { id: 1, title: "5 Desayunos en 5 min", tag: "Recetas", img: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=400&q=80" },
    { id: 2, title: "¿Carbos de noche?", tag: "Mitos", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=400&q=80" },
    { id: 3, title: "Mi rutina de glúteos", tag: "Vlog", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80" },
];

// --- Componentes ---

const Navbar = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 p-4">
            <nav className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-sm rounded-full px-6 py-3 flex justify-between items-center max-w-5xl mx-auto">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-800 cursor-pointer" onClick={() => scrollTo('inicio')}>
                    <div className="bg-primary text-white p-1.5 rounded-lg">
                        <Leaf size={18} fill="currentColor" />
                    </div>
                    NutriBento
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
                    <button onClick={() => scrollTo('servicios')} className="hover:text-primary transition-colors">Servicios</button>
                    <button onClick={() => scrollTo('vlog')} className="hover:text-primary transition-colors">Contenido</button>
                    <button onClick={() => scrollTo('ubicacion')} className="hover:text-primary transition-colors">Consultorio</button>
                </div>

                <div className="flex items-center gap-2">
                    <button onClick={() => scrollTo('contacto')} className="hidden md:flex btn btn-primary btn-sm rounded-full px-6 font-bold">Agendar</button>
                    <button className="md:hidden btn btn-ghost btn-circle btn-sm" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-xl p-4 flex flex-col gap-2 z-50 md:hidden animate-in fade-in slide-in-from-top-4">
                    {['Inicio', 'Servicios', 'Vlog', 'Ubicacion'].map((item) => (
                        <button
                            key={item}
                            onClick={() => { scrollTo(item.toLowerCase()); setIsOpen(false); }}
                            className="p-3 text-left hover:bg-slate-50 rounded-xl font-medium text-slate-600"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const BentoCard = ({ children, className = "", title, subtitle }: { children: React.ReactNode, className?: string, title?: string, subtitle?: string }) => (
    <div className={`bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col ${className}`}>
        {(title || subtitle) && (
            <div className="mb-4">
                {subtitle && <span className="text-xs font-bold text-primary uppercase tracking-wider">{subtitle}</span>}
                {title && <h3 className="text-xl font-bold text-slate-800">{title}</h3>}
            </div>
        )}
        {children}
    </div>
);

const HeroGrid = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
    return (
        <section id="inicio" className="pt-4 pb-10 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

                {/* Main Hero Card */}
                <BentoCard className="md:col-span-2 md:row-span-2 justify-between bg-gradient-to-br from-indigo-50 to-white relative overflow-hidden group">
                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold text-indigo-600 mb-4 shadow-sm">
                            👋 Nueva Agenda 2024
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight mb-4">
                            Come mejor,<br />
                            <span className="text-indigo-500">vive simple.</span>
                        </h1>
                        <p className="text-slate-500 mb-8 max-w-sm leading-relaxed">
                            Nutrición clínica y deportiva sin complicaciones. Planes adaptados a tu ritmo de vida real.
                        </p>
                        <div className="flex gap-3">
                            <button onClick={() => scrollTo('servicios')} className="btn btn-primary rounded-full px-6">Ver Planes</button>
                            <button onClick={() => scrollTo('vlog')} className="btn btn-ghost bg-white hover:bg-white/80 rounded-full gap-2 text-slate-600">
                                <Play size={16} fill="currentColor" /> Intro
                            </button>
                        </div>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&q=80"
                        alt="Food Bowl"
                        className="absolute -right-10 -bottom-10 w-64 h-64 object-cover rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-500 rotate-12"
                    />
                </BentoCard>

                {/* Profile/About Card */}
                <BentoCard className="md:col-span-1 md:row-span-2 bg-slate-900 text-white relative overflow-hidden group">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                            alt="Doctor"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    </div>
                    <div className="relative z-10 mt-auto">
                        <h3 className="text-2xl font-bold mb-1">Dra. Sara M.</h3>
                        <p className="text-slate-300 text-sm mb-4">Nutricionista MSc.</p>
                        <div className="flex gap-2">
                            <div className="badge badge-outline text-white border-white/30">Deportiva</div>
                            <div className="badge badge-outline text-white border-white/30">Clínica</div>
                        </div>
                    </div>
                </BentoCard>

                {/* Quick Stat 1 */}
                <BentoCard className="bg-lime-100 justify-center items-center text-center group cursor-pointer hover:bg-lime-200">
                    <div className="bg-white p-3 rounded-2xl mb-2 shadow-sm group-hover:scale-110 transition-transform">
                        <TrendingUp size={24} className="text-lime-600" />
                    </div>
                    <p className="font-bold text-slate-800 text-2xl">850+</p>
                    <p className="text-xs font-bold text-lime-700 uppercase">Pacientes</p>
                </BentoCard>

                {/* Quick Stat 2 - Social */}
                <BentoCard className="bg-sky-100 justify-center items-center text-center group cursor-pointer hover:bg-sky-200">
                    <div className="bg-white p-3 rounded-2xl mb-2 shadow-sm group-hover:scale-110 transition-transform">
                        <Instagram size={24} className="text-sky-600" />
                    </div>
                    <p className="font-bold text-slate-800 text-2xl">12k</p>
                    <p className="text-xs font-bold text-sky-700 uppercase">Seguidores</p>
                </BentoCard>

            </div>
        </section>
    );
};

const ServicesBento = () => {
    return (
        <section id="servicios" className="py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-end mb-6 px-2">
                    <h2 className="text-3xl font-bold text-slate-800">Servicios</h2>
                    <span className="text-slate-400 text-sm font-medium">Elige tu camino</span>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    {services.map((service) => (
                        <BentoCard key={service.id} className="group hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-2xl ${service.color} transition-colors`}>
                                    {service.icon}
                                </div>
                                <span className="bg-slate-100 px-3 py-1 rounded-full text-sm font-bold text-slate-600">
                                    {service.price}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                            <p className="text-slate-500 text-sm mb-6">{service.desc}</p>
                            <button className="w-full btn btn-outline btn-sm rounded-xl border-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-800 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                                Reservar
                            </button>
                        </BentoCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContentScroll = () => {
    return (
        <section id="vlog" className="py-10 px-4 bg-slate-50/50">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6 px-2">
                    <h2 className="text-3xl font-bold text-slate-800">Vlog & Tips</h2>
                    <button className="btn btn-ghost btn-sm rounded-full text-primary">Ver todo</button>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                    <div className="flex gap-4 w-max">
                        {posts.map((post) => (
                            <div key={post.id} className="w-72 h-80 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-lg w-fit mb-2 border border-white/20">
                                        {post.tag}
                                    </span>
                                    <h3 className="text-white font-bold text-lg leading-tight">{post.title}</h3>
                                </div>
                                <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        ))}

                        {/* CTA Card at end of scroll */}
                        <div className="w-48 h-80 rounded-[2rem] bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-4 hover:bg-slate-200 transition-colors cursor-pointer">
                            <div className="bg-white p-3 rounded-full mb-3 shadow-sm">
                                <Play size={20} className="ml-1 text-slate-400" />
                            </div>
                            <p className="font-bold text-slate-500">Ver Canal de YouTube</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MapWidget = () => {
    return (
        <section id="ubicacion" className="py-10 px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">

                {/* Info Card */}
                <BentoCard className="md:col-span-1 bg-slate-800 text-white justify-between">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold mb-6">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Abierto Ahora
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Visítanos</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Torre Médica "Las Américas"<br />
                            Piso 8, Consultorio 804<br />
                            Av. Principal del Valle.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl">
                            <Clock size={18} />
                            <span>Lun - Vie: 9am - 6pm</span>
                        </div>
                        <button className="w-full btn btn-primary rounded-xl border-none">
                            <MapPin size={18} /> Ver en Mapa
                        </button>
                    </div>
                </BentoCard>

                {/* Map Display */}
                <div className="md:col-span-2 h-[300px] md:h-auto rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0635677864836!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1530661642138"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        title="Ubicacion"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-xl text-xs font-bold shadow-sm pointer-events-none">
                        📍 Caracas, VZLA
                    </div>
                </div>

            </div>
        </section>
    );
};

const FooterMinimal = () => (
    <footer className="py-10 px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4 text-slate-400">
            <Leaf size={16} />
            <span className="font-bold">NutriBento</span>
        </div>
        <div className="flex justify-center gap-6 text-slate-400 mb-8">
            <Instagram size={20} className="hover:text-primary cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-primary cursor-pointer transition-colors" />
            <Facebook size={20} className="hover:text-primary cursor-pointer transition-colors" />
        </div>
        <p className="text-xs text-slate-300">© 2024 Diseño Modular. Todos los derechos reservados.</p>
    </footer>
);

const FloatingDock = () => {
    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full p-2 flex gap-2 items-center px-4">
                <a href="https://wa.me/" className="p-2 rounded-full hover:bg-slate-100 transition-colors text-green-600 relative group">
                    <MessageCircle size={24} />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">WhatsApp</span>
                </a>
                <div className="w-px h-6 bg-slate-200"></div>
                <a href="https://t.me/" className="p-2 rounded-full hover:bg-slate-100 transition-colors text-sky-500 relative group">
                    <Send size={24} />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Telegram</span>
                </a>
            </div>
        </div>
    );
};

export default function Version3() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // "lofi" o "winter" son temas geniales para este look limpio
        <div data-theme="lofi" className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 pb-20">
            <Navbar scrollTo={scrollTo} />
            <HeroGrid scrollTo={scrollTo} />
            <ServicesBento />
            <ContentScroll />
            <MapWidget />
            <FooterMinimal />
            <FloatingDock />
        </div>
    );
}

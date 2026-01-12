import { useState } from 'react';
import {
    Leaf,
    MapPin,
    MessageCircle,
    Send,
    Instagram,
    Facebook,
    Twitter,
    Play,
    ArrowUpRight,
    Menu,
    X,
    Zap,
    Coffee,
    Smile,
    Heart,
    TrendingUp,
} from 'lucide-react';

// --- Estilos Base para Neo-Brutalismo ---
const brutalCard = "bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200";
const brutalBtn = "btn border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] text-black font-bold uppercase tracking-wider";

// --- Datos Simulados ---

const services = [
    {
        id: 1,
        title: "Keto & Low Carb",
        description: "Protocolos metabólicos para quemar grasa eficientemente.",
        icon: <Zap className="w-8 h-8" />,
        color: "bg-secondary"
    },
    {
        id: 2,
        title: "Vegano / Plant-Based",
        description: "Transición saludable sin déficit de nutrientes.",
        icon: <Leaf className="w-8 h-8" />,
        color: "bg-accent"
    },
    {
        id: 3,
        title: "Psiconutrición",
        description: "Mejora tu relación con la comida desde la mente.",
        icon: <Smile className="w-8 h-8" />,
        color: "bg-primary"
    }
];

const blogPosts = [
    {
        id: 1,
        title: "Smoothies que no rompen tu ayuno",
        category: "Recetas",
        date: "12 Ene",
        color: "bg-yellow-200"
    },
    {
        id: 2,
        title: "Rutina de 15 min para gente ocupada",
        category: "Fitness",
        date: "08 Ene",
        color: "bg-blue-200"
    },
    {
        id: 3,
        title: "¿El café afecta tu cortisol?",
        category: "Ciencia",
        date: "02 Ene",
        color: "bg-pink-200"
    }
];

// --- Componentes ---

const Navbar = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#fefce8] border-b-2 border-black px-4 py-3">
            <div className="container mx-auto flex justify-between items-center">
                <div
                    className="text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer select-none"
                    onClick={() => scrollTo('inicio')}
                >
                    <div className="bg-primary border-2 border-black w-8 h-8 flex items-center justify-center shadow-[2px_2px_0px_0px_black]">
                        <Heart size={18} className="text-black fill-white" />
                    </div>
                    <span className="text-black">DRA. POP<span className="text-primary">.</span></span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center font-bold text-sm">
                    <a onClick={() => scrollTo('servicios')} className="hover:underline decoration-2 underline-offset-4 cursor-pointer">SERVICIOS</a>
                    <a onClick={() => scrollTo('vlog')} className="hover:underline decoration-2 underline-offset-4 cursor-pointer">EL BLOG</a>
                    <a onClick={() => scrollTo('ubicacion')} className="hover:underline decoration-2 underline-offset-4 cursor-pointer">MAPA</a>
                    <button
                        onClick={() => scrollTo('contacto')}
                        className={`${brutalBtn} btn-primary btn-sm rounded-none`}
                    >
                        Hablemos
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-[60px] left-0 w-full bg-[#fefce8] border-b-2 border-black p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
                    <a onClick={() => { scrollTo('servicios'); setIsOpen(false); }} className="font-bold text-xl uppercase border-b border-black/10 pb-2">Servicios</a>
                    <a onClick={() => { scrollTo('vlog'); setIsOpen(false); }} className="font-bold text-xl uppercase border-b border-black/10 pb-2">Blog</a>
                    <a onClick={() => { scrollTo('ubicacion'); setIsOpen(false); }} className="font-bold text-xl uppercase border-b border-black/10 pb-2">Ubicación</a>
                </div>
            )}
        </nav>
    );
};

const Marquee = () => {
    return (
        <div className="bg-black text-white py-3 border-y-2 border-black overflow-hidden whitespace-nowrap sticky top-[60px] z-40">
            <div className="inline-block animate-[spin_20s_linear_infinite] w-full text-center">
                <span className="mx-4 font-bold uppercase tracking-widest">★ NO MÁS DIETAS ABURRIDAS</span>
                <span className="mx-4 font-bold uppercase tracking-widest">★ COME RICO</span>
                <span className="mx-4 font-bold uppercase tracking-widest">★ VIVE MEJOR</span>
                <span className="mx-4 font-bold uppercase tracking-widest">★ SALUD REAL</span>
                <span className="mx-4 font-bold uppercase tracking-widest">★ SIN CULPA</span>
                <span className="mx-4 font-bold uppercase tracking-widest">★ ENERGÍA A TOPE</span>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <section id="inicio" className="pt-32 pb-20 bg-[#fefce8] min-h-screen flex items-center relative overflow-hidden">
            {/* Elementos Decorativos de Fondo */}
            <div className="absolute top-40 left-10 w-20 h-20 bg-accent rounded-full border-2 border-black opacity-50 blur-sm" />
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary rounded-full border-2 border-black opacity-50 blur-sm" />

            {/* Grid de Puntos */}
            <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none" />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                    <div className="inline-block bg-white border-2 border-black px-4 py-1 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                        👋 Hola, soy la Dra. Pop
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-black">
                        NUTRICIÓN <br />
                        <span className="text-primary italic px-2 bg-black text-white transform inline-block rotate-1 mt-2">SIN FILTRO</span>
                    </h1>
                    <p className="text-xl font-medium max-w-lg border-l-4 border-black pl-4">
                        Olvídate de contar calorías obsesivamente. Vamos a hackear tu metabolismo con comida real, datos científicos y cero drama.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className={`${brutalBtn} btn-secondary btn-lg rounded-none w-full md:w-auto`}>
                            Quiero Empezar YA
                        </button>
                        <button className={`${brutalBtn} btn-white btn-lg rounded-none w-full md:w-auto gap-2`}>
                            <Play size={20} className="fill-black" /> Ver Vlog
                        </button>
                    </div>

                    <div className="flex items-center gap-4 pt-6">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-200 overflow-hidden relative z-10 hover:z-20 transition-all">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                </div>
                            ))}
                        </div>
                        <div className="font-bold leading-tight text-sm">
                            <p>+1000 Pacientes</p>
                            <p className="underline decoration-wavy decoration-primary">Felices y comiendo.</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="bg-accent absolute inset-0 transform translate-x-4 translate-y-4 border-2 border-black rounded-3xl" />
                    <div className="bg-white border-2 border-black rounded-3xl overflow-hidden relative z-10 p-2">
                        <div className="bg-yellow-100 rounded-2xl overflow-hidden border border-black aspect-[4/5] relative">
                            <img
                                src="https://images.unsplash.com/photo-1623855244697-5253b5e2275f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Nutricionista Fun"
                                className="w-full h-full object-cover mix-blend-multiply"
                            />

                            {/* Stickers flotantes */}
                            <div className="absolute top-4 right-4 bg-white border-2 border-black p-2 shadow-[2px_2px_0px_0px_black] rotate-3 animate-bounce">
                                <Coffee size={24} />
                            </div>
                            <div className="absolute bottom-10 left-[-10px] bg-primary text-white font-bold px-4 py-2 border-2 border-black -rotate-6 shadow-[3px_3px_0px_0px_black]">
                                100% Personalizado
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesGrid = () => {
    return (
        <section id="servicios" className="py-20 bg-white border-t-2 border-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <h2 className="text-5xl font-black uppercase italic tracking-tighter">
                        El Menú <span className="text-secondary not-italic">Deluxe</span>
                    </h2>
                    <p className="font-bold text-right max-w-xs">
                        Servicios diseñados para que logres tus metas sin perder la cabeza.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className={`${brutalCard} flex flex-col items-start p-8 ${service.color}`}>
                            <div className="bg-white border-2 border-black p-3 mb-6 shadow-[2px_2px_0px_0px_black] rounded-full">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4 uppercase">{service.title}</h3>
                            <p className="font-medium mb-8 flex-1">{service.description}</p>
                            <button className="flex items-center gap-2 font-bold underline decoration-2 underline-offset-4 hover:bg-black hover:text-white px-2 transition-colors">
                                Ver Detalles <ArrowUpRight size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const InteractiveMap = () => {
    return (
        <section id="ubicacion" className="py-20 bg-[#e0f2fe] border-t-2 border-black">
            <div className="container mx-auto px-4">
                <div className="bg-white border-2 border-black p-2 shadow-[8px_8px_0px_0px_black]">
                    <div className="grid md:grid-cols-2">

                        <div className="p-8 md:p-12 flex flex-col justify-center bg-[#fefce8] border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-black">
                            <div className="inline-block bg-black text-white px-3 py-1 font-bold text-xs uppercase mb-4 w-max">
                                Base de Operaciones
                            </div>
                            <h2 className="text-4xl font-black mb-6 uppercase">¿Dónde ocurren los milagros?</h2>

                            <div className="space-y-6 font-bold">
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="bg-white border-2 border-black p-2 group-hover:bg-primary transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-lg">Av. Saludable 123</p>
                                        <p className="text-sm opacity-60 font-normal">Edificio "Vitamina C", Piso 4</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="bg-white border-2 border-black p-2 group-hover:bg-primary transition-colors">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <p className="text-lg">Consultas Online</p>
                                        <p className="text-sm opacity-60 font-normal">Vía Zoom / Google Meet</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex gap-3">
                                <button className={`${brutalBtn} btn-accent flex-1 rounded-none`}>Waze</button>
                                <button className={`${brutalBtn} bg-white flex-1 rounded-none`}>Google Maps</button>
                            </div>
                        </div>

                        <div className="h-[400px] bg-blue-100 relative overflow-hidden group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0635677864836!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1530661642138"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Map"
                                className="grayscale group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                            <div className="absolute inset-0 border-2 border-black pointer-events-none" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const BlogSection = () => {
    return (
        <section id="vlog" className="py-20 bg-primary/20 border-t-2 border-black">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-4xl font-black bg-white border-2 border-black px-4 py-2 inline-block shadow-[4px_4px_0px_0px_black]">
                        EL VLOG
                    </h2>
                    <div className="flex gap-2">
                        <button className={`${brutalBtn} btn-square btn-sm rounded-none bg-white`}>{'<'}</button>
                        <button className={`${brutalBtn} btn-square btn-sm rounded-none bg-white`}>{'>'}</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <div key={post.id} className={`${brutalCard} p-0 overflow-hidden flex flex-col h-full`}>
                            <div className={`h-48 ${post.color} border-b-2 border-black flex items-center justify-center relative overflow-hidden`}>
                                <Play className="opacity-20 w-32 h-32 absolute -right-6 -bottom-6 rotate-12" />
                                <span className="bg-black text-white px-2 py-1 text-xs font-bold absolute top-2 right-2 border border-white">
                                    {post.category}
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-xs font-bold opacity-50 mb-2 block">{post.date}</span>
                                <h3 className="text-xl font-black leading-tight mb-4 flex-1 hover:text-primary cursor-pointer">{post.title}</h3>
                                <a href="#" className="text-sm font-bold uppercase tracking-wider underline decoration-2">Leer / Ver</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SocialFooter = () => {
    return (
        <footer className="bg-black text-[#fefce8] pt-16 pb-8 border-t-2 border-black">
            <div className="container mx-auto px-4">

                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <h2 className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            HABLEMOS.
                        </h2>
                        <p className="text-xl font-medium max-w-md">
                            ¿Lista para cambiar tu vida? Mándame un mensaje y empecemos el cambio.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold border-b border-white/20 pb-2 mb-4">CONTACTO</h4>
                        <a href="#" className="block hover:text-primary transition-colors">hola@drapop.com</a>
                        <a href="#" className="block hover:text-primary transition-colors">+58 412 123 4567</a>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold border-b border-white/20 pb-2 mb-4">SOCIAL</h4>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-primary transform hover:scale-110 transition-transform"><Instagram /></a>
                            <a href="#" className="hover:text-primary transform hover:scale-110 transition-transform"><Twitter /></a>
                            <a href="#" className="hover:text-primary transform hover:scale-110 transition-transform"><Facebook /></a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-sm font-bold opacity-30 uppercase tracking-widest">
                    © 2024 Dra. Pop Nutrition. Made with ❤️ & ☕
                </div>
            </div>
        </footer>
    );
};

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className={`${brutalBtn} btn-success rounded-full w-14 h-14 p-0 flex items-center justify-center bg-[#25D366] text-white`}>
                <MessageCircle size={28} />
            </a>
            <a href="https://t.me/" target="_blank" rel="noreferrer" className={`${brutalBtn} btn-info rounded-full w-14 h-14 p-0 flex items-center justify-center bg-[#0088cc] text-white`}>
                <Send size={28} className="ml-[-2px]" />
            </a>
        </div>
    );
};

export default function Version2() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // Tema 'retro' base, pero sobreescrito con clases personalizadas de Tailwind
        <div data-theme="retro" className="font-sans text-black bg-[#fefce8] min-h-screen selection:bg-black selection:text-white">
            <Navbar scrollTo={scrollTo} />
            <Marquee />
            <main>
                <Hero />
                <ServicesGrid />
                <InteractiveMap />
                <BlogSection />
            </main>
            <SocialFooter />
            <FloatingButtons />
        </div>
    );
}

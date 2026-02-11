export type Language = "es" | "en";

export const translations = {
    es: {
        nav: {
            home: "Inicio",
            services: "Servicios",
            projects: "Proyectos",
            timeline: "Trayectoria",
            stack: "Stack",
            certifications: "Certificaciones",
            contact: "Contacto",
        },
        hero: {
            subtitle: "Hola, soy",
            roles: ["Desarrollador Web", "Ingeniero de Software", "Full Stack Developer"],
            typed_mobile: ["Desarrollador Web"],
            and_im: "y soy",
            desc_mobile: "Soy desarrollador de software enfocado en crear aplicaciones web modernas, rápidas y optimizadas. Disfruto aprender nuevas tecnologías y mejorar continuamente como profesional.",
            desc_desktop: "Soy desarrollador de software enfocado en crear aplicaciones web modernas, optimizadas y escalables. Disfruto aprender nuevas tecnologías y mejorar continuamente como profesional.",
            download_cv: "Descargar CV",
            role_card: "Desarrollador de Software",
        },
        services: {
            title: "Mis servicios",
            mobile_desc: "Ofrezco soluciones modernas, intuitivas y adaptadas a tus necesidades digitales.",
            desktop_desc: "Ofrezco soluciones modernas, intuitivas y adaptadas a tus necesidades digitales.",
            items: {
                frontend: { title: "Desarrollo front-end", desc: "Ofrezco diseño web moderno, responsivo y atractivo." },
                webapps: { title: "Aplicaciones Web", desc: "Desarrollo de aplicaciones web seguras y escalables." },
                ecommerce: { title: "E-Commerce", desc: "Creación de tiendas en línea con pasarelas de pago." },
                backend: { title: "Desarrollo back-end", desc: "Servicios de backend para manejar datos y lógica de negocios." },
                testing: { title: "Testing", desc: "Pruebas para garantizar calidad y estabilidad de tus apps." },
                mobile: { title: "Aplicaciones Móviles", desc: "Desarrollo de apps ágiles para iOS y Android." },
            }
        },
        stack: {
            title: "Mi Stack",
        },
        certifications: {
            title: "Certificaciones y Logros",
            subtitle: "Aprendizaje continuo para mantenerme al día con las últimas tecnologías.",
        },
        projects: {
            title: "Mis Proyectos",
            subtitle: "Aquí encontrarás una selección de mis trabajos más recientes.",
            note: "Cada proyecto representa un desafío único.",
            loading: "Cargando proyectos...",
            error: "Error al cargar proyectos.",
            view_code: "Ver código",
            demo: "Demo",
            no_desc: "Descripción no disponible",
        },
        contact: {
            title: "Contáctame",
            name: "Nombre",
            name_ph: "Tu nombre",
            phone: "Teléfono",
            phone_ph: "Tu teléfono",
            email: "Correo",
            email_ph: "correo@ejemplo.com",
            message: "Mensaje",
            message_ph: "Escribe tu mensaje aquí...",
            send: "Enviar",
            sending: "Enviando...",
            success: "¡Correo enviado con éxito!",
            error: "Hubo un error al enviar el correo. Intenta de nuevo.",
        },
        footer: {
            brand_desc: "Desarrollador Full Stack enfocado en crear experiencias web modernas, rápidas y escalables.",
            available: "Disponible para proyectos",
            nav_title: "Navegación",
            connect_title: "Conecta conmigo",
            rights: "Todos los derechos reservados",
        },
        timeline: {
            title: "Mi Trayectoria",
            subtitle: "El camino que he recorrido hasta ahora.",
            items: [
                { year: "2024 - Presente", title: "Freelance Developer", desc: "Desarrollo de soluciones web a medida para clientes internacionales." },
                { year: "2023", title: "Certificación Meta Frontend", desc: "Especialización en React y ecosistema moderno de JavaScript." },
                { year: "2022", title: "Inicios en Programación", desc: "Primeros pasos con HTML, CSS y JavaScript." }
            ]
        },
        testimonials: {
            title: "Testimonios",
            subtitle: "Lo que dicen mis clientes y colegas.",
            items: [
                { name: "Ana P.", role: "CEO, Startup Tech", text: "Luis transformó completamente nuestra presencia web. Su atención al detalle y capacidad técnica son impresionantes." },
                { name: "Carlos M.", role: "Product Manager", text: "Trabajar con Luis fue una experiencia fluida. Entregó el proyecto a tiempo y superó nuestras expectativas." },
                { name: "Sofía R.", role: "Diseñadora UX/UI", text: "Gran capacidad para traducir diseños complejos en código limpio y funcional. Altamente recomendado." }
            ]
        },
        featured: {
            title: "Proyectos Destacados",
            subtitle: "Una mirada más profunda a mis mejores trabajos.",
            items: [
                { title: "E-Commerce Dashboard", desc: "Panel de administración completo con gráficos en tiempo real y gestión de inventario.", tech: ["React", "Tailwind", "Node.js"] },
                { title: "SaaS Landing Page", desc: "Página de aterrizaje de alta conversión con animaciones avanzadas y optimización SEO.", tech: ["Next.js", "Framer Motion", "TypeScript"] },
                { title: "Chat en Tiempo Real", desc: "Aplicación de mensajería instantánea con salas privadas y notificaciones push.", tech: ["Socket.io", "React", "Express"] }
            ]
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            stack: "Stack",
            certifications: "Certifications",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            subtitle: "Hello, I'm",
            roles: ["Web Developer", "Software Engineer", "Full Stack Developer"],
            typed_mobile: ["Web Developer"],
            and_im: "and I'm",
            desc_mobile: "I am a software developer focused on creating modern, fast, and optimized web applications. I enjoy learning new technologies and continuously improving as a professional.",
            desc_desktop: "I am a software developer focused on creating modern, optimized, and scalable web applications. I enjoy learning new technologies and continuously improving as a professional.",
            download_cv: "Download CV",
            role_card: "Software Developer",
        },
        services: {
            title: "My Services",
            mobile_desc: "I offer modern, intuitive solutions tailored to your digital needs.",
            desktop_desc: "I offer modern, intuitive solutions tailored to your digital needs.",
            items: {
                frontend: { title: "Front-end Development", desc: "I offer modern, responsive, and attractive web design." },
                webapps: { title: "Web Applications", desc: "Development of secure and scalable web applications." },
                ecommerce: { title: "E-Commerce", desc: "Creation of online stores with payment gateways." },
                backend: { title: "Back-end Development", desc: "Backend services to handle data and business logic." },
                testing: { title: "Testing", desc: "Tests to ensure quality and stability of your apps." },
                mobile: { title: "Mobile Apps", desc: "Agile app development for iOS and Android." },
            }
        },
        stack: {
            title: "My Stack",
        },
        certifications: {
            title: "Certifications & Achievements",
            subtitle: "Continuous learning to keep up with the latest technologies.",
        },
        projects: {
            title: "My Projects",
            subtitle: "Here you will find a selection of my most recent work.",
            note: "Each project represents a unique challenge.",
            loading: "Loading projects...",
            error: "Error loading projects.",
            view_code: "View Code",
            demo: "Demo",
            no_desc: "Description not available",
        },
        contact: {
            title: "Contact Me",
            name: "Name",
            name_ph: "Your name",
            phone: "Phone",
            phone_ph: "Your phone",
            email: "Email",
            email_ph: "email@example.com",
            message: "Message",
            message_ph: "Write your message here...",
            send: "Send",
            sending: "Sending...",
            success: "Email sent successfully!",
            error: "There was an error sending the email. Please try again.",
        },
        footer: {
            brand_desc: "Full Stack Developer focused on creating modern, fast, and scalable web experiences.",
            available: "Available for projects",
            nav_title: "Navigation",
            connect_title: "Connect with me",
            rights: "All rights reserved",
        },
        timeline: {
            title: "My Journey",
            subtitle: "The path I've walked so far.",
            items: [
                { year: "2024 - Present", title: "Freelance Developer", desc: "Developing custom web solutions for international clients." },
                { year: "2023", title: "Meta Frontend Certification", desc: "Specialization in React and modern JavaScript ecosystem." },
                { year: "2022", title: "Programming Beginnings", desc: "First steps with HTML, CSS, and JavaScript." }
            ]
        },
        testimonials: {
            title: "Testimonials",
            subtitle: "What my clients and colleagues say.",
            items: [
                { name: "Ana P.", role: "CEO, Tech Startup", text: "Luis completely transformed our web presence. His attention to detail and technical skills are impressive." },
                { name: "Carlos M.", role: "Product Manager", text: "Working with Luis was a smooth experience. He delivered the project on time and exceeded our expectations." },
                { name: "Sofia R.", role: "UX/UI Designer", text: "Great ability to translate complex designs into clean and functional code. Highly recommended." }
            ]
        },
        featured: {
            title: "Featured Projects",
            subtitle: "A deeper look at my best work.",
            items: [
                { title: "E-Commerce Dashboard", desc: "Complete admin dashboard with real-time charts and inventory management.", tech: ["React", "Tailwind", "Node.js"] },
                { title: "SaaS Landing Page", desc: "High-conversion landing page with advanced animations and SEO optimization.", tech: ["Next.js", "Framer Motion", "TypeScript"] },
                { title: "Real-Time Chat", desc: "Instant messaging application with private rooms and push notifications.", tech: ["Socket.io", "React", "Express"] }
            ]
        }
    },
};

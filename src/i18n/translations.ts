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
            subtitle: "El camino académico y profesional que he recorrido hasta ahora.",
            items: [
                { 
                    year: "2023 - 2026", 
                    title: "Ingeniería en TI e Innovación Digital", 
                    desc: "Universidad Tecnológica de Calvillo (UTC). Área: Desarrollo de Software. Promedio destacado de 9.9, con enfoque en soluciones escalables y eficientes." 
                },
                { 
                    year: "Sep 2024 - Dic 2024", 
                    title: "Desarrollador Mobile IoT - SmartStream", 
                    desc: "Creé un sistema IoT para monitoreo y control de agua. Desarrollé la app móvil con React Native (TypeScript) y la integré con hardware Arduino y bases de datos para automatizar el sistema." 
                },
                { 
                    year: "Sep 2025 - Oct 2025", 
                    title: "Desarrollador de Software y Sistemas Embebidos - CanSat", 
                    desc: "Programé software en C++ y MicroPython para una Raspberry Pi Pico en un picosatélite. Integré sensores y comunicación LoRa para la transmisión de telemetría atmosférica en tiempo real." 
                },
                { 
                    year: "Sep 2025 - Dic 2025", 
                    title: "Desarrollador de Inteligencia Artificial - MediAI+", 
                    desc: "Desarrollé un clasificador de cáncer de mama mediante Deep Learning usando CNN y Transfer Learning con VGG16. Implementé una API REST con Flask para inferencia en tiempo real de imágenes médicas." 
                }
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
            subtitle: "Una mirada más profunda a mis mejores trabajos en IA, IoT y Desarrollo.",
            items: [
                { 
                    title: "MediAI+", 
                    desc: "Desarrollé un clasificador de cáncer de mama mediante Deep Learning usando CNN y Transfer Learning con VGG16 en TensorFlow y Keras. Implementé una API REST con Flask para la inferencia automatizada.", 
                    tech: ["TensorFlow", "Keras", "Flask", "Python"],
                    github: "https://github.com/tu-usuario/mediai",
                    demo: "https://mediai-demo.com",
                    images: [
                        "./images/mediai-0.png", 
                        "./images/mediai-1.png", 
                        "./images/mediai-2.png",
                        "./images/mediai-3.png",
                        "./images/mediai-4.png"
                    ] 
                },
                { 
                    title: "CanSat", 
                    desc: "Desarrollé un picosatélite para la adquisición y transmisión de datos atmosféricos en tiempo real. Implementé el software en Raspberry Pi Pico integrando sensores y comunicación LoRa.", 
                    tech: ["C++", "MicroPython", "Raspberry Pi Pico", "LoRa"],
                    github: "https://github.com/tu-usuario/cansat",
                    images: [
                        "./images/cansat-0.png", 
                        "./images/cansat-1.png",
                        "./images/cansat-2.jpeg",
                        "./images/cansat-3.jpeg",
                        "./images/cansat-4.jpeg",    
                        "./images/cansat-5.jpeg",
                    ]
                },
                { 
                    title: "SmartStream", 
                    desc: "Desarrollé un sistema IoT para el monitoreo y control del consumo de agua. Implementé la aplicación móvil con React Native y control físico mediante Arduino.", 
                    tech: ["React Native", "TypeScript", "Arduino", "IoT"],
                    github: "https://github.com/tu-usuario/smartstream",
                    images: [
                        "./images/smartstream-0.png", 
                        "./images/smartstream-1.png", 
                        "./images/smartstream-2.png",
                        "./images/smartstream-3.png",
                        "./images/smartstream-4.png",
                        "./images/smartstream-5.png",
                        "./images/smartstream-6.png"
                    ]
                }
            ]
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            projects: "Projects",
            timeline: "Journey",
            stack: "Stack",
            certifications: "Certifications",
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
            subtitle: "My academic and professional path so far.",
            items: [
                { 
                    year: "2023 - 2026", 
                    title: "B.S. in Information Technology Engineering", 
                    desc: "Universidad Tecnológica de Calvillo (UTC). Major: Software Development. Graduated with an outstanding 9.9 Average, focusing on efficient and scalable solutions." 
                },
                { 
                    year: "Sep 2024 - Dec 2024", 
                    title: "Mobile IoT Developer - SmartStream", 
                    desc: "Built an IoT water monitoring system. Developed the mobile app with React Native (TypeScript) and integrated it with Arduino hardware and databases for system automation." 
                },
                { 
                    year: "Sep 2025 - Oct 2025", 
                    title: "Embedded Systems Developer - CanSat", 
                    desc: "Programmed C++ and MicroPython software for a Raspberry Pi Pico on a picosatellite. Integrated sensors and LoRa wireless communication for real-time atmospheric telemetry." 
                },
                { 
                    year: "Sep 2025 - Dec 2025", 
                    title: "Artificial Intelligence Developer - MediAI+", 
                    desc: "Developed a breast cancer classifier using Deep Learning (CNN & VGG16 Transfer Learning). Implemented a Flask REST API for real-time automated inference of medical images." 
                }
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
            subtitle: "A deeper look at my best work in AI, IoT, and Development.",
            items: [
                { 
                    title: "MediAI+", 
                    desc: "Developed a breast cancer classifier using Deep Learning with CNN and Transfer Learning (VGG16) in TensorFlow and Keras. Implemented a REST API using Flask for automated inference.", 
                    tech: ["TensorFlow", "Keras", "Flask", "Python"],
                    github: "https://github.com/tu-usuario/mediai",
                    demo: "https://mediai-demo.com",
                    images: [
                        "./images/mediai-0.png", 
                        "./images/mediai-1.png", 
                        "./images/mediai-2.png",
                        "./images/mediai-3.png",
                        "./images/mediai-4.png"
                    ] 
                },
                { 
                    title: "CanSat", 
                    desc: "Developed a picosatellite for real-time acquisition and transmission of atmospheric data. Implemented embedded software on Raspberry Pi Pico integrating sensors and LoRa communication.", 
                    tech: ["C++", "MicroPython", "Raspberry Pi Pico", "LoRa"],
                    github: "https://github.com/tu-usuario/cansat",
                    images: [
                        "./images/cansat-0.png", 
                        "./images/cansat-1.png",
                        "./images/cansat-2.jpeg",
                        "./images/cansat-3.jpeg",
                        "./images/cansat-4.jpeg",    
                        "./images/cansat-5.jpeg",
                    ]
                },
                { 
                    title: "SmartStream", 
                    desc: "Developed an IoT system for real-time monitoring and control of water consumption. Implemented the mobile application using React Native and hardware control via Arduino.", 
                    tech: ["React Native", "TypeScript", "Arduino", "IoT"],
                    github: "https://github.com/tu-usuario/smartstream",
                    images: [
                        "./images/smartstream-0.png", 
                        "./images/smartstream-1.png", 
                        "./images/smartstream-2.png",
                        "./images/smartstream-3.png",
                        "./images/smartstream-4.png",
                        "./images/smartstream-5.png",
                        "./images/smartstream-6.png"
                    ]
                }
            ]
        }
    },
};
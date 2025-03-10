// Home page content
export const homeContent = {
    hero: {
        title: "Web Solutions for Kiwi Businesses",
        subtitle: "Custom websites, e-commerce platforms, and mobile apps tailored for small businesses in New Zealand",
        cta: {
            primary: {
                text: "View Our Plans",
                link: "/services"
            },
            secondary: {
                text: "Free Consultation",
                link: "/contact"
            }
        },
        image: "/images/website1.jpg"
    },
    features: {
        title: "Why Choose MoaWeb NZ",
        subtitle: "Local expertise with world-class results",
        items: [
            {
                title: "Local Support",
                description: "Dedicated support from a team based in Christchurch – we're just a short call away.",
                icon: "support"
            },
            {
                title: "Custom Solutions",
                description: "Bespoke designs tailored to your specific business needs and target audience.",
                icon: "design"
            },
            {
                title: "Fast & Responsive",
                description: "Mobile-optimized websites that load quickly and work flawlessly across all devices.",
                icon: "speed"
            },
            {
                title: "Growth-Focused",
                description: "Strategic development aimed at converting visitors to customers and growing your business.",
                icon: "chart"
            }
        ]
    },
    about: {
        title: "Your Local Web Experts",
        subtitle: "How we help New Zealand businesses succeed online",
        content: "At MoaWeb NZ, we understand the unique challenges faced by small businesses in Aotearoa. Our team combines local market knowledge with cutting-edge web development expertise to create digital solutions that truly work for Kiwi businesses. Whether you need a simple website with a contact form or a full-featured e-commerce platform, we deliver professional, reliable, and affordable web services.",
        image: "/images/christchurch1.jpg",
        stats: [
            {
                value: "10+",
                label: "Local Clients"
            },
            {
                value: "5★",
                label: "Client Rating"
            },
            {
                value: "100%",
                label: "NZ Based"
            }
        ]
    },
    testimonials: {
        title: "Local Success Stories",
        subtitle: "Hear from Christchurch businesses we've helped grow",
        items: [
            {
                quote: "MoaWeb NZ transformed our outdated website into a modern, functional platform that's brought in numerous new customers. Their local support has been invaluable whenever we need help or updates.",
                author: "Sarah Wilson",
                company: "Canterbury Cafe",
                image: "https://placehold.co/100x100?text=Sarah"
            },
            {
                quote: "Setting up our online shop was seamless thanks to MoaWeb. Sales increased by 45% in the first three months, and their ongoing maintenance keeps everything running smoothly.",
                author: "David Thompson",
                company: "Kiwi Crafts Co.",
                image: "https://placehold.co/100x100?text=David"
            },
            {
                quote: "As a small business owner, I needed a website that wouldn't break the bank but still looked professional. MoaWeb delivered exactly what I needed, on time and on budget.",
                author: "Emma Johnson",
                company: "Christchurch Consulting",
                image: "https://placehold.co/100x100?text=Emma"
            }
        ]
    },
    cta: {
        title: "Ready to Transform Your Online Presence?",
        subtitle: "Book your risk-free consultation today to discuss your website needs and objectives.",
        button: {
            text: "Book Free Consultation",
            link: "/contact"
        }
    }
};

// About page content
export const aboutContent = {
    hero: {
        title: "About MoaWeb NZ",
        subtitle: "Your local web development partner in Christchurch",
        image: "https://placehold.co/1200x600?text=About+MoaWeb+NZ"
    },
    story: {
        title: "Our Story",
        content: "Founded in Christchurch with a passion for helping local businesses thrive online, MoaWeb NZ has grown into a trusted web development partner for small businesses across Aotearoa. We believe that every business, regardless of size, deserves a professional online presence that truly represents their brand and helps them achieve their goals. Our team combines technical expertise with local market knowledge to deliver web solutions that work for New Zealand businesses.",
        image: "/images/christchurch2.jpg"
    },
    mission: {
        title: "Our Mission",
        content: "Our mission is to empower small businesses in New Zealand with affordable, high-quality web solutions that drive real business results. We believe in creating websites that not only look great but also perform exceptionally well, helping our clients establish a strong online presence and grow their customer base."
    },
    values: {
        title: "Our Core Values",
        items: [
            {
                title: "Local Focus",
                description: "We're committed to understanding and serving the unique needs of businesses in Christchurch and across New Zealand."
            },
            {
                title: "Quality Craftsmanship",
                description: "We take pride in our work, paying close attention to detail and delivering solutions built to the highest standards."
            },
            {
                title: "Honest Communication",
                description: "We value transparency and straightforward communication in all our client relationships."
            },
            {
                title: "Ongoing Support",
                description: "We're in it for the long haul, providing continuous support and guidance to help our clients succeed."
            }
        ]
    },
    team: {
        title: "Our Team",
        subtitle: "Meet the local experts behind MoaWeb NZ",
        members: [
            {
                name: "Hammadi Husaini",
                role: "Chief Technology Officer (CTO)",
                bio: "Our Full-Stack Developer brings expertise in front-end and back-end technologies, ensuring seamless, high-performing websites. With a background in software architecture and a passion for problem-solving, they turn ideas into reality with cutting-edge web solutions.",
                image: "/images/Hammadi.jpg"
            },
            {
                name: "Fera Allisha",
                role: "Creative Director",
                bio: "Leading the design vision, our Creative Director blends aesthetics with user experience. With years of experience in branding, UI/UX, and digital storytelling, they craft visually compelling and intuitive designs that leave a lasting impact.",
                image: "/images/Fera.jpg"
            },
            {
                name: "Tarmo Kivimäki",
                role: "Director of Operations",
                bio: "Our Head Project Manager ensures projects are delivered on time and within scope. With a strategic mindset and expertise in agile methodologies, they coordinate teams, manage client expectations, and keep everything running smoothly.",
                image: "/images/Tarmo.jpg"
            },
            {
                name: "Haidah Karim",
                role: "Director of Business Development",
                bio: "As the Sales and Deployment Officer, this role bridges the gap between clients and execution. With strong industry knowledge and negotiation skills, they drive growth, oversee deployments, and ensure seamless client onboarding.",
                image: "/images/Haidah.jpg"
            }
        ]
    }
};

// Services page content
export const servicesContent = {
    hero: {
        title: "Web Development Plans",
        subtitle: "Professional website solutions for Christchurch businesses of all sizes",
        image: "https://placehold.co/1200x600?text=Web+Development+Services"
    },
    servicesList: [
        {
            id: "basic-website",
            title: "Professional Business Website",
            description: "An affordable, professional website designed to establish your online presence and generate leads through a custom contact form.",
            features: [
                "Custom responsive design",
                "Up to 5 pages",
                "Contact form with lead capture",
                "Fast and secure hosting",
                "Custom domain & business emails",
                "Conversion-focused design",
                "Mobile optimisation",
                "Full ongoing maintenance",
                "Local support"
            ],
            pricing: {
                setup: "$639",
                monthly: "$59 monthly"
            },
            image: "https://placehold.co/800x600?text=Business+Website"
        },
        {
            id: "ecommerce-website",
            title: "E-Commerce Website",
            description: "A comprehensive online store solution that enables you to sell products or services directly to your customers with secure payment processing.",
            features: [
                "Everything in Professional Website",
                "Full e-commerce functionality",
                "Product catalog management",
                "Secure payment processing",
                "Customer account system",
                "Order tracking",
                "Content writing services",
                "Social media integration",
                "Google Analytics & performance tracking",
                "Speed optimization",
                "Search engine optimisation"
            ],
            pricing: {
                setup: "$1,269",
                monthly: "$129 monthly"
            },
            image: "https://placehold.co/800x600?text=E-Commerce+Website"
        },
        {
            id: "custom-application",
            title: "Custom Web & Mobile Applications",
            description: "Bespoke applications tailored to your specific business requirements, available for iOS, Android, or web platforms.",
            features: [
                "Custom functionality development",
                "iOS and/or Android app development",
                "Progressive web application",
                "User account management",
                "Admin dashboard",
                "API integrations",
                "Branding & logo design",
                "Personalised design",
                "Content strategy",
                "Advanced analytics",
                "Ongoing technical support",
                "Regular updates and improvements"
            ],
            pricing: {
                setup: "From $5,699",
                monthly: "$299 monthly"
            },
            image: "https://placehold.co/800x600?text=Custom+Applications"
        }
    ],
    process: {
        title: "Our Development Process",
        subtitle: "How we'll create your perfect website",
        steps: [
            {
                number: 1,
                title: "Initial Consultation",
                description: "We start with a risk-free consultation to understand your business, goals, and website requirements."
            },
            {
                number: 2,
                title: "Design & Planning",
                description: "We create wireframes and designs for your approval, ensuring the website will meet your expectations."
            },
            {
                number: 3,
                title: "Development",
                description: "Our team builds your website using modern, reliable technologies that ensure speed, security, and functionality."
            },
            {
                number: 4,
                title: "Testing & Launch",
                description: "We thoroughly test your website before launching it to the world, followed by ongoing support and maintenance."
            }
        ]
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Answers to common questions about our web services",
        questions: [
            {
                question: "How long does it take to build a website?",
                answer: "A standard business website typically take 1-2 weeks to complete, while e-commerce sites may take 2-4 weeks and custom applications may take 4-8 weeks depending on complexity."
            },
            {
                question: "Do I own my website?",
                answer: "Absolutely. You own all content, design, and code for your website. While we provide hosting and maintenance, the website remains your property."
            },
            {
                question: "What's included in the monthly fee?",
                answer: "Your monthly fee covers hosting, security updates, technical support, content updates, and regular performance monitoring to ensure your website continues to perform at its best."
            },

            {
                question: "Are there any hidden costs?",
                answer: "No hidden costs. The setup fee and monthly fee cover everything described in your chosen plan. Additional services or major redesigns may incur extra costs, but these would always be quoted and approved in advance."
            }
        ]
    }
};

// Contact page content
export const contactContent = {
    hero: {
        title: "Contact Us",
        subtitle: "Get in touch with our team for a free consultation",
        image: "https://placehold.co/1200x600?text=Contact+Us"
    },
    form: {
        title: "Send Us a Message",
        subtitle: "Fill out the form below and we'll get back to you within 24 hours",
        successMessage: "Thanks for your message! We'll be in touch soon.",
        fields: {
            name: "Your Name",
            email: "Email Address",
            phone: "Phone Number",
            service: "Service of Interest",
            company: "Company Name",
            budget: "Project Budget",
            message: "Your Message",
            submit: "Send Message"
        }
    },
    contact: {
        title: "Contact Information",
        items: [
            {
                label: "Email",
                value: "hello@MoaWebnz.co.nz",
                icon: "email"
            },
            {
                label: "Phone",
                value: "03 555 1234",
                icon: "phone"
            }
        ]
    }
}; 
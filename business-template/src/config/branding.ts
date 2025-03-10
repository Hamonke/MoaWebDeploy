export interface BusinessConfig {
    name: string;
    tagline: string;
    description: string;
    logo?: string;
    colors?: {
        primary: string;
        secondary: string;
        accent: string;
    };
    contact: {
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            state: string;
            zip: string;
            country: string;
        };
    };
    hours: {
        day: string;
        hours: string;
    }[];
    socialMedia?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
        linkedin?: string;
        youtube?: string;
    };
}

// Default business configuration
export const businessConfig: BusinessConfig = {
    name: "MoaWeb NZ",
    tagline: "Bespoke Web Solutions for Local Businesses",
    description: "MoaWeb NZ is Christchurch's premier web development company, specializing in creating custom websites, e-commerce platforms, and mobile applications that help small businesses establish a powerful online presence.",
    logo: "/images/header_logo.JPG", // Direct path to JPG logo image
    colors: {
        primary: "#2563EB", // Blue
        secondary: "#10B981", // Emerald
        accent: "#F59E0B", // Amber
    },
    contact: {
        email: "hello@MoaWebnz.co.nz",
        phone: "03 555 1234",
        address: {
            street: "Hutcheson Street",
            city: "Christchurch",
            state: "Canterbury",
            zip: "8023",
            country: "New Zealand",
        },
    },
    hours: [
        { day: "Monday-Friday", hours: "5:30 PM - 9:00 PM" },
        { day: "Saturday", hours: "Closed" },
        { day: "Sunday", hours: "Closed" },
    ],
    socialMedia: {
        facebook: "https://facebook.com/MoaWebnz",
        twitter: "https://twitter.com/MoaWebnz",
        instagram: "https://instagram.com/MoaWebnz",
        linkedin: "https://linkedin.com/company/MoaWebnz",
        youtube: "https://youtube.com/MoaWebnz",
    },
}; 
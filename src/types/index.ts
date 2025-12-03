export interface Project {
                    title: string;
                    description: string;
                    tech: string[];
                    image: string;
                    link: string;
}

export interface SkillCategory {
                    category: string;
                    items: string[];
}

export interface Experience {
                    title: string;
                    company: string;
                    period: string;
                    description: string;
}

export interface Testimonial {
                    name: string;
                    role: string;
                    text: string;
}

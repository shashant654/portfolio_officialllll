# Portfolio Website - Folder Structure

This project has been reorganized from a single monolithic file into a clean, maintainable folder structure.

## 📁 Project Structure

```
portfolioo/
├── src/
│   ├── app/
│   │   └── page.tsx                 # Main application page
│   ├── components/
│   │   ├── ui/
│   │   │   ├── card.tsx            # Card UI component (shadcn/ui)
│   │   │   └── button.tsx          # Button UI component (shadcn/ui)
│   │   ├── Navigation.tsx          # Navigation bar with mobile menu
│   │   ├── Hero.tsx                # Hero section with intro
│   │   ├── About.tsx               # About section
│   │   ├── Projects.tsx            # Projects showcase
│   │   ├── Skills.tsx              # Skills & expertise
│   │   ├── Experience.tsx          # Work experience
│   │   ├── Testimonials.tsx        # Client testimonials
│   │   ├── Contact.tsx             # Contact section
│   │   └── Footer.tsx              # Footer component
│   ├── data/
│   │   ├── projects.ts             # Projects data
│   │   ├── skills.ts               # Skills data
│   │   ├── experience.ts           # Work experience data
│   │   └── testimonials.ts         # Testimonials data
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── hooks/
│   │   └── useActiveSection.ts     # Custom hook for navigation
│   └── lib/
│       └── utils.ts                # Utility functions
├── portfolio_website.tsx            # Original single file (backup)
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # This file
```

## 🎯 Key Features

- **Component-Based Architecture**: Each section is a separate, reusable component
- **Type Safety**: Full TypeScript support with proper type definitions
- **Clean Imports**: Path aliases (`@/`) for cleaner import statements
- **Data Separation**: Static data separated from components for easy updates
- **Custom Hooks**: Reusable logic extracted into custom hooks
- **shadcn/ui Components**: Consistent UI components following best practices

## 🔧 Path Aliases

The project uses TypeScript path aliases for cleaner imports:

- `@/components/*` → `src/components/*`
- `@/data/*` → `src/data/*`
- `@/types/*` → `src/types/*`
- `@/hooks/*` → `src/hooks/*`
- `@/lib/*` → `src/lib/*`

## 📝 Making Changes

### Adding a New Project

Edit `src/data/projects.ts` and add a new project object:

```typescript
{
  title: "Your Project",
  description: "Project description",
  tech: ["Tech1", "Tech2"],
  image: "bg-gradient-to-br from-color-500 to-color-500",
  link: "#"
}
```

### Adding a New Skill

Edit `src/data/skills.ts` and add to the appropriate category or create a new one.

### Updating Personal Information

Edit the respective components in `src/components/` (Hero, About, Contact, etc.).

## 🚀 Next Steps

1. Install dependencies if needed (`npm install` or `yarn install`)
2. Configure your package.json if not already set up
3. Start the development server
4. Customize the content in the data files
5. Update personal information in the components

## 📦 Dependencies

Make sure these packages are installed:

```json
{
  "dependencies": {
    "react": "^18.x",
    "lucide-react": "^0.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "@radix-ui/react-slot": "^1.x",
    "class-variance-authority": "^0.x"
  }
}
```

## 💡 Benefits of This Structure

1. **Maintainability**: Easy to find and update specific sections
2. **Reusability**: Components can be reused across projects
3. **Scalability**: Easy to add new sections or features
4. **Type Safety**: TypeScript catches errors during development
5. **Clean Code**: Separation of concerns makes code easier to understand
6. **Team Collaboration**: Multiple developers can work on different components

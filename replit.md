# DevPops Website - Replit.md

## Overview

DevPops is a professional website development service for small businesses, offering complete web solutions including design, hosting, and ongoing support. The project is built as a full-stack web application with both dynamic and static deployment options, featuring a modern React frontend and Express.js backend with PostgreSQL database integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with Radix UI components
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Email Integration**: SendGrid for email services
- **Development**: Hot reload with Vite middleware integration

### Database Schema
- **Contact Submissions**: Stores form submissions with name, email, project description, and timestamp
- **Users**: Basic user authentication schema (maintained for compatibility)
- **ORM**: Drizzle with PostgreSQL dialect and Zod schema validation

## Key Components

### Core Pages
- **Home Page**: Main landing page with hero section, services, portfolio, and contact form
- **Portfolio Showcase**: Three demo projects (Brasov Brews, TechStart Solutions, Artisan Crafts)
- **Contact Integration**: Google Calendar scheduling and contact form functionality

### UI Components
- **Component Library**: Comprehensive set of Radix UI components with custom styling
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Proper ARIA labels and keyboard navigation support

### Business Logic
- **Contact Form Processing**: Validation, submission, and email integration
- **Portfolio Display**: Dynamic project showcase with different styling approaches
- **Service Presentation**: Tiered pricing and package information

## Data Flow

### Contact Form Submission
1. Client-side validation using React Hook Form and Zod
2. Form data sent to `/api/contact` endpoint
3. Server validates and stores submission in PostgreSQL
4. Email notification generated via mailto link
5. Success/error feedback displayed to user

### Content Management
- Static content managed through React components
- Images served from attached assets directory
- Portfolio projects implemented as separate page components

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **@sendgrid/mail**: Email service integration
- **@radix-ui/***: Comprehensive UI component library
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management

### Development Dependencies
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit integration features
- **tsx**: TypeScript execution for development server

## Deployment Strategy

### Development Environment
- **Server**: Node.js with hot reload via tsx
- **Client**: Vite development server with HMR
- **Database**: PostgreSQL 16 module in Replit
- **Port Configuration**: Development server on port 5000

### Production Deployment
- **Build Process**: Vite build for client, esbuild for server
- **Static Option**: Alternative static build for simple hosting
- **Database**: Uses DATABASE_URL environment variable
- **Autoscale**: Configured for Replit's autoscale deployment

### Environment Configuration
- **Development**: NODE_ENV=development with full development stack
- **Production**: NODE_ENV=production with optimized builds
- **Database**: Requires DATABASE_URL environment variable

## Changelog
```
Changelog:
- June 24, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```
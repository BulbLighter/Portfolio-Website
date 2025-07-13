# Cyberpunk Portfolio

## Overview

This is a cyberpunk-themed portfolio website built with Flask, showcasing Pulkit Bhardwaj's professional experience and education. The application features a futuristic, matrix-inspired design with interactive elements including a boot sequence, matrix rain background, and terminal-style aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a simple Flask-based architecture with a single-page design:

- **Backend**: Flask web server serving static content and templates
- **Frontend**: HTML5 with Bootstrap CSS framework, custom CSS for cyberpunk styling, and vanilla JavaScript for interactive effects
- **Static Assets**: CSS stylesheets and JavaScript files for UI effects
- **Templates**: Jinja2 templating for dynamic content rendering

## Key Components

### Backend (Flask)
- **app.py**: Main Flask application with portfolio data embedded as Python dictionaries
- **main.py**: Application entry point that imports and runs the Flask app
- Single route handler serving the portfolio page with static data

### Frontend Architecture
- **Bootstrap 5**: Used for responsive grid system and basic styling
- **Custom CSS**: Cyberpunk theme with CSS variables for consistent color scheme
- **JavaScript Modules**: Separate files for different interactive features
- **Google Fonts**: JetBrains Mono and Fira Code for monospace terminal aesthetic

### Interactive Features
- **Matrix Rain Effect**: Canvas-based background animation mimicking the Matrix movie
- **Boot Sequence**: Terminal-style loading screen with typewriter effect
- **Cursor Trail**: Custom cursor with neon glow effect
- **Responsive Design**: Mobile-friendly layout using Bootstrap grid system

## Data Flow

1. **Application Start**: Flask serves the single route at '/'
2. **Data Preparation**: Portfolio data is hardcoded in Python dictionaries within the route handler
3. **Template Rendering**: Jinja2 processes the HTML template with portfolio data
4. **Client Loading**: Browser loads HTML with linked CSS and JavaScript assets
5. **Interactive Initialization**: JavaScript modules initialize visual effects and animations

## External Dependencies

### Python Packages
- **Flask**: Web framework for serving the application
- **os**: Environment variable access for session configuration

### Frontend Libraries
- **Bootstrap 5.3.0**: CSS framework via CDN
- **Font Awesome 6.4.0**: Icons via CDN
- **Google Fonts**: Custom typography (JetBrains Mono, Fira Code)

### Browser APIs
- **Canvas API**: For matrix rain animation
- **DOM Manipulation**: For interactive effects and animations
- **CSS Transforms**: For visual effects and transitions

## Deployment Strategy

The application is designed for simple deployment with minimal configuration:

- **Environment Variables**: SESSION_SECRET for Flask session management
- **Static File Serving**: Flask's built-in static file handling
- **Single Process**: No database or external services required
- **Replit Compatible**: Structure supports direct deployment on Replit platform

### Key Architectural Decisions

1. **Embedded Data**: Portfolio information is hardcoded in Python rather than using a database, chosen for simplicity and eliminating external dependencies
2. **Single Page Application**: All content served from one route to maintain the immersive cyberpunk experience
3. **Vanilla JavaScript**: Custom effects implemented without frameworks to maintain control over performance and styling
4. **CDN Dependencies**: External libraries loaded via CDN to reduce bundle size and improve loading times
5. **CSS Variables**: Used for consistent theming and easy color scheme modifications

The architecture prioritizes visual impact and user experience while maintaining simplicity in deployment and maintenance.
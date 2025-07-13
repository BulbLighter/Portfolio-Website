// Cyberpunk Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Boot sequence
    const bootSequence = document.getElementById('boot-sequence');
    const bootText = document.getElementById('boot-text');
    
    const bootMessages = [
        'INITIALIZING FLASK WEB FRAMEWORK...',
        'LOADING PYTHON ALGORITHMS...',
        'PARSING JAVASCRIPT MODULES...',
        'COMPILING C++ IMPLEMENTATIONS...',
        'ESTABLISHING API CONNECTIONS...',
        'PROCESSING IoT SENSOR DATA...',
        'LOADING AI MODEL WEIGHTS...',
        'SYNCHRONIZING DATABASE TABLES...',
        'PULKIT BHARDWAJ PORTFOLIO READY.'
    ];
    
    let messageIndex = 0;
    
    function typeMessage(message, callback) {
        const span = document.createElement('div');
        span.style.color = '#ffffff';
        span.style.marginBottom = '10px';
        span.style.textShadow = '0 0 5px #ffffff';
        bootText.appendChild(span);
        
        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < message.length) {
                span.textContent += message[charIndex];
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(callback, 300);
            }
        }, 50);
    }
    
    function showNextMessage() {
        if (messageIndex < bootMessages.length) {
            typeMessage(bootMessages[messageIndex], () => {
                messageIndex++;
                showNextMessage();
            });
        } else {
            setTimeout(() => {
                bootSequence.classList.add('fade-out');
                setTimeout(() => {
                    bootSequence.style.display = 'none';
                    startPortfolio();
                }, 500);
            }, 1000);
        }
    }
    
    // Start boot sequence
    setTimeout(showNextMessage, 1000);
    
    // Theme toggle functionality
    const themeToggleMobile = document.getElementById('theme-toggle');
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    const buttonText = currentTheme === 'dark' ? 'LIGHT' : 'DARK';
    themeToggleMobile.textContent = buttonText;
    themeToggleDesktop.textContent = buttonText;
    
    function toggleTheme() {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        const newButtonText = newTheme === 'dark' ? 'LIGHT' : 'DARK';
        themeToggleMobile.textContent = newButtonText;
        themeToggleDesktop.textContent = newButtonText;
    }
    
    themeToggleMobile.addEventListener('click', toggleTheme);
    themeToggleDesktop.addEventListener('click', toggleTheme);
    
    // Apply Playdead-style flickering to section headers
    function applyFlickerEffects() {
        const sectionTitles = document.querySelectorAll('.section-title');
        const flickerTypes = ['inside-flicker', 'subtle-flicker', 'deep-flicker', 'limbo-flicker'];
        const durations = ['16s', '18s', '22s', '25s', '28s', '32s'];
        
        sectionTitles.forEach((title, index) => {
            const flickerType = flickerTypes[index % flickerTypes.length];
            const duration = durations[index % durations.length];
            const delay = Math.random() * 5; // Random delay up to 5 seconds
            
            title.style.animation = `${flickerType} ${duration} infinite`;
            title.style.animationDelay = `${delay}s`;
        });
    }
    
    // Initialize flicker effects
    applyFlickerEffects();
    
    // Eerie surveillance system - Rust Lake/Cube Escape inspired creatures
    function createSurveillanceSystem() {
        // Rust Lake inspired creatures and symbols
        const rustLakeCreatures = ['🐦', '🦉', '🐰', '🦌', '🐀', '🕷️', '🦋', '🐛', '🪲', '🦗'];
        const cubeEscapeSymbols = ['⬛', '⬜', '◼️', '◻️', '▪️', '▫️', '🔳', '🔲', '◾', '◽'];
        const watcherSymbols = ['👁️', '👀', '•', '○', '●', '■', '□'];
        const mysteriousSymbols = ['⧫', '◊', '◈', '◇', '◆', '⬟', '⬢', '⬣', '⬡', '⬠'];
        
        const shadowSizes = [25, 35, 45, 55, 75, 90];
        const glitchSizes = [
            { width: 1, height: 12 },
            { width: 2, height: 18 },
            { width: 1, height: 8 },
            { width: 3, height: 22 },
            { width: 1, height: 30 }
        ];
        
        function createWatcher() {
            const watcher = document.createElement('div');
            watcher.className = 'watcher';
            
            // Choose creature type based on current viewport position
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const currentViewportTop = scrollY;
            const currentViewportBottom = scrollY + viewportHeight;
            
            const creatureType = Math.random();
            if (creatureType < 0.3) {
                watcher.textContent = rustLakeCreatures[Math.floor(Math.random() * rustLakeCreatures.length)];
            } else if (creatureType < 0.6) {
                watcher.textContent = cubeEscapeSymbols[Math.floor(Math.random() * cubeEscapeSymbols.length)];
            } else if (creatureType < 0.8) {
                watcher.textContent = watcherSymbols[Math.floor(Math.random() * watcherSymbols.length)];
            } else {
                watcher.textContent = mysteriousSymbols[Math.floor(Math.random() * mysteriousSymbols.length)];
            }
            
            // Position relative to current viewport
            const edge = Math.random();
            if (edge < 0.25) { // Top edge of current viewport
                watcher.style.left = Math.random() * window.innerWidth + 'px';
                watcher.style.top = (currentViewportTop + Math.random() * 80) + 'px';
            } else if (edge < 0.5) { // Right edge of current viewport
                watcher.style.left = (window.innerWidth - 100) + Math.random() * 100 + 'px';
                watcher.style.top = (currentViewportTop + Math.random() * viewportHeight) + 'px';
            } else if (edge < 0.75) { // Bottom edge of current viewport
                watcher.style.left = Math.random() * window.innerWidth + 'px';
                watcher.style.top = (currentViewportBottom - 100 + Math.random() * 80) + 'px';
            } else { // Left edge of current viewport
                watcher.style.left = Math.random() * 100 + 'px';
                watcher.style.top = (currentViewportTop + Math.random() * viewportHeight) + 'px';
            }
            
            document.body.appendChild(watcher);
            
            // Show briefly
            setTimeout(() => {
                watcher.classList.add('show');
                watcher.classList.add('moving');
            }, 50);
            
            // Hide and remove
            setTimeout(() => {
                watcher.classList.remove('show');
                setTimeout(() => {
                    if (watcher.parentNode) {
                        watcher.parentNode.removeChild(watcher);
                    }
                }, 200);
            }, 150 + Math.random() * 100);
        }
        
        function createShadowPresence() {
            const shadow = document.createElement('div');
            shadow.className = 'shadow-presence';
            const size = shadowSizes[Math.floor(Math.random() * shadowSizes.length)];
            shadow.style.width = size + 'px';
            shadow.style.height = size + 'px';
            
            // Position within current viewport
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const currentViewportTop = scrollY;
            
            shadow.style.left = Math.random() * (window.innerWidth - size) + 'px';
            shadow.style.top = (currentViewportTop + Math.random() * (viewportHeight - size)) + 'px';
            
            document.body.appendChild(shadow);
            
            // Show briefly
            setTimeout(() => {
                shadow.classList.add('show');
            }, 100);
            
            // Hide and remove
            setTimeout(() => {
                shadow.classList.remove('show');
                setTimeout(() => {
                    if (shadow.parentNode) {
                        shadow.parentNode.removeChild(shadow);
                    }
                }, 300);
            }, 200 + Math.random() * 150);
        }
        
        function createGlitchArtifact() {
            const glitch = document.createElement('div');
            glitch.className = 'glitch-artifact';
            const size = glitchSizes[Math.floor(Math.random() * glitchSizes.length)];
            glitch.style.width = size.width + 'px';
            glitch.style.height = size.height + 'px';
            
            // Position within current viewport
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const currentViewportTop = scrollY;
            
            glitch.style.left = Math.random() * window.innerWidth + 'px';
            glitch.style.top = (currentViewportTop + Math.random() * viewportHeight) + 'px';
            
            document.body.appendChild(glitch);
            
            // Show very briefly
            setTimeout(() => {
                glitch.classList.add('show');
            }, 20);
            
            // Hide and remove quickly
            setTimeout(() => {
                glitch.classList.remove('show');
                setTimeout(() => {
                    if (glitch.parentNode) {
                        glitch.parentNode.removeChild(glitch);
                    }
                }, 100);
            }, 50 + Math.random() * 50);
        }
        
        function triggerSurveillanceEvent() {
            const eventType = Math.random();
            
            if (eventType < 0.4) {
                createWatcher();
            } else if (eventType < 0.7) {
                createShadowPresence();
            } else {
                createGlitchArtifact();
            }
            
            // Sometimes create multiple simultaneous effects
            if (Math.random() < 0.15) {
                setTimeout(() => {
                    const secondEvent = Math.random();
                    if (secondEvent < 0.5) {
                        createWatcher();
                    } else {
                        createGlitchArtifact();
                    }
                }, 200 + Math.random() * 300);
            }
        }
        
        // Enhanced surveillance with Rust Lake creatures appearing more frequently
        function createRustLakeCreature() {
            const creature = document.createElement('div');
            creature.className = 'watcher rust-lake-creature';
            creature.textContent = rustLakeCreatures[Math.floor(Math.random() * rustLakeCreatures.length)];
            creature.style.fontSize = '22px';
            creature.style.filter = 'blur(0.3px) sepia(0.2)';
            
            // Position at viewport periphery
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const currentViewportTop = scrollY;
            
            const side = Math.random();
            if (side < 0.3) { // Corners are more unsettling
                creature.style.left = (Math.random() < 0.5 ? 10 : window.innerWidth - 50) + 'px';
                creature.style.top = (currentViewportTop + (Math.random() < 0.5 ? 10 : viewportHeight - 50)) + 'px';
            } else if (side < 0.6) { // Edges
                creature.style.left = Math.random() * window.innerWidth + 'px';
                creature.style.top = (currentViewportTop + (Math.random() < 0.5 ? 20 : viewportHeight - 60)) + 'px';
            } else { // Sides
                creature.style.left = (Math.random() < 0.5 ? 5 : window.innerWidth - 40) + 'px';
                creature.style.top = (currentViewportTop + Math.random() * viewportHeight) + 'px';
            }
            
            document.body.appendChild(creature);
            
            // Show with subtle movement
            setTimeout(() => {
                creature.classList.add('show');
                creature.classList.add('moving');
            }, 30);
            
            // Longer duration for creatures to be more noticeable
            setTimeout(() => {
                creature.classList.remove('show');
                setTimeout(() => {
                    if (creature.parentNode) {
                        creature.parentNode.removeChild(creature);
                    }
                }, 250);
            }, 250 + Math.random() * 200);
        }
        
        // Start surveillance system with random intervals
        function scheduleSurveillance() {
            const interval = 6000 + Math.random() * 20000; // 6-26 seconds (more frequent)
            setTimeout(() => {
                // Higher chance of Rust Lake creatures
                const eventChoice = Math.random();
                if (eventChoice < 0.35) {
                    createRustLakeCreature();
                } else {
                    triggerSurveillanceEvent();
                }
                scheduleSurveillance(); // Schedule next event
            }, interval);
        }
        
        // Initial delay before first surveillance event
        setTimeout(() => {
            scheduleSurveillance();
        }, 5000 + Math.random() * 10000);
    }
    
    // Initialize surveillance system
    createSurveillanceSystem();
    
    function startPortfolio() {
        // Cursor trail effect
        const cursorTrail = document.getElementById('cursor-trail');
        let mouseX = 0;
        let mouseY = 0;
        let trailX = 0;
        let trailY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function updateCursorTrail() {
            const dx = mouseX - trailX;
            const dy = mouseY - trailY;
            
            trailX += dx * 0.1;
            trailY += dy * 0.1;
            
            cursorTrail.style.left = trailX - 10 + 'px';
            cursorTrail.style.top = trailY - 10 + 'px';
            
            requestAnimationFrame(updateCursorTrail);
        }
        
        updateCursorTrail();
        
        // Typing animation for hero section
        const typingElements = document.querySelectorAll('.typing-text');
        
        typingElements.forEach((element, index) => {
            const text = element.getAttribute('data-text');
            element.textContent = '';
            
            setTimeout(() => {
                let charIndex = 0;
                const typeInterval = setInterval(() => {
                    if (charIndex < text.length) {
                        element.textContent += text[charIndex];
                        charIndex++;
                    } else {
                        clearInterval(typeInterval);
                        element.style.borderRight = 'none';
                    }
                }, 100);
            }, index * 2000 + 1000);
        });
        
        // Smooth scrolling for navigation
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Glitch effect on hover
        const glitchElements = document.querySelectorAll('.glitch-text');
        
        glitchElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.animation = 'glitch 0.3s ease-in-out';
            });
            
            element.addEventListener('animationend', () => {
                element.style.animation = '';
            });
        });
        
        // Skill bars animation
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 300);
                }
            });
        }, observerOptions);
        
        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
        
        // Card hover effects
        const cards = document.querySelectorAll('.cyber-card, .project-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Terminal command simulation
        const terminals = document.querySelectorAll('.terminal-window');
        
        terminals.forEach(terminal => {
            terminal.addEventListener('click', () => {
                const terminalBody = terminal.querySelector('.terminal-body');
                const commandLine = document.createElement('div');
                commandLine.className = 'command-line';
                commandLine.innerHTML = '<span class="prompt">root@calculate:~$ </span><span class="typing-text">ls -la</span>';
                terminalBody.appendChild(commandLine);
                
                setTimeout(() => {
                    commandLine.remove();
                }, 2000);
            });
        });
        
        // Particle effect for project cards
        function createParticles(element) {
            const particles = [];
            const particleCount = 10;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.position = 'absolute';
                particle.style.width = '2px';
                particle.style.height = '2px';
                particle.style.background = '#ffffff';
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.opacity = '0.8';
                
                const rect = element.getBoundingClientRect();
                particle.style.left = rect.left + Math.random() * rect.width + 'px';
                particle.style.top = rect.top + Math.random() * rect.height + 'px';
                
                document.body.appendChild(particle);
                particles.push(particle);
                
                // Animate particle
                let opacity = 0.8;
                let y = parseInt(particle.style.top);
                
                const animateParticle = () => {
                    opacity -= 0.02;
                    y -= 2;
                    
                    particle.style.opacity = opacity;
                    particle.style.top = y + 'px';
                    
                    if (opacity > 0) {
                        requestAnimationFrame(animateParticle);
                    } else {
                        particle.remove();
                    }
                };
                
                setTimeout(() => animateParticle(), i * 100);
            }
        }
        
        // Add particle effect to project cards
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                createParticles(card);
            });
        });
        
        // Scanning line effect
        function createScanline() {
            const scanline = document.createElement('div');
            scanline.style.position = 'fixed';
            scanline.style.top = '0';
            scanline.style.left = '0';
            scanline.style.width = '100%';
            scanline.style.height = '2px';
            scanline.style.background = 'linear-gradient(90deg, transparent, #ffffff, transparent)';
            scanline.style.zIndex = '9999';
            scanline.style.pointerEvents = 'none';
            scanline.style.opacity = '0.5';
            
            document.body.appendChild(scanline);
            
            let position = 0;
            const animate = () => {
                position += 2;
                scanline.style.top = position + 'px';
                
                if (position < window.innerHeight) {
                    requestAnimationFrame(animate);
                } else {
                    scanline.remove();
                }
            };
            
            animate();
        }
        
        // Create scanline effect periodically
        setInterval(createScanline, 10000);
        
        // Active navigation highlighting
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').substring(1) === current) {
                    item.classList.add('active');
                }
            });
        });
    }
});

// Additional cyberpunk effects
document.addEventListener('DOMContentLoaded', function() {
    // Random glitch effect on page elements
    function randomGlitch() {
        const elements = document.querySelectorAll('h1, h2, h3, .card-title, .project-title');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        if (randomElement) {
            randomElement.style.textShadow = '2px 0 #ffffff, -2px 0 #cccccc';
            
            setTimeout(() => {
                randomElement.style.textShadow = '';
            }, 150);
        }
    }
    
    // Trigger random glitch effect
    setInterval(randomGlitch, 15000);
    
    // Add holographic effect to images and icons
    const icons = document.querySelectorAll('i');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotateY(15deg)';
            icon.style.filter = 'hue-rotate(90deg)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotateY(0deg)';
            icon.style.filter = 'hue-rotate(0deg)';
        });
    });
});

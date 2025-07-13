// Cyberpunk Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Boot sequence
    const bootSequence = document.getElementById('boot-sequence');
    const bootText = document.getElementById('boot-text');
    
    const bootMessages = [
        'INITIALIZING NEURAL NETWORK...',
        'LOADING CYBERNETIC MODULES...',
        'ESTABLISHING MATRIX CONNECTION...',
        'SCANNING BIOMETRIC DATA...',
        'ACCESSING MAINFRAME...',
        'DECRYPTING PORTFOLIO DATA...',
        'SYNCHRONIZING QUANTUM PROCESSORS...',
        'BOOTING HOLOGRAPHIC INTERFACE...',
        'SYSTEM READY. WELCOME TO THE MATRIX.'
    ];
    
    let messageIndex = 0;
    
    function typeMessage(message, callback) {
        const span = document.createElement('div');
        span.style.color = '#00ff41';
        span.style.marginBottom = '10px';
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
                commandLine.innerHTML = '<span class="prompt">root@matrix:~$ </span><span class="typing-text">ls -la</span>';
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
                particle.style.background = '#00ff41';
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
            scanline.style.background = 'linear-gradient(90deg, transparent, #00ff41, transparent)';
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
            randomElement.style.textShadow = '2px 0 #ff0099, -2px 0 #00ffff';
            
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

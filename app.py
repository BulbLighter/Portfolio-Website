import os
from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "cyberpunk-portfolio-secret-key")

@app.route('/')
def index():
    # Portfolio data extracted from the LaTeX resume
    portfolio_data = {
        'name': 'Pulkit Bhardwaj',
        'contact': {
            'email': 'pulkitb169@gmail.com',
            'phone': '9289381062',
            'linkedin': 'https://www.linkedin.com/in/pulkit-bhardwaj-507930265/',
            'github': 'https://github.com/BulbLighter'
        },
        'education': [
            {
                'institution': 'Kalinga Institute of Industrial Technology, Bhubaneswar',
                'degree': 'B.Tech in Computer Science and Engineering',
                'period': '2021 - 2025',
                'grade': 'CGPA: 7.20/10.0'
            },
            {
                'institution': 'Maxfort School, Rohini (CBSE)',
                'degree': 'Class XII',
                'period': '2020 - 2021',
                'grade': '77%'
            },
            {
                'institution': 'Maxfort School, Rohini (CBSE)',
                'degree': 'Class X',
                'period': '2018 - 2019',
                'grade': '90%'
            }
        ],
        'experience': [
            {
                'company': 'Inventrom Private Limited - Bolt IoT',
                'position': 'Software Development Intern',
                'period': 'Jan 2025 – Apr 2025',
                'location': 'Remote',
                'certificates': [
                    'https://drive.google.com/file/d/1RxXFUwHPjwE-THkI2yW2F1EzAIllXYIE/view?usp=sharing',
                    'https://drive.google.com/drive/folders/1Px3pcMg7sus0yPqQjrblfYemsY_f20cN?usp=sharing'
                ],
                'achievements': [
                    'Implemented Python algorithms including FizzBuzz and random number generator',
                    'Designed responsive corporate website with HTML5, CSS flexbox, and JavaScript',
                    'Created interactive photo gallery with custom slider functionality',
                    'Built lead generation system with HubSpot integration',
                    'Applied web accessibility best practices',
                    'Demonstrated frontend development and UI/UX skills'
                ]
            },
            {
                'company': 'Inventrom Private Limited - Bolt IoT',
                'position': 'AI & IoT Developer Intern',
                'period': 'Aug 2024 – Dec 2024',
                'location': 'Remote',
                'certificates': [
                    'https://drive.google.com/file/d/1l2xGd-37ohmcfhc-Q_F7X0BWx5Uw3Eva/view?usp=sharing',
                    'https://drive.google.com/drive/folders/17WnB0DUf1KN2T36H4VrMecjgHQ9bssHA?usp=sharing'
                ],
                'achievements': [
                    'Gained comprehensive AI fundamentals and generative AI knowledge',
                    'Acquired technical proficiency in WIFI-enabled microcontrollers',
                    'Developed IoT temperature monitoring system with polynomial regression',
                    'Created light intensity monitoring with Z-score anomaly detection',
                    'Implemented GPT-3.5 powered course content generator',
                    'Built health advisory Telegram bot with multi-threaded architecture'
                ]
            }
        ],
        'skills': {
            'Programming': ['Python', 'JavaScript', 'C/C++', 'HTML/CSS', 'SQL'],
            'Frameworks & Tools': ['Flask', 'Node.js', 'Replit', 'Git/Github'],
            'Development & Hardware': ['API Integration', 'Sensor Integration', 'Microcontrollers']
        },
        'projects': [
            {
                'name': 'AI Course Content Generator',
                'year': '2024',
                'link': 'https://drive.google.com/drive/folders/1WFiUt9irN8Yi1rZ7Hmc_6t4dRK5M9JYr?usp=sharing',
                'technologies': ['Python', 'Flask', 'OpenAI GPT-3.5', 'Bootstrap', 'JavaScript'],
                'description': [
                    'Engineered web application leveraging OpenAI GPT-3.5 for course outline generation',
                    'Implemented asynchronous content generation with error handling',
                    'Designed responsive UI with Bootstrap and real-time feedback',
                    'Developed secure API integration with environment variables'
                ]
            },
            {
                'name': 'Temperature Monitor with Industry Safety Alert',
                'year': '2024',
                'link': 'https://drive.google.com/drive/folders/1CdDdeMxwIiZ0EAwPgRC4B_1TB2MSvAxt?usp=sharing',
                'technologies': ['JavaScript', 'Python', 'Bolt Cloud', 'Twilio', 'Mailgun'],
                'hardware': ['Bolt Microcontroller', 'LM35 Temperature Sensor', 'Piezo-Buzzer'],
                'description': [
                    'Implemented polynomial regression for temperature trend prediction',
                    'Designed multi-channel alert system with SMS and email notifications',
                    'Developed interactive dashboard with real-time visualization',
                    'Created safety alert mechanism with remote buzzer control'
                ]
            },
            {
                'name': 'Light Intensity Monitoring System',
                'year': '2024',
                'link': 'https://drive.google.com/drive/folders/1XctVwKy7ObvkELfznu_ZURN9jtFT95eD?usp=sharing',
                'technologies': ['JavaScript', 'Python', 'Bolt Cloud', 'Twilio'],
                'hardware': ['Bolt Microcontroller', 'Light Dependent Resistor', '10K Ohm Resistor'],
                'description': [
                    'Designed voltage divider circuit for ambient light measurement',
                    'Implemented Z-score statistical anomaly detection',
                    'Developed real-time ADC data processing with visualization',
                    'Created automated SMS alert system for lighting changes'
                ]
            },
            {
                'name': 'Personal Health Assistant Bot',
                'year': '2024',
                'link': 'https://drive.google.com/drive/folders/1MSk-ypEX4vbuQV1RfMBeVDkDWJqFlNkt?usp=sharing',
                'technologies': ['Python', 'Flask', 'OpenAI GPT-3.5', 'aiogram', 'Threading'],
                'description': [
                    'Developed Telegram-based AI health assistant with aiogram',
                    'Implemented multi-threaded architecture with Flask server',
                    'Created specialized health guidance with safety protocols',
                    'Designed intuitive command structure with welcome messages'
                ]
            }
        ],
        'achievements': [
            {
                'title': 'KES Konnect 2.0 - 2022',
                'certificate': 'https://drive.google.com/file/d/1dFRlvhou-cHglTjjqPB_uWhuhmdi6xfj/view?usp=sharing'
            },
            {
                'title': 'KIIT Launchpad 2022 Organizing Team Member',
                'certificate': 'https://drive.google.com/file/d/1VUquKTD0_wN8wVWN_oEa_pIS2yPu-bfC/view?usp=sharing'
            },
            {
                'title': 'KIIT-Karnival Lore 2023 Organizing Team Member',
                'certificate': None
            },
            {
                'title': 'Legend of Python Course by Codedx',
                'certificate': 'https://www.codedx.io/certificates/a224b0de-e3b1-457a-9d80-54f346ba5a90'
            },
            {
                'title': 'KPMG Capture the Flag Hackathon 2023',
                'certificate': 'https://drive.google.com/file/d/1rzbCyj1t4d1DM2gjB7ZTudBmfstf6k-Q/view?usp=sharing'
            }
        ]
    }
    
    return render_template('index.html', data=portfolio_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

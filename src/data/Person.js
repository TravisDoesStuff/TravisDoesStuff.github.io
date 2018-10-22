const Person = {
    name: 'Travis Burt',
    title: 'Front-End Developer',
    location: 'Lafayette, CO',
    description: [
        "I was always curious in finding out how the program or game I was playing worked. I started by modding my favorite games through sound editing and then on to graphical mods. I would later learn that the skills with this hobby can be applied to a career in software development.",
        "During my first gig after college, I learned full-stack web development using JavaScript, PHP, and MySQL; including frameworks such as React.js, Redux, and Lumen. On my own, I took some time to learn how mobile applications are made in order to utilize onboard sensors and external internet services.",
        "Outside of work, I enjoy my time playing video games, exploring the mountains and city, or expressing my creative side through drawing, audio editing, and computer graphics.",
        "I am now in search of my next opportunity in the front-end web development field in order to apply my skill and knowledge to as well as sharing my knowledge to other developers in the web stack. I'm also considering a role within UX/UI to apply my knowledge of graphical design, user psychology, and intuition."
    ],
    quote: "Software development to me is a creative art given a set of tools, and knowing when and how to use them.",
    skills: [
        {
            category: 'Languages',
            skills: [
                'JavaScript',
                'PHP',
                'HTML5',
                'CSS3',
                'MySQL',
                'Java',
            ]
        },
        {
            category: 'Libaries & Frameworks',
            skills: [
                'React.js',
                'Redux',
                'Node.js',
                'jQuery',
                'Zend',
                'Lumen',
                'Bootstrap',
                'Semantic UI',
                'Material UI'
            ]
        },
        {
            category: 'Tools',
            skills: [
                'Git / Github',
                'Postman',
                'Amazon Web Services',
                'Docker',
                'Photoshop CC',
                'Illustrator CC',
                'After Effects CC'
            ]
        },
        {
            category: 'Everything Else',
            skills: [
                'Agile Methodology',
                'Kanban Methodology',
                'Responsive Design',
                'RESTful architecture',
                'API Development',
                'User Experience'
            ]
        }
    ],
    history: [
        {
            startDate: 'Jul 2018',
            title: 'Relocated to Colorado',
            icon: 'truck',
            description: 'Seeking new adventures and opportunities.',
            tasks: [

            ]
        },
        {
            startDate: 'Feb 2015',
            endDate: 'Jun 2018',
            title: 'Oberd - Universal Research Solutions',
            icon: 'briefcase',
            description: 'Oberd is a software as a service (SaaS) healthcare application. Primarily focused on outcomes, how a patient recovers after an operation. Also provides data management for clinical appointments, healthcare studies, and enhanced doctor-to-patient interaction.',
            tasks: [
                'Developed product activation and administration tool with React.js & Redux. Account management turnaround times reduced from hours to minutes and reduced client tasks for development team.',
                'Took ownership of Patient Satisfaction product, optimization of CakePHP code and database queries reduced report time from minutes to seconds, enhancing client retention and product sales.',
                'Converted backend data management system to Lumen-based RESTful API and AWS S3.',
                'Collaborated with developers to establish coding practices to improve maintainability of code-base.',
                'Maintained clinical management application, utilizing a Kanban system to add requested features and resolve defects; continuous deployment through Codeship to Amazon Web Services (AWS).'
            ]
        },
        {
            startDate: 'Aug 2011',
            endDate: 'Dec 2014',
            title: 'University of Missouri - Columbia',
            icon: 'graduation cap',
            description: 'BS in Information Technology; Minors in Computer Science, and Business',
            tasks: [
                'Dean\'s List',
                'Missouri Computing Association'
            ]
        },
        {
            startDate: 'Aug 2009',
            endDate: 'May 2011',
            title: 'Richland Community College',
            icon: 'book',
            description: 'General Education, transfer to MU later.',
            tasks: [
                
            ]
        }
    ],
    image: "https://avatars0.githubusercontent.com/u/30422493"
};
 export default Person;

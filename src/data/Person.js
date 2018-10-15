const Person = {
    name: 'Travis Burt',
    title: 'Front-End Developer',
    location: 'Boulder, CO',
    description: [
        "Travis began his interest in software early on in life, always curious to finding out how the program or game he was playing worked. He began by modding his favorite games through sound editing and then on to graphical mods. He would learn later that the skills with this hobby can be applied to a career in software development and followed the path through college then through his first software gig in Columbia, MO.",
        "Over the next three years, he learned full-stack web development using JavaScript, PHP, and MySQL; including frameworks such as React.js, Redux, and Lumen. On his own, he took some time to learn how mobile applications are made in order to utilize onboard sensors and external internet services.",
        "Travis also enjoys his time playing video games, exploring the mountains and city, or expressing his creative side through drawing, audio editing, and computer graphics.",
        "Travis is now in search of his next opportunity in the front-end web development field in order to apply his skill and knowledge to as well as sharing his knowledge to other developers in the web stack. He also is considering a role within UX/UI to apply his knowledge of graphical design, user psychology, and intuition."
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
                'MySQL'
            ]
        },
        {
            category: 'Libaries & Frameworks',
            skills: [
                'React.js',
                'Redux',
                'Node.js',
                'JQuery',
                'Zend',
                'Lumen',
            ]
        },
        {
            category: 'Tools',
            skills: [
                'Git / Github',
                'Postman',
                'AWS',
                'Photoshop CC'
            ]
        }
    ],
    history: [
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

const Person = {
    name: 'Travis Burt',
    title: 'Developer, Designer & Stuff',
    description: [
        "I was always curious in finding out how the program or game I was playing worked. I started by modding my favorite games through sound editing and then on to graphical mods. I would later learn that the skills with this hobby can be applied to a career in software development.",
        "Previously I worked as a full-stack developer working with technologies such as JavaScript, PHP, and MySQL; including some frameworks such as React.js, Redux, and Lumen. On my own time I have been learning mobile development and Vue.js in order to visualize data to users. I have also been learning UX Design to further enhance my skills in visual design to user interaction.",
        "Outside of work, I enjoy my time playing Pokemon Go, exploring the open spaces, or expressing my creative side through drawing, audio editing, and computer graphics.",
    ],
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
                'React',
                'Node.js',
                'jQuery',
                'Vue',
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
            startDate: '2019',
            endDate: 'Present',
            title: 'Franklin Energy',
            icon: 'briefcase',
            description: '',
            tasks: [

            ]
        },
        {
            startDate: '2015',
            endDate: '2018',
            title: 'Oberd - Universal Research Solutions',
            icon: 'briefcase',
            description: 'Oberd is a software as a service (SaaS) healthcare application. Primarily focused on outcomes, how a patient recovers after an operation. Also provides data management for clinical appointments, healthcare studies, and enhanced doctor-to-patient interaction.',
            tasks: [
                'Developed product activation and administration tool with React. Account management turnaround times reduced from hours to minutes and reduced client tasks for development team.',
                'Took ownership of Patient Satisfaction product, optimization of CakePHP code and database queries reduced report time from minutes to seconds, enhancing client retention and product sales.',
                'Converted backend data management system to Lumen-based RESTful API and AWS S3.',
                'Collaborated with developers to establish coding practices to improve maintainability of code-base.',
                'Maintained clinical management application, utilizing a Kanban system to add requested features and resolve defects; continuous deployment through Codeship to Amazon Web Services (AWS).'
            ]
        },
        {
            startDate: '2011',
            endDate: '2014',
            title: 'University of Missouri - Columbia',
            icon: 'graduation cap',
            description: 'BS in Information Technology; Minors in Computer Science, and Business',
            tasks: [
                'Dean\'s List',
                'Missouri Computing Association'
            ]
        },
        {
            startDate: '2009',
            endDate: '2011',
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

const Person = {
    name: 'Travis Burt',
    title: 'Front-End Developer',
    description: [
        "I'm a curious type, always wondering how my gadgets worked. Eventually I would be modifying computer games to my liking, in time I was wanting to build the software and gadgets itself.",
        "I have 3.5 developing web-based applications. Many of the products being made are utilizing modern web frameworks such as React.js and Laravel-Lumen. On my own time I am learning different technologies such as mobile development in order to utilize on-board sensors and external internet services.",
        "In my spare time I enjoy playing video games and exploring the world, whether its enjoying the outdoors or getting to know the local spots."
    ],
    quote: [
        "To me, software development is a creative art given a set of tools, and knowing when to use them."
    ],
    skills: [
        {
            category: 'Languages',
            skills: [
                'JavaScript',
                'PHP',
                'HTML',
                'CSS',
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
                'JQuery',
                'Zend',
                'Lumen',
            ]
        },
        {
            category: 'Tools',
            skills: [
                'Git',
                'Github',
                'Postman',
                'AWS',
                'Photoshop'
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
                'Utilized React-Redux to build internal management application, reducing account manager turnaround time from hours to minutes.',
                'Took ownership of premium data application, optimizations in back-end data management and user-experience increased client retention.',
                'Centralized database management to Lumen-based API.',
                'Maintained and added requested features to primary clinical application, integration through AWS.',
            ]
        },
        {
            startDate: 'Aug 2011',
            endDate: 'Dec 2014',
            title: 'University of Missouri - Columbia',
            icon: 'graduation cap',
            description: 'BS in Information Technology; Minors in Computer Science, and Business',
            tasks: [
                
            ]
        },
        {
            startDate: 'Aug 2009',
            endDate: 'May 2011',
            title: 'Richland Community College',
            icon: 'book',
            description: '',
            tasks: [
                
            ]
        }
    ]
};

export default Person;

const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: "I am a skilled full-stack developer with expertise in building high-performance web applications. Proficient in React.js, JavaScript, Angular, .NET, and PostgreSQL, I have a strong understanding of frontend development, API integration, and database management. I deliver dynamic, scalable solutions tailored to meet client needs, ensuring both functionality and efficiency.",
    },
    {
        id: 1,
        title: 'Agile and Scrum',
        desc: "Agile is the way forward, and I actively embrace its principles in my work. By following Agile and Scrum methodologies, I’m able to collaborate more effectively, adapt quickly to changes, and deliver value incrementally. It not only enhances my ability to work in dynamic environments but also fosters continuous improvement, both for myself and the teams I work with.",
    },
    {
        id: 2,
        title: 'Microfrontend Development',
        desc: "I have hands-on experience with microfrontends, enabling the development of modular, scalable web applications. This approach improves flexibility, maintainability, and development speed by allowing independent, parallel work on different features, while ensuring seamless, high-performance user experiences.",
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "Open source is the future, and I dedicate some of my weekends to contributing to open source projects. It not only provides me with the opportunity to learn from the best developers and improve my skills but also allows me to give back to the community and make a positive impact.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}

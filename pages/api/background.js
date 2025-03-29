const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'R.M.D. Engineering College',
                degree: 'B.E., Electricals and Electronics Engineering',
                detail: "Bachelor's Degree in Electricals and Electronics Engineering from R.M.D. Engineering College.",
                year: '2016-2020'
            },
            {
                id: 1,
                title: 'Shri Krishnaswamy M.H.S.S',
                degree: 'HSC',
                detail: "Completed HSC in Maths and Science subjects from Shri Krishnaswamy M.H.S.S.",
                year: '2015-2016'
            },
            {
                id: 2,
                title: 'Shri Krishnaswamy M.H.S.S',
                degree: 'SSC',
                detail: "Completed SSC in Maths and Science subjects from Shri Krishnaswamy M.H.S.S.",
                year: '2013-2014'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Valgenesis',
                role: 'Senior Software Engineer',
                url: 'https://www.valgenesis.com',
                desc: 'I specialize in building responsive single-page application (SPA) user interfaces using React, Material UI, and Redux. For backend and database development, I work with .NET and PostgreSQL, and Liquibase to deliver robust, efficient solutions.',
                year: '04/2023 - Present',
                location: 'Chennai, India'
            },
            {
                id: 2,
                title: 'Nextsphere Technologies',
                role: 'Associate Software Engineer',
                url: 'https://rapidfs.com/login',
                desc: 'As a standalone performer, I played a key role in building a React-based Micro-frontend application from scratch and performed unit testing using Jest.',
                year: '05/2021 - 04/2023',
                location: 'Chennai, India'
            },
            {
                id: 3,
                title: 'KPIT',
                role: 'Intern Trainee',
                // url: 'no website',
                desc: "I gained hands-on experience as a trainee, learning microprocessor-level assembly language coding and software used in vehicle automation.",
                year: '05/2020 - 12/2020',
                location: 'Chennai, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}

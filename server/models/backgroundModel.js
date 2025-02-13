const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Master',
                degree: 'MSc. Applied Computer Science',
                detail: 'SRH Hochschule Heidelberg, Heidelberg, Germany',
                year: '04.2024 - Present',
                cgpa: '1.6'
              },
              {
                id: 1,
                title: 'Master',
                degree: 'MSc. Cognitive Systems',
                detail: 'Ulm University, Ulm, Germany',
                year: '2021 - 2023'
              },
              {
                id: 2,
                title: 'Bachelor',
                degree: 'BSc. Computer Science',
                detail: 'Karachi Institute of Economics & Technology (KIET), Karachi, Pakistan',
                year: '2016 - 2020'
              }
           
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'CardiLink GmbH',
                role: 'Working Student - Android & ASP.NET Developer',
                url: 'https://www.cardi-link.com/',
                desc: 'In this role, I focused on developing and maintaining ASP.NET web applications, creating backend APIs for Android, and building cross-platform hybrid apps using Blazor and C#/.NET.',
                year: 'July 2023 - March 2024',
                location: 'Nuremberg, Bavaria, Germany',
            },
            {
                id: 2,
                title: 'CardiLink GmbH',
                role: 'Working Student - Android Application Developer',
                url: 'https://www.cardi-link.com/',
                desc: 'I developed native Android mobile apps using Kotlin, participated in software testing for cloud and mobile apps, and collaborated in product management.',
                year: 'March 2022 - June 2023',
                location: 'Nuremberg, Bavaria, Germany',
            },
            {
                id: 3,
                title: 'Technoflick Solutions (Private) Limited',
                role: 'Full-stack Developer',
                url: 'https://www.technoflick.com/',
                desc: 'Worked on full-stack web applications, APIs, and databases, ensuring scalability and security. Collaborated with teams to implement features and functionalities.',
                year: 'October 2020 - August 2021',
                location: 'Karachi, Pakistan',
            },
            {
                id: 4,
                title: 'Technoflick Solutions (Private) Limited',
                role: 'Intern Software Developer',
                url: 'https://www.technoflick.com/',
                desc: 'Contributed to web application development and debugging while learning modern development practices.',
                year: 'April 2020 - September 2020',
                location: 'Karachi, Pakistan',
            },
        ]
    }
]



export const getAllBackground = () => {
    return background;
  };
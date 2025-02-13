// techStack.js
const ProgrammingLanguages = [
    { id: 0, title: 'C#', desc: 'I have solid experience working with C# for building robust and scalable applications, particularly in ASP.NET MVC for web development.' },
    { id: 1, title: 'Java', desc: 'With Java, I have developed server-side applications, utilizing frameworks like Spring Boot to build efficient and scalable back-end systems.' },
    { id: 2, title: 'Python', desc: 'Python is a versatile language I use for web development, data analysis, and scripting tasks, leveraging libraries like Django and Flask.' },
    { id: 3, title: 'Kotlin', desc: 'Kotlin is my go-to language for Android development, providing modern, safe, and concise code for building high-quality mobile apps.' },
    { id: 4, title: 'JavaScript', desc: 'JavaScript is essential for front-end development, and I use it to create dynamic and interactive user interfaces with frameworks like ReactJS.' },
    { id: 5, title: 'Swift', desc: 'JavaScript is essential for front-end development, and I use it to create dynamic and interactive user interfaces with frameworks like ReactJS.' },
    { id: 5, title: 'Swift', desc: 'Swift is the language I use for building iOS applications. I leverage its powerful features for creating high-performance, safe, and elegant mobile apps.' },
];

const FrameworksAndLibraries = [
    { id: 0, title: 'ASP.NET MVC', desc: 'I have extensive experience using ASP.NET MVC for building scalable and maintainable web applications on the Microsoft stack.' },
    { id: 1, title: 'Spring Boot', desc: 'Spring Boot is my choice for creating production-ready back-end systems, with built-in features to streamline development and deployment.' },
    { id: 2, title: 'ReactJS', desc: 'ReactJS allows me to build modern and performant user interfaces with its component-based architecture, enabling better code maintainability.' },
    { id: 3, title: 'NodeJS', desc: 'I use Node.js to develop fast and scalable back-end services, particularly when working with real-time applications or API services.' },
    { id: 4, title: 'Redux', desc: 'Redux is my tool of choice for managing complex state in large-scale React applications, ensuring consistency and scalability.' },
    { id: 5, title: 'TailwindCSS', desc: 'TailwindCSS allows me to build custom and responsive UI designs quickly with utility-first CSS classes.' },
    { id: 6, title: 'React Native', desc: 'I use React Native to build cross-platform mobile applications, ensuring native performance with a single codebase.' }, 
    { id: 7, title: 'REST APIs', desc: 'I design and develop RESTful APIs for seamless communication between front-end and back-end services in web and mobile applications.' },
    { id: 8, title: 'Microservices Architecture', desc: 'I am experienced in building microservices-based applications for scalability, fault tolerance, and ease of maintenance.' },
];

const Databases = [
    { id: 0, title: 'MongoDB', desc: 'MongoDB is my go-to NoSQL database for scalable and flexible data storage, especially for applications that require quick development cycles.' },
    { id: 1, title: 'MySQL', desc: 'With MySQL, I work on building and maintaining relational databases that are reliable and performant for transactional applications.' },
    { id: 2, title: 'PostgreSQL', desc: 'PostgreSQL is an advanced open-source relational database known for its reliability, scalability, and support for SQL standards.' }, 
    { id: 3, title: 'SQL Server', desc: 'SQL Server is a relational database management system I use for building and maintaining enterprise-level applications with strong data consistency.' }, 
    { id: 4, title: 'Firebase', desc: 'I use Firebase as a Backend-as-a-Service (BaaS) to easily integrate real-time databases, authentication, and cloud functions into my mobile and web apps.' },
];

const ToolsAndPlatforms = [
    { id: 0, title: 'Git & GitHub', desc: 'I am proficient in using Git for version control and GitHub for collaboration, ensuring smooth workflow and code management.' },
    { id: 1, title: 'Jira', desc: 'Jira is my preferred tool for agile project management, helping to track tasks, bugs, and deliverables in an efficient and organized manner.' },
    { id: 2, title: 'Docker & Kubernetes', desc: 'Docker and Kubernetes are vital tools in my DevOps workflow, ensuring the portability, scalability, and automation of my applications.' },
    { id: 3, title: 'Jenkins', desc: 'Jenkins is a key part of my CI/CD pipeline, automating builds, tests, and deployments to ensure smooth development and delivery.' },
    { id: 4, title: 'Postman', desc: 'I use Postman for API testing, ensuring that back-end services are functioning as expected before deployment.' },
    { id: 5, title: 'Linux', desc: 'I am comfortable working in Linux environments, using its powerful command-line tools for development, automation, and server management.' },
    { id: 6, title: 'Xcode', desc: 'Xcode is my primary IDE for building macOS, iOS, watchOS, and tvOS applications, providing all the tools needed to create high-quality mobile apps.' },
    { id: 7, title: 'Visual Studio & VS Code', desc: 'Visual Studio and VS Code are my primary IDEs, offering a seamless development experience for both front-end and back-end projects.' },
    { id: 8, title: 'Android Studio', desc: 'I use Android Studio to develop Android apps with a rich set of tools for building, testing, and debugging mobile applications.' },
    
];

const SoftSkills = [
    { id: 0, title: 'Communication', desc: 'Strong communication skills, both verbal and written, allow me to effectively collaborate with team members and stakeholders.' },
    { id: 1, title: 'Team Player', desc: 'I thrive in team settings, working collaboratively with colleagues to achieve common goals and contribute to a positive work environment.' },
    { id: 2, title: 'Problem Solver', desc: 'I have a natural ability to analyze complex problems and develop innovative solutions quickly and effectively.' },
    { id: 3, title: 'Leadership', desc: 'With leadership experience, I guide teams towards success, empowering individuals and ensuring alignment with project goals.' },
    { id: 4, title: 'Time Management', desc: 'I am skilled at managing multiple tasks and deadlines, ensuring high-quality work is delivered on time.' },
    { id: 5, title: 'Quick Learner', desc: 'I am constantly learning new technologies and methodologies to stay current with industry trends and improve my skill set.' },
];

const TestingAndMethodologies = [
    { id: 0, title: 'Unit Testing', desc: 'I emphasize writing unit tests to ensure code correctness and prevent regressions, using frameworks like Jest and Mocha.' },
    { id: 1, title: 'Integration Testing', desc: 'Integration testing is an essential part of my workflow, verifying that different parts of the system work together as expected.' },
    { id: 2, title: 'Functional Testing', desc: 'I perform functional testing to ensure that the application meets the specified requirements and delivers the expected features.' },
    { id: 3, title: 'Agile Methodology', desc: 'I am experienced with Agile methodologies, particularly Scrum, ensuring that projects are delivered incrementally and iteratively.' },
    { id: 4, title: 'DevOps', desc: 'My DevOps experience includes automating processes such as deployment and monitoring to ensure efficient and reliable delivery of software.' },
];

export const getAllTechStack = () => {
    return {
        ProgrammingLanguages,
        FrameworksAndLibraries,
        Databases,
        ToolsAndPlatforms,
        SoftSkills,
        TestingAndMethodologies,
    };
};
const portfolio = [
    {
        id: 0,
        projectName: "Talentra Recruitment Platform",
        url: "https://github.com/mbilalhussain15/Talentra-Recruitment-Platform",
        image: "myProjects/talentraProject.jpeg",
        projectDetail: "Talentra is a modern recruitment platform designed to streamline the hiring process for applicants, recruiters, and administrators. Built with a microservices architecture, Talentra ensures flexibility, security, and efficiency in talent acquisition.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "ExpressJS"
            },
            {
                tech: "MongoDB"
            },
            {
                tech: "Microservices"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Rest API's"
            },
        ]
    },
    {
        id: 1,
        projectName: "HR Management System",
        url: "https://github.com/mbilalhussain15/Human-Resource-Management-System",
        image: "myProjects/HRMProject.png",
        projectDetail: "This Human Resource Management System is designed to streamline and manage various HR processes within an organization. It includes modules for employee management, payroll, leave management, performance evaluation, and more. The system aims to automate routine HR tasks, improve efficiency, and enhance overall HR management.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Java"
            },
            {
                tech: "SQL workbench"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Rest API's"
            },
        ]
    },
    {
        id: 2,
        projectName: "Aiva Virtual Assistant Chatbot",
        url: "https://github.com/mbilalhussain15/Aiva-Virtual-Assistant-Chatbot-Project",
        image: "myProjects/aivaProject.png",
        projectDetail: "This project is designed to develop a voice assistant capable of understanding and responding to user queries. It includes two main Python scripts: train_main.py and test_main.py. The first script trains the model, and the second script tests the trained model.",
        technologiesUsed: [
            {
                tech: "Python"
            },
            {
                tech: "LSTM Model"
            },
            {
                tech: "SVM Model"
            },
            {
                tech: "GloVe Embeddings"
            },
            {
                tech: "Google Speech Recognition"
            },
            {
                tech: "Transformers"
            },
        ]
    },
    {
        "id": 3,
        "projectName": "Local Event Networking App",
        "url": "https://github.com/mbilalhussain15/Local-Event-Networking-App",
        "image": "myProjects/localEventApp.PNG",
        "projectDetail": "A mobile app for discovering local events and networking with attendees in real-time. Users can browse upcoming events, connect with participants, and share experiences. Built with a scalable backend and modern UI for seamless user interaction.",
        "technologiesUsed": [
          { "tech": "React Native" },
          { "tech": "ExpressJS" },
          { "tech": "REST API" },
          { "tech": "MongoDB" },
          { "tech": "TailwindCSS" }
        ]
      },
]

export const getPortfolio = () => {
    return portfolio;
  };

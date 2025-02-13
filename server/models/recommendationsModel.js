// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'ERDEM YAVUZ YILDIZ',
    image: "images/profile-picture.png",
    designation: 'CTO at CardiLink | Software Architect | AI & Blockchain Innovator | 20+ Years Driving Digital Innovation',
    view: "It has been a pleasure having Muhammad Hussain as part of our development team at CardiLink. His commitment to mastering Kotlin Android development and exploring C# ASP.NET has been commendable. While navigating the complexities of software development, Muhammad has shown a willingness to put in extra effort and time, highlighting his dedication to personal and professional growth. His positive attitude and hardworking nature have made him a valued team member, always ready to take on new challenges. Muhammad's contributions, particularly in team collaboration and support, have positively impacted our work environment. We appreciate his efforts and believe in his potential to evolve and succeed in his future endeavors. 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/erdemyavuzyildiz/"
  },
  {
    id: 1,
    name: 'Lukas Theo Beck',
    image: "images/profile-picture.png",
    designation: 'Chief Product Officer, CardiLink',
    view: `I am delighted to spotlight the exceptional contributions of Muhammad Bilal Hussain, a standout member of our team at CardiLink. He has consistently demonstrated unparalleled dedication and passion for his work, particularly in his expertise as an ASP.Net developer and his mastery of Kotlin for Android development. His role in software development has been pivotal, showcasing resilience and the ability to deliver results that exceed expectations. His technical prowess in ASP.Net and Kotlin has been instrumental in driving the success of our team and products. 

    One of Bilal's standout qualities is his collaborative spirit. Whether working with cross-functional teams or mentoring colleagues in ASP.Net and Kotlin development, he truly embodies the ethos of collaboration that defines CardiLink’s culture. His positive attitude and willingness to go above and beyond make him a true asset to our team. Bilal’s dual expertise in both web and mobile development sets a high standard for excellence in our field.
    
    I want to take this opportunity to express my gratitude for his outstanding contributions, which have helped define CardiLink’s success. Let’s all congratulate him on his achievements and look forward to more amazing things ahead!`,
    
    linkednURL: "https://www.linkedin.com/in/lukas-beck/"
}

  
]

export const getAllRecommendation = () => {
    return recommendationCard;
  };
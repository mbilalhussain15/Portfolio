const review = [
    {
        id: 1,
        clientName: `Rosario D'Amore`,
        clientLocation: 'United States',
        clientSource: 'Freelance',
        clientReview: 'I have worked with Muhammad Bilal and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
    
    {
        id: 2,
        clientName: 'Pascal',
        clientLocation: 'China',
        clientSource: 'Freelance',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him. '
    },
    {
        id: 3,
        clientName: 'Jake Corry',
        clientLocation: 'Germany',
        clientSource: 'Freelance',
        clientReview: "Muhammad Bilal is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again"
    },
    {
        id: 4,
        clientName: 'Mustafash',
        clientLocation: 'Egypt',
        clientSource: 'Freelance',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    
]

export const getAllReviews = () => {
    return review;
  };
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import SkillCard from "./SkillCard";

const MySkills = () => {

    const { isLoading, error, data } = useQuery('skills', () =>
        axios.get('http://localhost:5000/api/skills')
            .then(({ data }) => {
                console.log('Fetched Data:', data); // Log the response
                return data;
            })
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Skills</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6].map((_, index) => (
                            <ParagraphSkeleton key={index} className={"space-y-2 p-8"} />
                        ))
                        :
                        data && Object.keys(data).map((category, index) => (
                            <SkillCard key={index} title={category} skills={data[category]} />
                        ))
                        
                }

            </div>
        </>
    )
}

export default MySkills
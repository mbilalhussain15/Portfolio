import ExpertiseCard from "./ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const MyExpertise = () => {
    const Server_URL = import.meta.env.VITE_SERVER_URL;
    const { isLoading, error, data } = useQuery('expertise', () =>
        axios.get(`${Server_URL}/api/expertise`)
                .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6].map((_, index) => (
                            <ParagraphSkeleton key={index} className={"space-y-2 p-8"} />
                        ))
                        :
                        data?.map((data, index) => (
                            <ExpertiseCard key={data.id || index} data={data} />
                        ))
                }

            </div>
        </>
    )
}

export default MyExpertise
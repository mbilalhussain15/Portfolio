import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../Common/BannerLayout";
import Footer from "../Footer";
import PortfolioCard from "./PortfolioCard";
import axios from "axios";
import { Modal, Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../Common/ImageAndParagraphSkeleton";
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from "react-icons/fa";

const Portfolio = () => {
    const Server_URL = import.meta.env.VITE_SERVER_URL;
    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get(`${Server_URL}/api/portfolio`)
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))
    
    const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);

    return (
        <BannerLayout>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">

                {
                    isLoading ?
                        [1, 2, 3, 4].map((_, index) => (
                            <ImageAndParagraphSkeleton key={index} className={"w-full object-cover"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <PortfolioCard key={key} data={data} />
                        ))

                }


            </div >


            {/* More Projects Link */}
            <div className="flex justify-center mt-4">
  <button
    className=" text-Green px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95"
    onClick={() => setIsMoreModalOpen(true)}
  >
    <span className="flex items-center">
      <span className="icon rounded-lg">
      More Projects
      </span>
    </span>
  </button>
</div>


            {/* More Projects Modal */}
            <Modal
                className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
                centered
                open={isMoreModalOpen}
                footer={null}
                closable
                onOk={() => setIsMoreModalOpen(false)}
                onCancel={() => setIsMoreModalOpen(false)}
                closeIcon={<AiOutlineClose className="text-white text-2xl" />}
            >
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-Green font-bold text-2xl">
                        Coming Soon!
                    </h1>
                    <p className="text-Snow mt-2">
                        More projects will be added very soon.
                    </p>
                </div>
            </Modal>



            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;

import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import Image from 'next/image';

function Background() {

    const { isLoading, error, data } = useQuery('background', () =>
        axios.get('api/background')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div style={{ display: 'flex' }}>

                        <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                        {/* <img className='w-9 h-9 mt-[-2px]' src="images/education.png" alt="emoji" /> */}
                    </div>

                    {isLoading ?
                        [1, 2, 3].map(() => (
                            <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                        ))
                        :
                        data && data[0]?.eduCards?.map((data, key) => (
                            <Edu_Card key={key} data={data} />
                        ))
                    }

                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">

                        <div style={{ display: 'flex' }}>
                            <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>
                            {/* <img className='w-10 h-10 mt-[-7px]' src="images/experience.png" alt="emoji" /> */}
                        </div>
                        {isLoading ?
                            [1, 2, 3].map(() => (
                                <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                            ))
                            :
                            data && data[1]?.expCards?.map((data, key) => (
                                <Exp_Card key={key} data={data} />
                            ))
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;

import React from "react";
import ThumbCard from "../app/components/ThumbCard";
import Script from "next/script";
import { fetchData } from "@/fe-handlers/requestHandlers";


export const getData = async () => {
    const limitPerPage = 8;
    const randomNumber = Math.floor(Math.random() * 4) + 1; // Generates a random number between 1 and 80

    const skip = randomNumber * limitPerPage;
    let aggregationQuery = (match_cat)=> (
        [
            {
              $match: { category: match_cat },
            },
            {
              $facet: {
                data: [
                  {
                    $lookup: {
                      from: "lang_videos_related",
                      localField: "id",
                      foreignField: "cat_id",
                      as: "related_data",
                    },
                  },
                  { $sort: { id: 1 } },
                  { $skip: skip },
                  { $limit: limitPerPage },
                ],
                total_count: [
                  {
                    $group: {
                      _id: null,
                      count: { $sum: 1 },
                    },
                  },
                ],
              },
            },
          ]
    );
    const tamilData = await fetchData("lang_videos", aggregationQuery(1));
    const malayalamData = await fetchData("lang_videos", aggregationQuery(2));
    return {
     tamilData : tamilData[0].data, 
     malayalamData : malayalamData[0].data
    };
  };

export default async function Home() {
    const {tamilData,malayalamData} = await getData();
    

    const festivals = ['Good Friday','Easter','Palm Sunday','Christmas'];
    return (
        <div className="">
            <div className="bg-indigo-100 py-6 md:py-12">
            {/* {JSON.stringify(malayalamData)} */}
    {/* {JSON.stringify(malayalamData)} */}
                <div className="container px-4 mx-auto">
                <ins className="adsbygoogle"
                style={{display:"inline-block", width:"360px", height:"300px"}}
                data-ad-client="ca-pub-9831135411942124"
                data-ad-slot="6154129321"></ins>
            <Script strategy="lazyOnload">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </Script>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-5">
                        {
                            Array(10).fill(0).map((_, index) => (
                                <div key={index} className="w-full max-w-sm py-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="flex flex-col items-center">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="container px-4 mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-5">தமிழ் கிறிஸ்தவ பாடல்கள்</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
                    {
                            (tamilData || []).map((eachData, index) => (
                                <ThumbCard key={index} video={eachData} />
                            ))
                        }
                        {/* <ThumbCard />
                        <ThumbCard />
                        <ThumbCard />
                        <ThumbCard /> */}
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-5">മലയാളം ക്രിസ്ത്യൻ ഗാനങ്ങൾ</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                            (malayalamData || []).map((eachData, index) => (
                                <ThumbCard key={index} video={eachData} />
                            ))
                        }
                        {/* <ThumbCard />
                        <ThumbCard />
                        <ThumbCard />
                        <ThumbCard /> */}
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-center mb-5">Festival Songs</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    {
                        festivals.map((data, index) => (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 text-center" key={index}>
                            <img className="w-24 h-24 mx-auto mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">50 Videos</span>
                        </div>
                        ))
                    }
                </div>
            </div> 
        </div>
    );
}

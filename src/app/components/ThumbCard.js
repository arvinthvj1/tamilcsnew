"use client"
import Image from "next/image";
import ThumbRelLoader from "./ThumbRelImgContent";
import { useLayoutEffect, useState } from "react";
 
export default function ThumbCard(props) {
  const [isLoaded,setIsLoaded] = useState(false);
  const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
  };
  const firstRelatedData = (props?.video?.related_data[0] || {});
  const slug = slugify(props.video.title);
  const [isloadedImage, setIsLoadedImage] = useState(false);
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  useLayoutEffect(() => {
    if (isloadedImage) {
      setIsDomLoaded(true);
    }
  }, [isloadedImage]);
  return (
    <div className="rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] bg-white group mb-[30px]">
      <a href={`/christian-songs/${slug}/${props?.video?.id}`} className="block">

        <Image
            style={{ display: isDomLoaded ? "block" : "none" }}
            onLoad={()=>{
              setIsLoadedImage(true)
            }}
            src={`https://i.ytimg.com/vi/${firstRelatedData?.video}/hqdefault.jpg`}
            alt={props.video.title}
            className="card_image"
            width={480}
            height={200}
            priority
        />
         <div  style={{display: !isDomLoaded ? "" : "none"}} role="status" class=" rounded-s shadow animate-pulse  dark:border-gray-700">
        <div style={{ width: "100%", height : "200px" }} class="flex items-center justify-center bg-gray-300 rounded-t-lg  dark:bg-gray-700 card_image">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
        </div>
        </div>
      </a>
      <div className="content p-3 relative">
        <h2 className="text-md font-bold capitalize"><a href={`/christian-songs/${slug}/${props.video.id}`}>{props.video.title}</a></h2>
      </div>
    </div>
  )
}

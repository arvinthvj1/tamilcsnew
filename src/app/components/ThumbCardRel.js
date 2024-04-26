import ThumbRelLoader from "./ThumbRelImgContent";

export default function ThumbCardRel(props) {
  const slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  };
  const slug = slugify(props.video.img_desc);
  return (
    <div>
      <a href={`/christian-songs/${slug}/${props.video.id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
       <ThumbRelLoader props={props} />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 "><a href={`/christian-songs/${slug}/${props.video.id}`}>{props.video.img_desc}</a></h5>
        </div>
      </a>
    </div>
  )
}

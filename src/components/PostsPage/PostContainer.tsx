import React from "react";
import Image, { StaticImageData } from "next/image";

interface PostContainerProps {
  imgSrc?: StaticImageData | string;
  title: string;
  description: string;
}

const PostContainer: React.FC<PostContainerProps> = ({
  imgSrc = "https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp",
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer mb-5 text-text">
      <Image
        className="rounded-lg"
        src={imgSrc}
        alt={`Demo picture of ${title}`}
        width={300}
        height={200}
      />
      <h4 className="text-xl">{title}</h4>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default PostContainer;

import Image from "next/image";
import Link from "next/link";

function Post1() {
  return (
    <div>
      {/* project intro section */}
      <div className="mb-5">
        <Link
          className="inline-flex gap-1 items-center text-linkColor hover:underline"
          href="/posts"
        >
          Posts
        </Link>
        <span className="text-text">{" > "}</span>{" "}
        <span className="project-name">Post 1 Title</span>{" "}
      </div>

      {/* project about section */}
      <p className="custom-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Demo Images */}
      <Image
        className="mt-10 rounded-md"
        src={
          "https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp"
        }
        width={300}
        height={200}
        alt="Demo gameplay picture of ordres"
      />
    </div>
  );
}

export default Post1;

import Link from "next/link";

import PostContainer from "@/components/PostsPage/PostContainer";

export default function Posts() {
  return (
    <div>
      <h2 className="custom-h2">Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/posts/post1">
          <PostContainer
            imgSrc={
              "https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp"
            }
            title="Post 1"
            description="Post description, Suspendisse potenti. Sed dignissim lectus vitae justo sagittis, id convallis quam dignissim"
          />
        </Link>
      </div>
    </div>
  );
}

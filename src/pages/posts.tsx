import { useEffect, useState } from "react";
import Link from "next/link";
import PostContainer from "@/components/PostsPage/PostContainer";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2 className="custom-h2">Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post: { id: number; title: string; body: string }) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <PostContainer
              imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp"
              title={post.title}
              description={post.body}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

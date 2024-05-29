import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Post {
  title: string;
  body: string;
  id: number;
}

export default function Post() {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="custom-h3">{post.title}</h2>
      <p className="custom-p">{post.body}</p>
      <p>id: {id}</p>
    </div>
  );
}

import Link from "next/link";

function AboutSection() {
  return (
    <div>
      <p className="custom-p">
        This is a simple blog site built with Next.js. It is a great place to
        share your thoughts and ideas with the world. You can create, edit, and
        delete posts as you wish. You can also view other peoples posts and
        leave comments. Enjoy your stay!
      </p>
      <div className="flex items-center justify-center mt-10">
        <Link href="/posts" legacyBehavior>
          <a className="transition-opacity duration-300 px-5 py-2 rounded-full text-white bg-button">
            {"View Posts"}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default AboutSection;

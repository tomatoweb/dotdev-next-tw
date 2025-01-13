import { createPost } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";


export default async function PostsPage() {

  const posts = await prisma.product.findMany();

  const postsCount = await prisma.product.count();
  
  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-200">
      <h1 className="text-3xl font-semibold">All Posts ({postsCount})</h1>
      <ul className="border-t border-b border-primary py-5 leading-8 ">
        {posts.map( (post) => (
          <li key={post.id} className="flex items-center justify-center px-5">              
            {post.name}              
          </li>
        ) )}
      </ul>      
    </main>
  );
}

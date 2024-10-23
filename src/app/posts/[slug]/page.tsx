import prisma from "@/lib/db";

export default async function PostPage({ params } : {params:any}) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug
    }
  });
  return (
    <main className="flex flex-col items-center justify-center gap-y-24 text-center">
      <h1 className="text-3xl font-semibold">{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  );
}
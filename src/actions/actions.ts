"use server";
import { headers } from 'next/headers'

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  await prisma.post.create({
    data: {
      title: formData.get('title') as string,
      slug: (formData.get('content') as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
      content: formData.get('content') as string
    }
  });

  revalidatePath('/posts');
}
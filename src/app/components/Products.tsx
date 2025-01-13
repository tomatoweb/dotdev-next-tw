import prisma from "@/lib/db";


export default async function Products() {

  const products = await prisma.product.findMany();
  
  return (
    <main className="flex flex-col items-center justify-center py-8 gap-y-24 text-center bg-gray-200">
      <ul className="border-t border-b border-primary py-5 leading-8 ">
        {products.map( (product) => (
            <li key={product.id} className="flex items-center justify-center px-5">
              
                {product.name}
              
            </li>
        ) )}
      </ul>
    </main>
  );
}

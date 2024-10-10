import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
  <div className='flex items-center h-[calc(100vh-96px)] justify-center'>
      <SignUp />
  </div>
  );
}
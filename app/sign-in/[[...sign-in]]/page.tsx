import { SignIn } from '@clerk/nextjs'


export const metadata = {
  title: "Sign In"
}


export default function Page() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <SignIn />
    </div>
  )
}
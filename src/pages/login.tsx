import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "antd";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const  GoogleLoginPage =() => {
  const { data: session } = useSession();

  // Redirect if the user is already authenticated

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  if(session?.user?.email){

    router.push('/pc-builder')
  }


  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Login with Google</h1>
      <p className="text-gray-600 mb-6">
        Welcome! Please click the button below to sign in with your Google
        account.
      </p>
      <Button
        onClick={()=>signIn('google')}
        type='primary'
      >
        Sign in with Google
      </Button>
    </div>
  );
}

export default GoogleLoginPage;
GoogleLoginPage.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <RootLayout>{page}</RootLayout>
    </>
  );
};

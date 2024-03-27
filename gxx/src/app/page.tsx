import SignOutButton from "@/components/signOutButton";
import {getServerSession} from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/options"
import { redirect } from "next/navigation";



export default async function Home() {

  const session = await getServerSession(authOptions)
  if(!session){
     redirect("/login")
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="bg-purple-300 text-2xl font-bold p-4 rounded-md mb-6">Welcome To GlobalEmpireFx</h1>
      <>
      <span className="font-bold text-3xl">Profile</span>
      <h1 className="bg-purple-300 w-80 h-12 justify-center font-bold p-4 rounded-md mb-6">Name :</h1>
      <br />
      <h1 className="bg-purple-300 w-80 h-12 justify-center font-bold p-4 rounded-md mb-6">Email :</h1>
      <br />
      <h1 className="bg-purple-300 w-80 h-12 justify-center font-bold p-4 rounded-md mb-6">Type :</h1>
      <br />
      <h1 className="bg-purple-300 w-80 h-12 justify-center font-bold p-4 rounded-md mb-6">Contact :</h1>
      <br />
      <span className="font-bold text-3xl">Credentials</span>
      <br />
      <div className="bg-purple-300 border border-500 w-80 h-12 rounded-lg"></div>
    </>

    <p>{JSON.stringify(session)}</p>


      <br />
      <SignOutButton type={""} />
    </div>
  );
}

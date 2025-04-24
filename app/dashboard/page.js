
import { auth } from "@/auth";
import ButtonCheckout from "@/components/ButtonCheckout";
import ButtonLogOut from "@/components/buttonLogOut";
import FormBoard from "@/components/FormNewBoard";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Link from "next/link";



const getUserData = async () => {
  const session = await auth()

  await connectMongo()

  return await User.findById(session.user.id).populate('boards') 
};


export default async function Home() {

  const user = await getUserData()
  return (
   <main className="bg-base-200 min-h-screen">
    <section className="bg-base-100">
      <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between">
        <ButtonCheckout />
      <ButtonLogOut />
      </div>
      
    </section>

    <section className=" max-w-5xl mx-auto px-5 py-12 space-y-12">
      <FormBoard />
      <div className="space-y-4">
      <h1 className="font-extrabold text-xl mb-4">{user.boards.length} boards</h1>

      <ul className="space-y-4">
        {
          user.boards.map((board) => {
            return (<li key={  board._id } >
            <Link href={`/dashboard/b/${board._id}`} className="block bg-base-100 p-6 rounded-3xl hover:bg-neutral hover:text-neutral-content duration-1000 ">{board.name}</Link></li>)
          })
        }
      </ul>
    </div>
    </section>
    
    </main>
    
  );
}

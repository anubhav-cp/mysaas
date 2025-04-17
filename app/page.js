import ButtonLogin from "@/components/buttonLogin";
import Link from "next/link";

export default function Home() {

  const isLoggedIn = true
  const name = 'Anubhav'
  return (
   <main>
    <h1>Collect customer feedback to build better products</h1>
    <div>
      Create a feedback board in minutes, prioritize features, and build products your customers will love.
    </div>
    <ButtonLogin hasLoggedIn = {isLoggedIn} name = {name}/>
    </main>
  );
}

import ButtonLogin from "@/components/buttonLogin";
import Link from "next/link";

export default function Home() {
  const isLoggedIn = true;
  const name = "Anubhav";


  return (
    <main>
      {/* Header */}
      <section className="bg-base-200">
        <div className="flex max-w-3xl mx-auto justify-between items-center px-8 py-2">
          <div className="font-bold">MySaas</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQs</a>
          </div>
          <div>
            <ButtonLogin hasLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <ButtonLogin hasLoggedIn={isLoggedIn} name={name} />
      </section>

      {/* Pricing */}
      <section className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl font-medium mx-auto">
          <p className="text-sm text-center uppercase mb-4 text-primary">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A Pricing that adapts to your needs
          </h2>

          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">19</div>
              <div className="text-sm opacity-60 font-medium">/Month</div>
            </div>
            <ul className="space-y-2">
              {['Collect customer feedback',
    'Custom dashboard',
    'Admin dashboard',
    '24/7 live chat',].map((item) => {
                return (<li className="flex gap-2 items-center" key="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-green-700 w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>)

              })}
            </ul>
            <ButtonLogin hasLoggedIn={isLoggedIn} name={name} extraStyle={'w-full'}/>
          </div>
        </div>
      </section>
    </main>
  );
}

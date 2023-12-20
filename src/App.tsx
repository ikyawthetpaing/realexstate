import { SiteHeader } from "@/components/site-header";
import { homes } from "./config/house";
import { Icons } from "./components/icons";
import { cn } from "./lib/utils";

export default function App() {
  return (
    <main className="grid gap-24 pb-8">
      <HeroSection />
      <PropertyListingSection />
      <FinancialGuidanceSection />
      <NewlyListedHomesSection />
      <RealEstateMetricsSection />
      <HomeLoanSection />
      <footer className="container">
        <div className="rounded-3xl bg-blue-400 overflow-hidden">
          <div className="mx-auto flex flex-col items-center gap-6 py-8">
            <h2 className="text-5xl font-semibold font-montserrat-alt max-w-sm text-center">
              Check Out A Neighboard
            </h2>
            <p className="max-w-xs text-center">
              Lorem repellat ipsam! Nisi cumque ab reprehenderit dolor tenetur!
            </p>
            <div className="flex rounded-full overflow-hidden border w-max p-1 mx-auto bg-white">
              <input
                type="text"
                placeholder="Enter city or zip code"
                className="h-9 outline-none px-2 flex-1"
              />
              <button className="bg-slate-950 rounded-full px-5 text-white">
                Search
              </button>
            </div>
          </div>
          <div className="bg-black h-96 rounded-t-3xl text-white p-8"></div>
        </div>
      </footer>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="bg-blue-400 pb-8 lg:min-h-screen">
      <SiteHeader />
      <div className="container text-white mt-12 space-y-24">
        <h1 className="text-9xl font-montserrat-alt font-extrabold max-sm:text-7xl">
          Homes <br /> That Match
        </h1>
        <div className="flex items-center justify-end gap-6">
          <div className="flex">
            <div className="h-16 aspect-square rounded-full bg-slate-400 border-4 border-white"></div>
            <div className="h-16 aspect-square rounded-full bg-slate-400 border-4 border-white"></div>
            <div className="h-16 aspect-square rounded-full bg-slate-400 border-4 border-white"></div>
          </div>
          <p className="uppercase">
            Find a lender who can offer competitive mortage
          </p>
        </div>
        <div className="flex justify-between sm:items-end max-sm:flex-col gap-8">
          <div className="grid w-max gap-6">
            <Icons.sparkle className="h-16 w-16" />
            <p className="uppercase max-w-[128px]">
              Discover a place You'll love to live
            </p>
            <button className="bg-slate-950 rounded-full px-5 py-2 flex gap-2 items-center">
              All catalog <Icons.moveRight className="h-5 w-5" />
            </button>
          </div>
          <div className="p-3 rounded-3xl space-y-2 bg-gray-300">
            <h2 className="font-bold text-lg text-black ">Blaine Resdient</h2>
            <p className="text-gray-500 max-w-[200px]">
              Newtown, MA Real Estate& Homes For Sale
            </p>
            <button className="bg-slate-950 rounded-full px-5 py-2 flex gap-2 items-center">
              Learn More <Icons.moveRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PropertyListingSection() {
  const propertyCategories = ["Buy", "Rent", "Sold"];
  return (
    <section className="grid gap-8 max-w-[100vw] overflow-hidden">
      <div className="flex justify-center px-8">
        <h2 className="text-4xl font-semibold font-montserrat-alt text-center max-w-md">
          The #1 Site Real Estate Professional Trust
        </h2>
      </div>
      <div className="h-9 bg-slate-300 w-max flex rounded-full mx-auto">
        {propertyCategories.map((propertyCategory, index) => (
          <div
            key={index}
            className={cn(
              "h-full flex justify-center items-center rounded-full font-medium px-6 text-white",
              { "bg-blue-300": index === 0 }
            )}
          >
            {propertyCategory}
          </div>
        ))}
      </div>
      <div className="px-8">
        <div className="flex rounded-full overflow-hidden border w-max p-1 mx-auto">
          <input
            type="text"
            placeholder="Enter city or zip code"
            className="h-9 outline-none px-2 flex-1"
          />
          <button className="bg-slate-950 rounded-full px-5 text-white">
            Search
          </button>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="flex gap-8 lg:container overflow-x-scroll px-8 no-scrollbar">
          {homes.map((home, index) => (
            <div key={index} className="grid gap-4 lg:w-full">
              <div className="min-w-[256px] aspect-square rounded-3xl bg-slate-200"></div>
              <div className="flex gap-4 justify-between items-center">
                <h2 className="text-lg font-medium">{home.location}</h2>
                <p className="bg-gray-300 py-1 px-3 rounded-full text-sm font-medium">
                  ${home.price.toLocaleString()}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                  <Icons.bedDouble className="h-5 w-5 text-gray-500" />
                  <p className="text-sm">{home.numberOfBedrooms}bd</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Icons.bath className="h-5 w-5 text-gray-500" />
                  <p className="text-sm">{home.numberOfBathrooms}ba</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Icons.scaling className="h-5 w-5 text-gray-500" />
                  <p className="text-sm">{home.squareFootage}sqft</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="flex gap-2 items-center border px-5 py-1 rounded-full">
            View all <Icons.moveRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function FinancialGuidanceSection() {
  const financialGuidanceItems = [
    {
      title: "Find Out How Much You Can Afford",
      description:
        "We'll help you estimate your budget range. Save to your buyer profile to help in your search.",
    },
    {
      title: "Understand Your Monthly Costs",
      description:
        "Get an in-depth look at what your monthly and closing costs will look like based on your financial situations and goals.",
    },
    {
      title: "Get Help With Your Down Payment",
      description:
        "You make be able to buy a home with just 3.5% down. Saving for that can be chanllenging.",
    },
  ];
  return (
    <section className="container flex gap-8 justify-between max-md:flex-col">
      <h2 className="text-4xl font-semibold font-montserrat-alt max-w-md">
        Discover How We Can Help You
      </h2>
      <div className="grid gap-6">
        {financialGuidanceItems.map((item, index) => (
          <div key={index} className="border-b pb-6">
            <div className="flex gap-6">
              <div className="h-10 aspect-square rounded-full bg-black"></div>
              <div className="md:max-w-sm grid gap-2">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className=" text-gray-500">{item.description}</p>
              </div>
              <div className="flex items-end">
                <button className="flex gap-2 items-center border px-5 py-1 rounded-full">
                  <Icons.moveRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NewlyListedHomesSection() {
  return (
    <section className="container">
      <div className="bg-black rounded-3xl p-8 grid grid-cols-2 gap-8 max-sm:grid-cols-1">
        <div className="text-white grid gap-10">
          <div className="grid gap-4">
            <h2 className="text-5xl font-semibold font-montserrat-alt max-w-md">
              Newly Listed Homes{" "}
              <span className="text-gray-500">In Newton</span>
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, excepturi exercitationem. Minus laborum laboriosam
              obcaecati sapiente sint aliquid tempore saepe ullam assumenda
              tempora. Id velit nulla nihil ratione sunt cum.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex justify-between px-4 py-2 bg-zinc-900 rounded-full">
              <p>Agent Listing</p>
              <p className="text-gray-500">(2.981)</p>
            </div>
            <div className="flex justify-between px-4 py-2 bg-zinc-900 rounded-full">
              <p>Others</p>
              <p className="text-gray-500">(678)</p>
            </div>
            <div className="flex justify-between px-4 py-2 bg-zinc-900 rounded-full">
              <p>Home Loan</p>
              <p className="text-gray-500">(Under $100,000)</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-500 rounded-3xl flex items-end justify-end p-8">
          <div className="w-48 aspect-square bg-gray-400 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
}

function RealEstateMetricsSection() {
  const realEstateMetrics = [
    { key: "Homes For Rent", value: "7239" },
    { key: "State", value: "79+" },
    { key: "Homes To Buy", value: "1079" },
    { key: "Agents", value: "219+" },
  ];
  return (
    <section className="container">
      <div className="flex gap-8 justify-between border-t-2 border-b-2 py-8 flex-wrap">
        {realEstateMetrics.map((item, index) => (
          <div key={index} className="grid gap-2">
            <p className="text-lg font-light">{item.key}:</p>
            <p className="font-bold text-5xl">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeLoanSection() {
  return (
    <section className="container">
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="bg-gray-200 rounded-full min-h-[256px]"></div>
        <div className="grid gap-8">
          <Icons.sparkle className="h-16 w-16" />
          <h2 className="text-5xl font-semibold font-montserrat-alt">
            Need A Home Loan?
          </h2>
          <div className="flex gap-4">
            <div className="rounded-3xl p-4 bg-gray-200 grid gap-2 w-full sm:max-w-[200px]">
              <h3 className="text-lg font-medium">Get Free-Approved Now</h3>
              <div>
                <button className="flex gap-2 items-center border border-black px-5 py-1 rounded-full">
                  <Icons.moveRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="rounded-3xl p-4 bg-gray-200 grid gap-2 w-full sm:max-w-[200px]">
              <h3 className="text-lg font-medium">Advertisting Disclosure</h3>
              <div>
                <button className="flex gap-2 items-center border border-black px-5 py-1 rounded-full">
                  <Icons.moveRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Merriweather } from "next/font/google";
import UserProfile from "./components/One/UserProfile";

const merri = Merriweather({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-merri",
});

export default function Home() {
  return (
    <main className={`${merri.variable}`}>
      <div className="flex h-screen w-full items-center justify-center bg-blue-100">
        <UserProfile />
      </div>
    </main>
  );
}

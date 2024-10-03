import Card from "@/childComponents/Card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/utils/authOption";
import Sidebar from "@/childComponents/Sidebar";

const page = async () => {
  const { session } = await getServerSession(authOptions);
  console.log("he", session);

  // {
  //   if (!session) redirect("/login");
  // }

  return (
    <div className="w-full flex flex-row min-h-screen">
      <Sidebar />
      <div className="w-full bg-[#F5F5F7]">
        <div className="w-full bg-white p-5"> </div>
        <div className="w-full flex gap-10">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default page;

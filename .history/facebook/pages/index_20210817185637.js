import { getSession } from "next-auth/client";
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from "../components/Sidebar";
import SidebarRow from "../components/SidebarRow";
import Stories from "../components/Stories";
import StoryCard from "../components/StoryCard";
import Feed from "../components/Feed";

export default function Home({session}) {
  if(!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      {/*Header*/}
      <Header />

      <main className="flex">
         <Sidebar/>
         <Feed />
         {/*Widgets*/}  
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  // Get the user
  const session = await getSession(context);

  return{
    props:{
      session
    }
  }
};

import { appwriteConfig } from '@/appwrite/config'
import Feed from './components/Feed';
import MainLayout from './layouts/MainLayout';

export default async function Home() {
  const tweets = await appwriteConfig();
  // console.log(tweets);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <>
    <MainLayout>
      {/* <h2>Tweets</h2>
      {tweets.documents.map(tweet => (
          <div key={tweet.$id}>
            <h3>{tweet.text}</h3>
            <p>{tweet.createdAt}</p>
          </div>
        )
        )} */}
        <Feed tweets={tweets.documents}/>
    </MainLayout>
    // </>
    // </main>
  )
}

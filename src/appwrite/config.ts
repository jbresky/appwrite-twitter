import conf from '@/conf/config';
import { Client, Databases} from 'appwrite';

const client = new Client();

client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export default client;


// type CreateUserAccount = {
//     email: string,
//     password: string,
//     name: string
// }

// type LoginUserAccount = {
//     email: string,
//     password: string,
// }

// const account = new Account(client);

export async function appwriteConfig() {
    
    const databases = new Databases(client);

    const tweets = await databases.listDocuments(
        conf.databaseId,
        conf.collectionId
    );

    return tweets
}

// export async function createUser({email, password, name}: CreateUserAccount) {

//     client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

//     const response = await account.create(
//        ID.unique(), email, password, name
//     )
        
//     console.log(response);
// }

// export async function login({ email, password }: LoginUserAccount){
//     try {
//         return await account.createEmailSession(email, password)
//     } catch (error) {
//         console.log(error);
//     }
// }
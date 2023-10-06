import conf from '@/conf/config';
import sdk  from 'node-appwrite';

const client = new sdk.Client();
export const users = new sdk.Users(client);

client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId).setKey(conf.publicKey)

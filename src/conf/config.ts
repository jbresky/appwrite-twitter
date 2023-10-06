const conf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    databaseId: String(process.env.NEXT_PUBLIC_DATABASE),
    collectionId: String(process.env.NEXT_PUBLIC_TWEETS_COLLECTION),
    publicKey: String(process.env.NEXT_PUBLIC_APPWRITE_KEY)
}

export default conf;
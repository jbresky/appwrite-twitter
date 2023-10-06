import client from "@/appwrite/config";
import { Account, Models } from "appwrite";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FETCH_STATUS } from "../utils/constants";

const useUser = () => {
    const account = new Account(client);
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)
    const [accountStatus, setAccountStatus] = useState(
        FETCH_STATUS.LOADING
    )
    const router = useRouter()

    const getSession = async () => {
        setAccountStatus(FETCH_STATUS.LOADING) // ?

        const promise = account.get()
        let currentAccount = null

        try {
            currentAccount = await promise;
            setAccountStatus(FETCH_STATUS.SUCCESS)
        } catch (error: any) {
            console.log(error);
            setAccountStatus(FETCH_STATUS.FAIL)
        } finally {
            setUser(currentAccount)
        }
    }

    const logout = async () => {
        const promise = await account.deleteSession('current')
        setUser(null)
        router.push('/auth/signin');
    }

    useEffect(() => {
        getSession()
    }, []);

    return {
        user,
        isLoadingAccount: accountStatus === FETCH_STATUS.LOADING,
        logout
    }
}

export default useUser;
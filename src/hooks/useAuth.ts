import { useState, useEffect } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";

type UseAuth = {
    user: User | null;
    loading: boolean;

}

const useAuth = (): UseAuth => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    return { user, loading };
}

export default useAuth;

import auth from "./firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, signOut } from "firebase/auth"  

/**
 * サインアップ処理
 * @param email ユーザーのメールアドレス
 * @param password ユーザーのパスワード
 * @returns UserCredential
 */
export const signUp = async (email: string, password: string): Promise<UserCredential> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            throw new Error("このメールアドレスは既に登録されています。");
        }
        throw error;
    }
}

/**
 * ログイン処理
 * @param email ユーザーのメールアドレス
 * @param password ユーザーのパスワード
 * @returns UserCredential
 */
export const signIn = async (email: string, password: string): Promise<UserCredential> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw error;
    }
}

/**
 * サインアウト処理
 * @returns void
 */
export const signOutUser = async (): Promise<void> => {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
}
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth"  

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

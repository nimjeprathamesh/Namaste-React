import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCx8D6nlmzyp90U2_dWtvGmvRgK1-PCBdc",
    authDomain: "netflixgpt-6e79e.firebaseapp.com",
    projectId: "netflixgpt-6e79e",
    storageBucket: "netflixgpt-6e79e.appspot.com",
    messagingSenderId: "924064642116",
    appId: "1:924064642116:web:e549f45cbec1d1cd20f811"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
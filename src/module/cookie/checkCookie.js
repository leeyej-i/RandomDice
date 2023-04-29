import { getCookie } from "./cookies";

export const checkCookie = () => {
    if (getCookie("token") === undefined) {
        console.log("토큰 없음")
        return false;
    }
    else return true;
}
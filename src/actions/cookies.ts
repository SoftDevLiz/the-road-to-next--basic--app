"use server";

import { cookies } from "next/headers";

// get, set, delete cookies

export const setCookieByKey = async (key: string, value: string) => {
    (await cookies()).set(key, value);
};

export const getCookieByKey = async (key: string) => {
    const uniqueCookie = (await cookies()).get(key);

    if (!uniqueCookie){
        return null;
    }

    return uniqueCookie.value
}

export const deleteCookieByKey = async (key: string) => {
    (await cookies()).delete(key);
}
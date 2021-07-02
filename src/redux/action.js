import { AUTH_USER, INIT_USER } from "./types";

export function createUser(user) {
    return {
        type: AUTH_USER,
        payload: user
    }
}

export function initUser() {
    return {
        type: INIT_USER,
        payload: null,
    }
}
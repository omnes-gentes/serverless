import {userHandler} from "./users.mjs";

export const handler = async (event) => {
    console.info('received:', event);
    if ("/users" === event.path) {
        return userHandler(event)
    }
    return {statusCode: 404, body: "Not Found"}
}
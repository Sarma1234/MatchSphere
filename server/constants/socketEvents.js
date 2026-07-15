const SOCKET_EVENTS = Object.freeze({
    CONNECTION: "connection",
    DISCONNECT: "disconnect",

    SEND_MESSAGE: "send_message",
    RECEIVE_MESSAGE: "receive_message",

    USER_ONLINE: "user_online",
    USER_OFFLINE: "user_offline",

    TYPING: "typing",
    STOP_TYPING: "stop_typing",

    NOTIFICATION: "notification",
});

module.exports = SOCKET_EVENTS;
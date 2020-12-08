import n from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
    idAttribute: 'guid',
});
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

export const normalizedNotifications = normalize(n, new schema.Array(notification))

export function getAllNotificationsByUser(userId) {
    const entries = n.filter((x) => x.author && x.author.id === userId);
    const contexts = entries.map((x) => x.context);
    return contexts;
}


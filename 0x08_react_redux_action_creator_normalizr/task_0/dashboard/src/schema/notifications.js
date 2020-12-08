import n from '../../../../notifications.json';

function getAllNotificationsByUser(userId) {
    const entries = n.filter((x) => x.author && x.author.id === userId);
    const contexts = entries.map((x) => x.context);
    return contexts;
}

export default getAllNotificationsByUser;

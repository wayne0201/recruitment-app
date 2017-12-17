export function getRedirectPath({ type, avatar}) {
    //根据用户信息，返回跳转页面
    //user.type /boss /genius
    //user.avatar /bossinfo /geniusinfo
    let url = (type === 'boss') ? '/boss' : '/genius';
    if (!avatar) {
        url += 'info';
    }
    return url;
}


export function randomKey() {
    return Math.random().toString(36).substring(2);
}

export function getChatId(userId, targetId){
    return [userId, targetId].sort().join('_');
}
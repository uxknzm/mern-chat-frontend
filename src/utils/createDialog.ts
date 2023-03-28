function sortFunction(a: any, b: any){  
    var dateA = new Date(a.createdAt).getTime();
    var dateB = new Date(b.createdAt).getTime();
    return dateA < dateB ? 1 : -1;  
}; 

const createDialog = (arrayUsers: any, arrayMessages: any, senderId: any) => {
    const result = arrayUsers.map((user: any) => {
        const messages = arrayMessages.filter((message: any) => (message.sender === user._id || message.recipient === user._id) && (message.sender === senderId || message.recipient === senderId));
        const message = messages[messages.length - 1];
        return {
            _id: user?._id,
            username: user?.username,
            lastMessage: message?.text,
            createdAt: message?.createdAt
        };
    })
    return result.sort(sortFunction);
};

export default createDialog;
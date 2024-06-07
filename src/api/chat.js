import { apiUrl } from './config';

const getChats = async () => {

    const token = localStorage.getItem('accessToken');

    try {
        const response = await fetch(apiUrl+'/chats/get', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });

        const responseData = await response.json();

        if (response.ok) {
            return responseData;
        } else {
            throw new Error(responseData.errors);
        }
    } catch (error) {
        throw new Error(error);
    }
};

const createChat = async (title, selectedMessagingService) => {
    
    const variables = {
        title: title,
        messaging_service: selectedMessagingService
    };

    const token = localStorage.getItem('accessToken');

    try {
        const response = await fetch(apiUrl+'/chats/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(variables)
        });

        const responseData = await response.json();

        if (response.ok) {
            return responseData;
        } else {
            throw new Error(responseData.errors);
        }
    } catch (error) {
        throw new Error(error);
    }
};

const deleteChat = async (chatId) => {

    const token = localStorage.getItem('accessToken');

    try {
        const response = await fetch(apiUrl+'/chats/delete/'+chatId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });

        const responseData = await response.json();

        if (response.ok) {
            return responseData;
        } else {
            throw new Error(responseData.errors);
        }
    } catch (error) {
        throw new Error(error);
    }
};

export { getChats, createChat, deleteChat };

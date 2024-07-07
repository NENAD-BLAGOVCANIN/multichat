import { apiUrl } from './config';
import useFetch from '../hooks/useFetch';

export const useGetChats = () => {
    const { data: chats, setData: setChats, isLoading, error } = useFetch(apiUrl + '/chats/get');
    return { chats, setChats, isLoading, error };
};

export const useCreateChat = (chat) => {
    const { data, setData, isLoading, error } = useFetch(apiUrl + '/chats/create', {
        method: 'POST',
        body: chat,
    });
    return { data, setData, isLoading, error };
};

const createChat = async (title, selectedMessagingService) => {

    const variables = {
        title: title,
        messaging_service: selectedMessagingService
    };

    const token = localStorage.getItem('accessToken');

    try {
        const response = await fetch(apiUrl + '/chats/create', {
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
            if (response.status === 403) {
                throw new Error('You have reached the maximum number of tabs allowed.');
            } else {
                throw new Error(responseData.errors);
            }
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateChat = async (chat_id, title, isAudioEnabled, isMessageEnabled) => {

    const variables = {
        title: title,
        audio_notifications: isAudioEnabled,
        notifications: isMessageEnabled
    };

    const token = localStorage.getItem('accessToken');

    try {
        const response = await fetch(apiUrl + '/chat/' + chat_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(variables)
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.detail || 'Action failed');
        }

        return responseData;
    } catch (error) {
        throw new Error(error);
    }
};

const deleteChat = async (chatId) => {

    const token = localStorage.getItem('accessToken');

    try {
        const response = await fetch(apiUrl + '/chats/delete/' + chatId, {
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

export { createChat, updateChat, deleteChat };

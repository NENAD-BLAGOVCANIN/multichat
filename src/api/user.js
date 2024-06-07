import { apiUrl } from './config';

const getUserInfo = async () => {

    const token = localStorage.getItem('accessToken');

    try {
        const response = await fetch(apiUrl+'/users/get-my-info', {
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

export { getUserInfo };

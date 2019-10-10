export const login = ( user, type ) => {
    return $.ajax({
        method: 'POST',
        url: `/api/session/${type}`,
        data: { user }
    })
};


export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
};

// ONLY FOR USERS 
export const signup = ( user ) => { 
    return $.ajax({
        method: 'POST',
        url: `/api/users`,
        data: { user }
    })
};
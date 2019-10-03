export const login = ( user, type ) => (
    $.ajax({
        method: 'POST',
        url: `/api/session/${type}`,
        data: { user }
    })
);


export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
};

// ONLY FOR USERS 
export const signup = ( user ) => (
    $.ajax({
        method: 'POST',
        url: `/api/users`,
        data: { user }
    })
);
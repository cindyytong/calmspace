export const login = (user, type) => (
    $.ajax({
        method: 'POST',
        url: `/api/session/${type}`,
        data: { user }
    })
);


export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: `/api/session/${user.type}`
    })
);

// ONLY FOR USERS 
export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);
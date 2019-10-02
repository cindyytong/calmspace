export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users/session',
        data: { user }
    })
);

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/users/session'
    })
);
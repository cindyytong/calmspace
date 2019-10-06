export const fetchUser = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
};

export const updateUser = user => {
    return $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        data: { user } 
    })
}

export const fetchMatches = user => {
    debugger
    return $.ajax({
        method: 'GET',
        url: '/api/get_matches',
        data: { user }
    })
}
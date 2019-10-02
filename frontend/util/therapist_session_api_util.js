export const login = therapist => (
    $.ajax({
        method: 'POST',
        url: '/api/therapists/session',
        data: { therapist }
    })
);


export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/therapists/session'
    })
);
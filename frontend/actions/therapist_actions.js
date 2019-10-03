export const getTherapists = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/therapists'
    })
};

export const getTherapist = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/therapists/${id}`
    })
};
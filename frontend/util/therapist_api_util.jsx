export const fetchTherapist = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/therapists/${id}`
    })
};
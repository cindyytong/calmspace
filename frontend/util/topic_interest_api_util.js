export const createTopicInterest = ( userId, topicId, userType ) => { 
    return $.ajax({
        method: 'POST',
        url: `/api/topic_interests`,
        data: { 
            userable_id,
            topic_id,
            userable_type
         }
    })
};

export const fetchTopicInterest = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/topic_interests/${id}`
    })
}
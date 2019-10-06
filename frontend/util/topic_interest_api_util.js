export const createTopicInterest = ( userId, topicId, userType = "User" ) => { 
    return $.ajax({
        method: 'POST',
        url: '/api/topic_interests',
        data: { 
            userable_id: userId,
            topic_id: topicId,
            userable_type: userType
         }
    })
};

export const fetchTopicInterest = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/topic_interests/${id}`
    })
}



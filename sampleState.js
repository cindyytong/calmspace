// currentUser can be therapist or patient 

state = {
    entities: {
        users: {  // save match_ids in backend so we don't fetch again 
            1: {current_therapist_id: 1, therapist_match_ids: [1,2,3], topic_interests_ids: [1,2,3]},
        }, 
        therapist: { // store selected therapist and therapist matches here
            1: {id: 1, .....}, // find current therapist by user.current_therapist_id
            2: {id: 2, .....},
            3: {id: 3, .....}
        }, // update id to point to object
        topics: {  // fetch all topics and their ids 
            1: 'depression', 
            2: 'anxiety'
        },
        chatrooms: { // user has 1, therapist has many; find currentChatroom by looking for ID in session
            1: {},
            2: {},
            3: {}
        },
        messages: {}, // load for one chatroom
        notes: {}, // only therapists have, leave as empty for user  
        
        
    },

    // use session to display info for either patient or therapist 
    session: {
        currentUserId: 62 // look up class to determine where to search  
        memberType: 'User or Therapist',
        currentChatroomId: 1 // use  
    }
}
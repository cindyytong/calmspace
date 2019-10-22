// currentUser can be therapist or patient 

state = {
    entities: {
        chatrooms: {}, // patient: only 1, therapist: multiple 
        matches: {}, // only for patients, three therapists 
        messages: {}, // tied to specific chatroom; load on RECEIVE_CURRENT_CHATROOM 
        notes: {}, // only therapists have, leave as empty for user  
        topicInterests: {
            userInterests: {},
            therapistInterests: {}
        } // relates to currentUsers topic interests?  Where do I store the therapists/ patients 
        topics: {},
        therapist: {}, // update id to point to object 
        users: {}
    },
    errors : {

    },
    // use session to display info for either patient or therapist 
    session: {
        currentUserId: 62 // look up class to determine where to search  
        memberType: 'User or Therapist'
    }
}
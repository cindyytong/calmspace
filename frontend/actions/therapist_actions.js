import * as TherapistApiUtil from '../util/therapist_api_util';

export const RECEIVE_THERAPIST = 'RECEIVE_THERAPIST';

const receiveTherapist = therapist => {
    return {
        type: RECEIVE_THERAPIST, 
        therapist 
    }
};

export const fetchTherapist = id => dispatch => {
    return TherapistApiUtil.fetchTherapist(id)
        .then(therapist => dispatch(receiveTherapist(therapist)))
};


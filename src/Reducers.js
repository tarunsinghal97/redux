const initialState = {
    index : 0,
    comments : {
        id : 0,
        comment : [[],[],[]]
    }
}
const commentReducer =  (state = initialState, action) => {
    if(action.type === 'INCREMENT' || action.type === 'DECREMENT') return {...state,index : action.index};
    if(action.type === 'ADD_COMMENT') {
        let comment = state.comments['comment'];
        comment[state.index] = [...comment[state.index],{comment : action.comment, reply : []}]
        return {...state, comments : {id : action.id,comment}};
    }
    if(action.type === 'ADD_REPLY') {
        let comment = state.comments['comment'];
        console.log(comment[state.index]);
        comment[state.index][action.depth] = {comment : comment[state.index][action.depth].comment, reply :  [...comment[state.index][action.depth].reply,{reply : action.reply, replyToreply : []}] }
        return {...state, comments : {id : action.id,comment}};
    }
    if(action.type === 'ADD_REPLY_TO_REPLY') {
        let comment = state.comments['comment'];
        let reply = comment[state.index][action.depth].reply;
        reply[action.count].replyToreply = [...comment[state.index][action.depth].reply[action.count].replyToreply, action.reply]
        return {...state, comments : {id : action.id,comment : comment}};
    }
    if(action.type === 'DELETE_COMMENT') {
        let comment = state.comments['comment'];
        comment[state.index].splice(action.depth,1);
        return {...state, comments : {id : action.id,comment : comment}};
    }
    if(action.type === 'DELETE_REPLY') {
        let comment = state.comments['comment'];
        let reply = comment[state.index][action.depth].reply;
        reply.splice(action.count,1);
        return {...state, comments : {id : action.id,comment : comment}};
    }
    if(action.type === 'DELETE_REPLY_TO_REPLY') {
        let comment = state.comments['comment'];
        let reply = comment[state.index][action.depth].reply;
        reply[action.count].replyToreply.splice(action.replyDepth,1)
        return {...state, comments : {id : action.id,comment : comment}};
    }
    return state;
}

export default commentReducer;

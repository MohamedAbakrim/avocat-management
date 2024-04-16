// import * as api from './../api';

// export const getBarreaux = ()=> (dispatch)=>{
//     try{
//         console.log('test');
//         // dispatch({type:'START_LOADING'})
//         // const {data} =  await api.fetchPosts();
//         return {type:'FETCH_ALL'}
//         // dispatch({type:'FETCH_ALL', payload:data})
//         // dispatch({type:'END_LOADING'})
//     }catch(err){
//         console.log(err)
//     }
// }

// export const createBarreau = (barreau)=> async (dispatch)=>{
//     try{
//         // dispatch({type:'START_LOADING'})
//         // const {data} =  await api.createPost(barreau);
//         dispatch({type:'CREATE', payload:barreau})
//         // dispatch({type:'END_LOADING'})
//     }catch(err){
//         console.log(err)
//     }
// }

// export const updateBarreau = (id, barreau) => async (dispatch)=>{
//     try{
//         // const {data} = await api.updatePost(id, post);
//         dispatch({type:'UPDATE', payload:barreau});
//     }catch(err){
//         console.log(err);
//     }
// }
export const updateBarreau = (barreau)=>{
    try{
        return{type:'UPDATE', payload:barreau};
    }catch(err){
        console.log(err);
    }
}

// export const deleteBarreau = (id)=> async(dispatch)=>{
//     try{
//         // await api.deletePost(id);
//         dispatch({type:'DELETE', payload:id})
//     }catch(err){
//         console.log(err);
//     }
// }

export const deleteBarreau = (id)=>{
    try{
        // await api.deletePost(id);
        return {type:'DELETE', payload:id}
    }catch(err){
        console.log(err);
    }
}

// export const getBarreauById = (searchQuery) => async(dispatch)=>{
//     try{
//         // dispatch({type:'START_LOADING'})
//         // const {data} = await api.fetchPostsBySearch(searchQuery);
//         dispatch({type:'FETCH_BY_SEARCH', payload:searchQuery})
//         // dispatch({type:'END_LOADING'})
//     }catch(err){
//         console.log(err);
//     }
// }
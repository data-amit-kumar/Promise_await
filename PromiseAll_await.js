const posts=[{title:'First'},{title:'Second'},{title:'Third'}];

function updateLastUserActivityTime(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const lastActivityTime= new Date().toISOString();
            res(lastActivityTime);
        },1000)
    })
}

function createPost(post){
    return new Promise((res, rej)=>{
        updateLastUserActivityTime()
        .then((lastActivityTime)=>{
            posts.push(post);
            console.log('Last Time: ', lastActivityTime);
            console.log("posts: ",posts);
            res();
        })
        
    })
}

function deletePost(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(posts.length===0){
                rej('No post to delete');
            }
            else{
                const del=posts.pop();
                console.log('Deletedpost: ', del);
                console.log('Remaining posts: ',posts);
                res(del);
            }
        },1000)
    })
}
async function h() {
    try {
        await Promise.all([createPost({ title: 'Fourth' }), updateLastUserActivityTime()]);
        await Promise.all([createPost({ title: 'Fifth' }), updateLastUserActivityTime()]);
        await deletePost();
       
    } catch (error) {
        console.error('Error:', error);
    }
}


h();
const self = this;

self.searchEmail = (dataArr,string) =>{
    return dataArr.filter(item => item.email.includes(string))
};

self.checkFriendStatus =(userObj,targetId) => {
    // const target = JSON.stringify(targetId);
    if (userObj.reqPending.find(item => item.userId == targetId)){
        return 'reqPending'
    }
    else if (userObj.resPending.find(item => item.userId == targetId)){
        return 'resPending'
    }
    else if (userObj.friends.find(item => item.userId == targetId)){
        return 'friend'
    }
    else return 'noStatus'
}

self.userDataFilter = (userData) => {
    let result ={};
    result.email = userData.email;
    result.firstName = userData.firstName;
    result.lastName = userData.lastName;
    result.avatar = userData.userData.avatar;
    result.reqPending = userData.reqPending;
    result.friends = userData.friends;
    result.resPending = userData.resPending;
    result._id = userData._id;
    result.following = userData.following;
    return result;
}

self.basicUserDatafilter = (userData) => {
    let result ={};
    result.email = userData.email;
    result.avatar = userData.userData.avatar;
    result.cover = userData.userData.cover;
    result.firstName = userData.firstName;
    result.lastName = userData.lastName;

    return result;
}

self.getPhotoFromPost = (posts) => {
    let photos=[];
    for (post of posts){
        if (post.img !== ''){
            photos.push({
                img: post.img,
                _id:post._id
            })
        }
    }
    return photos;
}

self.suggestFriendFilter = (reqUserId,userFriend,usersData) => {
    let userList =[];
    let suggetFriend=[];
    for (let user of usersData){
        userList.push({
            userId: user._id
        })
    }
    for ( user of userList){
        if (userFriend.every(friend=> 
            JSON.parse(JSON.stringify(friend.userId)) !== JSON.parse(JSON.stringify(user.userId)))
            ){
                suggetFriend.push({
                    userId: user.userId
                })
        }
    }
    suggetFriend.splice(suggetFriend.indexOf(reqUserId),1);
    return suggetFriend;
}

// self.userPagination = (size=10,page=1) => {
//     let size = size
//     let page = page;
    
// };

// self.postPagination = (size,page) => {
//     let size,page;
//     if(size){

//     }
// };

module.exports = self;

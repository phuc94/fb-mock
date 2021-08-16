const self = this;

self.searchEmail = (dataArr,string) =>{
    return dataArr.filter(item => item.email.includes(string))
};

self.checkFriendStatus =(userObj,targetId) => {
    const target = JSON.stringify(targetId);
    console.log("***************************");
    console.log(targetId);
    console.log(userObj);
    if (userObj.reqPending.find(item => item == targetId)){
        return 'reqPending'
    }
    else if (userObj.resPending.find(item => item == targetId)){
        return 'resPending'
    }
    else if (userObj.friends.find(item => item == targetId)){
        return 'friend'
    }
    else return 'noStatus'
}

self.userDataFilter = (userData) => {
    let result ={};
    result.email = userData.email;
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

module.exports = self;

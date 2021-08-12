const searchEmail = (dataArr,string) =>{
    return dataArr.filter(item => item.email.includes(string))
};
const checkFriendStatus =(userObj,targetId) => {
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

const userDataFilter = (userData) => {
    let result ={};
    result.email = userData.email;
    result.reqPending = userData.reqPending;
    result.friends = userData.friends;
    result.resPending = userData.resPending;
    result._id = userData._id;
    result.following = userData.following;
    return result;
}

module.exports = {searchEmail, checkFriendStatus, userDataFilter};

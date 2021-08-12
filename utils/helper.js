export const userSearchConvert = (userArr) => {
    const result=[];
    for (let i of userArr) {
        let newUser = {
            email: i.email,
            id: i._id
        }
        result.push(newUser)
    }
    return result;
};
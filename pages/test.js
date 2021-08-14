import axios from 'axios'; 
import { useState } from 'react';
import * as userService from '../services/user'

const Test =()=>{
    const [img,setImg]= useState();
    const [user,setUser]= useState();
    const logout = ()=>{
        return axios('/logout').then((res)=>{console.log(res)});
    };
    const findUser = ()=>{
        return axios('/SearchUser',{
            method:"post",
            data:{
                user:user
            }
        }).then((res)=>{console.log(res)});
    };
    const addfriend = () => {
        return axios('/AddFriend',{
            method:"post",
            data:{
                targetId:'610bdffe645b5928483616eb'
            }
        }).then((res)=>{console.log(res)});
    };
    const userpost = () => {
        return axios('/UserPost',{
            params:{
                userID:'610bdcf66660373a50e88396'
            }
        }).then((res)=>{console.log(res)});
    };
    const checkowner = () => {
        return axios('/testRoute2',{
            params:{
                id: '611619dd14c96f46f05c8712'
            }
        }).then((res)=>{console.log(res)});
        
    };
    const handleImgUpload = ()=>{
        const options ={
    
        }
        return axios('./single-blog' ).then((res)=>{console.log(res)});
    }
    const onpenImg = ()=>{
        return axios('./single-blog' ).then((res)=>{
            console.log(res)
            setImg(res.data.img);
        });
    }
    const encodeImageFileAsURL= (element) => {
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
          console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(file);
      }
      const submitHandler = (e)=> {
        e.preventDefault();
    }
    return (
        <div className="w-full  ">
            <div className="mx-auto border max-w-xs top">
                <form className="bg-white p-6" onSubmit={submitHandler}>
                    <div className="mb-6">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="border ml-6 "/>
                    </div>
                    <div className="flex flex-row">
                        <label htmlFor="img" >IMG</label>
                        <input onChange={()=>{encodeImageFileAsURL}}
                            type="file" className="filepond ml-6" name="img" id="img"/>
                    </div>
                    <button type="submit">Upload</button>
                </form>
                <button onClick={logout} className="border border-2 p-2 bg-red-200">
                    Logout
                </button>
                <div>
                    <input type="text" onChange={e=>{setUser(e.target.value)}}/>
                    <button onClick={findUser} className="border border-2 p-2 bg-red-200">
                        Find User
                    </button>
                </div>
                <div>
                    <button onClick={addfriend} className="border border-2 p-2 bg-red-200">
                        Add friend
                    </button>
                </div>
                <div>
                    <button onClick={userpost} className="border border-2 p-2 bg-red-200">
                        UserPost
                    </button>
                </div>
                <div>
                    <button onClick={checkowner} className="border border-2 p-2 bg-red-200">
                        TestRoute
                    </button>
                </div>
            </div>
            <div>
                <button onClick={onpenImg}>Img</button>
                <img src={img} alt="adfa" />
            </div>
        </div>
    )
}
export default Test;
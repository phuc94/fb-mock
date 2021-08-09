import axios from 'axios'; 
import { useState } from 'react';

const Test =()=>{
    const [img,setImg]= useState();
    const logout = ()=>{
        return axios('/logout').then((res)=>{console.log(res)});
    }
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
            </div>
            <div>
                <button onClick={onpenImg}>Img</button>
                <img src={img} alt="adfa" />
            </div>
        </div>
    )
}
export default Test;
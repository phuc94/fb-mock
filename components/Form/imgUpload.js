import Image from 'next/image'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import * as userService from '../../services/user'
import * as postServices from '../../services/post'
import { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';

const ImgUploadModal = (props) => {
    const [userImgData, setUserImgData] = useState([]);
    const [uploadedImg, setUploadedImg] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [cookie,setCookie] = useCookies(['user'])
    useEffect(()=>{
        userService.getUserPhotos(cookie.user)
        .then(res=>{
            console.log(res.data);
            setUserImgData(res.data);
        })
    },[])

    return (
        <div className="fixed w-screen h-screen flex justify-center items-center md:no-scrollbar
            bg-gray-900 bg-opacity-70 top-0 z-30 text-gray-100 font-medium ">
            {!isUploading ?
                (<PhotosViewer setIsImgUploadShow={props.setIsImgUploadShow} setIsUploading={setIsUploading} setUploadedImg={setUploadedImg}/>)
                :
                (<PhotoUploadForm setIsUploading={setIsUploading} setIsImgUploadShow={props.setIsImgUploadShow} 
                    uploadedImg={uploadedImg} fetchUserData={props.fetchUserData}/>)
            }
        </div>
    )
};
export default ImgUploadModal;

/**** UPLOAD FORM ****/
const PhotoUploadForm = (props) =>{
    const [content,setContent] = useState(null);
    const handleSubmit = () =>{
        let data ={};
        data.content = content;
        data.img=props.uploadedImg;
        userService.UserUploadAvatar(data)
            .then(res=>{if(res.status==200){
                props.fetchUserData();
                props.setIsImgUploadShow(false);
                props.setIsUploading(false);
                document.body.classList.remove('overflow-hidden');
            }});
    }
    
    return(
        <div className="w-[670px] h-[600px] bg-gray-800 flex flex-col rounded-xl overflow-y-auto border-[1px] border-gray-700">
            <div className="py-3 text-center flex justify-between items-center
                border-b-[1px] border-gray-700">
                <div className="w-[35px] h-[35px] ml-3"></div>
                    <p className="text-lg">Update your Avatar</p>
                <div onClick={()=>{props.setIsUploading(false)}}
                    className="w-[35px] h-[35px] bg-gray-700 flex justify-center items-center 
                    rounded-full cursor-pointer hover:bg-gray-600 mr-3">
                    <CloseRoundedIcon />
                </div>
            </div>
            <div className="max-h-[480px] overflow-y-scroll">
                <div className="h-full flex flex-col justify-between">
                    <div className="w-full py-3 px-6">
                            <textarea onChange={(e)=>{setContent(e.target.value)}}
                                className="w-full bg-gray-600 p-3 rounded-xl border-[1px] border-gray-700"
                                type="textarea" rows="4" placeholder="Description" name="content"/>
                    </div>
                    <div className="flex-grow flex justify-center items-center">
                        <div className="relative w-full rounded overflow-hidden">
                            <img className='w-full h-auto' 
                                src={props.uploadedImg == '' ? 'https://via.placeholder.com/150' : props.uploadedImg}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div></div>
                <div className="flex gap-3 pr-3 pt-[10px]">
                    <button onClick={()=>{props.setIsUploading(false)}}
                        className="py-2 px-2 rounded-lg hover:bg-gray-600"
                        >Cancle
                    </button>
                    <button onClick={handleSubmit}
                        className="py-2 px-6 rounded-lg bg-blue-500 hover:brightness-110"
                        >Upload
                    </button>
                </div>
            </div>
        </div>
    )
};

/**** PHOTOS VIEWER ****/
const PhotosViewer = (props) =>{
    const fileInput = useRef(null);
    const encodeImageFileAsURL= (element) => {
        let file = element.target.files[0];
        let reader = new FileReader();
        reader.addEventListener("load", function () {
            // convert image file to base64 string
            props.setUploadedImg(reader.result);
        }, false);
        
        if (file) {
            reader.readAsDataURL(file);
        }
        props.setIsUploading(true);
    }
    return (
        <div className="w-[670px] h-[680px] bg-gray-800 rounded-xl overflow-y-auto border-[1px] border-gray-700">
                <div className="py-2 text-center flex justify-between items-center">
                    <div className="w-[35px] h-[35px] ml-3"></div>
                    <p className="text-lg">Update your Avatar</p>
                    <div onClick={()=>{props.setIsImgUploadShow(false);document.body.classList.remove('overflow-hidden')}}
                        className="w-[35px] h-[35px] bg-gray-700 flex justify-center items-center 
                        rounded-full cursor-pointer hover:bg-gray-600 mr-3">
                        <CloseRoundedIcon />
                    </div>
                </div>
                <div className=" border-[1px] border-gray-700 px-3">
                    <div onClick={()=>{fileInput.current.click()}}
                        className="w-full py-2 bg-gray-700 rounded-xl my-2 text-center
                        hover:bg-gray-600 cursor-pointer duration-300">
                            <p>Add a new Photo</p>
                            <input onChange={encodeImageFileAsURL}
                                className="hidden" type='file' ref={fileInput}/>
                    </div>
                </div>
                <div>
                    <div className="px-3 w-full ">
                        <div className="py-3 pl-3">
                            <p>Uploaded Photos</p>
                        </div>
                        <div className="flex flex-wrap gap-3 mx-auto">
                            {a.map(item=>
                                (
                                    <div className="relative w-[94px] h-[94px] hover:brightness-110 cursor-pointer">
                                        <Image className='object-contain w-full h-full' layout='fill' src='https://via.placeholder.com/150'/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* <div className="px-3">
                        <div  className="py-3 pl-3">
                            <p>Photos that include you</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {a.map(item=>
                                (
                                    <div className="relative w-[100px] h-[100px] hover:brightness-110 cursor-pointer">
                                        <Image className='object-contain w-full h-full' layout='fill' src='https://via.placeholder.com/150'/>
                                    </div>
                                ))
                            }
                        </div>
                    </div> */}
                </div>
            </div>
    )
};

const a = [1,2,3,4,5,6,7,8,9,10,11,12,13];

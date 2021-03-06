import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Image from 'next/image'
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import { useRef, useState } from 'react';
import * as postServices from '../../services/post';

const StatusForm = (props)=>{
    const imgBtn = useRef(null);
    const [img,setImg] = useState('');
    const [content,setContent] = useState('');
    const encodeImageFileAsURL= (element) => {
        let file = element.target.files[0];
        let reader = new FileReader();
        reader.addEventListener("load", function () {
            // convert image file to base64 string
            setImg(reader.result);
          }, false);
        
          if (file) {
            reader.readAsDataURL(file);
          }
    }
    const handleSubmit = () => {
        if (img + content == ''){return}
        const data = {
            img,
            content
        }
        console.log(data);
        postServices.addPost(data).then(res=>{
            if(res.status==200){
                props.setIsFormShow(false);
                document.body.classList.remove('overflow-hidden');
            }
        })
    }
    return (
        <div className="fixed w-screen h-screen flex justify-center items-center p-3 bg-gray-900 rounded-xl top-0 bg-opacity-80">
            <div className="bg-gray-800 border-[1px] max-h-[730px] border-gray-700 rounded-xl shadow text-gray-300">
                <div>
                    <div className="flex justify-between p-3 border-b-[1px] border-gray-700">
                        <div></div>
                        <p className="font-medium text-xl">Add new status</p>
                        <div onClick={()=>{props.setIsFormShow(false);document.body.classList.remove('overflow-hidden');}}
                            className="rounded-full h-[25px] flex items-center bg-gray-600
                            text-2xl hover:bg-gray-500 cursor-pointer">
                            <CloseRoundedIcon fontSize="inherit"/>
                        </div>
                    </div>
                    <div className="flex p-3 items-center gap-3">
                        <div className="min-w-[45px] rounded-full overflow-hidden">
                            <Image className="rounded-full" width={45} height={45} src="https://via.placeholder.com/150" />
                        </div>
                        <div className="w-full flex flex-col justify-center">
                            <p className="font-medium">Nguyen Truong Trung Phuc</p>
                            {/* <div className="bg-gray-600 rounded-xl  px-2 w-[105px] flex items-center">
                                <div className="text-sm pb-1 mr-1">
                                    <LockRoundedIcon fontSize="inherit"/>
                                </div>
                                <p className="text-xs font-medium ">Only me</p>
                                <ArrowDropDownRoundedIcon />
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="flex-grow max-h-[470px] overflow-y-scroll">
                    <textarea onChange={(e)=>{setContent(e.target.value)}}
                        className="w-[500px] h-[150px] max-h-[215px] bg-gray-800 text-white outline-none py-2 px-3"
                        name="content" placeholder="What's in your mind?"/>
                    <div className="flex justify-center max-w-[499px]">
                        {!(img == '') ?
                            (<img className="w-full h-auto" src={img}/>)
                            : (null)
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div className="px-3 pt-3">
                            <div className=" flex justify-between items-center rounded-xl border border-[1px] border-gray-700 p-3">
                                <div className="">
                                    <p>Add to your status</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="text-green-500 cursor-pointer" onClick={()=>{imgBtn.current.click()}}>
                                        <PhotoLibraryRoundedIcon />
                                        <input ref={imgBtn} id="file" name="file" type="file" className="hidden"
                                            onChange={encodeImageFileAsURL} />
                                    </div>
                                    <div className="text-blue-500">
                                        <PersonAddRoundedIcon />
                                    </div>
                                    <div className="text-purple-500">
                                        <RoomRoundedIcon />
                                    </div>
                                    <div className="text-yellow-500">
                                        <InsertEmoticonRoundedIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <button onClick={handleSubmit} type="button"
                                className="font-medium text-white w-full py-2 bg-blue-500 rounded-xl hover:bg-blue-400">
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default StatusForm;
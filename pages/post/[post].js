import Image from 'next/image';
import { Right } from '../../components/Navbar';
import { Upper, Lower, Mid } from '../../components/Post/post';
import Comment from '../../components/Post/comment';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useRouter } from 'next/router';
import * as postServices from '../../services/post';
import { useEffect, useState } from 'react';

function PostPage(){
    const[postData,setPostData] = useState(null);
    const router = useRouter();
    useEffect(() => {
        let postId = router.asPath.replace('/','');
        postId = postId.slice(5,postId.length);
        if(router.asPath !== 'post/[post]'){
            postServices.getPost(postId)
                .then(res=>{console.log(res.data);setPostData(res.data)})
        }
    }, [router.asPath])
    
    return (
        <section className="flex w-screen h-screen">
            { postData ?
                (<DataReady data={postData}/>) : (null)
            }
        </section>
    )
}
export default PostPage;

const DataReady = (props) =>{
    const router = useRouter();
    return(
        <>
            <div className="relative w-full bg-black">
                <Image src={props.data.img}
                    className="object-contain w-full h-full" layout="fill"/>
                <div className="absolute bg-opacity-0 h-[60px] w-full">
                    <div className="flex items-center pt-2 pl-3">
                        <div onClick={()=>{router.back()}}
                            className="flex justify-center items-center rounded-full text-3xl text-gray-200
                            bg-gray-600 w-[40px] h-[40px] bg-opacity-0 hover:bg-opacity-50 cursor-pointer">
                            <CloseRoundedIcon fontSize="inherit"/>
                        </div>
                        <div className="pl-4">
                            <Image
                                onClick={()=>{router.push('/');}}
                                className="cursor-pointer"
                                width={40} height={40}
                                src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[475px] max-w-[475px] bg-gray-900 flex-grow">
                <div className="w-full">
                    <div className="h-[60px] flex justify-between px-4 pb-3 border-b-[1px] border-gray-700">
                        <div></div>
                        <Right noAvatar/>
                    </div>
                    <Upper data={props.data}/>
                    <Mid data={props.data} noImg/>
                    <Lower />
                    <Comment />
                </div>
            </div>
        </>
    )
};
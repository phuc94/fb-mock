import Image from 'next/image';
import { Right } from '../../components/Navbar';
import CommentSection from '../../components/PostPage/commentSection';
import { Upper, Mid, Lower } from '../../components/PostPage/upper';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useRouter } from 'next/router';
import * as postServices from '../../services/post';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

function PostPage(){
    const[postData,setPostData] = useState(null);
    const[postComment,setPostComment] = useState([]);
    const[postId,setPostId] = useState(null);
    const router = useRouter();
    const [cookie,setCookie, removeCookie] = useCookies(['user']);
    const userData = useSelector(state=>state.userData);
    useEffect(() => {
        let Id = router.asPath.replace('/','');
        Id = Id.slice(5,Id.length);
        setPostId(Id);
        if(!router.asPath.includes('[')){
            postServices.getPost(Id)
                .then(res=>{
                    setPostComment(res.data.comments);
                    console.log(res.data);setPostData(res.data);
                })
        }
    }, [router.asPath])

    const reFetchComment = () => {
        postServices.fetchComment(postId)
            .then(comments=>{
                setPostComment(comments.data);
                const newPostData = Object.assign({},postData,{comments:comments.data})
                setPostData(newPostData);
            })
    };
    
    return (
        <section className="flex w-screen h-screen overflow-hidden">
            { (postData && userData) ?
                (<DataReady data={postData} postId={postId} postComment={postComment} reFetchComment={reFetchComment}
                    removeCookie={removeCookie} cookie={cookie} userData={userData}/>) 
                : 
                (null)
            }
        </section>
    )
}
export default PostPage;

const DataReady = (props) =>{
    const router = useRouter();
    return(
        <>
            <div className="w-full bg-black">
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
            <div className="w-[475px] max-w-[475px] bg-gray-800 flex-grow h-screen relative">
                <div className="h-[60px] flex justify-between px-4 pb-3 sticky top-0
                    border-b-[1px] border-gray-700">
                    <div></div>
                    <Right noAvatar removeCookie={props.removeCookie} basicUserData={props.userData}/>
                </div>
                <div className="w-full flex flex-col h-full max-h-full overflow-y-scroll pb-[60px]">
                    <Upper data={props.data}/>
                    <Mid data={props.data} noImg/>
                    <Lower data={props.data}/>
                    <CommentSection postId={props.postId} comments={props.postComment}
                        reFetchComment={props.reFetchComment} cookie={props.cookie}/>
                </div>
            </div>
        </>
    )
};

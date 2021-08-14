import Image from 'next/image';
import { Right } from '../../components/Navbar';
import { Upper, Lower, Mid } from '../../components/Post/post';
import Comment from '../../components/Post/comment';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useRouter } from 'next/router';


function PostPage(){
    const router = useRouter();
    return (
        <section className="flex w-screen h-screen">
            <div className="relative w-full bg-black">
                <Image className="object-contain w-full h-full" layout="fill"  src="https://via.placeholder.com/2000" />
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
                    <Upper />
                    <Mid img='' content={'hard code test'}/>
                    <Lower />
                    <Comment />
                </div>
            </div>
        </section>
    )
}
export default PostPage;
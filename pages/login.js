import SignUp from "../components/Signup";
import LoginFail from "../components/Modal/loginFail";
import { useState } from 'react';
import { logIn } from '../services/user'
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie';

const Left =()=>{
    return (
        <div className="text-3xl max-w-xl pt-12">
            <div className="w-72">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1022.51 360"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#1877F2;}" }} /></defs><title>FBWordmark_Hex-RGB-1024</title><path className="cls-1" d="M166.43,126.68c-9.65,0-12.44,4.28-12.44,13.72v15.66h25.74l-2.58,25.3H154v76.78H123.11V181.36H102.3v-25.3h20.81V140.83c0-25.52,10.29-39,39-39a146.17,146.17,0,0,1,18,1.07v23.81Z" /><path className="cls-1" d="M181.87,203.88c0-28.52,13.51-50,41.82-50,15.44,0,24.87,7.94,29.38,17.8V156.06h29.59V258.14H253.07V242.7c-4.29,9.87-13.94,17.59-29.38,17.59-28.31,0-41.82-21.45-41.82-50Zm30.88,6.87c0,15.22,5.57,25.3,19.94,25.3,12.66,0,19.09-9.22,19.09-23.8V202c0-14.58-6.43-23.8-19.09-23.8-14.37,0-19.94,10.08-19.94,25.3Z" /><path className="cls-1" d="M347,153.91c12,0,23.37,2.58,29.59,6.86l-6.86,21.88a48.6,48.6,0,0,0-20.59-4.72c-16.73,0-24,9.65-24,26.17v6c0,16.52,7.29,26.17,24,26.17a48.6,48.6,0,0,0,20.59-4.72l6.86,21.87c-6.22,4.29-17.58,6.87-29.59,6.87-36.25,0-52.76-19.52-52.76-50.83v-4.72C294.24,173.43,310.75,153.91,347,153.91Z" /><path className="cls-1" d="M380.66,211v-9c0-28.95,16.51-48,50.19-48,31.74,0,45.68,19.3,45.68,47.61v16.3h-65c.65,13.94,6.87,20.16,24,20.16,11.59,0,23.81-2.36,32.82-6.22L474,253c-8.15,4.3-24.88,7.51-39.67,7.51C395.24,260.5,380.66,241,380.66,211Zm30.88-13.3h37.32v-2.57c0-11.15-4.5-20-18-20C416.91,175.14,411.54,183.94,411.54,197.66Z" /><path className="cls-1" d="M591,210.32c0,28.52-13.72,50-42,50-15.44,0-26.16-7.72-30.45-17.59v15.44H489.39V104.8L520.27,102v68.2c4.5-9,14.37-16.3,28.74-16.3,28.31,0,42,21.45,42,50Zm-30.88-7.08c0-14.37-5.57-25.09-20.37-25.09-12.66,0-19.52,9-19.52,23.59v10.72c0,14.58,6.86,23.59,19.52,23.59,14.8,0,20.37-10.72,20.37-25.09Z" /><path className="cls-1" d="M601.33,209.67v-5.14c0-29.39,16.73-50.62,50.83-50.62S703,175.14,703,204.53v5.14c0,29.38-16.73,50.62-50.83,50.62S601.33,239.05,601.33,209.67Zm70.78-7.29c0-13.51-5.58-24.23-20-24.23s-19.95,10.72-19.95,24.23v9.44c0,13.51,5.58,24.23,19.95,24.23s20-10.72,20-24.23Z" /><path className="cls-1" d="M713.27,209.67v-5.14c0-29.39,16.73-50.62,50.83-50.62s50.83,21.23,50.83,50.62v5.14c0,29.38-16.73,50.62-50.83,50.62S713.27,239.05,713.27,209.67Zm70.78-7.29c0-13.51-5.58-24.23-19.95-24.23s-19.94,10.72-19.94,24.23v9.44c0,13.51,5.57,24.23,19.94,24.23s19.95-10.72,19.95-24.23Z" /><path className="cls-1" d="M857.39,204.74l30.45-48.68h32.81l-31.95,50.4,33.24,51.68H889.13l-31.74-50v50H826.5V104.8L857.39,102Z" /></svg>
            </div>
            <p className="pl-7 text-gray-300">
                Facebook helps you connect and share with the people in your life.
            </p>
        </div>
    )
};
const Right =(props)=>{
    return (
        <div className="w-96">
            <Form className="shadow-md rounded-lg px-8 pt-6 pb-8 mb-6 mx-auto bg-gray-800 border-[1px] border-gray-700">
                <div className="mb-4">
                    <Field name="email" className="shadow appearance-none border rounded-lg w-full py-4 px-4 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        type="text" placeholder="Email" />
                </div>
                <div className="mb-5">
                    <Field name="password" className="shadow appearance-none border border-red-500 rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                    {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                </div>
                <div className="flex flex-col items-center justify-between gap-3 pb-3 border-b-[1px] border-gray-700">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="submit">
                        Log In
                    </button>
                    <a className="inline-block align-baseline text-sm text-blue-600 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
                <div className="mt-6 w-full flex items-center">
                    <button 
                        onClick={()=>{props.handleToggleSignUpModal()}}
                        className="mx-auto bg-green-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                        Create new accont
                    </button>
                </div>
            </Form>
        </div>
    )
}

const Login = ()=>{
    const router = useRouter()
    const [isSingUpShow,setIsSingUpShow] = useState(false);
    const [isLogInFailShow,setIsLogInFailShow] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);
    const handleToggleSignUpModal = ()=>{
        setIsSingUpShow(!isSingUpShow);
    };
    const handleToggleLogInFailModal = ()=>{
        setIsLogInFailShow(!isLogInFailShow);
    }
    const handleLogin = (data)=>{
        console.log(data)
        if(data.status == 200){
            // router.push("/test");
        }
    }
    return(
        <section className="flex h-screen bg-gray-900 ">
            <div className="mx-auto flex flex-col md:flex-row pt-40 gap-10">
                <Left />
                <Formik
                    initialValues ={{
                        email:'',
                        password:''
                    }}
                    validationSchema={yup.object({
                        email:yup.string().required('Email is required'),
                        password:yup.string().required('Password is required') 
                    })}
                    onSubmit={(data, { setSubmitting }) => {
                        // const data = userModelConvert(data);
                        console.log(data);
                        logIn(data).then(res=>{
                            if (res.data === false){handleToggleLogInFailModal()}
                            else {
                                router.push('/');
                                console.log(res.data);
                                setCookie('user',res.data._id)
                            }
                        })
                    //     setTimeout(() => {
                    //       alert(JSON.stringify(values, null, 2));
                    //       setSubmitting(false);
                    //     }, 400);
                    }}
                    >
                    <Right handleToggleSignUpModal={handleToggleSignUpModal} handleLogin={handleLogin}/>
                </Formik>
            </div>
            <SignUp isSingUpShow={isSingUpShow} handleToggleSignUpModal={handleToggleSignUpModal}/>
            <LoginFail isLogInFailShow={isLogInFailShow} handleToggleLogInFailModal={handleToggleLogInFailModal} />
        </section>
    )
};
export default Login;
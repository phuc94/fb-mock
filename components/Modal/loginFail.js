import CloseRoundedIcon from '@material-ui/icons/CloseRounded';


const LoginFail = (props) =>{
    return (
        <div className={`absolute w-screen h-screen z-10 bg-gray-800 bg-opacity-80 flex justify-center items-center ${props.isLogInFailShow ? "" : "hidden"}`}>
            <div className="shadow-2xl rounded-xl w-96 bg-gray-800 border-[1px] border-gray-700">
                <div className="p-4 relative w-full " >
                    <div onClick={props.handleToggleLogInFailModal}
                        className="absolute right-2 top-2 text-gray-500 text-2xl cursor-pointer" > 
                        <CloseRoundedIcon fontSize="inherit"/>
                    </div>
                    <p className="font-bold text-3xl text-red-500">Login Fail</p>
                    <p className="text-sm text-gray-300 pt-2">Your credentials are incorrect. Please try again!</p>
                </div>
            </div>
        </div>
    )
};
export default LoginFail;
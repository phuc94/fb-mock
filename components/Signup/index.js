import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import * as yup from 'yup';
import { timeSelection } from '../../utils/timeSelection';
import { axiosRequest } from '../../services/request'

const SignUp = (props) => {
    const timeObj = timeSelection();
    
    return (
        <div className={`absolute w-screen h-screen z-10 bg-white bg-opacity-80 flex justify-center items-center ${props.isShow ? "" : "hidden"}`}>
            <div className="shadow-2xl rounded-xl w-96 bg-white">
                <div className="p-4 relative w-full " >
                    <div className="absolute right-2 top-2 text-gray-500 text-2xl cursor-pointer" onClick={props.handleToggleModal}>
                        <CloseRoundedIcon fontSize="inherit"/>
                    </div>
                    <p className="font-bold text-3xl">Sign Up</p>
                    <p className="text-sm text-gray-600 pt-2">It's quick and easy.</p>
                </div>
                <hr />
                <Formik
                    initialValues ={{
                        firstName:'',
                        lastName:'',
                        email:'',
                        password:'',
                        day:'',
                        month:'',
                        year:'',
                        gender:''
                    }}
                    validationSchema={yup.object({
                        firstName:yup.string(),
                        lastName:yup.string(),
                        email:yup.string().required('Email is required'),
                        password:yup.string().required('Password is required'),
                        day:yup.string(),
                        month:yup.string(),
                        year:yup.string(),
                        gender:yup.string()
                    })}
                    onSubmit={(data, { setSubmitting }) => {
                        console.log(data);
                        axiosRequest('/UserRegister',{
                            method: 'post',
                            data: data
                        });
                    }}
                    >
                    <Form className="p-4">
                        <div className="mt-3 flex gap-3 w-full ">
                            <Field 
                                name="firstName"
                                type="text" 
                                className="bg-gray-200 outline-none w-full px-3 py-2 rounded "
                                placeholder="First Name" 
                                />
                            <Field
                                name="lastName"
                                type="text" 
                                className="bg-gray-200 outline-none w-full px-3 py-2 rounded"
                                placeholder="Last Name" 
                                />
                        </div>
                        <div className="pb-3">
                            <Field
                                name="email"
                                type="text"
                                className="bg-gray-200 outline-none px-3 py-2 rounded w-full mt-3"
                                placeholder="Email or Phone number"
                                />
                            <div className="text-red-400 text-sm">
                                <ErrorMessage name="email"/>
                            </div>
                            <Field
                                name="password"
                                type="password"
                                className="bg-gray-200 outline-none px-3 py-2 rounded w-full mt-3"
                                placeholder="Password"
                                />
                            <div className="text-red-400 text-sm">
                                <ErrorMessage name="password"/>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-sm text-gray-600">Date of birth</p>
                            <div  className="flex gap-3">
                                <Field as="select" name="day" className="w-full outline-none py-2 px-2 rounded border">
                                    {timeObj.dayArr.map(day =>(
                                        <option value={day}>{day}</option>
                                    ))}
                                </Field>
                                <Field as="select" name="month" className="w-full outline-none py-2 px-2 rounded border">
                                    {timeObj.monthArr.map(month =>(
                                        <option value={month}>{month}</option>
                                    ))}
                                </Field>
                                <Field as="select" name="year" className="w-full outline-none py-2 px-2 rounded border">
                                    {timeObj.yearArr.map(year =>(
                                        <option value={year}>{year}</option>
                                    ))}
                                </Field>
                            </div>
                        </div>
                        <div className="pt-4">
                            <p className="text-sm text-gray-600">Gender</p>
                            <div  className="flex w-full flex gap-2">
                                <span
                                    className="border relative rounded py-2 px-2 inline-block w-full cursor-pointer">
                                    <label className="pr-6 cursor-pointer">Female</label>
                                    <Field name="gender" type="radio" value="female" className="right-2 absolute top-4 cursor-pointer"/>
                                </span>
                                <span 
                                    className="border relative rounded py-2 px-2 inline-block w-full cursor-pointer">
                                    <label className="pr-6 cursor-pointer">Male</label>
                                    <Field name="gender" type="radio" value="male" className="right-2 absolute top-4 cursor-pointer"/>
                                </span>
                                <span 
                                    className="border relative rounded py-2 px-2 inline-block w-full cursor-pointer">
                                    <label className="pr-6 cursor-pointer">Custom</label>
                                    <Field name="gender" type="radio" value="Custom" className="right-2 absolute top-4 cursor-pointer"/>
                                </span>
                            </div>
                        </div>
                            <p className="text-xs pt-2 text-gray-600">By clicking Sign Up, you agree to our <a href="" className="text-blue-900 hover:underline">Terms</a>, <a href="" className="text-blue-900 hover:underline">Data Policy</a> and <a href="" className="text-blue-900 hover:underline">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
                        <div className="w-full text-center pt-8 pb-3">
                            <button 
                                type="submit"
                                className="bg-green-600 text-xl text-white font-medium pt-1 pb-2 px-16 rounded-lg">
                                Sign up
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
        
    )
};
export default SignUp;
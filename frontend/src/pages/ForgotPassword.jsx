import { useState } from 'react'
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [data, setData] = useState({
        email: "",
    })
    const [showOtpPopup, setShowOtpPopup] = useState(false);
    const [otpValue, setOtpValue] = useState("");
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const valideValue = Object.values(data).every(el => el)


    const handleSubmit = async(e)=>{
        e.preventDefault()

        try {
            const response = await Axios({
                ...SummaryApi.forgot_password,
                data : data
            })
            
            if(response.data.error){
                toast.error(response.data.message)
            }

            if(response.data.success){
                toast.success(response.data.message)
                if(response.data.otp){
                    setOtpValue(response.data.otp);
                    setShowOtpPopup(true);
                    setTimeout(() => {
                        setShowOtpPopup(false);
                        navigate("/verification-otp", {
                            state: { ...data, otp: response.data.otp }
                        });
                        setData({ email: "" });
                    }, 3000);
                } else {
                    navigate("/verification-otp", {
                        state: { ...data, otp: response.data.otp }
                    });
                    setData({ email: "" });
                }
            }

        } catch (error) {
            AxiosToastError(error)
        }
    }

    return (
        <section className='w-full container mx-auto px-2'>
            {/* OTP Custom Popup */}
            {showOtpPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs mx-auto flex flex-col items-center relative">
                        <button onClick={() => {
                            setShowOtpPopup(false);
                            navigate("/verification-otp", {
                                state: { ...data, otp: otpValue }
                            });
                            setData({ email: "" });
                        }} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl">&times;</button>
                        <h2 className="text-lg font-semibold mb-2 text-green-700">Your OTP (for testing)</h2>
                        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded text-xl font-bold mb-4">
                            <span>{otpValue}</span>
                        </div>
                        <p className="text-gray-600 text-sm text-center">Copy and use this OTP to verify your account.</p>
                    </div>
                </div>
            )}
            <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-7'>
                <p className='font-semibold text-lg'>Forgot Password </p>
                <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
                    <div className='grid gap-1'>
                        <label htmlFor='email'>Email :</label>
                        <input
                            type='email'
                            id='email'
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                        />
                    </div>
             
                    <button disabled={!valideValue} className={` ${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500" }    text-white py-2 rounded font-semibold my-3 tracking-wide`}>Send Otp</button>

                </form>

                <p>
                    Already have account? <Link to={"/login"} className='font-semibold text-green-700 hover:text-green-800'>Login</Link>
                </p>
            </div>
        </section>
    )
}

export default ForgotPassword



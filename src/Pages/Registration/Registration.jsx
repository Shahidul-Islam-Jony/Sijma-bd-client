import { FaUser, FaLock, FaImage } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PropTypes from 'prop-types';
import '../Login/LoginStyle.css'
import { useState } from "react";




const Registration = ({ setIsClicked }) => {

    const [imageUrl, setImageUrl] = useState("");

    // Upload Image into imageBB
    const handleUploadImageBB = async (e) => {
        const image = e.target.files[0];
        console.log(image);
        const imageFile = { image: image };
        console.log(imageFile);
    };


    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        if (password.length < 6) {
            // toast.error('Password should be 6 character or longer!', {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            // });
            return;
        }
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(password)) {
            // toast.error('Password should have atleast one Capital letter one small letter and one special character !', {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            // });
            return;
        }
    }

    return (
        <div>
            {/* Registration page */}
            <div className="form-box register">
                <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Sign Up</h2>
                <form onSubmit={handleRegistration} action="#">
                    <div className="input-box animation" style={{ '--i': 18, '--j': 1 }}>
                        <input type="text" name="name" required />
                        <label>Username</label>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box animation" style={{ '--i': 19, '--j': 2 }}>
                        <input type="Email" name="email" required />
                        <label>Email</label>
                        <MdEmail className="icon" />
                    </div>
                    <div className="animation upload" style={{ '--i': 20, '--j': 3 }}>
                        <span className="flex items-center hover:text-blue-500">
                            <input type="file" name="image" onChange={handleUploadImageBB} className="relative z-10 h-10 opacity-0" required />
                            <label className="absolute  border-2 border-t-0 border-x-0 top-0 h-10 border-b-blue-500 w-full text-black text-nowrap overflow-hidden">{imageUrl?imageUrl:'Upload Your Photo'}</label>
                            <FaImage className="text-xl" />
                        </span>
                    </div>
                    <div className="input-box animation" style={{ '--i': 21, '--j': 4 }}>
                        <input type="password" name="password" required />
                        <label>Password</label>
                        <FaLock className="icon" />
                    </div>
                    <button type="submit" className="btn1 animation" style={{ '--i': 21, '--j': 4 }}>Sign Up</button>

                    <div className="logreg-link animation" style={{ '--i': 22, '--j': 5 }}>
                        <p>Already have an account? <a href="#" onClick={() => setIsClicked(false)} className="login-link text-blue-500 hover:text-blue-800">Login</a></p>
                    </div>
                </form>
            </div>
            {/* Left side Register Text */}
            <div className="info-text register">
                <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Welcome!</h2>
                <p className="animation" style={{ '--i': 18, '--j': 1 }}>Sign Up for getting full support of Sijma.</p>
            </div>
            {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

Registration.propTypes = {
    setIsClicked: PropTypes.func,
}

export default Registration;
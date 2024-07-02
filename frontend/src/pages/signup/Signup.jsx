import { Link } from "react-router-dom";
import Gendercheckbox from "./genderheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
	const [inputs, setInputs] = useState({
		fullname: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

    return(
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Signup <span className="text-blue-500">ChatApp</span></h1>
             <form  onSubmit={handleSubmit}>
                <div>
                <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Komal Jha" className="input input-bordered w-full h-10" 
                value={inputs.fullname}
                onChange={(e)=>setInputs({...inputs,fullname:e.target.value})}
                />
                </div>
                <div>
                <label className="label p-2">
                <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder="KomalJha" className="input input-bordered w-full h-10"
                value={inputs.username}
                onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                />
              
                </div>
                   
                <div>
                <label className="label p-2">
                <span className="text-base label-text">Password</span>
                </label>
                <input type="text" placeholder="Enter Password" className="input input-bordered w-full h-10"
                value={inputs.password}
                onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                />
              
                </div>

                <div>
                <label className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
                </label>
                <input type="text" placeholder="confirm Password" className="input input-bordered w-full h-10" 
                value={inputs.confirmPassword}
                onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                />
              
                </div>

                <Gendercheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                <Link to='/login' className="text-sm inline-block mt-2 hover:text-blue-600 hover:underline">
                   {"Already"} have an account?
                 </Link>

                 <div>
                    <button className="btn btn-block btn-sm mt-2 border-slate-700"
                     disabled={loading}
                    >
                        {loading? <span className="loading loading-spinner"></span> : "Sign up"}

                    </button>
                 </div>

             </form>
            </div>
        </div>
    )
}
export default Signup;



//starter code 


// import Gendercheckbox from "./genderheckbox";

// const Signup =()=>{


//     return(
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-0">
//             <h1 className="text-3xl font-semibold text-center text-gray-300">Signup <span className="text-blue-500">ChatApp</span></h1>
//              <form >
//                 <div>
//                 <label className="label p-2">
//                 <span className="text-base label-text">Full Name</span>
//                 </label>
//                 <input type="text" placeholder="Komal Jha" className="input input-bordered w-full h-10" />
//                 </div>
//                 <div>
//                 <label className="label p-2">
//                 <span className="text-base label-text">Username</span>
//                 </label>
//                 <input type="text" placeholder="KomalJha" className="input input-bordered w-full h-10" />
              
//                 </div>
                   
//                 <div>
//                 <label className="label p-2">
//                 <span className="text-base label-text">Password</span>
//                 </label>
//                 <input type="text" placeholder="Enter Password" className="input input-bordered w-full h-10" />
              
//                 </div>

//                 <div>
//                 <label className="label p-2">
//                 <span className="text-base label-text">Confirm Password</span>
//                 </label>
//                 <input type="text" placeholder="confirm Password" className="input input-bordered w-full h-10" />
              
//                 </div>

//                 <Gendercheckbox/>

//                 <a href="#" className="text-sm inline-block mt-2 hover:text-blue-600 hover:underline">
//                    {"Already"} have an account?
//                  </a>

//                  <div>
//                     <button className="btn btn-block btn-sm mt-2 border-slate-700">Signup</button>
//                  </div>

//              </form>
//             </div>
//         </div>
//     )
// }
// export default Signup;
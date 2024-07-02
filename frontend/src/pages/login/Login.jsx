import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";




const Login =()=>{
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");

    const {loading,login} = useLogin();

    const handlesubmit = async (e)=>{
        e.preventDefault();
        await login(username,password);
    }

    return (
       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400  backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Login <span className="text-blue-500">ChatApp</span></h1>
            <form  onSubmit={handlesubmit}>
                <div>
                <label className="label p-2">
                <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="input input-bordered w-full h-10" 
                value={username} 
                onChange={(e)=>setusername(e.target.value)}
                />
                </div>

                <div>
                <label className="label p-2">
                <span className="text-base label-text">Password</span>
                </label>
                <input type="Password" placeholder="Enter Password " className="input input-bordered w-full h-10" 
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                />
                </div>
                 <Link to='/signup' className="text-sm inline-block mt-2 hover:text-blue-600 hover:underline">
                   {"Don't"} have an account?
                 </Link>

                 <div>
                    <button className="btn btn-block btn-sm mt-2"
                    disabled={loading}>
                       {loading?<span className="loading loading-spinner"></span>: "Login"}
                        </button>
                 </div>


            </form>
        </div>
       </div>
    )
}

export default Login;




// starter code


// const Login =()=>{
//     return (
//        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400  backdrop-filter backdrop-blur-lg bg-opacity-0">
//             <h1 className="text-3xl font-semibold text-center text-gray-300">Login <span className="text-blue-500">ChatApp</span></h1>
//             <form >
//                 <div>
//                 <label className="label p-2">
//                 <span className="text-base label-text">Username</span>
//                 </label>
//                 <input type="text" placeholder="Enter Username" className="input input-bordered w-full h-10" />
//                 </div>

//                 <div>
//                 <label className="label p-2">
//                 <span className="text-base label-text">Password</span>
//                 </label>
//                 <input type="Password" placeholder="Enter Password " className="input input-bordered w-full h-10" />
//                 </div>
//                  <a href="#" className="text-sm inline-block mt-2 hover:text-blue-600 hover:underline">
//                    {"Don't"} have an account?
//                  </a>

//                  <div>
//                     <button className="btn btn-block btn-sm mt-2">Login</button>
//                  </div>


//             </form>
//         </div>
//        </div>
//     )
// }

// export default Login;
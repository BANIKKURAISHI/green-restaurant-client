import React, { use, useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router";

const Register=()=>{
    
    const navigate = useNavigate();
    const {signInGoogle,createUser,loading}=useContext(AuthContext)
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   console.log(name,email,password)
    
    const handleGoogleButton=()=>{ signInGoogle() 
      navigate("/")
    }

    const handleCreateUser=(e)=>{
      e.preventDefault()
 if (!email || !password) {
 setError("Email and password required");
 return;
}

const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

if (!isValidEmail) {
  setError("Please enter a valid email");
  return;
}
    createUser(email, password)
    .then((res) => {
      console.log(res.user);
      navigate("/");
      // setLoading(false);
    })
    .catch((err) => {
      if (err.code === "auth/invalid-email") {
        setError("Invalid email");
      } else {
        setError(err.message);
      };
    });
    }

    return (
        <div>
<div className="hero bg-base-200 min-h-screen">
 
    <div  className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
          <h1 className="text-3xl font-bold text-center mt-4">Register Now !</h1>
          <p style={{ color: "red" }} className="text-center">{error}</p>

      <div  className="card-body">
        <form onSubmit={handleCreateUser}>
        <fieldset  className="fieldset">
          <label className="label">Name</label>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="input" placeholder="Enter your name" />
          <label className="label">Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} className="input" placeholder="Enter your email" />
          <label className="label">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className="input" placeholder="Enter your password" />
          
          <button className="btn btn-neutral mt-4">Registration</button>
        </fieldset>
        </form>
        <div className="divider">OR</div>
        <button  onClick={handleGoogleButton} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
      </div>
    </div>
  </div>
</div>

    )

}

export default Register
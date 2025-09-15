import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";


const Login = () => {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const {loading,login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        
       <div className="w-full p-6 rounded-1g shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
       bg-opacity-0">
<h1 className="text-3xl font-semibold text-center text-gray-300">
    
<span className="text-blue-500">
    Sohbet Uygulaması
</span>

<form onSubmit={handleSubmit}>
<div>
<label className="label p-2">
<span className="text-base label-text">
    Username
</span>
</label>
<input type="text"placeholder="Kullanıcı Adınızı Giriniz" className="w-full input input-bordered h-10"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
</div>

<div>
<label className="label">
    <span className="text-base label-text"> 
Password
    </span>
</label>
<input type="password" placeholder="Sifre Giriniz" className="w-full input input-bordered h-10" 
value={password}
onChange={(e) => setPassword(e.target.value)}
/>



</div>
<Link to='/signup' className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
{"Hesabınız yokmu hemen kaydolun!"} 
</Link>
<div>
    <button className="btn btn-block btn-sm mt-2" disabled={loading}>
    {loading ? <span className='loading loading-spinner'></span> : "Giriş yap"}
    </button>
</div>
</form>

</h1>

       </div>
        
        </div>
  )
}

export default Login



//  bu dosyanın kodu
// const Login = () => {
  //   return (
   //    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      //     
         // <div className="w-full p-6 rounded-1g shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
         // bg-opacity-0">
  // <h1 className="text-3xl font-semibold text-center text-gray-300">
      
  // <span className="text-blue-500">
    //   Sohbet Uygulaması
 //  </span>
  
  // <form>
  // <div>
  // <label className="label p-2">
  // <span className="text-base label-text">
  //     Username
  // </span>
  // </label>
  // <input type="text"placeholder="Kullanici Adinizi Giriniz" className="w-full input input-bordered h-10"/>
  // </div>
  
  // <div>
  // <label className="label">
  //     <span className="text-base label-text"> 
 //  Password
  //     </span>
  // </label>
  // <input type="password" placeholder="Sifre Giriniz" className="w-full input input-bordered h-10" />
  
  
  
  // </div>
  // <a href="#" className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
  // {"Don't"} have an account?
  // </a>
  // <div>
  //     <button className="btn btn-block btn-sm mt-2">Login</button>
  // </div>
  // </form>
  
  // </h1>
  
   //       </div>
          
    //       </div>
   //  )
  // }
  
  // export default Login
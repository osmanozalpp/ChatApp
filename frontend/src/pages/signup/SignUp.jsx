import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
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

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    <span className="text-blue-500">Sohbet Uygulaması Kayıt Ol</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">
                                Adin
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder=" Adınızı buraya yazınız"
                            className="w-full input input-bordered h-10"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label>
                            <span className="text-base label-text">Kullanıcı Adı</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Kullanıcı Adınızı Giriniz"
                            className="w-full input input-bordered h-10"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text">Sifrenizi Giriniz</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Sifrenizi Giriniz"
                            className="w-full input input-bordered h-10"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text">Sifrenizi Tekrar Giriniz</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Sifrenizi Tekrar Giriniz"
                            className="w-full input input-bordered h-10"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Hesabınız var mı ?
                    </Link>

                    <div>
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700"
                            disabled={loading} >
                            {loading ? <span className='loading loading-spinner'></span> : "Kayıt Ol"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;


// kayıt ol kodları
//import GenderCheckbox from "./GenderCheckbox"


//const SignUp = () => {
// return (
//   <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
//bg-opacity-0">

//<h1 className="text-3xl font-semibold text-center text-gray-300">
//<span className="text-blue-500">Sohbet Uygulamasi Kayit Ol</span>
//</h1>
//<form>
//<div>
//<label className="label p-2">
//<spam className="text-base label-text">
//  Adin
// </spam>
//</label>
//<input type="text" placeholder=" Adinizi Buraya Yaziniz" className="w-full input input-bordered h-10" />

//</div>
//<div>
//<label>
//<span className="text-base label-text"> Kullanici Adi </span>
//</label>
//<input type="text" placeholder="Kullanici Adiniz Giriniz" className="w-full input input-bordered h-10" />
//</div>

//<div>
//<label className="label">
// <span className="text-base label-text">Sifrenizi Giriniz</span>
//</label>
//<input type="password" placeholder="Sifrenizi Giriniz" className="w-full input input-bordered h-10" />
//</div>

//<div>
//<label className="label">
//<span className="text-base label-text">Sifrenizi Tekrar Giriniz</span>
//</label>
//<input type="password" placeholder="Sifrenizi Tekrar Giriniz" className="w-full input input-bordered h-10" />
//</div>

//<GenderCheckbox/>
//<a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" href="#">
//Hesabiniz var mi ?

//</a>

//<div>
// <button className="btn btn-block btn-sm mt-2 border border-slate-700"> Kayit Ol </button>
//</div>

//</form>
//</div>
// </div>
// )
//}

// export default SignUp
import GenderCheckbox from "./GenderCheckbox"


const SingUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg 
bg-opacity-0">

<h1 className="text-3xl font-semibold text-center text-gray-300">
 <span className="text-blue-500">Sohbet Uygulaması Kayıt Ol</span>
</h1>
<form>
<div>
<label className="label p-2">
    <spam className="text-base label-text">
      Adin
    </spam>
</label>
<input type="text" placeholder=" Adinizi Buraya Yaziniz" className="w-full input input-bordered h-10" />

</div>
<div>
<label>
<span className="text-base label-text"> Kullanici Adi </span>
</label>
<input type="text" placeholder="Kullanici Adiniz Giriniz" className="w-full input input-bordered h-10" />
</div>

<div>
<label className="label">
    <span className="text-base label-text">Sifrenizi Giriniz</span>
</label>
<input type="password" placeholder="Sifrenizi Giriniz" className="w-full input input-bordered h-10" />
</div>

<div>
<label className="label">
    <span className="text-base label-text">Sifrenizi Tekrar Giriniz</span>
</label>
<input type="password" placeholder="Sifrenizi Tekrar Giriniz" className="w-full input input-bordered h-10" />
</div>

<GenderCheckbox/>
<a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" href="#">
Hesabiniz var mi ?

</a>

<div>
    <button className="btn btn-block btn-sm mt-2 border border-slate-700"> Kayit Ol </button>
</div>

</form>
</div>
    </div>
  )
}

export default SingUp

// kayıt ol kodları
//import GenderCheckbox from "./GenderCheckbox"


//const SingUp = () => {
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

// export default SingUp
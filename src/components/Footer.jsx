import { InstagramLogo,TwitterLogo, FacebookLogo, GlobeHemisphereWest } from "phosphor-react"

export function Footer() {
  return(
    <div className="grid grid-cols-1 md:grid-cols-6 bg-black text-white p-4 md:p-20">
        <a href="#">
          <img 
           className=" h-10 w-auto md:h-11 justify-center"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotfy-logo" />
        </a>
        <div className="md:col-span-1 pt-10 md:pt-4">
          <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">EMPRESAS</h3>
           <ul>
           <a href="#"> <li className="mb-5 hover:text-green-500">Sobre</li> </a>
           <a href="#"> <li className="mb-5 hover:text-green-500">Empregos</li> </a>
           <a href="#"> <li className="mb-5 hover:text-green-500">For the Record</li> </a>
           </ul>
        </div >
        <div className="md:col-span-1 pt-10 md:pt-4">
        <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">COMUNIDADES</h3>
           <ul>
           <a href="#">  <li className="mb-5 hover:text-green-500">Para Artistas</li></a>
           <a href="#"><li className="mb-5 hover:text-green-500">Desenvolvedores</li></a>
           <a href="#"><li className="mb-5 hover:text-green-500">Publicidade</li></a>
           <a href="#"><li className="mb-5 hover:text-green-500">Investidores</li></a>
           <a href="#"> <li className="mb-5 hover:text-green-500">Fornecedores</li></a>
           </ul>
        </div>
        <div  className="md:col-span-1 pt-10 md:pt-4" >
        <h3 className="uppercase text-gray-500 font-bold text-xs tracking-widest mb-5">LINKS ÚTEIS</h3>
           <ul>
           <a href="#"><li className="mb-5 hover:text-green-500">Suporte</li></a>
           <a href="#"><li className="mb-5 hover:text-green-500">Player da Web</li></a>
           <a href="#"><li className="mb-5 hover:text-green-500">Aplicativo móvel grátis</li></a>
           </ul>
        </div>
        <div className="md:col-span-2 pt-10 md:pt-4">
         <ul className="flex pl-0 md:pl-20 ">
           
           <a href="#"> <li className="flex items-center justify-center text-2xl bg-zinc-800 font-bold w-14 h-14 rounded-full hover:text-green-500 mx-2"><InstagramLogo size={30}/></li></a>
           <a href="#"> <li className="flex items-center justify-center text-2xl bg-zinc-800 font-bold w-14 h-14 rounded-full hover:text-green-500 mx-2"> <TwitterLogo size={30} /></li> </a>
           <a href="#"> <li className="flex items-center justify-center text-2xl bg-zinc-800 font-bold w-14 h-14 rounded-full hover:text-green-500 mx-2"><FacebookLogo size={30} /></li> </a>
         </ul>
    </div>
    <div className="md:col-span-4 pt-20" >
         <ul className="md:flex space-x-6 text-xs justify-start text-gray-400 md:pl-16   tracking-widest ">
         <a href="#"> <li className="hover:text-green-500">Legal</li></a>                  
         <a href="#"> <li className="hover:text-green-500">Centro de Privacidade</li></a>
         <a href="#"> <li className="hover:text-green-500">Política de privacidade</li></a>
         <a href="#"> <li className="hover:text-green-500">Cookies </li></a>
         <a href="#"> <li className="hover:text-green-500">Sobre anúncios</li></a>
         </ul>
    </div>
    <div className="md:col-span-2 pt-12 pl-0 md:pl-48 ">
       <ul className="text-[13px] justify-start text-zinc-400 hover:text-green-500 ">
       <a href="#"><div className="flex space-x-3 pl-12 ">
       <GlobeHemisphereWest size={15} />
       <li className=" mb-2  justify-end ">Brasil</li>
        </div>  </a>
        <div className="hover:text-zinc-400">
        <li>© 2022 Spotify AB</li>
         </div>
       </ul>
    </div> 
  </div>
  )
}
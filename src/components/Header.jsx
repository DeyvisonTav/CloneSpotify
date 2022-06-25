export function Header() {

  return (
    <div className={`w-full md:h-auto flex fixed md:w-full px-3  xl:px-28 py-4 bg-black xl:justify-between font-sans lg:justify-around justify-between`}>
      <div className="w-full md:px-3 md:w-full xl:pl-16 items-center">
     <a href="#">  <img
      className=" h-10 w-auto md:h-11 justify-center"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png "
        alt="logo-spotify"
        width={140}
        
            /></a>
      
      </div>
          <div className="text-white lg:hidden flex justify-end">
           <svg
          className="h-8 flex justify-end cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
</svg>
          </div> 
        <nav className="text-white  text-center flex flex-center items-center justify-center ">
          <ul className="hidden text-[15px] lg:flex flex-center items-center lg:justify-end justify-center flex-row space-x-8 xl:space-x-10 pr-24 font-bold">
            <a href=""><li className="hover:text-green-500">Premium</li> </a>
            <a href=""><li className="hover:text-green-500">Suporte</li> </a>
            <a href=""><li className="hover:text-green-500">Baixar</li> </a>
            <li>|</li >
            <a href=""><li className="hover:text-green-500">Cadastro</li> </a>
            <a href=""><li className="hover:text-green-500">Entrar</li> </a> 
            
            
          </ul>
        </nav>
    </div>
  )
}

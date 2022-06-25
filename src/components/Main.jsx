export function Main() {
  return (
    <div className={`h-screen md:h-[860px] flex flex-col justify-center text-center bg-spotify-theme-mobile md:bg-spotify-theme bg-banner-mobile md:bg-banner bg-195% md:bg-175% bg-purple-main text-green-main py-40 px-4 `}>
       
       < div className="   w-full  md:h-screen h-full pt-72 flex justify-center flex-col text-center  ">
      
        <h1 className={`text-5xl md:text-9xl mb-10 font-bold max-w-5xl mx-auto leading-none `}>
           Escutar muda tudo  
        </h1>  
        <p className={`text-md flex justify-center md:text-lg flex-wrap mb-10  `}>
          Milhões de músicas e podcasts para explorar. E nem precisa de cartão de credito
        </p>
        <div className=" mt-8">
        <button className={ `mb-64 md:mb-44 mt-5 md:mt-1  bg-green-main hover:bg-green-400 text-purple-main text-sm rounded-full px-7 py-4 uppercase font-bold max-w-xl mx-auto tracking-widest hover:text-[14.6px] hover:py-[16.5px]  ease-in-out duration-75`}>
          BAIXAR O SPOTIFY FREE

        </button>

        </div>
       
        
      </div>      
 


    </div>
  )
}
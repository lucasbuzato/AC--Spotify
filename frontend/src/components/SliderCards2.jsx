export default function SliderCards2({children}) {
    return(
        <>
         <div className="grid-rows-2 grid-flow-col pb-1 px-5 pt-4 ">
           <div className="flex flex-row">
            
            {children}
            
        </div>
        </div>
     
        </>
    )
}
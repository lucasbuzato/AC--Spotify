export default function SliderCards({titulo, children}) {
    return(
        <>
        <div className="px-7 mt-12">
            <div className="mb-5 flex flex-row justify-between">
                <a href="" className="text-white font-bold text-2xl">{titulo}</a>
                <a href="" className="text-white font-bold text-sm">Mostrar Tudo</a>
            </div>
                    <div className="flex w-full flex-wrap">
                    {children}

                    </div>
            </div>
     
        </>
    )
}
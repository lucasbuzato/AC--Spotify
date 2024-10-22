export default function ConteudoPrincipal({children}) {
    return (
        <div className="bg-gray-400 w-3/4 grid grid-cols-4 pl-20 items-center">
           {children}
        </div>
    )
}
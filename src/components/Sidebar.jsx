export default function Sidebar({ children }) {
    return (
        <aside className="bg-green-400 w-1/4 flex flex-col justify-around items-center">
            {children}
        </aside>
    )
}
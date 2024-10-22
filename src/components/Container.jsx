export default function Container({ children }) {
    return (
        <section className="w-full h-dvh flex">
            {children}
        </section>
    )
}
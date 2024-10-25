import Card from "../components/Card";
import Card2 from "../components/Card2";

export default function ConteudoPrincipal() {
    return (
        <div className="bg-Sidebar flex flex-col w-full rounded-lg">
        <div className="pt-5 pl-6">
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm">Tudo</button>
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm ml-2">Músicas</button>
                    <button className="bg-SideButton text-white px-3 py-1 rounded-full text-sm ml-2">Podcasts</button>
                </div>
                <div>
        <div className="grid-rows-2 grid-flow-col pb-1 px-5 pt-4 ">
           <div className="flex flex-row">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            
        </div>
        </div>

        <div className="grid-rows-2 grid-flow-col py-1 px-5">
        <div className="flex flex-row">
        <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
           
           
            
            </div>
        </div>
        </div>

        <div className="px-7 mt-12">
            <div className="mb-5 flex flex-row justify-between">
                <a href="" className="text-white font-bold text-2xl">Feitos para você</a>
                <a href="" className="text-white font-bold text-sm">Mostrar Tudo</a>
            </div>
            <div className="flex flex-row">
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>

        </div>
        </div>

        <div className="px-7 pt-12">
            <div className="mb-5 flex flex-row justify-between">
                <a href="" className="text-white font-bold text-2xl">Suas músicas estão com saudade</a>
                <a href="" className="text-white font-bold text-sm">Mostrar Tudo</a>
            </div>




            <div className="flex flex-row items-center">



            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>



        </div>
        </div>


        </div>
    )
}
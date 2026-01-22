import Image from "next/image";
import { Button } from "../ui/button";
import Avatar from "./avatar";
import PlusIcon from "../icons/plus";

export default function Header() {
    return <header className="flex gap-5 items-center bg-white p-5 px-10 border-b-1 border-gray-200">
        <Image src={'/logo.jpg'} alt="BMMS" width={125} height={42} />
        <div className="flex w-full items-center justify-between pl-[100px]">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold">Operations Dashboard</h1>
                <p className="text-sm text-slate-500">Manage clients, cases, and business operations</p>
            </div>
            <div className="flex items-center gap-5">
                <Button className="text-white px-10 py-5 cursor-pointer" style={{ background: 'linear-gradient(90deg, #00A0D2 10.38%, #05DC82 100%)' }}><PlusIcon /> New Client</Button>
                <Avatar />
            </div>
        </div>
    </header>
}
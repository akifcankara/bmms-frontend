import ArrowDownIcon from "../icons/arrow-down"
export default function Avatar() {
    return <div className="flex gap-1 flex-wrap items-center cursor-pointer gap-3">
        <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center">JA</div>
        <div className="flex flex-col pr-10">
            <p className="text-sm font-bold">John Anderson</p>
            <p className="text-xs">Admin</p>
        </div>
        <ArrowDownIcon />
    </div>
}
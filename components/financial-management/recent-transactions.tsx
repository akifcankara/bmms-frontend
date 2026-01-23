"use client"
import { Button } from "../ui/button"

const SAMPLE = [
    { id: "c1", avatar: 'JA', name: "John Anderson", type: "Technology", module: "PRO", reg: 'Reg: DM-2023-12890', },
    { id: "c2", avatar: 'SM', name: "Sarah Mitchell", type: "Finance", module: "Expansion", reg: 'Reg: DMCC-2022-98432', },
    { id: "c3", avatar: 'DC', name: "David Chen", type: "Healthcare", module: "MENA Leaders", reg: 'Reg: DM-2023-45678', },
]

export default function RecentTransactions({ data = SAMPLE }: { data?: Record<string, string>[] }) {
    return (
        <div>
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-white p-5 rounded-t-lg shadow-md">

                <div className="flex flex-col">
                    <h2 className="text-[#111827] text-lg font-bold">Recent Transactions</h2>
                </div>

            </div>
            <div className="w-full rounded-b-lg border bg-card/60 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-muted">
                            <tr>
                                <th className="px-4 py-3 text-left text-muted-foreground">User</th>
                                <th className="px-4 py-3 text-left text-muted-foreground">Industry</th>
                                <th className="px-4 py-3 text-left text-muted-foreground">Jurisdiction</th>
                                <th className="px-4 py-3 text-right text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y" style={{ borderColor: "var(--border)" }}>
                            {data?.map((c) => (
                                <tr key={c.id} className="hover:bg-accent/5">
                                    <td className="px-4 py-3">
                                        <div className="flex flex-wrap gap-2">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/90 text-white font-bold">
                                                {c.avatar}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{c.name}</div>
                                                <p>{c.reg}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        {c.type}
                                    </td>
                                    <td className="px-4 py-3">
                                        {c.module}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button variant="ghost" size="sm" className="text-primary font-bold">View</Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

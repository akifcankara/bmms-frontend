"use client"

import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

const SAMPLE = [
    { id: "c1", avatar: 'AL', name: "AlphaTech Solutions LLC", type: "Technology", module: "PRO", reg: 'Reg: DM-2023-12890', },
    { id: "c2", avatar: 'GF', name: "Global Finance Partners DMCC", type: "Finance", module: "Expansion", reg: 'Reg: DMCC-2022-98432', },
    { id: "c3", avatar: 'MH', name: "MediHealth International LLC", type: "Healthcare", module: "MENA Leaders", reg: 'Reg: DM-2023-45678', },
]

export default function CompaniesTable({ data = SAMPLE }: { data?: Record<string, string>[] }) {
    return (
        <div className="w-full rounded-b-lg border bg-card/60 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="bg-muted">
                        <tr>
                            <th className="px-4 py-3 text-left text-muted-foreground">Company</th>
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
    )
}

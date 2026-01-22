import Calendar from "../icons/calendar"
import PlusIcon from "../icons/plus"
import RightArrow from "../icons/right-arrow"
import { Button } from "../ui/button"

type PartnerRow = {
    id: string
    name: string
    region: string
    revenue: string
    change: string
}

const rows: PartnerRow[] = [
    { id: "1", name: "Astra Partners", region: "EMEA", revenue: "$1,240,000", change: "+12%" },
    { id: "2", name: "Orion Group", region: "MENA", revenue: "$842,300", change: "+3%" },
    { id: "3", name: "NovaTech", region: "APAC", revenue: "$432,100", change: "-1%" },
]

export default function PartnerPerformance() {
    return (
        <section className="w-full rounded-lg border bg-card/60 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>Partner Performance</h3>
                    <p className="text-md text-muted-foreground">Top partners by revenue and recent growth</p>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        className="text-white px-10 py-5 cursor-pointer"
                        style={{
                            background: "linear-gradient(90deg, #00A0D2 10.38%, #05DC82 100%)",
                        }}
                    >
                        <PlusIcon /> Add Partner
                    </Button>
                    <Button
                        variant='outline'
                        className="text-black px-10 py-5 cursor-pointer"
                    >
                        <Calendar />
                        May, 2025
                    </Button>
                    <Button
                        variant='ghost'
                        className="text-primary font-bold px-10 py-5 cursor-pointer"
                    >
                        View All
                        <RightArrow />
                    </Button>
                    {/* <Button variant="ghost" size="sm">Filter</Button>
                    <Button variant="outline" size="sm">Export</Button> */}
                </div>
            </div>

            <div className="p-4">
                <div className="rounded-md border" style={{ borderColor: "var(--border)" }}>
                    <table className="min-w-full text-sm">
                        <thead className="bg-muted">
                            <tr>
                                <th className="px-4 py-3 text-left text-muted-foreground">Partner</th>
                                <th className="px-4 py-3 text-left text-muted-foreground">Region</th>
                                <th className="px-4 py-3 text-right text-muted-foreground">Revenue</th>
                                <th className="px-4 py-3 text-right text-muted-foreground">Change</th>
                                <th className="px-4 py-3 text-right text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((r) => (
                                <tr key={r.id} className="hover:bg-accent/5">
                                    <td className="px-4 py-3">{r.name}</td>
                                    <td className="px-4 py-3">{r.region}</td>
                                    <td className="px-4 py-3 text-right font-semibold">{r.revenue}</td>
                                    <td className={`px-4 py-3 text-right ${r.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>{r.change}</td>
                                    <td className="px-4 py-3 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button variant="ghost" size="sm">View</Button>
                                            <Button variant="outline" size="sm">Manage</Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
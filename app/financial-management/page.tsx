"use client"
import PaymentStatus from "@/components/financial-management/payment-status";
import RecentTransactions from "@/components/financial-management/recent-transactions";
import Stats from "@/components/financial-management/stats";
import TopRevenueClients from "@/components/financial-management/top-revenue-clients";
import { useBreadcrumb } from "@/store/breadcrumb";
import { useEffect } from "react";

export default function FinancialManagement() {

    const { setContent } = useBreadcrumb();

    useEffect(() => {
        setContent('Financial Management', 'Track revenue, payments, invoices, and financial performance', 'New Client');
    }, [])

    return <main className="flex flex-col gap-5">
        <Stats />
        <div className="flex flex-wrap gap-3">
            <PaymentStatus />
            <TopRevenueClients />
        </div>
        <RecentTransactions />
    </main>
}
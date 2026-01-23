"use client"
import { useEffect } from "react";
import Table from "@/components/task-management/table";
import Todo from "@/components/task-management/todo";
import { useBreadcrumb } from "@/store/breadcrumb";

export default function TaskManagement() {

    const { setContent } = useBreadcrumb();

    useEffect(() => {
        setContent('Task Managment', 'Organize and track all team tasks and assignments', 'New Client');
    }, [])

    return <main className="flex flex-col gap-4">
        <Todo />
        <div>
            <Table />
        </div>
    </main>
}
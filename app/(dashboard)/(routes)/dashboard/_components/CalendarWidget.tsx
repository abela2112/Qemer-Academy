"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const CalendarWidget = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getDayOfWeek = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    const today = new Date();
    
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const firstDayOfWeek = getDayOfWeek(currentDate.getFullYear(), currentDate.getMonth());

    const days = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
        days.push(<div key={`empty-${i}`} className="h-7 w-7" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isToday =
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();

        days.push(
            <div
                key={day}
                className={`
                    h-7 w-7 flex items-center justify-center rounded-full text-xs cursor-pointer transition-all
                    ${isToday 
                        ? "bg-sky-600 text-white font-bold shadow-sm" 
                        : "text-slate-600 hover:bg-sky-50 hover:text-sky-600"
                    }
                `}
            >
                {day}
            </div>
        );
    }

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 text-base">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <div className="flex gap-2">
                    <button 
                        onClick={prevMonth}
                        className="p-1 hover:bg-slate-100 rounded-full transition text-slate-500 hover:text-slate-900"
                        aria-label="Previous month"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button 
                        onClick={nextMonth}
                        className="p-1 hover:bg-slate-100 rounded-full transition text-slate-500 hover:text-slate-900"
                        aria-label="Next month"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {dayNames.map((day) => (
                    <div key={day} className="text-xs font-semibold text-slate-400 pb-2">
                        {day}
                    </div>
                ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1 place-items-center flex-1 content-start">
                {days}
            </div>
        </div>
    );
};


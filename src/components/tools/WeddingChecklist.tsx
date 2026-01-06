'use client';

import { useState, useEffect } from 'react';

type Task = {
    id: string;
    text: string;
    completed: boolean;
};

type TimelineGroup = {
    id: string;
    title: string;
    tasks: Task[];
};

const INITIAL_DATA: TimelineGroup[] = [
    {
        id: '6-months',
        title: '6 மாதங்களுக்கு முன் (6 Months Before)',
        tasks: [
            { id: 't1', text: 'திருமண தேதியை உறுதி செய்தல் (Fix Wedding Date)', completed: false },
            { id: 't2', text: 'திருமண பட்ஜெட்டை திட்டமிடுதல் (Budget Planning)', completed: false },
            { id: 't3', text: 'திருமண மண்டபம் மற்றும் ரிசப்ஷன் ஹால் முன்பதிவு (Book Venue)', completed: false },
            { id: 't4', text: 'விருந்தினர் பட்டியலை தயார் செய்தல் (Prepare Guest List)', completed: false },
        ]
    },
    {
        id: '3-months',
        title: '3 மாதங்களுக்கு முன் (3 Months Before)',
        tasks: [
            { id: 't5', text: 'தங்க நகைகள் வாங்குதல் (Purchase Gold)', completed: false },
            { id: 't6', text: 'பட்டுப்புடவை மற்றும் ஆடைகள் எடுத்தல் (Buy Wedding Clothes)', completed: false },
            { id: 't7', text: 'அழைப்பிதழ் டிசைன் மற்றும் அச்சிடுதல் (Print Invitations)', completed: false },
            { id: 't8', text: 'புகைப்பட கலைஞர் முன்பதிவு (Book Photographer)', completed: false },
        ]
    },
    {
        id: '1-month',
        title: '1 மாதத்திற்கு முன் (1 Month Before)',
        tasks: [
            { id: 't9', text: 'அழைப்பிதழ் கொடுத்தல் (Distribute Invites)', completed: false },
            { id: 't10', text: 'கேட்டரிங் மெனு முடிவு செய்தல் (Finalize Menu)', completed: false },
            { id: 't11', text: 'தாம்பூல பைகள் மற்றும் சீர்வரிசை பொருட்கள் (Purchase Essentials)', completed: false },
            { id: 't12', text: 'போக்குவரத்து ஏற்பாடுகள் (Book Transport)', completed: false },
        ]
    },
    {
        id: '1-week',
        title: '1 வாரத்திற்கு முன் (1 Week Before)',
        tasks: [
            { id: 't13', text: 'மணமக்கள் அழகு நிலையம் செல்லுதல் (Parlour Visit)', completed: false },
            { id: 't14', text: 'விருந்தினர் தங்கும் வசதியை சரிபார்த்தல் (Check Accommodation)', completed: false },
            { id: 't15', text: 'பூஜை பொருட்கள் மற்றும் மாலை ஏற்பாடு (Pooja Items)', completed: false },
            { id: 't16', text: 'அனைத்து முன்பதிவுகளையும் உறுதி செய்தல் (Confirm Bookings)', completed: false },
        ]
    }
];

export default function WeddingChecklist() {
    const [timeline, setTimeline] = useState<TimelineGroup[]>(INITIAL_DATA);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from LocalStorage
    useEffect(() => {
        const saved = localStorage.getItem('checklist_data');
        if (saved) {
            try {
                setTimeline(JSON.parse(saved));
            } catch (e) {
                console.error('Error loading checklist', e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to LocalStorage
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('checklist_data', JSON.stringify(timeline));
        }
    }, [timeline, isLoaded]);

    const toggleTask = (groupId: string, taskId: string) => {
        setTimeline(prev => prev.map(group => {
            if (group.id !== groupId) return group;
            return {
                ...group,
                tasks: group.tasks.map(task =>
                    task.id === taskId ? { ...task, completed: !task.completed } : task
                )
            };
        }));
    };

    const calculateProgress = () => {
        const total = timeline.reduce((acc, g) => acc + g.tasks.length, 0);
        const completed = timeline.reduce((acc, g) => acc + g.tasks.filter(t => t.completed).length, 0);
        return Math.round((completed / total) * 100);
    };

    if (!isLoaded) return <div className="p-8 text-center text-gray-500">ஏற்றப்படுகிறது...</div>;

    return (
        <div className="max-w-3xl mx-auto mb-12">
            {/* Progress Bar */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 sticky top-20 z-40">
                <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-700 font-bold">முன்னேற்றம் (Progress)</span>
                    <span className="text-2xl font-bold text-primary">{calculateProgress()}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className="bg-primary h-3 rounded-full transition-all duration-500"
                        style={{ width: `${calculateProgress()}%` }}
                    ></div>
                </div>
            </div>

            <div className="space-y-8">
                {timeline.map((group) => (
                    <div key={group.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900">{group.title}</h3>
                        </div>
                        <div className="p-6 space-y-4">
                            {group.tasks.map((task) => (
                                <label
                                    key={task.id}
                                    className={`flex items-start gap-4 p-3 rounded-lg cursor-pointer transition-colors ${task.completed ? 'bg-green-50' : 'hover:bg-gray-50'}`}
                                >
                                    <div className="relative flex items-center mt-1">
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => toggleTask(group.id, task.id)}
                                            className="w-5 h-5 border-gray-300 rounded text-primary focus:ring-primary"
                                        />
                                    </div>
                                    <span className={`text-base leading-relaxed ${task.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                                        {task.text}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm border border-blue-100">
                <span className="mr-2">💡</span>
                உங்கள் முன்னேற்றம் இந்த பிரவுசரில் (Browser) தானாகவே சேமிக்கப்படும்.
            </div>
        </div>
    );
}

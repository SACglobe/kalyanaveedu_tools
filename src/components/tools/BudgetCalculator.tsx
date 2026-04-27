'use client';

import { useState } from 'react';

type BudgetCategory = {
    id: string;
    label: string;
    amount: number;
    icon: string;
};

const INITIAL_CATEGORIES = [
    { id: 'gold', label: 'தங்கம் & நகை (Gold & Jewelry)', amount: 0, icon: '👑' },
    { id: 'venue', label: 'மண்டபம் & வாடகை (Venue)', amount: 0, icon: 'uD83C\uDFDB️' },
    { id: 'food', label: 'உணவு & கேட்டரிங் (Food)', amount: 0, icon: '🍱' },
    { id: 'clothes', label: 'ஆடைகள் & பட்டுப்புடவை (Clothes)', amount: 0, icon: '👗' },
    { id: 'photo', label: 'புகைப்படம் & வீடியோ (Photography)', amount: 0, icon: '📸' },
    { id: 'decor', label: 'அலங்காரம் (Decoration)', amount: 0, icon: '🌸' },
    { id: 'others', label: 'மற்றவை (Others)', amount: 0, icon: '📦' },
];

export default function BudgetCalculator() {
    const [categories, setCategories] = useState<BudgetCategory[]>(INITIAL_CATEGORIES);
    const [totalBudget, setTotalBudget] = useState<number>(0);

    const handleInputChange = (id: string, value: string) => {
        const numValue = value === '' ? 0 : parseInt(value);

        const newCategories = categories.map(cat =>
            cat.id === id ? { ...cat, amount: isNaN(numValue) ? 0 : numValue } : cat
        );

        setCategories(newCategories);

        const newTotal = newCategories.reduce((sum, cat) => sum + cat.amount, 0);
        setTotalBudget(newTotal);
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
            <div className="grid lg:grid-cols-2 gap-12">

                {/* Input Section */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-4">
                        செலவு விவரங்கள் (ரூபாயில்)
                    </h3>

                    <div className="space-y-4">
                        {categories.map((cat) => (
                            <div key={cat.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                                <label className="md:col-span-1 text-gray-700 font-medium flex items-center gap-2">
                                    <span>{cat.icon}</span>
                                    {cat.label}
                                </label>
                                <div className="md:col-span-2 relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                                    <input
                                        type="number"
                                        value={cat.amount || ''}
                                        onChange={(e) => handleInputChange(cat.id, e.target.value)}
                                        placeholder="0"
                                        className="w-full pl-8 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Result Section */}
                <div className="bg-gray-50 p-6 rounded-2xl h-fit sticky top-24">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                        மொத்த பட்ஜெட் விவரம்
                    </h3>

                    <div className="text-center mb-8">
                        <div className="text-gray-500 text-sm mb-1">மதிப்பிடப்பட்ட மொத்த செலவு</div>
                        <div className="text-4xl font-bold text-primary">
                            {formatCurrency(totalBudget)}
                        </div>
                    </div>

                    <div className="space-y-3">
                        {categories.map((cat) => (
                            cat.amount > 0 && (
                                <div key={cat.id} className="space-y-1">
                                    <div className="flex justify-between text-sm text-gray-700">
                                        <span>{cat.label}</span>
                                        <span className="font-medium">{formatCurrency(cat.amount)}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-primary h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${(cat.amount / totalBudget) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    {totalBudget > 0 && (
                        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-yellow-800">
                            <span className="font-bold block mb-1">உதவிக்குறிப்பு:</span>
                            எதிர்பாராத செலவுகளுக்காக (Emergency Funds) மொத்த தொகையில் <span className="font-bold">10%</span> கூடுதலாக கையில் வைத்திருப்பது நல்லது.
                            <br />
                            <span className="block mt-2 font-bold text-lg">
                                பரிந்துரைக்கப்படும் கையிருப்பு: {formatCurrency(totalBudget * 1.1)}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

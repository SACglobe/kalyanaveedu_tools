'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Using Formspree endpoint (free form service from myutilitybox)
            const response = await fetch('https://formspree.io/f/xzdlrqpq', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    site: 'kalyanaveedu.in'
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                எங்களை தொடர்பு கொள்ளுங்கள் (Contact Us)
            </h1>

            <div className="text-center mb-10">
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    கல்யாண வீடு குறித்த உங்கள் கேள்விகள், புதிய கருவிகளுக்கான கருத்துக்கள், அல்லது பரிந்துரைகளுக்கு
                    கீழே உள்ள படிவத்தைப் பயன்படுத்தி எங்களை தொடர்பு கொள்ளலாம்.
                </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-start">
                {/* Contact Form */}
                <div className="md:col-span-3 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span>📝</span> தொடர்பு படிவம்
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                                பெயர் (Name) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                placeholder="உங்கள் பெயர்"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                மின்னஞ்சல் (Email) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                placeholder="உங்கள் மின்னஞ்சல்"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                                தலைப்பு (Subject) <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                            >
                                <option value="">தலைப்பை தேர்ந்தெடுக்கவும்</option>
                                <option value="பொதுவான கேள்வி (General Inquiry)">பொதுவான கேள்வி (General Inquiry)</option>
                                <option value="தொழில்நுட்ப பிரச்சனை (Technical Issue)">தொழில்நுட்ப பிரச்சனை (Technical Issue)</option>
                                <option value="புதிய அம்சம் (Feature Request)">புதிய அம்சம் (Feature Request)</option>
                                <option value="கருத்து / பரிந்துரை (Feedback)">கருத்து / பரிந்துரை (Feedback)</option>
                                <option value="கூட்டாண்மை (Partnership)">கூட்டாண்மை (Partnership)</option>
                                <option value="மற்றவை (Other)">மற்றவை (Other)</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                                உங்கள் செய்தி (Message) <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none outline-none"
                                placeholder="உங்கள் செய்தியை இங்கே எழுதவும்..."
                            />
                        </div>

                        {submitStatus === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl animate-in fade-in">
                                <p className="font-bold flex items-center gap-1"><span>✓</span> வெற்றி!</p>
                                <p className="text-sm">உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது. விரைவில் பரிசீலிப்போம்.</p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl animate-in fade-in">
                                <p className="font-bold">பிழை!</p>
                                <p className="text-sm">செய்தியை அனுப்புவதில் சிக்கல் ஏற்பட்டது. சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-primary/20 cursor-pointer"
                        >
                            {isSubmitting ? 'அனுப்புகிறது...' : 'செய்தியை அனுப்பவும் →'}
                        </button>
                    </form>
                </div>

                {/* Helpful info side panel */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/70 p-6 rounded-2xl border border-blue-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span>❓</span> அடிக்கடி கேட்கப்படும் கேள்விகள்
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                            தொடர்பு கொள்வதற்கு முன், எங்கள் FAQ பக்கத்தைப் பார்க்கவும். உங்கள் கேள்விக்கான விடை ஏற்கனவே அங்கு இருக்கலாம்.
                        </p>
                        <a href="/faq" className="inline-block bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-accent transition">
                            FAQ பார்க்கவும் →
                        </a>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
                        <h3 className="font-bold text-gray-900 flex items-center gap-2">
                            <span>💡</span> குறிப்பு & பங்களிப்புகள்:
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            தொழில்நுட்ப பிரச்சனைகளுக்கு, தயவுசெய்து உங்கள் பிரவுசர் வகை (Chrome, Safari), சாதன வகை (Mobile, Desktop), மற்றும் பிழை விவரங்களை குறிப்பிடவும்.
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            கல்யாண வீடு தளம் முற்றிலும் இலவசமாக வழங்கப்படுகிறது. இதில் புதிய திருமண கருவிகள் அல்லது தமிழ் பஞ்சாங்க கணக்கீடுகள் சார்ந்த ஆலோசனைகள் இருந்தால் தாராளமாக பகிர்ந்து கொள்ளலாம்.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

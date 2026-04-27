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

        // Simulate form submission (replace with actual endpoint later)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form submitted:', formData);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                எங்களை தொடர்பு கொள்ளுங்கள் (Contact Us)
            </h1>

            <div className="text-center mb-12">
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    கல்யாண வீடு குறித்த உங்கள் கேள்விகள், கருத்துக்கள், அல்லது பரிந்துரைகளுக்கு
                    எங்களை தொடர்பு கொள்ளுங்கள். உங்கள் செய்திக்கு 24-48 மணி நேரத்திற்குள் பதிலளிப்போம்.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">தொடர்பு படிவம்</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            >
                                <option value="">தலைப்பை தேர்ந்தெடுக்கவும்</option>
                                <option value="general">பொதுவான கேள்வி (General Inquiry)</option>
                                <option value="technical">தொழில்நுட்ப பிரச்சனை (Technical Issue)</option>
                                <option value="feature">புதிய அம்சம் (Feature Request)</option>
                                <option value="feedback">கருத்து / பரிந்துரை (Feedback)</option>
                                <option value="partnership">கூட்டாண்மை (Partnership)</option>
                                <option value="other">மற்றவை (Other)</option>
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
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                placeholder="உங்கள் செய்தியை இங்கே எழுதவும்..."
                            />
                        </div>

                        {submitStatus === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                                <p className="font-bold">வெற்றி! ✓</p>
                                <p className="text-sm">உங்கள் செய்தி அனுப்பப்பட்டது. விரைவில் பதிலளிப்போம்.</p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                                <p className="font-bold">பிழை!</p>
                                <p className="text-sm">குறுகிய காலத்தில் மீண்டும் முயற்சிக்கவும்.</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'அனுப்புகிறது...' : 'செய்தியை அனுப்பவும் →'}
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">தொடர்பு விவரங்கள்</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-white p-3 rounded-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">மின்னஞ்சல் (Email)</p>
                                    <a href="mailto:myutilitybox.helpdesk@gmail.com"
                                        className="text-primary hover:underline">
                                        myutilitybox.helpdesk@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-white p-3 rounded-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">இடம் (Location)</p>
                                    <p className="text-gray-700">
                                        Chennai, Tamil Nadu<br />
                                        India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-white p-3 rounded-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">பதில் நேரம் (Response Time)</p>
                                    <p className="text-gray-700">
                                        24-48 மணி நேரத்திற்குள்<br />
                                        (வேலை நாட்களில்)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">அடிக்கடி கேட்கப்படும் கேள்விகள்</h3>
                        <p className="text-gray-700 mb-4">
                            தொடர்பு கொள்வதற்கு முன், எங்கள் FAQ பக்கத்தை பார்க்கவும்.
                            உங்கள் கேள்விக்கான பதில் ஏற்கனவே இருக்கலாம்.
                        </p>
                        <a href="/faq" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition">
                            FAQ பார்க்கவும் →
                        </a>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-gray-900 mb-2">💡 குறிப்பு:</h3>
                        <p className="text-sm text-gray-700">
                            தொழில்நுட்ப பிரச்சனைகளுக்கு, தயவுசெய்து உங்கள் பிரவுசர் வகை (Chrome, Firefox, Safari),
                            சாதன வகை (mobile, desktop), மற்றும் பிழை விவரங்களை குறிப்பிடவும்.
                            இது எங்களுக்கு விரைவாக உதவ உதவும்.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

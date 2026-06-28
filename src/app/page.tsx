import Link from 'next/link';
import { SITE_CONFIG, TOOLS_LIST } from '@/lib/constants';
import { BLOG_POSTS } from '@/lib/blog-data';

import type { Metadata } from 'next';
import Schema from '@/components/SEO/Schema';
import UpcomingMuhurtham from '@/components/tools/UpcomingMuhurtham';

export const metadata: Metadata = {
  title: 'கல்யாண வீடு | Tamil Wedding Planner & Subha Muhurtham Dates',
  description: 'திருமண பட்ஜெட் பிளானர், சுப முகூர்த்த தேதிகள் மற்றும் தமிழ் நாட்காட்டி கருவிகள் அடங்கிய இலவச திருமண திட்டமிடல் தளம்.',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-12">
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'முகப்பு', item: '/' },
            { name: 'திருமண கருவிகள்', item: '/tools' }
          ]
        }}
      />
      <Schema 
        type="ItemList"
        data={{
          name: "திருமண திட்டமிடல் கருவிகள்",
          description: "தமிழர்களின் திருமணத்தை எளிமையாக்கும் 7 இலவச கருவிகள்",
          items: TOOLS_LIST
        }}
      />
      {/* Individual Tool Software Schema for Search Dominance */}
      {TOOLS_LIST.map((tool) => (
        <Schema 
          key={tool.path}
          type="SoftwareApplication"
          data={{
            title: tool.title,
            description: tool.description
          }}
        />
      ))}
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center space-y-8 animate-fade-up">
        <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-4 animate-float">
          ✨ தமிழர்களின் நம்பகமான திருமண தளம்
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
          <span className="block mb-2">மங்களகரமான</span>
          <span className="text-primary">{SITE_CONFIG.name}</span>
          <span className="block italic text-xl md:text-2xl font-bold text-gray-500 mt-4 font-sans tracking-normal">
            Your Trusted Wedding Planning Partner
          </span>
        </h1>
        <div className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed space-y-4">
          <p className="font-medium">
            திருமண ஏற்பாடுகள் என்பது ஒரு புனிதமான பயணம். அதை எளிமையாகவும், 
            நேர்த்தியாகவும் திட்டமிட கல்யாண வீடு உங்களுக்கு உதவுகிறது.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            href="/tools"
            className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-accent transition-all hover:scale-105 shadow-[0_10px_40px_-10px_rgba(211,47,47,0.4)] active:scale-95"
          >
            இலவச கருவிகள் →
          </Link>
          <Link
            href="/blog"
            className="bg-white text-gray-800 border border-gray-200 px-10 py-4 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            கட்டுரைகள்
          </Link>
        </div>
      </section>

      {/* Trust & Authority Section (E-E-A-T Boost) */}
      <section className="container mx-auto px-4">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-orange-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                குடும்பங்களின் நம்பிக்கை, <br/>
                <span className="text-primary">எங்களின் பலம்.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                கல்யாண வீடு தளம் வெறும் மென்பொருள் அல்ல; இது பல தசாப்த கால திருமண 
                பாரம்பரியம் மற்றும் நவீன தொழில்நுட்பத்தின் சங்கமம். எங்கள் குழுவில் 
                உள்ள பண்பாட்டு வல்லுநர்கள் மற்றும் மென்பொருள் பொறியாளர்கள் இணைந்து 
                ஒவ்வொரு தகவலையும் சரிபார்த்து வழங்குகிறோம்.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-black text-primary">100%</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">துல்லியம்</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">0%</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">கட்டணம்</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">∞</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">நம்பகத்தன்மை</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-6 rounded-3xl space-y-2 hover:bg-orange-100 transition-colors">
                <div className="text-2xl">🏛️</div>
                <div className="font-bold text-gray-900">பாரம்பரியம்</div>
                <div className="text-xs text-gray-500">பஞ்சாங்க முறைப்படி</div>
              </div>
              <div className="bg-red-50 p-6 rounded-3xl space-y-2 hover:bg-red-100 transition-colors">
                <div className="text-2xl">🛡️</div>
                <div className="font-bold text-gray-900">பாதுகாப்பு</div>
                <div className="text-xs text-gray-500">SSL என்கிரிப்ஷன்</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-3xl space-y-2 hover:bg-yellow-100 transition-colors">
                <div className="text-2xl">✨</div>
                <div className="font-bold text-gray-900">நேர்த்தி</div>
                <div className="text-xs text-gray-500">சிறந்த வடிவமைப்பு</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-3xl space-y-2 hover:bg-blue-100 transition-colors">
                <div className="text-2xl">👨‍👩‍👧‍👦</div>
                <div className="font-bold text-gray-900">சமூகம்</div>
                <div className="text-xs text-gray-500">மக்கள் அங்கீகாரம்</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Muhurtham Dates (Crawler Highway) */}
      <UpcomingMuhurtham />

      {/* Tools Grid Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              டிஜிட்டல் திருமண கருவிகள்
            </h2>
            <p className="text-gray-600 text-lg">
              ஒரு திருமணத்தை வெற்றிகரமாக நடத்த சரியான திட்டமிடல் அவசியம். 
              கணக்கீடு முதல் முகூர்த்தம் பார்ப்பது வரை அனைத்தும் இலவசம்.
            </p>
          </div>
          <Link href="/tools" className="text-primary font-bold flex items-center gap-2 group">
            அனைத்து கருவிகள் <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS_LIST.map((tool, index) => (
            <Link
              key={tool.path}
              href={tool.path}
              className="group bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] border border-orange-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(211,47,47,0.15)] hover:border-primary/20 transition-all duration-500 animate-fade-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-8 bg-gray-50 w-20 h-20 rounded-[2rem] flex items-center justify-center group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-500">
                {tool.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-md font-medium">
                {tool.description}.
              </p>
              <div className="mt-8 flex items-center text-primary font-black text-sm uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                தொடக்க <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 origin-right"></div>
        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">
            ஏன் கல்யாண வீடு?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/50">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-black">100% இலவசம்</h3>
              <p className="text-gray-600 text-sm leading-relaxed">எங்கள் அனைத்து சேவைகளும் எக்காலத்திலும் முற்றிலும் இலவசம். எந்த மறைமுகக் கட்டணமும் இல்லை.</p>
            </div>
            <div className="space-y-4 p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/50">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-black">எளிய தமிழ்</h3>
              <p className="text-gray-600 text-sm leading-relaxed">அனைவரும் எளிதாகப் புரிந்து கொள்ளும் வகையில் எளிய தமிழ் மொழியில் வழங்குகிறோம்.</p>
            </div>
            <div className="space-y-4 p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/50">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-black">பாதுகாப்பு</h3>
              <p className="text-gray-600 text-sm leading-relaxed">உங்கள் தனிப்பட்ட தரவுகள் உயர்தர SSL என்கிரிப்ஷன் மூலம் பாதுகாக்கப்படுகிறது.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-4">குடும்பங்கள் கூறுவது</h2>
          <div className="flex justify-center gap-1 text-secondary mb-4">
            {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-xl">★</span>)}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative italic">
            <span className="absolute top-4 left-4 text-primary opacity-20 text-6xl font-serif">"</span>
            <p className="text-gray-600 relative z-10">
              பட்ஜெட் பிளானர் மிகவும் பயனுள்ளதாக இருந்தது. திருமண செலவுகளை முன்கூட்டியே கணிக்க முடிந்தது. எளிய தமிழ் விளக்கம் மிகவும் அருமை.
            </p>
            <div className="mt-6 font-bold text-gray-900 not-italic">— கவிதா & செந்தமிழன், சென்னை</div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative italic">
            <span className="absolute top-4 left-4 text-primary opacity-20 text-6xl font-serif">"</span>
            <p className="text-gray-600 relative z-10">
              சுப முகூர்த்த தேதிகளை தேடிக்கொண்டிருந்த எனக்கு இந்த தளம் ஒரு பெரிய வரப்பிரசாதம். எல்லா தகவல்களும் ஒரே இடத்தில் தெளிவாக உள்ளது.
            </p>
            <div className="mt-6 font-bold text-gray-900 not-italic">— ராஜேஷ் கண்ணா, மதுரை</div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Preview */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">சமீபத்திய கட்டுரைகள்</h2>
              <p className="text-gray-500 font-medium">திருமணக் கலை மற்றும் பாரம்பரியம் பற்றி அறியுங்கள்</p>
            </div>
            <Link href="/blog" className="text-primary font-bold hover:underline hidden sm:block">அனைத்து கட்டுரைகளும் →</Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {BLOG_POSTS.slice(0, 6).map((post, index) => (
              <Link 
                key={post.slug}
                href={post.slug} 
                className={`group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-gray-50 block animate-scale-in ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''}`}
              >
                <div className={`w-12 h-1 mb-6 group-hover:w-24 transition-all ${
                  post.category === 'Astrology' ? 'bg-secondary' : 
                  post.category === 'Finance' ? 'bg-accent' : 'bg-primary'
                }`}></div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{post.category}</span>
                <h3 className="text-xl font-black mt-3 mb-4 text-gray-900 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Kalyanaveedu Rich Content for AdSense and SEO */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-100 text-gray-700">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-black text-gray-900 mb-6">கல்யாண வீடு - உங்கள் திருமண திட்டமிடல் துணைக் கருவி</h2>
          <p className="leading-relaxed">
            கல்யாண வீடு என்பது தமிழர்களின் பாரம்பரியம் மற்றும் நவீன தொழில்நுட்பங்களை இணைத்து உருவாக்கப்பட்ட ஒரு இலவச திருமண திட்டமிடல் தளமாகும். ஒரு திருமணத்தை வெற்றிகரமாக நடத்துவதற்குப் பல்வேறு பட்ஜெட் கணக்கீடுகள், மங்களகரமான தேதிகள் தேர்வு மற்றும் அரசு சார்ந்த சட்டப்பூர்வ தேவைகள் ஆகியவை தேவைப்படுகின்றன. எங்கள் தளம் இந்த அனைத்து உதவிகளையும் ஒரே இடத்தில் வழங்குகிறது.
          </p>
          <p className="leading-relaxed">
            எங்கள் தளத்தின் முக்கிய சேவைகள்:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>பட்ஜெட் பிளானர் (Wedding Budget Calculator):</strong> திருமண செலவுகளை ஒவ்வொரு பிரிவாக பிரித்து, உங்கள் வரம்பிற்குள் திட்டமிட உதவும் ஒரு அருமையான கருவி.</li>
            <li><strong>சுப முகூர்த்த நாட்கள் (Subha Muhurtham Dates):</strong> பஞ்சாங்கம் மற்றும் தமிழ் நாட்காட்டி அடிப்படையில் ஒவ்வொரு மாதத்தின் மங்களகரமான தேதிகள், லக்னம் மற்றும் நல்ல நேரங்கள் குறித்த முழுமையான விபரம்.</li>
            <li><strong>சட்டப்பூர்வ வயது தகுதி (Legal Marriage Age India):</strong> இந்திய சட்டப்படி திருமணத்திற்கான தகுதி வயது மற்றும் சான்றிதழ் பதிவு செய்ய தேவையான ஆவணங்கள் விபரம்.</li>
          </ul>
          <p className="leading-relaxed">
            தமிழ் குடும்பங்கள் தங்களின் திருமணப் பணிகளை எந்தவித பதற்றமும் இல்லாமல் மகிழ்ச்சியாகவும் திட்டமிட்டபடியும் நடத்தி முடிக்க எங்களது இலவச கருவிகள் மற்றும் ஆழமான வழிகாட்டி கட்டுரைகள் பக்கபலமாக இருக்கும்.
          </p>
        </div>
      </section>
    </div>
  );
}

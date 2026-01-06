import Link from 'next/link';
import { SITE_CONFIG, TOOLS_LIST } from '@/lib/constants';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          <span className="text-primary block mb-2">{SITE_CONFIG.name}</span>
          உங்கள் திருமண திட்டமிடல் தோழன்
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          தமிழ் குடும்பங்களுக்கான பிரத்யேக திருமண கருவிகள்.
          ஜாதகம், பட்ஜெட் மற்றும் திருமண ஏற்பாடுகளை எளிமையாக்க உதவும் தளம்.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/tools"
            className="bg-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-accent transition-transform hover:scale-105 shadow-lg"
          >
            கருவிகளைப் பார்க்க
          </Link>
          <Link
            href="/about"
            className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors"
          >
            மேலும் அறிய
          </Link>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            பயனுள்ள திருமண கருவிகள்
          </h2>
          <p className="text-gray-600">
            திருமண ஏற்பாடுகளை எளிமையாக்க நாங்கள் வழங்கும் இலவச சேவைகள்
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS_LIST.map((tool) => (
            <Link
              key={tool.path}
              href={tool.path}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-4xl mb-6 bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {tool.description}
              </p>
              <div className="mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                பயன்படுத்தவும் <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ஏன் கல்யாண வீடு?
          </h2>
          <p className="text-gray-700 text-lg leading-loose mb-8">
            எங்கள் நோக்கம் தமிழர்களின் திருமண கலாச்சாரத்தை மதித்து, நவீன தொழில்நுட்ப உதவியுடன்
            திருமண ஏற்பாடுகளை எளிமையாக்குவதாகும். இது வெறும் கருவிகள் மட்டுமல்ல,
            திருமண பந்தத்தின் முக்கியத்துவத்தை உணர்த்தும் ஒரு முயற்சி.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="space-y-2">
              <div className="font-bold text-lg text-primary">100% இலவசம்</div>
              <p className="text-sm text-gray-500">அனைத்து சேவைகளும் முற்றிலும் இலவசம்</p>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-lg text-primary">தமிழ் வழி</div>
              <p className="text-sm text-gray-500">முழுக்க முழுக்க எளிய தமிழில்</p>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-lg text-primary">பாதுகாப்பு</div>
              <p className="text-sm text-gray-500">உங்கள் தரவுகள் அனைத்தும் பாதுகாப்பானவை</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">LI</span>
            </div>
            <span className="text-lg font-bold">LOCKED IN</span>
          </div>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-gray-600">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            
            <p>
              This Privacy Policy describes how Locked In (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, 
              uses, and shares your personal information when you use our mobile application 
              and related services.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p>
            Locked In does not collect, use, store, or share any personal information. All data remains on your device.
            </p>
            
            
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; 
              date. We encourage you to review this Privacy Policy periodically.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">Email:</p>
              <a href="mailto:brochop02@gmail.com" className="text-red-600 hover:text-red-700 underline">
                colescarter@gmail.com
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                This Privacy Policy is effective as of the date listed above and applies to all 
                users of the Locked In mobile application.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
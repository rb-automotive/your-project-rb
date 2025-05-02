// --- File: src/app/page.tsx (Homepage) ---
import React from 'react';
// Import components using RELATIVE paths
import Button from '@/components/Button';
import ImageWithFallback from '@/components/ImageWithFallback';
// Other imports...

// --- Constants (remain the same) ---
const HERO_LOGO_URL = "/images/RB AUTO LOGO 1.png"; // Use your updated logo path
const PHONE_NUMBER = "0492 992 211";
const BRAND_COLOR = 'red';

// Icons (remain the same)
const IconCalendarPlus = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>;
const IconPhoneCall = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconWrench = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const IconDiagnostics = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mx-auto h-10 w-10 text-${BRAND_COLOR}-600 mb-3`}><path d="M12 12v4h4"/><path d="M12 12h4v4"/><path d="M12 12H8v4"/><path d="M12 12v-4H8"/><path d="M12 12v-4h4"/><path d="M12 12H8v-4"/><path d="M12 12h4v-4"/><path d="M12 12v4H8"/><circle cx="12" cy="12" r="10"/></svg>;
const IconOil = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mx-auto h-10 w-10 text-${BRAND_COLOR}-600 mb-3`}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const IconEmergency = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mx-auto h-10 w-10 text-${BRAND_COLOR}-600 mb-3`}><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m12 2 4 4"/><path d="M12 22v-4"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="m18 18 4 4"/><path d="m6 6 4 4"/></svg>;


// Homepage Component
export default function HomePage() {
  return (
    <>
      {/* Hero Section (remains the same) */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                    <div className="space-y-4">
                         <span className={`inline-block rounded-lg bg-${BRAND_COLOR}-600 px-3 py-1 text-sm text-white mb-2`}>
                            Your Trusted Mobile Mechanic
                         </span>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white font-roboto-slab">
                            Expert Car Care, Delivered.
                        </h1>
                        <p className="max-w-[600px] text-gray-300 md:text-xl lg:text-lg xl:text-xl mx-auto lg:mx-0">
                            RB Automotive brings reliable, 24/7 mobile mechanic services right to your doorstep across Perth & beyond. Quality repairs, diagnostics, and servicing with ultimate convenience.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                        <Button variant="primary" size="lg" href="/contact">
                            Book Online Now <IconCalendarPlus />
                        </Button>
                        <Button variant="secondary" size="lg" asChild>
                            <a href={`tel:${PHONE_NUMBER}`}>
                                Call Us <IconPhoneCall />
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center mt-8 lg:mt-0">
                     <ImageWithFallback
                        src={HERO_LOGO_URL}
                        alt="RB Automotive Mobile Mechanic Service Van or Logo"
                        className="max-w-md w-full lg:max-w-lg object-contain filter drop-shadow-lg"
                        width={500} height={300}
                        fallbackText="RB Auto Logo"
                     />
                </div>
            </div>
        </div>
      </section>

      {/* Brief Services Overview Section (remains the same) */}
      <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 font-roboto-slab">Our Core Services</h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">From emergency repairs to routine maintenance, we've got you covered.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center p-4 transition-transform hover:scale-105">
                      <IconWrench className={`mx-auto h-10 w-10 text-${BRAND_COLOR}-600 mb-3`} />
                      <h3 className="font-semibold mb-1 font-roboto-slab">General Repairs</h3>
                      <p className="text-sm text-gray-600">Suspension, brakes, cooling systems & more.</p>
                  </div>
                   <div className="text-center p-4 transition-transform hover:scale-105">
                      <IconDiagnostics />
                      <h3 className="font-semibold mb-1 font-roboto-slab">Diagnostics</h3>
                      <p className="text-sm text-gray-600">Check engine light, electrical issues.</p>
                  </div>
                   <div className="text-center p-4 transition-transform hover:scale-105">
                      <IconOil />
                      <h3 className="font-semibold mb-1 font-roboto-slab">Servicing</h3>
                      <p className="text-sm text-gray-600">Logbook maintenance, oil changes.</p>
                  </div>
                   <div className="text-center p-4 transition-transform hover:scale-105">
                      <IconEmergency />
                      <h3 className="font-semibold mb-1 font-roboto-slab">24/7 Emergency</h3>
                      <p className="text-sm text-gray-600">Breakdowns, battery jumps & more.</p>
                  </div>
              </div>
              <div className="mt-12">
                  <Button href="/services" variant="outline" size="lg">View All Services</Button>
              </div>
          </div>
      </section>
    </>
  );
}

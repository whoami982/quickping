/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ReactNode, useEffect } from 'react';
import { 
  Download, 
  Menu, 
  Cpu, 
  Zap, 
  Layers, 
  ExternalLink, 
  Bot, 
  Radio,
  ChevronRight,
  ShieldCheck,
  Settings,
  PackageCheck,
  Bell,
  CheckCircle2
} from 'lucide-react';
import { cn } from './lib/utils';

const IMAGES = {
  LOGO: "/logo.png",
  DOWNLOAD_HERO: "/hero.png",
  STEP1: "/step1.jpg",
  STEP2_A: "/step2a.jpg",
  STEP2_B: "/step2b.jpg",
  STEP3: "/step3.jpg",
  STEP4: "/step4.jpg",
  STEP5: "/step5.jpg",
  DEV: "/dev.png"
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-primary/10">
        <div className="px-6 h-16 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <img 
                src={IMAGES.LOGO} 
                alt="QuickPing Logo" 
                className="w-6 h-6 object-contain drop-shadow-[0_0_8px_rgba(123,231,249,0.4)]"
              />
            </div>
            <span className="font-headline font-bold text-lg tracking-tight">
              Quick<span className="text-primary">Ping</span>
            </span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors">
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
      </header>

      <main className="pb-20 pt-16">
        {/* Hero Section */}
        <section className="relative px-6 py-16 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 radial-bg -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center bg-surface-container">
              <Radio className="w-12 h-12 text-primary animate-pulse" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-label font-bold tracking-widest uppercase text-primary">v0.0.1 Stable</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4 leading-tight"
          >
            Precision Network <br/><span className="text-primary">Intelligence.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-on-surface-variant text-sm md:text-base max-w-xs md:max-w-md mb-10 leading-relaxed"
          >
            Experience ultra-low latency monitoring designed for the Hutch Sri Lanka high-speed data ecosystem.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full flex flex-col gap-4 items-center"
          >
            <a 
              href="/quickping.apk" 
              download="QuickPing.apk"
              className="w-full max-w-sm neon-btn py-4 rounded-xl flex items-center justify-center gap-3 no-underline"
            >
              <Download className="w-5 h-5 text-primary" />
              <span className="font-bold text-primary tracking-wide uppercase text-sm">Download APK</span>
            </a>
            <span className="text-[11px] font-label text-on-surface-variant flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Optimized for Android 12+ (SDK 31)
            </span>
          </motion.div>
        </section>

        {/* Installation Guide */}
        <section className="bg-surface-container-lowest/50 py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-headline font-bold mb-2">Installation Guide</h2>
              <p className="text-sm text-on-surface-variant">Get started in less than 60 seconds.</p>
            </div>

            <div className="space-y-24">
              {/* Step 1 */}
              <Step 
                number="01" 
                title="Download APK" 
                description="Click the download button above to begin. Once the download is complete, you will see a notification to open the file."
                image={IMAGES.DOWNLOAD_HERO}
                subImage={IMAGES.STEP1}
                subDescription="Tap 'Open' on the download notification to proceed with the installation."
              />

              {/* Step 2 */}
              <Step 
                number="02" 
                title="Allow Unknown Sources" 
                description="This security prompt appears after clicking 'Open' on the downloaded file. Go to Settings and toggle 'Allow permission' to install apps from your browser source."
                images={[IMAGES.STEP2_A, IMAGES.STEP2_B]}
                icon={<Settings className="w-5 h-5 text-primary" />}
              />

              {/* Step 3 */}
              <Step 
                number="03" 
                title="Install Package" 
                description="Confirm the installation by tapping 'Install' when the system prompt appears."
                image={IMAGES.STEP3}
                icon={<PackageCheck className="w-5 h-5 text-primary" />}
              />

              {/* Step 4 */}
              <Step 
                number="04" 
                title="Go Live" 
                description="App installed successfully. Tap 'Open' to start monitoring your network performance."
                image={IMAGES.STEP4}
                icon={<CheckCircle2 className="w-5 h-5 text-primary" />}
              />

              {/* Step 5 */}
              <Step 
                number="05" 
                title="Grant Permissions" 
                description="After installing, tap 'Allow' to enable critical network monitoring notifications and status bar updates."
                image={IMAGES.STEP5}
                icon={<Bell className="w-5 h-5 text-primary" />}
              />
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <h2 className="text-xs font-headline uppercase tracking-[0.3em] text-primary/60 text-center mb-12">Core Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Cpu className="w-6 h-6" />}
              title="Real-Time Ping"
              description="Continuous sub-millisecond latency tracking with visual wave patterns."
              footer={
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] font-mono text-primary uppercase">Precision Log</span>
                  <span className="text-[10px] font-mono text-on-surface-variant">24ms AVG</span>
                </div>
              }
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="One-Tap Reset"
              description="Instantly refresh cellular handshake to force better signal routing."
            />
            <FeatureCard 
              icon={<Layers className="w-6 h-6" />}
              title="Background Monitor"
              description="Stay updated with a persistent status bar notification while gaming."
            />
          </div>
        </section>

        {/* About Developer */}
        <section className="px-6 py-20 max-w-3xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-[2.5rem] p-10 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full -mr-24 -mt-24" />
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-28 h-28 rounded-full p-1.5 border-2 border-primary/20 mb-8 bg-surface-container overflow-hidden">
                <img 
                  src={IMAGES.DEV} 
                  alt="Randika" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary mb-3">Developed By</h3>
              <h2 className="text-3xl font-headline font-bold mb-4">Randika</h2>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-10 max-w-sm">
                Specializing in network optimization and high-performance Android utility development.
              </p>
              <a 
                href="https://randika.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group"
              >
                randika.xyz
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-primary/5 text-center">
        <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
          © 2026 QuickPing Intelligence • Built for Hutch SL
        </p>
      </footer>
    </div>
  );
}

function Step({ 
  number, 
  title, 
  description, 
  image, 
  images, 
  subImage, 
  subDescription,
  icon 
}: { 
  number: string; 
  title: string; 
  description: string; 
  image?: string; 
  images?: string[];
  subImage?: string;
  subDescription?: string;
  icon?: ReactNode;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-8"
    >
      <div className="flex items-center gap-6">
        <span className="text-6xl font-black text-primary/10 font-headline leading-none">{number}</span>
        <div className="flex items-center gap-3">
          {icon}
          <h4 className="text-2xl font-bold tracking-tight">{title}</h4>
        </div>
      </div>
      
      <div className="space-y-8">
        {image && (
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-colors" />
            <img 
              src={image} 
              alt={title} 
              className="relative w-full rounded-3xl border border-white/5 shadow-2xl" 
            />
          </div>
        )}

        {images && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt={`${title} ${i}`} 
                className="w-full rounded-3xl border border-white/5 shadow-2xl" 
              />
            ))}
          </div>
        )}

        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed px-2">
          {description}
        </p>

        {subImage && (
          <div className="mt-12 space-y-6">
            <img 
              src={subImage} 
              alt="Sub step" 
              className="w-full rounded-3xl border border-white/5 shadow-2xl" 
            />
            {subDescription && (
              <p className="text-on-surface-variant text-sm text-center italic">
                {subDescription}
              </p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  footer 
}: { 
  icon: ReactNode; 
  title: string; 
  description: string; 
  footer?: ReactNode;
}) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card p-8 rounded-3xl flex flex-col gap-6"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
        <div className="text-primary">{icon}</div>
      </div>
      <div>
        <h3 className="text-xl font-headline font-bold mb-2">{title}</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
      </div>
      {footer && (
        <div className="mt-auto pt-6 border-t border-primary/5">
          {footer}
        </div>
      )}
    </motion.div>
  );
}

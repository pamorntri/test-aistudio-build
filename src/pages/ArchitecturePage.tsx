import { motion } from 'motion/react';
import { 
  Shield, 
  Cpu, 
  Layers, 
  ArrowRight,
  MessageSquare,
  Facebook,
  Globe,
  Terminal,
  ChevronRight,
  Zap
} from 'lucide-react';
import { cn } from '../lib/utils';

const ArchitecturePage = () => {
  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary selection:text-on-primary">
      <main className="pt-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative px-8 pt-20 pb-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 z-10"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">System Status: Active</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.95]">
              The Kinetic <br />
              <span className="text-gradient">Architecture</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl font-light leading-relaxed">
              An advanced orchestration layer engineered for hyper-fast AI scheduling. Seamlessly bridging user intent with enterprise infrastructure through a multi-tiered agentic protocol.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="md:w-1/2 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-outline-variant/20 shadow-2xl shadow-primary/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0j0_Sm6_InF5dD5O5wrvZngBtIFqstcLW4aIIG4e0zUcC_9_6Snqdd4YuHWKpTdm2sd1iIm1S0x4k4NIrRHojlr_2qvQWDd-6OKOUnCIj6AJaJbVDu1x1zd2RhXbOLVYALVsYRuuPHiZBoG7lSR6mUicWJhIZh9ND9jrVioIldzUHmVUj9j1U4Iv8Sxl-bRnydpOm9cvbES9l83V01A4EtllOBp6so2Wai9KMaWTEv0Hn5brw5y-Y09hwMuqZ_SWZgVxc4o8clg" 
                alt="AI Architecture Visualization" 
                className="w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* System Topology */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4">System Topology</h2>
            <div className="w-20 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Input Layer */}
            <div className="bg-surface-container-low p-8 rounded-2xl border-l-2 border-primary/30">
              <span className="font-mono text-[10px] text-slate-500 block mb-6 uppercase tracking-widest">01 Input Layer</span>
              <h3 className="text-xl font-bold mb-8">User Touchpoints</h3>
              <div className="space-y-4">
                {[
                  { icon: MessageSquare, label: 'LINE MESSENGER' },
                  { icon: Facebook, label: 'FACEBOOK META' },
                  { icon: Globe, label: 'DIRECT WEB API' }
                ].map((item) => (
                  <div key={item.label} className="bg-surface-container-high p-4 rounded-lg ghost-border flex items-center gap-4 group hover:bg-primary/10 transition-colors cursor-pointer">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-mono text-xs font-bold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Processing Layer */}
            <div className="relative flex items-center justify-center">
              <div className="hidden lg:block absolute -left-4 text-slate-700">
                <ChevronRight className="w-12 h-12" />
              </div>
              <div className="bg-surface-container-high p-8 rounded-2xl border-l-2 border-primary/50 w-full">
                <span className="font-mono text-[10px] text-slate-500 block mb-6 uppercase tracking-widest">02 Processing</span>
                <h3 className="text-xl font-bold mb-8">AI Agent Layer</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-[10px] text-primary">STRATEGY A</span>
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Tool Calling</h4>
                    <p className="text-xs text-on-surface-variant font-light">Direct functional execution via JSON schema extraction.</p>
                  </div>
                  <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-[10px] text-tertiary">STRATEGY B</span>
                      <Layers className="w-4 h-4 text-tertiary" />
                    </div>
                    <h4 className="font-bold mb-2">Agent-to-Agent</h4>
                    <p className="text-xs text-on-surface-variant font-light">Hierarchical delegation across specialized LLM nodes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Execution Layer */}
            <div className="bg-primary/10 p-8 rounded-2xl border-l-2 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Cpu className="w-24 h-24" />
              </div>
              <span className="font-mono text-[10px] text-primary block mb-6 uppercase tracking-widest">03 Execution</span>
              <h3 className="text-xl font-bold mb-8 text-primary">BeLinked Core</h3>
              <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-12">
                High-concurrency scheduler, transactional integrity engine, and global state synchronization.
              </p>
              <div className="mt-auto pt-20 flex justify-between items-end">
                <span className="font-mono text-[10px] text-slate-500 uppercase">Kinetic Engine V4.2</span>
                <Terminal className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Layer Details */}
        <section className="py-24 px-8 max-w-7xl mx-auto border-t border-outline-variant/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: 'SaaS',
                layer: 'Layer 1',
                subtitle: 'Infrastructure Mgmt',
                desc: 'The management console and UI primitives. Provides the dashboard for visual orchestration, analytics oversight, and granular permission controls for enterprise teams.',
                tags: ['CORE_UI_MODULES', 'AUTH_SESSION_MGMT']
              },
              {
                title: 'SaaT',
                layer: 'Layer 2',
                subtitle: 'Tool Specs',
                desc: 'Functional tool-calling specifications and API endpoints. Defines how the AI interacts with real-world databases, calendar APIs, and payment gateways.',
                tags: ['API_SCHEMA_ENGINE', 'ENDPOINT_ROUTING']
              },
              {
                title: 'SaaA',
                layer: 'Layer 3',
                subtitle: 'Agent Protocols',
                desc: 'LLM-agnostic agent protocols and state management. The brain of the Kinetic Engine that maintains context across long-running booking conversations.',
                tags: ['LLM_AGNOSTIC_CORE', 'STATE_PERSISTENCE']
              }
            ].map((item) => (
              <div key={item.title}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-4xl font-bold">{item.title}</h3>
                  <span className="font-mono text-[10px] bg-surface-container-high px-2 py-1 rounded text-slate-500">{item.layer}</span>
                </div>
                <h4 className="font-bold mb-4 text-primary">{item.subtitle}</h4>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="space-y-2">
                  {item.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="font-mono text-[10px] text-slate-500">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latency & Security */}
        <section className="py-32 px-8 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-12 rounded-3xl relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />
              <h2 className="text-8xl font-bold text-primary mb-4 tracking-tighter">14ms</h2>
              <h3 className="text-2xl font-bold mb-6">Ultra-Low Latency</h3>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-md">
                Engineered for high-frequency interactions. Our proprietary edge-orchestration reduces token-to-action delay to industry-leading minimums.
              </p>
            </div>

            <div className="bg-primary p-12 rounded-3xl text-on-primary flex flex-col justify-between">
              <div>
                <Shield className="w-12 h-12 mb-8" />
                <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">Enterprise Shield</h3>
                <p className="text-on-primary/80 font-light leading-relaxed mb-8">
                  SOC2 Type II compliant. AES-256 at rest and TLS 1.3 in transit. Zero-trust agent architecture ensures data isolation at every LLM inference step.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-on-primary animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest">Verified Infrastructure</span>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Integration */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6">Developer Integration</h2>
              <p className="text-on-surface-variant font-light">
                Deploy booking logic in minutes with our unified SDK. Choose between functional tool calling or autonomous agents.
              </p>
            </div>
            <div className="flex bg-surface-container-high p-1 rounded-lg ghost-border">
              <button className="px-4 py-2 bg-primary text-on-primary rounded-md text-xs font-bold font-mono transition-all">BookingTool</button>
              <button className="px-4 py-2 text-slate-500 rounded-md text-xs font-bold font-mono hover:text-primary transition-all">BookingAgent</button>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/15">
            <div className="bg-surface-container px-6 py-3 flex justify-between items-center border-b border-outline-variant/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error/40" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <div className="w-3 h-3 rounded-full bg-secondary/40" />
              </div>
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">index.ts</span>
            </div>
            <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre h-[500px]">
              <span className="text-primary">import</span> {'{'} <span className="text-white">KineticEngine, BookingTool</span> {'}'} <span className="text-primary">from</span> <span className="text-secondary">"@belinked/core"</span>;{'\n\n'}
              <span className="text-slate-500">// Initialize the Kinetic Orchestrator</span>{'\n'}
              <span className="text-primary">const</span> <span className="text-primary-container">engine</span> = <span className="text-primary">new</span> KineticEngine({'{'}{'\n'}
              {'  '}apiKey: process.env.BELINKED_API_KEY,{'\n'}
              {'  '}environment: <span className="text-secondary">'production'</span>{'\n'}
              {'}'});{'\n\n'}
              <span className="text-slate-500">// Define the Tool for Direct LLM Calling</span>{'\n'}
              <span className="text-primary">const</span> <span className="text-primary-container">reservationTool</span> = <span className="text-primary">new</span> BookingTool({'{'}{'\n'}
              {'  '}id: <span className="text-secondary">'calendar_sync_v1'</span>,{'\n'}
              {'  '}action: <span className="text-primary">async</span> (data) ={'>'} {'{'}{'\n'}
              {'    '}<span className="text-primary">return await</span> engine.scheduler.create(data);{'\n'}
              {'  '}{'}'},{'\n'}
              {'  '}schema: {'{'}{'\n'}
              {'    '}type: <span className="text-secondary">'object'</span>,{'\n'}
              {'    '}properties: {'{'}{'\n'}
              {'      '}date: {'{'} type: <span className="text-secondary">'string'</span>, format: <span className="text-secondary">'date'</span> {'}'},{'\n'}
              {'      '}time: {'{'} type: <span className="text-secondary">'string'</span> {'}'}{'\n'}
              {'    '}{'}'}{'\n'}
              {'  '}{'}'}{'\n'}
              {'}'});{'\n\n'}
              <span className="text-slate-500">// Register and Listen</span>{'\n'}
              engine.register(reservationTool);{'\n'}
              console.log(<span className="text-secondary">'Kinetic Architecture Live: 14ms Ready'</span>);
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArchitecturePage;

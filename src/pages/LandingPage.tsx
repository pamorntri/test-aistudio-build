import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Terminal, 
  Bot, 
  CheckCircle2, 
  Globe, 
  MessageSquare, 
  Smartphone, 
  Facebook, 
  Cpu, 
  Layers, 
  ArrowRight,
  Check,
  User,
  Sparkles
} from 'lucide-react';
import { cn } from '../lib/utils';

const Hero = () => (
  <section className="relative px-8 pt-20 pb-32 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tertiary/10 blur-[120px] rounded-full" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="z-10"
    >
      <span className="font-mono text-primary text-xs tracking-widest uppercase mb-6 block">The Kinetic Engine for Booking</span>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl mx-auto leading-[0.95]">
        From SaaS to <span className="text-gradient">AI-Native</span> Booking Infrastructure
      </h1>
      <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-light">
        Use BeLinked as a platform, a tool, or an agent. Modern scheduling architecture designed for the era of autonomous intelligence.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/10 transition-all hover:translate-y-[-2px]">
          Get Started
        </button>
        <button className="ghost-border px-10 py-4 rounded-xl font-bold text-lg text-primary hover:bg-surface-container-high transition-colors">
          View Docs
        </button>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="mt-24 w-full max-w-5xl relative"
    >
      <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-outline-variant/10">
        <img 
          alt="Tech visualization" 
          className="w-full h-full object-cover opacity-60" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbVzu9nC0lzXcK55RgQ6TVQ86R_DvUeda3ajtO2H11c75epOul65WAmPl4lF5fe9JTLS92UrdwImnDbijNOo-Rwf-vs-L46x4x9qEh503PthxszZTFF6GI72xKiCezlGTmc4mMPshVZ8NcswHMbPDBhhG2a0_lJ4qOIy66TPYBB-Hh_lhdJBffGhirYwYU1IBzbNN3bqZvPb0AyIgNWe8KvV2JyisSlARbo6ZZ_-zatGZh4q1IKdXQVXRFWz_kcY0j9k3YxTlhFyc"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>
      
      <div className="absolute top-10 left-10 glass-panel ghost-border p-4 rounded-xl text-left hidden md:block">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-[10px] text-primary">LIVE LATENCY</span>
        </div>
        <div className="text-xl font-bold text-on-surface">14ms</div>
      </div>
    </motion.div>
  </section>
);

const BentoFeatures = () => (
  <section className="px-8 py-24 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { 
          title: 'SaaS', 
          icon: LayoutDashboard, 
          desc: 'Ready-to-use platform. Full dashboard, white-label interfaces, and immediate deployment for traditional service workflows.',
          tag: 'READY-TO-USE',
          color: 'primary'
        },
        { 
          title: 'SaaT', 
          icon: Terminal, 
          desc: 'Software as a Tool. Robust API and SDK for deep integration into your existing AI stacks, LLMs, and custom applications.',
          tag: 'API-FIRST',
          color: 'primary-container'
        },
        { 
          title: 'SaaA', 
          icon: Bot, 
          desc: 'Agent-to-Agent. Enabling autonomous systems to discover, negotiate, and book services with zero human intervention.',
          tag: 'AUTONOMOUS',
          color: 'tertiary'
        }
      ].map((feature, i) => (
        <motion.div 
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-surface-container-low p-8 rounded-2xl transition-all hover:bg-surface-container-high border-t border-white/5 group"
        >
          <div className={cn("mb-6 w-12 h-12 rounded-lg flex items-center justify-center transition-colors", `bg-${feature.color}/10 group-hover:bg-${feature.color}/20`)}>
            <feature.icon className={cn("w-6 h-6", `text-${feature.color}`)} />
          </div>
          <h3 className="text-4xl font-bold mb-4">{feature.title}</h3>
          <p className="text-on-surface-variant font-light mb-6">{feature.desc}</p>
          <span className={cn("font-mono text-xs", `text-${feature.color}`)}>{feature.tag}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

const Architecture = () => (
  <section id="architecture" className="bg-surface-container-lowest py-32 px-8">
    <div className="max-w-7xl mx-auto text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Kinetic Architecture</h2>
      <p className="text-on-surface-variant max-w-xl mx-auto">Seamless flow from user intent to transactional fulfillment through the BeLinked intelligence layer.</p>
    </div>
    
    <div className="max-w-5xl mx-auto relative px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="flex flex-col items-center gap-6">
          <div className="p-6 bg-surface-container rounded-2xl ghost-border w-full text-center">
            <span className="font-mono text-[10px] text-slate-500 block mb-4 uppercase tracking-wider">Ingestion</span>
            <div className="flex justify-center gap-4 mb-4">
              <Globe className="w-5 h-5 text-on-surface" />
              <MessageSquare className="w-5 h-5 text-on-surface" />
              <Smartphone className="w-5 h-5 text-on-surface" />
            </div>
            <div className="text-sm font-semibold">User Touchpoints</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 relative">
          <div className="hidden md:block absolute -left-12 top-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent to-primary" />
          <div className="p-8 bg-surface-container-high rounded-3xl border-2 border-primary/20 w-full text-center shadow-2xl shadow-primary/5">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div className="text-lg font-bold mb-2">AI Agent Layer</div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] bg-surface/50 py-1 px-2 rounded border border-outline-variant/10 text-primary">Tool Calling</span>
              <span className="font-mono text-[10px] bg-surface/50 py-1 px-2 rounded border border-outline-variant/10 text-tertiary">Agent-to-Agent</span>
            </div>
          </div>
          <div className="hidden md:block absolute -right-12 top-1/2 w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="p-6 bg-primary/10 rounded-2xl border border-primary/30 w-full text-center">
            <span className="font-mono text-[10px] text-primary block mb-4 uppercase tracking-wider">Infrastructure</span>
            <div className="text-xl font-bold text-primary mb-2">BeLinked</div>
            <p className="text-xs text-on-surface-variant">Core Engine & State Sync</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Channels = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-6 leading-tight">Connect once,<br />serve everywhere</h2>
        <p className="text-on-surface-variant text-lg mb-8 font-light">BeLinked unifies booking availability across all channels. Whether your client is on Facebook, LINE, or talking to an autonomous AI agent, the state remains consistent.</p>
        <ul className="space-y-4">
          {[
            'Unified Availability Engine',
            'Multi-Platform Webhooks',
            'Real-time Synchronization'
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-6">
        {[
          { icon: MessageSquare, color: '#06C755' },
          { icon: Facebook, color: '#1877F2' },
          { icon: Globe, color: 'var(--color-primary)' },
          { icon: Bot, color: 'var(--color-tertiary)' },
          { icon: Terminal, color: '#fff' },
          { icon: Layers, color: 'var(--color-primary-container)' }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="aspect-square bg-surface-container-low rounded-2xl flex items-center justify-center ghost-border hover:bg-surface-container-high transition-colors group"
          >
            <item.icon className="w-10 h-10 text-slate-500 group-hover:text-[var(--hover-color)] transition-colors" style={{ '--hover-color': item.color } as any} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const DeveloperExperience = () => (
  <section className="bg-surface-container-low py-32 px-8 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
      <div className="lg:w-1/2">
        <span className="font-mono text-xs text-primary mb-4 block">FOR DEVELOPERS</span>
        <h2 className="text-4xl font-bold mb-6">Technical precision meets visual simplicity.</h2>
        <p className="text-on-surface-variant mb-10 leading-relaxed font-light">Integrate BeLinked's booking capability into your AI agents using our simple tool-calling pattern. No more complex OAuth flows or fragile scrapers.</p>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center ghost-border">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Type-Safe Integration</h4>
              <p className="text-sm text-on-surface-variant">Fully typed SDKs for TypeScript and Python.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center ghost-border">
              <Cpu className="w-5 h-5 text-tertiary" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Schema-Native</h4>
              <p className="text-sm text-on-surface-variant">Directly exportable OpenAI/Claude tool schemas.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/2 w-full">
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/15">
          <div className="bg-surface-container px-6 py-3 flex justify-between items-center border-b border-outline-variant/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error/40" />
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <div className="w-3 h-3 rounded-full bg-secondary/40" />
            </div>
            <span className="font-mono text-[10px] text-slate-500">belinked_agent.ts</span>
          </div>
          <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre">
            <span className="text-primary">import</span> {'{'} <span className="text-white">BeLinkedTool</span> {'}'} <span className="text-primary">from</span> <span className="text-secondary">"@belinked/sdk"</span>;{'\n\n'}
            <span className="text-slate-500">// Initialize the booking tool for your agent</span>{'\n'}
            <span className="text-primary">const</span> <span className="text-primary-container">bookingTool</span> = <span className="text-primary">new</span> BeLinkedTool({'{'}{'\n'}
            {'  '}apiKey: process.env.BELINKED_KEY,{'\n'}
            {'  '}serviceId: <span className="text-secondary">"salon_haircut_99"</span>{'\n'}
            {'}'});{'\n\n'}
            <span className="text-slate-500">// Your LLM can now call this directly</span>{'\n'}
            agent.addTool(<span className="text-primary-container">bookingTool</span>);{'\n\n'}
            <span className="text-primary">const</span> response = <span className="text-primary-container">await</span> agent.chat(<span className="text-secondary">"Book me for Tuesday"</span>);
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Verticals = () => (
  <section className="py-32 px-8 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold mb-6">Engineered for every vertical.</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { 
          title: 'Modern Salons', 
          desc: 'Automated scheduling for stylists with high-traffic peaks.',
          img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALcML5NFbOg3vVTpVCfdfRBItYB8Mav57DCw_FG6zv_5Qu374ksaD3zXcNaRZhOZOiYxQ_CMtKtuna1HWrAkbtU-x-J45mxTIHL2JoOFDBHfm5jfh0Be2IptFqZH2BJDd7_fuDDAv911pfZVrhwudN-ci07ICJ9NVC8oxCXE-A1f3s5UC0Yt3F6tpfW-T2vyvcAFqfqyCawsxjht1rp9QPAfr-x2VLb1wfxeycTTPHW1g-lec17ZuZdM4JW-AD8XDg6rTtCJcnX9o'
        },
        { 
          title: 'Clinics', 
          desc: 'Secure, HIPAA-compliant booking for healthcare professionals.',
          img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0N_xaSmG_InF5dD5O5wrvZngBtIFqstcLW4aIIG4e0zUcC_9_6Snqdd4YuHWKpTdm2sd1iIm1S0x4k4NIrRHojlr_2qvQWDd-6OKOUnCIj6AJaJbVDu1x1zd2RhXbOLVYALVsYRuuPHiZBoG7lSR6mUicWJhIZh9ND9jrVioIldzUHmVUj9j1U4Iv8Sxl-bRnydpOm9cvbES9l83V01A4EtllOBp6so2Wai9KMaWTEv0Hn5brw5y-Y09hwMuqZ_SWZgVxc4o8clg'
        },
        { 
          title: 'AI Assistants', 
          desc: 'Personal booking agents that handle your calendar autonomously.',
          img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzq0A9ffbNaCRzL8i_Ljn5EduZUnMoHm4D14yemF91L0qWOh2GI7hv4qQ_34dYt1RlE6JZgohSVDDjwTvhgj3Mvh4uHFR-q_VNazVMJlZQyEMdfa93CNkaVp1z6FghAeY_ZgxQJHPzq7hULYgP4SLCIQR4G68AMpQ8g50TccsU5fPT8EPcJEtB3QP9o1Gtvsc95APxt0hmR1FdVuwvc_D-5SBCcKr4GQlaoHvSZG44zVYHZXDSB9uw4_NAicBtqpzzmExidIkiWZ4'
        },
        { 
          title: 'Enterprise', 
          desc: 'Scalable resource management for global operations.',
          img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa1QjT9HNR5XG_g0yqcaeTm4sc60wShznKginTpfhoS1IL8-9Cvj3oPS4wtvIi6jGgHuM4etk3EfOhDcMFRrUyJslB9s6lcUOuiOWj7b9eRdsyX-6rNyfNFcvTYxHQVxMTktjS3zogJuIkFzUaAjg1iYxy5lJa3-10FcWMcQItAyDrYxAjXkorMi4OK8boVEZqh6uR5Oxpumy144_a7IRAqb-Id4up8MtN763AiPhIkyE6TWomjEcskfq8SR6GBp5mXUHd42E18tU'
        }
      ].map((item, i) => (
        <motion.div 
          key={item.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-surface-container p-6 rounded-xl ghost-border group hover:bg-primary/5 transition-all"
        >
          <img 
            alt={item.title} 
            className="w-full h-32 object-cover rounded-lg mb-6 opacity-80 group-hover:opacity-100 transition-opacity" 
            src={item.img}
            referrerPolicy="no-referrer"
          />
          <h4 className="font-bold mb-2">{item.title}</h4>
          <p className="text-sm text-on-surface-variant">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ConversationalDemo = () => (
  <section className="py-24 px-8 bg-surface-container-lowest">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-6">Booking, redefined.</h2>
        <p className="text-on-surface-variant font-light mb-8">Watch how BeLinked handles a complex conversational request and turns it into a confirmed booking in seconds.</p>
        <div className="flex flex-col gap-4">
          {[
            { id: '01', text: 'Intent parsing with LLM' },
            { id: '02', text: 'Real-time slot negotiation' },
            { id: '03', text: 'Atomic confirmation' }
          ].map((step) => (
            <div key={step.id} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-mono text-[10px] text-primary">{step.id}</span>
              </div>
              <span className="text-sm font-medium">{step.text}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:w-1/2 w-full">
        <div className="bg-surface-container-high rounded-3xl p-6 shadow-2xl ghost-border max-w-sm mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-mono">USER</div>
              <div className="text-sm">Need a haircut this Tuesday afternoon.</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-8 justify-end">
            <div className="text-right">
              <div className="text-xs text-primary font-mono">BELINKED AGENT</div>
              <div className="text-sm bg-primary/10 p-3 rounded-2xl rounded-tr-none">Checking Stylist Alex... How about 2:30 PM?</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary" />
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-mono">USER</div>
              <div className="text-sm">Perfect. Confirm it.</div>
            </div>
          </div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-primary p-4 rounded-2xl text-on-primary"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold font-mono">BOOKING CONFIRMED</span>
              <Check className="w-4 h-4" />
            </div>
            <div className="text-sm font-bold">Tuesday, 2:30 PM</div>
            <div className="text-[10px] opacity-80">Ref: BL-9214-X</div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 px-8 text-center relative">
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      <div className="w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
    </div>
    <div className="z-10 relative">
      <h2 className="text-5xl font-bold mb-8">Ready to evolve?</h2>
      <p className="text-on-surface-variant max-w-xl mx-auto mb-12 text-lg">Build the next generation of booking experiences with the industry's first AI-native infrastructure.</p>
      <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 group">
        Start building with BeLinked
        <ArrowRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>
      <div className="mt-8 text-sm text-slate-500 font-mono uppercase tracking-widest">No credit card required • Developer friendly</div>
    </div>
  </section>
);

const LandingPage = () => {
  return (
    <>
      <Hero />
      <BentoFeatures />
      <Architecture />
      <Channels />
      <DeveloperExperience />
      <Verticals />
      <ConversationalDemo />
      <CTA />
    </>
  );
};

export default LandingPage;

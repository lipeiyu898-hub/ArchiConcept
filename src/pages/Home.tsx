import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Box, ArrowRight, Layers, Layout, Maximize, CheckCircle2, Grid3X3, Ruler, Cpu, Building2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans text-zinc-900 selection:bg-zinc-200">
      {/* Navigation */}
      <header className="h-16 flex items-center justify-between px-6 md:px-8 border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <Box className="w-5 h-5" />
          <span>ArchiConcept</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#workflow" className="hover:text-zinc-900 transition-colors">工作流</a>
          <a href="#case-study" className="hover:text-zinc-900 transition-colors">案例演示</a>
          <a href="#audience" className="hover:text-zinc-900 transition-colors">适用人群</a>
          <a href="#pricing" className="hover:text-zinc-900 transition-colors">定价</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 hidden md:block">
            登录
          </Link>
          <Button asChild size="sm" className="rounded-md">
            <Link to="/login">免费试用</Link>
          </Button>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-6 overflow-hidden flex flex-col items-center text-center border-b border-zinc-200 bg-white">
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-4xl relative z-10 space-y-8">
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 tracking-wide uppercase">
              <span className="flex h-1.5 w-1.5 rounded-full bg-zinc-900 mr-2"></span>
              v1.0 幼儿园模块现已上线
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              从场地条件到<br />
              <span className="text-zinc-500">可解释方案方向</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              拒绝黑箱 AI。这是一个基于建筑学理性的<strong className="text-zinc-900 font-semibold">可解释型策略辅助生成系统</strong>，在前期概念阶段为您快速推演多套空间原型与评估报告。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
                <Link to="/login">
                  免费试用 <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base w-full sm:w-auto bg-white">
                <a href="#case-study">查看示例</a>
              </Button>
            </div>
          </div>

          {/* Hero Abstract Visual */}
          <div className="mt-20 w-full max-w-5xl aspect-[21/9] bg-white border border-zinc-200 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm">
            {/* Isometric Grid Background */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ 
              backgroundImage: 'linear-gradient(30deg, #000 1px, transparent 1px), linear-gradient(150deg, #000 1px, transparent 1px)', 
              backgroundSize: '40px 23px',
              backgroundPosition: 'center center'
            }}></div>
            
            <div className="relative z-10 w-full h-full flex items-center justify-center px-4 overflow-hidden">
              <svg viewBox="0 0 900 300" className="w-full max-w-5xl h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#a1a1aa" />
                  </marker>
                  <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f4f4f5" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Step 1: Site Context */}
                <g transform="translate(50, 180)">
                  {/* Road */}
                  <path d="M-20,20 L80,-30 L160,10 L60,60 Z" fill="#f4f4f5" stroke="#e4e4e7" strokeWidth="1"/>
                  {/* Site Boundary */}
                  <path d="M20,0 L80,-30 L140,0 L80,30 Z" stroke="#18181b" strokeWidth="2" strokeDasharray="4 4" fill="rgba(34, 197, 94, 0.05)"/>
                  <circle cx="80" cy="0" r="3" fill="#18181b"/>
                  {/* Context Tree (Abstract) */}
                  <circle cx="130" cy="-10" r="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="1"/>
                  <circle cx="30" cy="10" r="6" fill="#dcfce7" stroke="#22c55e" strokeWidth="1"/>
                  
                  <text x="80" y="70" textAnchor="middle" fill="#52525b" fontSize="12" fontFamily="monospace" fontWeight="bold">01. SITE CONTEXT</text>
                  <text x="80" y="90" textAnchor="middle" fill="#a1a1aa" fontSize="10">场地条件输入</text>
                </g>

                <path d="M 230 160 L 260 160" stroke="#a1a1aa" strokeWidth="2" markerEnd="url(#arrow)"/>

                {/* Step 2: Max Volume */}
                <g transform="translate(280, 180)">
                  {/* Base Site */}
                  <path d="M20,0 L80,-30 L140,0 L80,30 Z" stroke="#e4e4e7" strokeWidth="1" fill="none"/>
                  {/* Extruded Volume */}
                  {/* Front Left Face */}
                  <path d="M20,0 L20,-60 L80,-90 L80,-30 Z" fill="#f4f4f5" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  {/* Front Right Face */}
                  <path d="M140,0 L140,-60 L80,-90 L80,-30 Z" fill="#e4e4e7" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  {/* Top Face */}
                  <path d="M20,-60 L80,-90 L140,-60 L80,-30 Z" fill="url(#glass)" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  
                  {/* Bounding Box Lines */}
                  <path d="M20,-60 L20,-100 L80,-130 L140,-100 L140,-60" stroke="#a1a1aa" strokeWidth="1" strokeDasharray="2 2" fill="none"/>
                  <path d="M80,-130 L80,-90" stroke="#a1a1aa" strokeWidth="1" strokeDasharray="2 2" fill="none"/>

                  <text x="80" y="70" textAnchor="middle" fill="#52525b" fontSize="12" fontFamily="monospace" fontWeight="bold">02. MAX VOLUME</text>
                  <text x="80" y="90" textAnchor="middle" fill="#a1a1aa" fontSize="10">最大体量生成</text>
                </g>

                <path d="M 460 160 L 490 160" stroke="#a1a1aa" strokeWidth="2" markerEnd="url(#arrow)"/>

                {/* Step 3: Articulation (Cutting) */}
                <g transform="translate(510, 180)">
                  {/* Base Site */}
                  <path d="M20,0 L80,-30 L140,0 L80,30 Z" stroke="#e4e4e7" strokeWidth="1" fill="none"/>
                  
                  {/* Left Wing */}
                  <path d="M20,0 L20,-60 L50,-75 L50,-15 Z" fill="#f4f4f5" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M50,-15 L50,-75 L80,-60 L80,0 Z" fill="#e4e4e7" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M20,-60 L50,-75 L80,-60 L50,-45 Z" fill="#ffffff" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  
                  {/* Right Wing */}
                  <path d="M80,0 L80,-60 L110,-75 L110,-15 Z" fill="#f4f4f5" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M140,0 L140,-60 L110,-75 L110,-15 Z" fill="#e4e4e7" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M80,-60 L110,-75 L140,-60 L110,-45 Z" fill="#ffffff" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  
                  {/* Connecting Bridge */}
                  <path d="M50,-45 L50,-60 L110,-60 L110,-45 Z" fill="#f4f4f5" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M50,-60 L80,-75 L110,-60 L80,-45 Z" fill="#ffffff" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>

                  {/* Cutout Indicator */}
                  <path d="M80,-30 L80,-10 L110,5 L110,-15 Z" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2"/>
                  <path d="M80,-10 L50,5 L50,-15 L80,-30 Z" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2"/>

                  <text x="80" y="70" textAnchor="middle" fill="#52525b" fontSize="12" fontFamily="monospace" fontWeight="bold">03. ARTICULATION</text>
                  <text x="80" y="90" textAnchor="middle" fill="#a1a1aa" fontSize="10">策略切分与变形</text>
                </g>

                <path d="M 690 160 L 720 160" stroke="#a1a1aa" strokeWidth="2" markerEnd="url(#arrow)"/>

                {/* Step 4: Final Concept */}
                <g transform="translate(740, 180)">
                  {/* Base Site */}
                  <path d="M20,0 L80,-30 L140,0 L80,30 Z" stroke="#e4e4e7" strokeWidth="1" fill="none"/>
                  
                  {/* Courtyard Greenery */}
                  <path d="M80,-10 L50,5 L80,20 L110,5 Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="1"/>
                  <circle cx="80" cy="5" r="4" fill="#22c55e"/>
                  
                  {/* Left Wing */}
                  <path d="M20,0 L20,-60 L50,-75 L50,-15 Z" fill="#f4f4f5" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M50,-15 L50,-75 L80,-60 L80,0 Z" fill="#e4e4e7" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M20,-60 L50,-75 L80,-60 L50,-45 Z" fill="#18181b" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  
                  {/* Right Wing */}
                  <path d="M80,0 L80,-60 L110,-75 L110,-15 Z" fill="#f4f4f5" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M140,0 L140,-60 L110,-75 L110,-15 Z" fill="#e4e4e7" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M80,-60 L110,-75 L140,-60 L110,-45 Z" fill="#18181b" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  
                  {/* Connecting Bridge */}
                  <path d="M50,-45 L50,-60 L110,-60 L110,-45 Z" fill="#f4f4f5" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M50,-60 L80,-75 L110,-60 L80,-45 Z" fill="#18181b" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round"/>

                  {/* Windows / Details */}
                  <path d="M30,-15 L30,-50 L40,-55 L40,-20 Z" fill="#ffffff" stroke="#a1a1aa" strokeWidth="0.5"/>
                  <path d="M120,-15 L120,-50 L130,-55 L130,-20 Z" fill="#ffffff" stroke="#a1a1aa" strokeWidth="0.5"/>
                  
                  {/* Roof Garden */}
                  <path d="M55,-50 L80,-62 L105,-50 L80,-38 Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="1"/>

                  <text x="80" y="70" textAnchor="middle" fill="#18181b" fontSize="12" fontFamily="monospace" fontWeight="bold">04. PROTOTYPE</text>
                  <text x="80" y="90" textAnchor="middle" fill="#a1a1aa" fontSize="10">概念原型输出</text>
                </g>

              </svg>
            </div>

            <div className="absolute bottom-4 left-4 text-xs font-mono text-zinc-400 uppercase tracking-widest bg-white/80 px-2 py-1 rounded backdrop-blur-sm">
              Fig 1. Conceptual Massing Generation
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="py-24 px-6 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">理性推演，步步可控</h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">模拟真实建筑师的思考路径，将复杂的设计过程拆解为清晰的逻辑链条。</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-zinc-200"></div>
              
              {[
                { icon: Ruler, title: "1. 场地与任务书", desc: "输入场地几何、周边环境限制及项目功能面积需求。" },
                { icon: Grid3X3, title: "2. 识别空间矛盾", desc: "系统自动计算容积率、密度，识别日照、噪音等核心痛点。" },
                { icon: Cpu, title: "3. 匹配设计策略", desc: "基于预设的建筑学规则库，调用对应的空间解决策略。" },
                { icon: Layout, title: "4. 生成原型与评估", desc: "输出 3 套不同侧重点的概念原型，并附带多维度评分。" }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-900">
                    <step.icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">{step.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section id="case-study" className="py-24 px-6 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">案例演示：城市高密度幼儿园</h2>
              <p className="text-zinc-600 max-w-2xl">从严苛的场地条件出发，系统如何推演出截然不同的空间原型。</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Context */}
              <div className="lg:col-span-1 border border-zinc-200 rounded-xl p-8 bg-zinc-50 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Site Context</h3>
                  <p className="font-medium text-zinc-900">用地极度紧张，北侧临城市主干道，南侧需保证充足日照。</p>
                </div>
                <div className="space-y-4 pt-4 border-t border-zinc-200">
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span className="text-zinc-600">场地面积: 4500 sqm (偏小)</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span className="text-zinc-600">班级数量: 12班 (需求大)</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span className="text-zinc-600">噪音源: 北侧主干道</span>
                  </div>
                </div>
              </div>

              {/* Generated Schemes */}
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                <Link to="/projects/demo/schemes/A" className="border border-zinc-200 rounded-xl p-6 bg-white hover:border-zinc-400 transition-colors cursor-pointer group block">
                  <div className="aspect-video bg-zinc-100 rounded-lg mb-4 flex items-center justify-center p-4 overflow-hidden relative">
                    <div className="relative w-full max-w-[160px] aspect-square">
                      <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2">
                        <rect x="10" y="10" width="80" height="80" />
                      </svg>
                      <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-800 drop-shadow-xl transition-transform duration-700 group-hover:scale-105" fill="currentColor">
                        <path d="M15,15 L85,15 L85,85 L15,85 Z M30,30 L70,30 L70,70 L30,70 Z" fillRule="evenodd" />
                      </svg>
                      <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-emerald-400/20 transition-transform duration-700 group-hover:scale-105" fill="currentColor">
                        <rect x="30" y="30" width="40" height="40" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-semibold text-zinc-900 mb-2">Option A: 庭院聚落 (Courtyard)</h4>
                  <p className="text-sm text-zinc-500 line-clamp-2">化整为零，沿周边布置体量，形成内部受保护的安全活动内院，阻隔北侧噪音。</p>
                </Link>
                <Link to="/projects/demo/schemes/D" className="border border-zinc-200 rounded-xl p-6 bg-white hover:border-zinc-400 transition-colors cursor-pointer group block">
                  <div className="aspect-video bg-zinc-100 rounded-lg mb-4 flex items-center justify-center p-4 overflow-hidden relative">
                    <div className="relative w-full max-w-[160px] aspect-square flex flex-col items-center justify-center gap-2">
                      <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2">
                        <rect x="20" y="10" width="60" height="80" />
                      </svg>
                      <div className="w-24 h-6 bg-zinc-800 rounded-sm shadow-lg z-30 relative flex items-center justify-center text-[8px] text-white transition-transform duration-700 group-hover:-translate-y-1">三层：大班区</div>
                      <div className="w-24 h-6 bg-zinc-700 rounded-sm shadow-lg z-20 relative flex items-center justify-center text-[8px] text-white transition-transform duration-700 group-hover:-translate-y-0.5">二层：中班区</div>
                      <div className="w-24 h-6 bg-zinc-600 rounded-sm shadow-lg z-10 relative flex items-center justify-center text-[8px] text-white transition-transform duration-700 group-hover:translate-y-0.5">一层：小班区</div>
                      <div className="w-24 h-6 bg-zinc-200 rounded-sm border-2 border-dashed border-zinc-400 z-0 relative flex items-center justify-center text-[8px] text-zinc-600 transition-transform duration-700 group-hover:translate-y-1">底层架空活动区</div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-zinc-900 mb-2">Option B: 垂直分层 (Vertical Layering)</h4>
                  <p className="text-sm text-zinc-500 line-clamp-2">在用地极其紧张的环境中，通过在垂直维度上叠加不同的功能模块来解决空间需求，底层作为公共活动区，高层作为安静的教学区。</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section id="audience" className="py-24 px-6 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">专为前期设计打造</h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">不替代设计师的创造力，而是提供坚实的逻辑起点。</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "建筑学生", desc: "快速理解场地矛盾，学习经典空间原型的应用逻辑，辅助课程设计前期推演。", icon: Layers },
                { title: "年轻建筑师", desc: "在项目初期快速生成多套比选方案，为汇报提供有理有据的策略支撑。", icon: Maximize },
                { title: "小型工作室", desc: "提升前期概念阶段的产出效率，降低试错成本，将更多精力投入到深化设计中。", icon: Building2 }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                  <item.icon className="w-8 h-8 text-zinc-900 mb-6 stroke-[1.5]" />
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6 bg-white border-b border-zinc-200">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">灵活的订阅方案</h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">选择适合您工作流的计划，随时可以升级或取消。</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic */}
              <div className="border border-zinc-200 rounded-2xl p-8 flex flex-col">
                <h3 className="text-lg font-semibold text-zinc-900">基础版</h3>
                <p className="text-sm text-zinc-500 mt-2">适合学生与个人体验</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-zinc-900">免费</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> 每月 3 次方案生成</li>
                  <li className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> 基础建筑类型 (幼儿园)</li>
                  <li className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> 标准评估报告</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login">免费注册</Link>
                </Button>
              </div>

              {/* Pro */}
              <div className="border-2 border-zinc-900 rounded-2xl p-8 flex flex-col relative bg-zinc-50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                  最受欢迎
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">专业版</h3>
                <p className="text-sm text-zinc-500 mt-2">适合独立建筑师</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-zinc-900">¥99</span>
                  <span className="text-zinc-500">/月</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-900" /> 无限制方案生成</li>
                  <li className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-900" /> 解锁所有建筑类型</li>
                  <li className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-900" /> 深度性能评估与导出</li>
                  <li className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-900" /> 优先客服支持</li>
                </ul>
                <Button className="w-full" asChild>
                  <Link to="/login">开始试用</Link>
                </Button>
              </div>

              {/* Team */}
              <div className="border border-zinc-200 rounded-2xl p-8 flex flex-col">
                <h3 className="text-lg font-semibold text-zinc-900">团队版</h3>
                <p className="text-sm text-zinc-500 mt-2">适合小型设计工作室</p>
                <div className="my-6">
                  <span className="text-4xl font-bold text-zinc-900">¥299</span>
                  <span className="text-zinc-500">/月</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> 包含专业版所有功能</li>
                  <li className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> 最多 5 个团队成员</li>
                  <li className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> 团队项目库共享</li>
                  <li className="flex items-center gap-3 text-sm text-zinc-600"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> 自定义导出模板</li>
                </ul>
                <Button variant="outline" className="w-full">
                  联系销售
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 py-12 px-6 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-semibold text-lg tracking-tight mb-4 text-zinc-900">
              <Box className="w-5 h-5" />
              <span>ArchiConcept</span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs">
              基于建筑学理性的前期概念设计辅助工具，致力于提升设计前期的推演效率与逻辑严密性。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4 text-sm">产品</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900">功能特性</a></li>
              <li><a href="#" className="hover:text-zinc-900">定价方案</a></li>
              <li><a href="#" className="hover:text-zinc-900">更新日志</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4 text-sm">资源</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900">使用文档</a></li>
              <li><a href="#" className="hover:text-zinc-900">建筑学理论库</a></li>
              <li><a href="#" className="hover:text-zinc-900">联系我们</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-200 text-sm text-zinc-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 ArchiConcept. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-900">隐私政策</a>
            <a href="#" className="hover:text-zinc-900">服务条款</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


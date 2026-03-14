import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Download, 
  Bookmark, 
  GitCompare, 
  BrainCircuit, 
  CheckCircle2, 
  AlertTriangle,
  ShieldCheck,
  VolumeX,
  CloudRain,
  Route,
  Map
} from "lucide-react";

export default function SchemeDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="-ml-2 text-zinc-500 hover:text-zinc-900">
              <Link to={`/projects/${id || 'new-123'}/results`}>
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold text-zinc-900">方案 A：内向庭院型</h1>
                <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 text-xs font-mono">PROTOTYPE</span>
              </div>
              <span className="text-xs text-zinc-500">幼儿园 / 3层 / 三角形场地</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="h-9">
              <Bookmark className="w-4 h-4 mr-2" />
              收藏
            </Button>
            <Button variant="outline" size="sm" className="h-9">
              <Download className="w-4 h-4 mr-2" />
              导出 PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-12 pb-24">
        
        {/* Section 1: Overview & Metrics */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Diagram */}
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              
              {/* Abstract Diagram for Introverted Courtyard */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
                <div className="relative w-full max-w-sm aspect-square">
                  {/* Outer boundary (Triangle) */}
                  <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2">
                    <polygon points="50,5 95,90 5,90" />
                  </svg>
                  {/* Building Mass */}
                  <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-800 drop-shadow-xl transition-transform duration-700 group-hover:scale-105" fill="currentColor">
                    <path d="M50,15 L85,82 L15,82 Z M50,35 L70,72 L30,72 Z" fillRule="evenodd" />
                  </svg>
                  {/* Inner Courtyard Highlight */}
                  <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-emerald-400/20 transition-transform duration-700 group-hover:scale-105" fill="currentColor">
                    <polygon points="50,35 70,72 30,72" />
                  </svg>
                  {/* Annotations */}
                  <div className="absolute top-[45%] left-[40%] text-[10px] font-mono text-emerald-700 font-medium">中心庭院</div>
                  <div className="absolute bottom-[5%] left-[45%] text-[10px] font-mono text-zinc-500">实体隔音</div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Concept Diagram</p>
              </div>
            </div>
          </div>

          {/* Right: Summary & Evaluation */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-zinc-900 tracking-tight">方案概览摘要</h2>
              <p className="text-zinc-600 text-sm leading-relaxed">
                该方案采用向内聚集的体量布局，将建筑实体沿三角形场地边界布置，在中心围合出一个受保护的户外活动庭院。通过这种方式，建筑本身成为了抵御外部不利因素的屏障，同时在内部创造了一个安全、微气候良好的核心教学与活动空间。
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">五项评分明细</h3>
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-zinc-700"><ShieldCheck className="w-4 h-4 text-zinc-400" /> 安全性</span>
                    <span className="font-mono font-medium text-zinc-900">95/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-900 w-[95%]"></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-zinc-700"><VolumeX className="w-4 h-4 text-zinc-400" /> 降噪能力</span>
                    <span className="font-mono font-medium text-zinc-900">90/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-900 w-[90%]"></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-zinc-700"><CloudRain className="w-4 h-4 text-zinc-400" /> 气候适应性</span>
                    <span className="font-mono font-medium text-zinc-900">85/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-900 w-[85%]"></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-zinc-700"><Route className="w-4 h-4 text-zinc-400" /> 流线清晰度</span>
                    <span className="font-mono font-medium text-zinc-900">80/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-900 w-[80%]"></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-zinc-700"><Map className="w-4 h-4 text-zinc-400" /> 场地适配度</span>
                    <span className="font-mono font-medium text-zinc-900">88/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-900 w-[88%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Logic Explanation */}
        <section className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <BrainCircuit className="w-48 h-48" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-lg font-semibold text-zinc-900 mb-6 flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-zinc-700" />
              生成逻辑说明
            </h2>
            <div className="prose prose-zinc max-w-none text-sm text-zinc-600 leading-relaxed space-y-4">
              <p>
                在<strong>三角形场地</strong>且面临<strong>四周道路</strong>的高噪声干扰下，传统的行列式或集中式布局难以同时满足声学要求和空间效率。系统推荐“内向庭院型”原型，主要基于以下推演逻辑：
              </p>
              <ul className="space-y-2">
                <li><strong>抗噪与边界防御：</strong>将服务性空间（如楼梯间、卫生间、后勤）布置在临街的三角形边缘，形成实体隔音屏障，有效阻挡四周道路的高噪声，保护内部教学区。</li>
                <li><strong>气候响应机制：</strong>针对<strong>炎热多雨</strong>气候，中心庭院结合底层架空（灰空间），形成了良好的拔风效应，促进自然通风；同时为雨天提供了充足的半室外活动场地。</li>
                <li><strong>安全与视线管理：</strong>幼儿园对<strong>安全性</strong>要求极高，内向型布局使得所有主要活动空间均朝向内部庭院，实现了视线上的完全闭环，极大降低了教师的看护与管理难度。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Core Strategies */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900 tracking-tight">核心设计策略适配分析</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="shadow-sm border-zinc-200">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-xs font-bold text-zinc-500">01</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 text-sm mb-1">实体围合屏障</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      <strong className="text-zinc-700 font-medium">适用原因：</strong>利用建筑外围实体墙面和辅助功能区阻挡四周道路噪声，为内部创造安静的声学环境。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-zinc-200">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-xs font-bold text-zinc-500">02</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 text-sm mb-1">底层架空与灰空间</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      <strong className="text-zinc-700 font-medium">适用原因：</strong>应对炎热多雨气候，提供遮阳避雨的全天候活动空间，并引导自然风穿透庭院。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-zinc-200">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-xs font-bold text-zinc-500">03</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 text-sm mb-1">视线向心聚集</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      <strong className="text-zinc-700 font-medium">适用原因：</strong>提升园区安全性，活动区集中在内院，便于教师从各个班级进行无死角看护。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-zinc-200">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-xs font-bold text-zinc-500">04</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 text-sm mb-1">尖角空间消解</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      <strong className="text-zinc-700 font-medium">适用原因：</strong>将三角形场地的三个尖角区域转化为设备平台、绿化死角或次要出入口，保证主体教学空间方正。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Pros & Cons */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/30 shadow-sm">
            <CardHeader className="pb-3 border-b border-emerald-100/50">
              <CardTitle className="text-emerald-800 text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                方案优势 (Pros)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3 text-sm text-emerald-800/80">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span><strong>极高的安全性：</strong> 封闭的外部边界和向心的内部空间，杜绝了外部视线干扰和儿童走失风险。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span><strong>优秀的声学隔离：</strong> 建筑实体作为天然隔音屏障，最大化降低四周道路噪声对教学的影响。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span><strong>强烈的归属感：</strong> 围合的庭院容易营造出温馨、有安全感的“儿童村落”氛围。</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50/30 shadow-sm">
            <CardHeader className="pb-3 border-b border-amber-100/50">
              <CardTitle className="text-amber-800 text-sm font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                潜在风险 (Cons)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3 text-sm text-amber-800/80">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span><strong>局部采光受限：</strong> 围合布局可能导致部分朝向（如北向或自遮挡区域）的班级采光不足，需进一步优化剖面。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span><strong>流线较长：</strong> 环形流线可能导致部分端头班级到达公共设施（如音体室）的步行距离较远。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span><strong>通风死角：</strong> 若庭院高宽比设计不当，夏季可能在庭院底部形成窝风区，需依赖底层架空来缓解。</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-zinc-200 gap-4">
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link to={`/projects/${id || 'new-123'}/results`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回结果页
            </Link>
          </Button>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              <GitCompare className="w-4 h-4 mr-2" />
              对比其他方案
            </Button>
            <Button className="w-full sm:w-auto bg-zinc-900 text-white hover:bg-zinc-800">
              进入深化设计
            </Button>
          </div>
        </div>

      </main>
    </div>
  );
}


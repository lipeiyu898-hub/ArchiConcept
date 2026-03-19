import { useState, useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, Bookmark, RefreshCw, AlertTriangle, CheckCircle2, XCircle, ArrowRight, ShieldAlert, ThermometerSun, Maximize, GitMerge, Layers, Info, Sparkles, Loader2 } from "lucide-react";

export default function Results() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const inputData = location.state || {};
  
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    // Simulate generation time
    const timer = setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [location.state]);

  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  // Default values if no state is provided
  const projectName = inputData.projectName || "未命名项目 Untitled Project";
  const siteShape = inputData.siteShape || "矩形 Rectangular";
  const roadInterfaces = inputData.roadInterfaces || "1面临街 (1 Side)";
  const climate = inputData.climate || "温和气候 (Temperate)";
  const hotRainy = inputData.hotRainy || false;
  const noiseLevel = inputData.noiseLevel || 2;
  const security = inputData.security || 5;
  const quietness = inputData.quietness || 3;
  const courtyard = inputData.courtyard || false;
  const semiOutdoor = inputData.semiOutdoor || false;
  const mainRoad = inputData.mainRoad || false;

  // 1. Generate Tags
  const tags = ["幼儿园 Kindergarten", "3层 3F", siteShape, roadInterfaces, climate];
  if (hotRainy) tags.push("炎热多雨 Hot & Rainy");
  if (noiseLevel === 3) tags.push("高噪声 High Noise");
  if (security >= 4) tags.push("强调安全 Security");
  if (courtyard) tags.push("需要庭院 Courtyard");
  if (semiOutdoor) tags.push("半室外空间 Semi-outdoor");

  // 2. Identify Problems
  const problems = [];
  if (siteShape.includes("三角形") || siteShape.includes("不规则")) {
    problems.push({ title: "边界复杂", desc: `${siteShape.split(' ')[0]}场地导致空间利用率低，难以布置标准矩形单元。` });
  }
  if (roadInterfaces.includes("3") || roadInterfaces.includes("4") || mainRoad || noiseLevel === 3) {
    problems.push({ title: "道路噪声干扰明显", desc: "临街面多或靠近主干道，缺乏安静的内部环境，对教学活动影响大。" });
  }
  if (roadInterfaces.includes("3") || roadInterfaces.includes("4")) {
    problems.push({ title: "安全缓冲需求高", desc: "多面临街增加了出入口管理难度，需建立明确的安全边界。" });
  }
  if (siteShape.includes("三角形")) {
    problems.push({ title: "尖角空间利用效率低", desc: "场地锐角区域难以布置主要教学用房。" });
  }
  if (hotRainy || climate.includes("热带")) {
    problems.push({ title: "室外活动受气候影响大", desc: "炎热多雨气候要求大量的遮阳避雨活动空间。" });
  }
  if (problems.length === 0) {
    problems.push({ title: "常规场地条件", desc: "场地条件较好，无明显极端约束，设计自由度高。" });
  }

  // 3. Match Strategies
  const strategies = [];
  if (problems.some(p => p.title === "道路噪声干扰明显") || quietness >= 4) {
    strategies.push({ icon: Maximize, title: "内向组织 Introverted", desc: "建筑沿边界布置，将活动场地包裹在中心，隔绝外部噪音与视线。" });
  }
  if (problems.some(p => p.title === "安全缓冲需求高") || security >= 4) {
    strategies.push({ icon: ShieldAlert, title: "退界缓冲 Setback Buffer", desc: "沿街面增加绿化退界，形成物理与心理的安全缓冲带。" });
  }
  if ((problems.some(p => p.title === "室外活动受气候影响大") || hotRainy) && semiOutdoor) {
    strategies.push({ icon: ThermometerSun, title: "灰空间连廊 Semi-outdoor", desc: "利用宽大的连廊连接各体量，适应炎热多雨气候，提供全天候活动区。" });
  }
  if (problems.some(p => p.title === "尖角空间利用效率低")) {
    strategies.push({ icon: GitMerge, title: "角部服务化 Corner Service", desc: "将楼梯、卫生间等服务空间布置在场地尖角处，提高主体空间效率。" });
  }
  if (courtyard) {
    strategies.push({ icon: Layers, title: "中心庭院 Central Courtyard", desc: "围绕庭院组织教学单元，形成向心聚集的微型社区。" });
  }
  if (strategies.length < 3) {
    strategies.push({ icon: Layers, title: "分层组织 Layering", desc: "底层架空作为公共活动区，二三层作为安静的教学区，垂直分离动静。" });
  }

  // 4. Score Prototypes (Expanded Pool)
  const allPrototypes = [
    {
      id: "A",
      name: "内向庭院型",
      type: "Introverted Courtyard",
      reason: "最大化隔绝外部干扰，形成绝对安全的内部儿童微型社会。",
      pros: ["噪音控制极佳", "中心庭院安全性高", "空间向心力强"],
      cons: ["外立面可能较封闭", "部分教室朝向受限"],
      score: 60 + (security >= 4 ? 15 : 0) + (noiseLevel === 3 ? 15 : 0) + (courtyard ? 10 : 0),
      eval: { security: 95, noise: 90, climate: 80, circulation: 85, site: 85 },
      visual: (
        <div className="w-full h-full relative flex items-center justify-center bg-zinc-50/50">
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="25" width="120" height="100" rx="8" fill="#18181b" className="drop-shadow-xl"/>
            <rect x="70" y="55" width="60" height="40" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
            <text x="100" y="79" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold" fontFamily="monospace">COURTYARD</text>
          </svg>
        </div>
      )
    },
    {
      id: "B",
      name: "折线围合型",
      type: "Folded Enclosure",
      reason: "顺应场地边界，通过折线体量划分出多个不同尺度的活动院落。",
      pros: ["场地利用率最高", "院落尺度丰富", "采光面大"],
      cons: ["流线较长", "尖角处理难度大"],
      score: 60 + (siteShape.includes("三角形") || siteShape.includes("不规则") ? 25 : 0) + (roadInterfaces.includes("2") || roadInterfaces.includes("3") ? 15 : 0),
      eval: { security: 85, noise: 80, climate: 85, circulation: 75, site: 95 },
      visual: (
        <div className="w-full h-full relative flex items-center justify-center bg-zinc-50/50">
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40,30 L160,30 L160,60 L70,60 L70,120 L40,120 Z" fill="#18181b" className="drop-shadow-xl" strokeLinejoin="round" strokeWidth="8" stroke="#18181b"/>
            <path d="M40,30 L160,30 L160,60 L70,60 L70,120 L40,120 Z" fill="#18181b"/>
            <circle cx="115" cy="90" r="20" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
            <text x="115" y="94" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold" fontFamily="monospace">YARD</text>
          </svg>
        </div>
      )
    },
    {
      id: "C",
      name: "组团连廊型",
      type: "Cluster & Corridor",
      reason: "将教学单元打散为独立组团，通过宽大的半室外连廊串联，极度适应气候。",
      pros: ["气候适应性极佳", "通风采光好", "半室外空间丰富"],
      cons: ["占地面积大", "边界防护压力大"],
      score: 60 + (hotRainy ? 20 : 0) + (semiOutdoor ? 15 : 0) + (climate.includes("热带") ? 10 : 0),
      eval: { security: 75, noise: 70, climate: 98, circulation: 90, site: 75 },
      visual: (
        <div className="w-full h-full relative flex items-center justify-center bg-zinc-50/50">
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Connecting Corridor */}
            <path d="M50,75 L150,75" stroke="#d4d4d8" strokeWidth="12" strokeLinecap="round"/>
            {/* Blocks */}
            <rect x="30" y="40" width="40" height="40" rx="6" fill="#18181b" className="drop-shadow-lg"/>
            <rect x="80" y="70" width="40" height="40" rx="6" fill="#18181b" className="drop-shadow-lg"/>
            <rect x="130" y="30" width="40" height="40" rx="6" fill="#18181b" className="drop-shadow-lg"/>
          </svg>
        </div>
      )
    },
    {
      id: "D",
      name: "垂直分层型",
      type: "Vertical Layering",
      reason: "在有限的场地内通过垂直维度的功能叠加，释放底层公共空间。",
      pros: ["节约用地", "动静分区明确", "底层开放性好"],
      cons: ["垂直交通压力大", "高层活动受限"],
      score: 60 + (siteShape.includes("矩形") ? 10 : 0) + (!courtyard ? 15 : 0) + (roadInterfaces.includes("1") ? 10 : 0),
      eval: { security: 80, noise: 75, climate: 70, circulation: 80, site: 90 },
      visual: (
        <div className="w-full h-full relative flex items-center justify-center bg-zinc-50/50">
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ground line */}
            <line x1="20" y1="130" x2="180" y2="130" stroke="#d4d4d8" strokeWidth="2"/>
            {/* Pilotis (架空) */}
            <rect x="60" y="100" width="10" height="30" fill="#71717a"/>
            <rect x="130" y="100" width="10" height="30" fill="#71717a"/>
            <rect x="50" y="100" width="100" height="4" fill="#18181b"/>
            {/* Level 2 */}
            <rect x="50" y="65" width="100" height="35" rx="4" fill="#18181b" className="drop-shadow-md"/>
            {/* Level 3 */}
            <rect x="60" y="35" width="80" height="30" rx="4" fill="#27272a" className="drop-shadow-md"/>
            {/* Roof garden */}
            <path d="M50,65 L60,65" stroke="#22c55e" strokeWidth="4" strokeLinecap="round"/>
            <path d="M140,65 L150,65" stroke="#22c55e" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>
      )
    },
    {
      id: "E",
      name: "集中体块型",
      type: "Compact Block",
      reason: "采用紧凑的集中式布局，最大程度减少建筑外表面积，提升保温能效。",
      pros: ["节能效果极佳", "内部流线最短", "造价相对经济"],
      cons: ["内部采光依赖中庭", "体量感较笨重"],
      score: 60 + (climate.includes("严寒") || climate.includes("冬冷") ? 25 : 0) + (noiseLevel === 3 ? 10 : 0),
      eval: { security: 90, noise: 85, climate: 95, circulation: 95, site: 80 },
      visual: (
        <div className="w-full h-full relative flex items-center justify-center bg-zinc-50/50">
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="35" width="80" height="80" rx="12" fill="#18181b" className="drop-shadow-2xl"/>
            <rect x="85" y="60" width="30" height="30" rx="4" fill="#f4f4f5" opacity="0.9"/>
            <text x="100" y="79" textAnchor="middle" fill="#71717a" fontSize="8" fontWeight="bold" fontFamily="monospace">ATRIUM</text>
          </svg>
        </div>
      )
    }
  ];

  // Select top 3 prototypes
  const prototypes = allPrototypes.sort((a, b) => b.score - a.score).slice(0, 3);

  // 5. Generate Dynamic Explanation Text
  const requirements = [];
  if (security >= 4) requirements.push("安全");
  if (courtyard) requirements.push("庭院");
  if (semiOutdoor) requirements.push("半室外空间");
  if (quietness >= 4) requirements.push("安静");
  
  const reqText = requirements.length > 0 ? `结合您对${requirements.join('、')}的核心诉求，` : "";
  const strategyNames = strategies.map(s => s.title.split(' ')[0]).join('、');
  const problemNames = problems.map(p => p.title).join('、');
  
  const explanationText = `基于您输入的场地条件（${siteShape.split(' ')[0]}、${roadInterfaces.split(' ')[0]}）与环境特征（${climate.split(' ')[0]}${hotRainy ? '、炎热多雨' : ''}${noiseLevel === 3 ? '、高噪声' : ''}），本系统识别出项目面临的主要挑战：${problemNames}。${reqText}我们为您推演了以下 ${prototypes.length} 种空间原型方向。这些原型通过引入“${strategyNames}”等核心策略，旨在化解场地劣势并最大化空间潜能，为您提供科学、理性的概念设计起点。`;

  if (isGenerating) {
    return (
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400 blur-xl opacity-20 rounded-full"></div>
          <Loader2 className="w-12 h-12 text-zinc-900 animate-spin relative z-10" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">正在生成概念方案...</h2>
          <p className="text-sm text-zinc-500">
            系统正在分析场地条件与环境特征，匹配最优设计策略。
          </p>
        </div>
        
        <div className="w-64 space-y-2 mt-4">
          <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
            <div className="h-full bg-zinc-900 w-1/2 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
          </div>
          <div className="flex justify-between text-[10px] font-mono uppercase tracking-wider text-zinc-400">
            <span>Analyzing</span>
            <span>Generating</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Page Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-zinc-200 shadow-sm sticky top-0 z-40">
        <div>
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
            <Link to="/dashboard" className="hover:text-zinc-900 transition-colors">Dashboard</Link>
            <span>/</span>
            <span>概念推演报告 Conceptual Report</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">{projectName}</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" asChild className="bg-white">
            <Link to="/projects/new"><ArrowLeft className="w-4 h-4 mr-2" /> 返回编辑 Edit</Link>
          </Button>
          <Button variant="outline" size="sm" className="bg-white" onClick={handleRegenerate}>
            <RefreshCw className="w-4 h-4 mr-2" /> 重新生成 Regenerate
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
            <Bookmark className="w-4 h-4 mr-2" /> 收藏 Save
          </Button>
          <Button size="sm" className="bg-zinc-900 text-white hover:bg-zinc-800">
            <Download className="w-4 h-4 mr-2" /> 导出 PDF Export
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Column: Summary & Problems */}
        <div className="lg:col-span-4 space-y-8">
          {/* Project Summary */}
          <section>
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
              输入摘要 Input Summary
            </h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Site Problems */}
          <section>
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
              场地问题识别 Problem Identification
            </h2>
            <div className="space-y-3">
              {problems.map((problem, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100">
                  <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">{problem.title}</div>
                    <div className="text-xs text-zinc-600 mt-0.5 leading-relaxed">{problem.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Strategies & Explanation */}
        <div className="lg:col-span-8 space-y-8">
          {/* Dynamic Explanation Text */}
          <section className="p-6 rounded-xl bg-zinc-900 text-white shadow-sm">
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              方案生成说明 AI Generation Insight
            </h2>
            <p className="text-sm leading-relaxed text-zinc-200">
              {explanationText}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              推荐设计策略 Recommended Strategies
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {strategies.map((strategy, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
                    <strategy.icon className="w-5 h-5 text-zinc-700 stroke-[1.5]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">{strategy.title}</div>
                    <div className="text-xs text-zinc-500 mt-1 leading-relaxed">{strategy.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Conceptual Prototypes */}
      <section className="pt-8 border-t border-zinc-200">
        <div className="mb-8">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">概念原型方向 Conceptual Prototypes</h2>
          <p className="text-sm text-zinc-500 mt-1">基于上述策略推演出的 3 种不同侧重点的空间原型。</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {prototypes.map((option, index) => (
            <Card key={option.id} className="flex flex-col border-zinc-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {/* Visual Placeholder */}
              <div className="h-48 bg-zinc-50 border-b border-zinc-100 p-6 relative">
                <div className="absolute top-4 left-4 text-xs font-mono font-bold text-zinc-400">
                  {index === 0 ? "RECOMMENDED" : `OPTION ${option.id}`}
                </div>
                <div className="absolute top-4 right-4 bg-zinc-900 text-white text-xs font-bold px-2 py-1 rounded-md">
                  {option.score} PTS
                </div>
                {option.visual}
              </div>
              
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-zinc-900">{option.name}</h3>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1">{option.type}</div>
                </div>
                
                <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                  <span className="font-semibold text-zinc-900">核心理由：</span>{option.reason}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <div className="font-semibold text-emerald-700 mb-2 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> 优势 Pros</div>
                    <ul className="space-y-1.5 text-zinc-600 text-xs">
                      {option.pros.map((pro, i) => <li key={i}>• {pro}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-red-700 mb-2 flex items-center gap-1.5"><XCircle className="w-3.5 h-3.5" /> 风险 Cons</div>
                    <ul className="space-y-1.5 text-zinc-600 text-xs">
                      {option.cons.map((con, i) => <li key={i}>• {con}</li>)}
                    </ul>
                  </div>
                </div>

                {/* Evaluation Panel */}
                <div className="mt-auto pt-6 border-t border-zinc-100 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">评估面板 Evaluation</div>
                  {[
                    { label: "安全性 Security", val: option.eval.security },
                    { label: "降噪 Noise Reduction", val: option.eval.noise },
                    { label: "气候适应 Climate", val: option.eval.climate },
                    { label: "流线清晰 Circulation", val: option.eval.circulation },
                    { label: "场地适配 Site Fit", val: option.eval.site },
                  ].map((metric, i) => (
                    <div key={i} className="flex items-center text-xs">
                      <span className="w-28 text-zinc-600">{metric.label}</span>
                      <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden mx-3">
                        <div className="h-full bg-zinc-800 rounded-full" style={{ width: `${metric.val}%` }}></div>
                      </div>
                      <span className="w-6 text-right font-mono text-zinc-500">{metric.val}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <div className="p-4 bg-zinc-50 border-t border-zinc-100">
                <Button className="w-full bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-100" asChild>
                  <Link to={`/projects/${id || 'new-123'}/schemes/${option.id}`} state={{ formData: inputData }}>
                    查看详情 View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

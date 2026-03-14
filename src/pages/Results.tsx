import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, Bookmark, RefreshCw, AlertTriangle, CheckCircle2, XCircle, ArrowRight, ShieldAlert, ThermometerSun, Maximize, GitMerge, Layers } from "lucide-react";

export default function Results() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Page Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-zinc-200 shadow-sm sticky top-0 z-40">
        <div>
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-1">
            <Link to="/dashboard" className="hover:text-zinc-900 transition-colors">Dashboard</Link>
            <span>/</span>
            <span>Riverside Kindergarten</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">概念推演报告 Conceptual Report</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" asChild className="bg-white">
            <Link to="/projects/new"><ArrowLeft className="w-4 h-4 mr-2" /> 返回编辑 Edit</Link>
          </Button>
          <Button variant="outline" size="sm" className="bg-white">
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
              {["幼儿园 Kindergarten", "3层 3F", "三角形场地 Triangular Site", "四周道路 4-Side Roads", "炎热多雨 Hot & Rainy", "高噪声 High Noise", "强调安全 Security", "需要庭院 Courtyard", "半室外空间 Semi-outdoor"].map((tag) => (
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
              {[
                { title: "边界复杂", desc: "三角形场地导致空间利用率低，难以布置标准矩形单元。" },
                { title: "道路噪声干扰明显", desc: "四周临街，缺乏安静的内部环境，对教学活动影响大。" },
                { title: "安全缓冲需求高", desc: "四面临街增加了出入口管理难度，需建立明确的安全边界。" },
                { title: "尖角空间利用效率低", desc: "场地锐角区域难以布置主要教学用房。" },
                { title: "室外活动受气候影响大", desc: "炎热多雨气候要求大量的遮阳避雨活动空间。" }
              ].map((problem, i) => (
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

        {/* Right Column: Strategies */}
        <div className="lg:col-span-8 space-y-8">
          <section>
            <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              推荐设计策略 Recommended Strategies
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Maximize, title: "内向组织 Introverted", desc: "建筑沿边界布置，将活动场地包裹在中心，隔绝外部噪音与视线。" },
                { icon: ShieldAlert, title: "退界缓冲 Setback Buffer", desc: "沿街面增加绿化退界，形成物理与心理的安全缓冲带。" },
                { icon: ThermometerSun, title: "灰空间连廊 Semi-outdoor", desc: "利用宽大的连廊连接各体量，适应炎热多雨气候，提供全天候活动区。" },
                { icon: GitMerge, title: "角部服务化 Corner Service", desc: "将楼梯、卫生间等服务空间布置在场地尖角处，提高主体空间效率。" },
                { icon: Layers, title: "分层组织 Layering", desc: "底层架空作为公共活动区，二三层作为安静的教学区，垂直分离动静。" }
              ].map((strategy, i) => (
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
          {[
            {
              id: "A",
              name: "内向庭院型",
              type: "Introverted Courtyard",
              reason: "最大化隔绝四周道路噪音，形成绝对安全的内部儿童微型社会。",
              pros: ["噪音控制极佳", "中心庭院安全性高", "空间向心力强"],
              cons: ["外立面可能较封闭", "部分教室朝向受限"],
              score: 92,
              eval: { security: 95, noise: 90, climate: 80, circulation: 85, site: 85 },
              visual: (
                <div className="w-full h-full relative flex items-center justify-center">
                  <div className="absolute inset-0 border-[12px] border-zinc-800 rounded-sm" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
                  <div className="w-16 h-16 bg-emerald-100 rounded-sm border border-emerald-200 flex items-center justify-center text-[10px] text-emerald-700 font-medium">内院</div>
                </div>
              )
            },
            {
              id: "B",
              name: "折线围合型",
              type: "Folded Enclosure",
              reason: "顺应三角形场地边界，通过折线体量划分出多个不同尺度的活动院落。",
              pros: ["场地利用率最高", "院落尺度丰富", "采光面大"],
              cons: ["流线较长", "尖角处理难度大"],
              score: 88,
              eval: { security: 85, noise: 80, climate: 85, circulation: 75, site: 95 },
              visual: (
                <div className="w-full h-full relative flex items-center justify-center">
                  <div className="w-32 h-32 border-t-[16px] border-l-[16px] border-zinc-800 rounded-tl-lg transform rotate-45"></div>
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-emerald-100 rounded-sm border border-emerald-200"></div>
                  <div className="absolute top-6 left-6 w-8 h-8 bg-emerald-100 rounded-sm border border-emerald-200"></div>
                </div>
              )
            },
            {
              id: "C",
              name: "组团连廊型",
              type: "Cluster & Corridor",
              reason: "将教学单元打散为独立组团，通过宽大的半室外连廊串联，极度适应炎热多雨气候。",
              pros: ["气候适应性极佳", "通风采光好", "半室外空间丰富"],
              cons: ["占地面积大", "边界防护压力大"],
              score: 85,
              eval: { security: 75, noise: 70, climate: 98, circulation: 90, site: 75 },
              visual: (
                <div className="w-full h-full relative flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-sm"></div>
                  <div className="w-12 h-12 bg-zinc-800 rounded-sm"></div>
                  <div className="w-12 h-12 bg-zinc-800 rounded-sm"></div>
                  <div className="absolute top-1/2 left-8 right-8 h-4 bg-zinc-300 -translate-y-1/2 -z-10"></div>
                </div>
              )
            }
          ].map((option) => (
            <Card key={option.id} className="flex flex-col border-zinc-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {/* Visual Placeholder */}
              <div className="h-48 bg-zinc-50 border-b border-zinc-100 p-6 relative">
                <div className="absolute top-4 left-4 text-xs font-mono font-bold text-zinc-400">OPTION {option.id}</div>
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
                  <Link to={`/projects/${id || 'new-123'}/schemes/${option.id}`}>
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

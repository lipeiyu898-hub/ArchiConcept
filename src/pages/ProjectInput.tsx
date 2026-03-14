import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, CheckCircle2, Save, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: "basic", title: "基础信息", desc: "Basic Info" },
  { id: "geometry", title: "场地几何", desc: "Site Geometry" },
  { id: "context", title: "周边关系", desc: "Context" },
  { id: "environment", title: "环境条件", desc: "Environment" },
  { id: "program", title: "使用需求", desc: "Program Needs" },
  { id: "extra", title: "补充描述", desc: "Additional" },
];

// Simple Switch Component
function Switch({ checked, onChange }: { checked: boolean; onChange: (c: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        checked ? "bg-zinc-900" : "bg-zinc-200"
      )}
    >
      <span
        className={cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform",
          checked ? "translate-x-4" : "translate-x-0"
        )}
      />
    </button>
  );
}

export default function ProjectInput() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock state for switches to make them interactive
  const [switches, setSwitches] = useState<Record<string, boolean>>({
    elevation: false,
    mainRoad: true,
    sensitive: false,
    hotRainy: false,
    courtyard: true,
    semiOutdoor: true,
    sharedActivity: true,
    clearZoning: true,
  });

  const toggleSwitch = (key: string) => {
    setSwitches(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      handleGenerate();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      navigate("/projects/new-123/results");
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">新建项目参数输入</h1>
        <p className="text-zinc-500 text-sm mt-1">Define site constraints and program requirements to generate conceptual strategies.</p>
      </div>

      {/* Progress Stepper */}
      <div className="relative mb-12">
        <div className="absolute top-4 left-0 w-full h-[1px] bg-zinc-200 -z-10"></div>
        <div 
          className="absolute top-4 left-0 h-[1px] bg-zinc-900 -z-10 transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center gap-3 bg-zinc-50 px-2">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors border bg-white",
                index < currentStep ? "border-zinc-900 bg-zinc-900 text-white" : 
                index === currentStep ? "border-zinc-900 text-zinc-900 ring-4 ring-zinc-900/10" : 
                "border-zinc-200 text-zinc-400"
              )}>
                {index < currentStep ? <CheckCircle2 className="w-4 h-4" /> : index + 1}
              </div>
              <div className="text-center">
                <div className={cn(
                  "text-sm font-semibold",
                  index <= currentStep ? "text-zinc-900" : "text-zinc-400"
                )}>{step.title}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mt-0.5 hidden sm:block">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card className="border-zinc-200 shadow-sm overflow-hidden">
        <div className="bg-zinc-900 px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-white tracking-wide">{steps[currentStep].title}</h2>
            <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider mt-1">Step 0{currentStep + 1} / 06</p>
          </div>
        </div>
        
        <CardContent className="p-8 min-h-[400px] bg-white">
          {/* Step 1: Basic Info */}
          {currentStep === 0 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">项目名称 Project Name</label>
                  <Input placeholder="例如：滨水社区幼儿园" className="h-11" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">建筑类型 Building Type</label>
                  <select className="flex h-11 w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:opacity-50" disabled>
                    <option>幼儿园 (Kindergarten)</option>
                  </select>
                </div>
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">层数 Floors</label>
                  <Input type="number" placeholder="3" defaultValue="3" className="h-11" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">容积率要求 FAR (Optional)</label>
                  <Input type="number" step="0.1" placeholder="例如：0.8" className="h-11" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">用地面积 Site Area (sqm)</label>
                  <Input type="number" placeholder="4500" className="h-11" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">总建筑面积 Total GFA (sqm)</label>
                  <Input type="number" placeholder="3200" className="h-11" />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Site Geometry */}
          {currentStep === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">场地形状 Site Shape</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["矩形 Rectangular", "三角形 Triangular", "不规则 Irregular", "狭长 Linear"].map((shape, i) => (
                    <label key={shape} className="relative flex flex-col items-center justify-center p-4 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 transition-colors [&:has(:checked)]:border-zinc-900 [&:has(:checked)]:bg-zinc-50 [&:has(:checked)]:ring-1 [&:has(:checked)]:ring-zinc-900">
                      <input type="radio" name="shape" className="sr-only" defaultChecked={i === 0} />
                      <div className="w-12 h-12 mb-3 opacity-60 flex items-center justify-center">
                        {i === 0 && <div className="w-10 h-8 border-2 border-zinc-900"></div>}
                        {i === 1 && <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[34px] border-b-zinc-900"></div>}
                        {i === 2 && <div className="w-10 h-10 border-2 border-zinc-900" style={{ clipPath: 'polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)' }}></div>}
                        {i === 3 && <div className="w-12 h-4 border-2 border-zinc-900"></div>}
                      </div>
                      <span className="text-xs font-medium text-center">{shape.split(' ')[0]}</span>
                      <span className="text-[10px] text-zinc-500 mt-0.5">{shape.split(' ')[1]}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">朝向 Orientation</label>
                  <select className="flex h-11 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950">
                    <option>正南 (South)</option>
                    <option>东南 (Southeast)</option>
                    <option>西南 (Southwest)</option>
                    <option>偏东/西 (East/West)</option>
                  </select>
                </div>
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">边界复杂度 Boundary Complexity</label>
                  <select className="flex h-11 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950">
                    <option>简单 Simple (直线为主)</option>
                    <option>中等 Moderate</option>
                    <option>复杂 Complex (多折线/曲线)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg bg-zinc-50/50">
                <div>
                  <div className="font-medium text-sm text-zinc-900">是否有高差 Elevation Difference</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Does the site have significant topographical changes?</div>
                </div>
                <Switch checked={switches.elevation} onChange={() => toggleSwitch('elevation')} />
              </div>

              <div className="space-y-2.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">可选补充说明 Optional Notes</label>
                <textarea 
                  className="flex min-h-[80px] w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950"
                  placeholder="例如：场地东北角有一棵古树需要保留..."
                ></textarea>
              </div>
            </div>
          )}

          {/* Step 3: Context */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">道路界面数量 Road Interfaces</label>
                  <select className="flex h-11 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950">
                    <option>1面临街 (1 Side)</option>
                    <option>2面临街 (2 Sides - Corner)</option>
                    <option>3面临街 (3 Sides)</option>
                    <option>4面临街 (Island)</option>
                  </select>
                </div>
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">主要入口方向 Primary Entrance</label>
                  <select className="flex h-11 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950">
                    <option>北侧 (North)</option>
                    <option>南侧 (South)</option>
                    <option>东侧 (East)</option>
                    <option>西侧 (West)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">周边建筑密度 Surrounding Density</label>
                <div className="px-2">
                  <input type="range" min="1" max="3" defaultValue="2" className="w-full accent-zinc-900 h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer" />
                  <div className="flex justify-between text-xs text-zinc-500 mt-2 font-medium">
                    <span>低 Low</span>
                    <span>中 Medium</span>
                    <span>高 High</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg bg-zinc-50/50">
                  <div>
                    <div className="font-medium text-sm text-zinc-900">临主干道 Main Road</div>
                    <div className="text-xs text-zinc-500 mt-0.5">Adjacent to heavy traffic?</div>
                  </div>
                  <Switch checked={switches.mainRoad} onChange={() => toggleSwitch('mainRoad')} />
                </div>
                <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg bg-zinc-50/50">
                  <div>
                    <div className="font-medium text-sm text-zinc-900">敏感界面 Sensitive Interface</div>
                    <div className="text-xs text-zinc-500 mt-0.5">E.g. hospitals, residential</div>
                  </div>
                  <Switch checked={switches.sensitive} onChange={() => toggleSwitch('sensitive')} />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Environment */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">气候类型 Climate Type</label>
                  <select className="flex h-11 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950">
                    <option>温和气候 (Temperate)</option>
                    <option>夏热冬冷 (Hot Summer, Cold Winter)</option>
                    <option>严寒地区 (Severe Cold)</option>
                    <option>热带/亚热带 (Tropical)</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-lg bg-zinc-50/50 h-11 mt-auto">
                  <div className="font-medium text-sm text-zinc-900">炎热多雨 Hot & Rainy</div>
                  <Switch checked={switches.hotRainy} onChange={() => toggleSwitch('hotRainy')} />
                </div>
              </div>

              <div className="space-y-8 pt-4">
                <div className="space-y-4">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">噪声等级 Noise Level</label>
                  <div className="px-2">
                    <input type="range" min="1" max="3" defaultValue="2" className="w-full accent-zinc-900 h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer" />
                    <div className="flex justify-between text-xs text-zinc-500 mt-2 font-medium">
                      <span>低 (Quiet)</span>
                      <span>中等 (Moderate)</span>
                      <span>高 (Noisy)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">日照要求 Sunlight Requirement</label>
                  <div className="px-2">
                    <input type="range" min="1" max="3" defaultValue="3" className="w-full accent-zinc-900 h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer" />
                    <div className="flex justify-between text-xs text-zinc-500 mt-2 font-medium">
                      <span>标准 (Standard)</span>
                      <span>较高 (High)</span>
                      <span>严格 (Strict - 3hrs+)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">通风需求 Ventilation Requirement</label>
                  <div className="px-2">
                    <input type="range" min="1" max="2" defaultValue="2" className="w-full accent-zinc-900 h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer" />
                    <div className="flex justify-between text-xs text-zinc-500 mt-2 font-medium">
                      <span>标准 (Standard)</span>
                      <span>强化穿堂风 (Enhanced Cross-ventilation)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Program Needs */}
          {currentStep === 4 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Priorities */}
                <div className="space-y-8 bg-zinc-50 p-6 rounded-xl border border-zinc-200">
                  <h3 className="text-sm font-semibold text-zinc-900 mb-4">核心优先级 Priorities</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-zinc-700">安全 Security</span>
                      <span className="text-zinc-500 font-mono">High</span>
                    </div>
                    <input type="range" min="1" max="5" defaultValue="5" className="w-full accent-zinc-900 h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-zinc-700">安静 Quietness</span>
                      <span className="text-zinc-500 font-mono">Med</span>
                    </div>
                    <input type="range" min="1" max="5" defaultValue="3" className="w-full accent-zinc-900 h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-zinc-700">开放 Openness</span>
                      <span className="text-zinc-500 font-mono">High</span>
                    </div>
                    <input type="range" min="1" max="5" defaultValue="4" className="w-full accent-zinc-900 h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer" />
                  </div>
                </div>

                {/* Spatial Preferences */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-zinc-900 mb-4">空间偏好 Spatial Preferences</h3>
                  
                  {[
                    { key: 'courtyard', label: '需要内庭院', desc: 'Needs enclosed courtyard' },
                    { key: 'semiOutdoor', label: '强调半室外空间', desc: 'Emphasize semi-outdoor areas' },
                    { key: 'sharedActivity', label: '强调共享活动空间', desc: 'Emphasize shared activity hubs' },
                    { key: 'clearZoning', label: '强调动静清晰分区', desc: 'Strict active/quiet zoning' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-3 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors">
                      <div>
                        <div className="font-medium text-sm text-zinc-900">{item.label}</div>
                        <div className="text-[11px] text-zinc-500 mt-0.5">{item.desc}</div>
                      </div>
                      <Switch checked={switches[item.key]} onChange={() => toggleSwitch(item.key)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Extra */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">补充描述 Additional Requirements (Natural Language)</label>
                <textarea 
                  className="flex min-h-[200px] w-full rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 leading-relaxed"
                  placeholder="请用自然语言描述其他特殊需求。例如：&#10;“希望建筑外观看起来像一个童话城堡，屋顶可以作为活动场地。一楼需要有一个对社区开放的绘本馆。尽量保留场地西南角的大榕树。”"
                ></textarea>
                <p className="text-xs text-zinc-500">
                  系统将利用大语言模型解析您的自然语言输入，并将其转化为空间生成策略的权重参数。
                </p>
              </div>
            </div>
          )}
        </CardContent>
        
        {/* Bottom Action Bar */}
        <div className="bg-zinc-50 px-8 py-5 border-t border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handleBack} disabled={currentStep === 0 || isGenerating} className="bg-white">
              <ArrowLeft className="w-4 h-4 mr-2" /> 上一步 Back
            </Button>
            <Button variant="ghost" className="text-zinc-500 hover:text-zinc-900 hidden sm:flex">
              <Save className="w-4 h-4 mr-2" /> 保存草稿 Save Draft
            </Button>
          </div>
          
          <Button 
            onClick={handleNext} 
            disabled={isGenerating}
            className={cn(
              "min-w-[140px] transition-all",
              currentStep === steps.length - 1 ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""
            )}
          >
            {isGenerating ? (
              <span className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" /> 生成中 Generating...
              </span>
            ) : currentStep === steps.length - 1 ? (
              <span className="flex items-center">
                生成方案 Generate <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            ) : (
              <span className="flex items-center">
                下一步 Next <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}


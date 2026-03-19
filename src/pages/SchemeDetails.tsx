import { Link, useParams, useLocation } from "react-router-dom";
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
  Route as RouteIcon,
  Map as MapIcon
} from "lucide-react";

const schemeData: Record<string, any> = {
  "A": {
    name: "内向庭院型",
    type: "Introverted Courtyard",
    summary: "该方案采用向内聚集的体量布局，将建筑实体沿场地边界布置，在中心围合出一个受保护的户外活动庭院。通过这种方式，建筑本身成为了抵御外部不利因素的屏障，同时在内部创造了一个安全、微气候良好的核心教学与活动空间。",
    eval: { security: 95, noise: 90, climate: 85, circulation: 80, site: 88 },
    logic: "在面临四周道路的高噪声干扰下，传统的行列式或集中式布局难以同时满足声学要求和空间效率。系统推荐“内向庭院型”原型，主要基于以下推演逻辑：",
    logicPoints: [
      { title: "抗噪与边界防御", desc: "将服务性空间布置在临街边缘，形成实体隔音屏障，有效阻挡四周道路的高噪声，保护内部教学区。" },
      { title: "气候响应机制", desc: "中心庭院结合底层架空（灰空间），形成了良好的拔风效应，促进自然通风；同时提供了充足的半室外活动场地。" },
      { title: "安全与视线管理", desc: "幼儿园对安全性要求极高，内向型布局使得所有主要活动空间均朝向内部庭院，实现了视线上的完全闭环，极大降低了教师的看护与管理难度。" }
    ],
    strategies: [
      { id: "01", title: "实体围合屏障", desc: "利用建筑外围实体墙面和辅助功能区阻挡四周道路噪声，为内部创造安静的声学环境。" },
      { id: "02", title: "底层架空与灰空间", desc: "提供遮阳避雨的全天候活动空间，并引导自然风穿透庭院。" },
      { id: "03", title: "视线向心聚集", desc: "提升园区安全性，活动区集中在内院，便于教师从各个班级进行无死角看护。" },
      { id: "04", title: "尖角空间消解", desc: "将场地的边角区域转化为设备平台、绿化死角或次要出入口，保证主体教学空间方正。" }
    ],
    pros: [
      "极高的安全性： 封闭的外部边界和向心的内部空间，杜绝了外部视线干扰和儿童走失风险。",
      "优秀的声学隔离： 建筑实体作为天然隔音屏障，最大化降低四周道路噪声对教学的影响。",
      "强烈的归属感： 围合的庭院容易营造出温馨、有安全感的“儿童村落”氛围。"
    ],
    cons: [
      "局部采光受限： 围合布局可能导致部分朝向（如北向或自遮挡区域）的班级采光不足，需进一步优化剖面。",
      "流线较长： 环形流线可能导致部分端头班级到达公共设施（如音体室）的步行距离较远。",
      "通风死角： 若庭院高宽比设计不当，夏季可能在庭院底部形成窝风区，需依赖底层架空来缓解。"
    ],
    diagram: (
      <div className="relative w-full max-w-sm aspect-square">
        {/* Outer boundary */}
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2">
          <rect x="10" y="10" width="80" height="80" />
        </svg>
        {/* Building Mass */}
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-800 drop-shadow-xl transition-transform duration-700 group-hover:scale-105" fill="currentColor">
          <path d="M15,15 L85,15 L85,85 L15,85 Z M30,30 L70,30 L70,70 L30,70 Z" fillRule="evenodd" />
        </svg>
        {/* Inner Courtyard Highlight */}
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-emerald-400/20 transition-transform duration-700 group-hover:scale-105" fill="currentColor">
          <rect x="30" y="30" width="40" height="40" />
        </svg>
        {/* Annotations */}
        <div className="absolute top-[45%] left-[40%] text-[10px] font-mono text-emerald-700 font-medium">中心庭院</div>
        <div className="absolute bottom-[10%] left-[45%] text-[10px] font-mono text-zinc-500">实体隔音</div>
      </div>
    )
  },
  "B": {
    name: "折线围合型",
    type: "Folded Enclosure",
    summary: "该方案顺应不规则或狭长场地的边界，通过折线形态的建筑体量，自然划分出多个不同尺度和主题的户外活动院落。这种布局既保证了建筑的连续性，又打破了单一的大体量，创造出更符合儿童心理尺度的空间体验。",
    eval: { security: 85, noise: 80, climate: 85, circulation: 75, site: 95 },
    logic: "在面临不规则场地或需要丰富户外空间体验时，系统推荐“折线围合型”原型，主要基于以下推演逻辑：",
    logicPoints: [
      { title: "场地高效利用", desc: "折线体量能够灵活适应各种复杂的场地边界，最大化建筑占地面积的同时，避免产生消极的边角空间。" },
      { title: "多尺度院落划分", desc: "通过体量的转折，自然形成了入口广场、集中活动场、安静内院等多个不同属性的户外空间，满足不同年龄段儿童的活动需求。" },
      { title: "日照与通风优化", desc: "折线布局增加了建筑的外立面面积，有利于引入更多的自然光线，并通过错落的体量引导自然风穿透园区。" }
    ],
    strategies: [
      { id: "01", title: "顺应边界折叠", desc: "建筑体量沿场地边界折叠，最大化利用场地面积，同时形成丰富的外部空间形态。" },
      { id: "02", title: "院落主题化", desc: "利用折线形成的半围合空间，打造不同主题的户外活动区，如沙水区、种植区、器械区等。" },
      { id: "03", title: "视线渗透", desc: "在体量转折处设置通透的公共空间或玻璃幕墙，增强不同院落之间的视线联系。" },
      { id: "04", title: "灵活的交通核", desc: "将楼梯间等垂直交通核布置在体量转折的节点处，提高交通效率并作为视觉焦点。" }
    ],
    pros: [
      "场地利用率最高： 能够完美契合各种不规则场地，减少消极空间。",
      "院落尺度丰富： 创造出多个不同大小和氛围的户外空间，空间体验生动有趣。",
      "采光面大： 较长的建筑周长为更多教室提供了优质的自然采光和景观视野。"
    ],
    cons: [
      "流线较长： 线性展开的布局可能导致建筑两端的联系不够便捷。",
      "尖角处理难度大： 体量转折处容易出现不规则的室内空间，需要巧妙的室内设计来化解。",
      "造价相对较高： 较多的外墙面积和复杂的结构转折会增加建造成本。"
    ],
    diagram: (
      <div className="relative w-full max-w-sm aspect-square">
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2">
          <rect x="10" y="10" width="80" height="80" />
        </svg>
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-800 drop-shadow-xl transition-transform duration-700 group-hover:scale-105" fill="currentColor">
          <path d="M20,20 L80,20 L80,40 L40,40 L40,80 L20,80 Z" />
        </svg>
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-emerald-400/20 transition-transform duration-700 group-hover:scale-105" fill="currentColor">
          <rect x="45" y="45" width="30" height="30" />
        </svg>
        <div className="absolute top-[55%] left-[50%] text-[10px] font-mono text-emerald-700 font-medium">半围合院落</div>
      </div>
    )
  },
  "C": {
    name: "组团连廊型",
    type: "Cluster & Corridor",
    summary: "该方案将庞大的幼儿园体量化整为零，分解为多个尺度宜人的教学组团。各组团之间通过宽大、有顶盖的半室外连廊网络串联。这种布局极大地增加了建筑与自然环境的接触面，创造了丰富的漫游体验。",
    eval: { security: 75, noise: 70, climate: 98, circulation: 90, site: 75 },
    logic: "在气候炎热多雨或对自然通风要求极高的地区，系统推荐“组团连廊型”原型，主要基于以下推演逻辑：",
    logicPoints: [
      { title: "极致的气候适应", desc: "分散的体量和开敞的连廊最大化了自然通风的潜力，非常适合湿热气候，能有效降低建筑能耗。" },
      { title: "模糊的室内外边界", desc: "宽大的连廊不仅是交通空间，更是全天候的半室外活动场所，鼓励儿童在自然中学习和玩耍。" },
      { title: "清晰的功能分区", desc: "不同年龄段或不同功能的班级可以被分配到独立的组团中，既保证了各自的独立性，又通过连廊保持联系。" }
    ],
    strategies: [
      { id: "01", title: "体量打散", desc: "将大体量建筑分解为多个小体量组团，降低建筑对场地的压迫感，更好地融入周围环境。" },
      { id: "02", title: "风雨连廊系统", desc: "设计宽敞、有遮蔽的连廊网络，串联所有组团，确保在恶劣天气下也能自由通行和活动。" },
      { id: "03", title: "微气候营造", desc: "在组团之间穿插绿化庭院和水景，结合自然通风，营造舒适的局部微气候。" },
      { id: "04", title: "模块化生长", desc: "组团式的布局具有很好的弹性和可扩展性，方便未来根据需求增加新的教学单元。" }
    ],
    pros: [
      "气候适应性极佳： 极其适合炎热多雨地区，自然通风和遮阳避雨效果最好。",
      "半室外空间丰富： 提供了大量模糊室内外边界的活动空间，有益于儿童身心发展。",
      "尺度亲切： 分散的小体量更符合儿童的心理认知尺度，减少机构化特征。"
    ],
    cons: [
      "占地面积大： 分散布局需要较大的场地面积，不适合高密度城市环境。",
      "边界防护压力大： 较长的建筑边界和分散的入口增加了安全管理的难度。",
      "能耗控制挑战： 在寒冷地区，过多的外表面积会导致热量散失过快，不利于保温。"
    ],
    diagram: (
      <div className="relative w-full max-w-sm aspect-square">
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2">
          <rect x="10" y="10" width="80" height="80" />
        </svg>
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-800 drop-shadow-xl transition-transform duration-700 group-hover:scale-105" fill="currentColor">
          <rect x="20" y="20" width="25" height="25" rx="2" />
          <rect x="55" y="20" width="25" height="25" rx="2" />
          <rect x="37.5" y="55" width="25" height="25" rx="2" />
        </svg>
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-400 transition-transform duration-700 group-hover:scale-105" fill="currentColor">
          <rect x="32.5" y="40" width="10" height="20" transform="rotate(-45 37.5 50)" />
          <rect x="57.5" y="40" width="10" height="20" transform="rotate(45 62.5 50)" />
          <rect x="40" y="30" width="20" height="10" />
        </svg>
        <div className="absolute top-[45%] left-[42%] text-[10px] font-mono text-zinc-600 font-medium">风雨连廊</div>
      </div>
    )
  },
  "D": {
    name: "垂直分层型",
    type: "Vertical Layering",
    summary: "在用地极其紧张的高密度城市环境中，该方案通过在垂直维度上叠加不同的功能模块来解决空间需求。通常将公共活动、后勤服务布置在底层，教学单元布置在中高层，并通过屋顶花园补充户外活动场地。",
    eval: { security: 80, noise: 75, climate: 70, circulation: 80, site: 90 },
    logic: "在场地面积受限、容积率要求高的情况下，系统推荐“垂直分层型”原型，主要基于以下推演逻辑：",
    logicPoints: [
      { title: "空间集约利用", desc: "通过向空中发展，在有限的占地面积内提供充足的建筑面积，满足高密度城市的需求。" },
      { title: "垂直动静分区", desc: "利用楼层高度自然形成动静分区，底层作为喧闹的公共活动区，高层作为安静的教学区。" },
      { title: "立体绿化与活动", desc: "由于地面户外空间不足，将活动场地转移至空中平台和屋顶，打造立体的儿童活动网络。" }
    ],
    strategies: [
      { id: "01", title: "底层完全架空", desc: "将底层尽可能架空，作为全天候的公共活动广场和家长接送等候区。" },
      { id: "02", title: "空中活动平台", desc: "在不同楼层设置退台或空中花园，为高层班级提供就近的户外活动场地。" },
      { id: "03", title: "高效垂直交通", desc: "设计宽敞、安全的楼梯和电梯系统，确保垂直交通的便捷性和紧急疏散的安全性。" },
      { id: "04", title: "屋顶安全农场", desc: "充分利用屋顶空间，设置安全的种植园或运动场，弥补地面绿化的不足。" }
    ],
    pros: [
      "节约用地： 极其适合城市中心区等用地紧张的场地。",
      "动静分区明确： 垂直方向上的物理隔离能有效阻断不同功能区之间的干扰。",
      "底层开放性好： 架空的底层可以与城市街道形成良好的互动，提供缓冲空间。"
    ],
    cons: [
      "垂直交通压力大： 上下楼频繁，增加了儿童日常活动的体力消耗和管理难度。",
      "高层活动受限： 高层班级接触自然地面的机会减少，对空中平台的依赖度高。",
      "消防疏散要求高： 多层或高层建筑对消防疏散设计有更严格的规范要求。"
    ],
    diagram: (
      <div className="relative w-full max-w-sm aspect-square flex flex-col items-center justify-center gap-2">
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2">
          <rect x="20" y="10" width="60" height="80" />
        </svg>
        <div className="w-32 h-10 bg-zinc-800 rounded-sm shadow-lg z-30 relative flex items-center justify-center text-[10px] text-white">三层：大班区</div>
        <div className="w-32 h-10 bg-zinc-700 rounded-sm shadow-lg z-20 relative flex items-center justify-center text-[10px] text-white">二层：中班区</div>
        <div className="w-32 h-10 bg-zinc-600 rounded-sm shadow-lg z-10 relative flex items-center justify-center text-[10px] text-white">一层：小班区</div>
        <div className="w-32 h-10 bg-zinc-200 rounded-sm border-2 border-dashed border-zinc-400 z-0 relative flex items-center justify-center text-[10px] text-zinc-600">底层架空活动区</div>
      </div>
    )
  },
  "E": {
    name: "集中体块型",
    type: "Compact Block",
    summary: "该方案采用极其紧凑的集中式体量，将所有教学和辅助功能包裹在一个完整的建筑外壳内。内部通常围绕一个带天窗的通高中庭展开，以解决深进深建筑的采光和通风问题。",
    eval: { security: 90, noise: 85, climate: 95, circulation: 95, site: 80 },
    logic: "在严寒气候或对节能要求极高的地区，系统推荐“集中体块型”原型，主要基于以下推演逻辑：",
    logicPoints: [
      { title: "极致的保温节能", desc: "最小化建筑的外表面积（体形系数小），有效减少热量散失，是严寒地区最经济、节能的布局方式。" },
      { title: "内部流线最短", desc: "紧凑的布局使得各功能区之间的距离最短，提高了内部交通效率，减少了儿童在寒冷室外的暴露时间。" },
      { title: "中庭核心空间", desc: "通过设置通高的玻璃中庭，不仅解决了内部采光，还为严冬提供了一个温暖、明亮的室内公共活动中心。" }
    ],
    strategies: [
      { id: "01", title: "最小化体形系数", desc: "采用方正、紧凑的建筑形体，减少凹凸变化，降低建筑能耗。" },
      { id: "02", title: "保暖中庭设计", desc: "在建筑中心设置带天窗的中庭，作为冬季的“室内操场”和全园的视觉焦点。" },
      { id: "03", title: "厚重的外围护", desc: "加强外墙和屋面的保温隔热性能，控制外窗面积，特别是北向开窗。" },
      { id: "04", title: "集中式设备", desc: "紧凑的布局有利于暖通空调等机电设备的集中布置，提高系统运行效率。" }
    ],
    pros: [
      "节能效果极佳： 体形系数最小，保温性能最好，极其适合严寒和寒冷地区。",
      "内部流线最短： 交通效率高，各班级到达公共设施（如餐厅、音体室）非常便捷。",
      "造价相对经济： 外墙面积少，结构规整，建造成本和后期运营维护成本较低。"
    ],
    cons: [
      "内部采光依赖中庭： 进深较大，部分内侧房间自然采光和通风受限，需依赖中庭和机械设备。",
      "体量感较笨重： 建筑外观容易显得庞大、压抑，缺乏儿童建筑应有的轻盈和活泼感。",
      "声学干扰风险： 围绕中庭的开敞布局可能导致不同班级之间的声音相互干扰。"
    ],
    diagram: (
      <div className="relative w-full max-w-sm aspect-square">
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2">
          <rect x="10" y="10" width="80" height="80" />
        </svg>
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-zinc-800 drop-shadow-xl transition-transform duration-700 group-hover:scale-105" fill="currentColor">
          <rect x="20" y="20" width="60" height="60" rx="4" />
        </svg>
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-amber-100 transition-transform duration-700 group-hover:scale-105" fill="currentColor">
          <rect x="40" y="40" width="20" height="20" rx="2" />
        </svg>
        <div className="absolute top-[45%] left-[42%] text-[10px] font-mono text-amber-700 font-medium">采光中庭</div>
      </div>
    )
  }
};

export default function SchemeDetails() {
  const { id, schemeId } = useParams();
  const location = useLocation();
  const { formData } = location.state || { formData: {} };
  const projectName = formData.projectName || "未命名项目 Untitled Project";
  
  const scheme = schemeData[schemeId || "A"] || schemeData["A"];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="-ml-2 text-zinc-500 hover:text-zinc-900">
              <Link to={`/projects/${id || 'new-123'}/results`} state={{ formData }}>
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-xs text-zinc-500 mb-0.5">
                <span>{projectName}</span>
                <span>/</span>
                <span>幼儿园 {scheme.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold text-zinc-900">方案 {schemeId}：{scheme.name}</h1>
                <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 text-[10px] font-mono">PROTOTYPE</span>
              </div>
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
              
              {/* Abstract Diagram */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
                {scheme.diagram}
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
                {scheme.summary}
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">五项评分明细</h3>
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-zinc-700"><ShieldCheck className="w-4 h-4 text-zinc-400" /> 安全性</span>
                    <span className="font-mono font-medium text-zinc-900">{scheme.eval.security}/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-900" style={{ width: `${scheme.eval.security}%` }}></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-zinc-700"><VolumeX className="w-4 h-4 text-zinc-400" /> 降噪能力</span>
                    <span className="font-mono font-medium text-zinc-900">{scheme.eval.noise}/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-900" style={{ width: `${scheme.eval.noise}%` }}></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-zinc-700"><CloudRain className="w-4 h-4 text-zinc-400" /> 气候适应性</span>
                    <span className="font-mono font-medium text-zinc-900">{scheme.eval.climate}/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-900" style={{ width: `${scheme.eval.climate}%` }}></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-zinc-700"><RouteIcon className="w-4 h-4 text-zinc-400" /> 流线清晰度</span>
                    <span className="font-mono font-medium text-zinc-900">{scheme.eval.circulation}/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-900" style={{ width: `${scheme.eval.circulation}%` }}></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-zinc-700"><MapIcon className="w-4 h-4 text-zinc-400" /> 场地适配度</span>
                    <span className="font-mono font-medium text-zinc-900">{scheme.eval.site}/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-900" style={{ width: `${scheme.eval.site}%` }}></div>
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
              <p>{scheme.logic}</p>
              <ul className="space-y-2">
                {scheme.logicPoints.map((point: any, index: number) => (
                  <li key={index}><strong>{point.title}：</strong>{point.desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Core Strategies */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900 tracking-tight">核心设计策略适配分析</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scheme.strategies.map((strategy: any, index: number) => (
              <Card key={index} className="shadow-sm border-zinc-200">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-mono text-xs font-bold text-zinc-500">{strategy.id}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 text-sm mb-1">{strategy.title}</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        <strong className="text-zinc-700 font-medium">适用原因：</strong>{strategy.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                {scheme.pros.map((pro: string, index: number) => {
                  const [title, desc] = pro.split('：');
                  return (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      <span><strong>{title}：</strong>{desc}</span>
                    </li>
                  );
                })}
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
                {scheme.cons.map((con: string, index: number) => {
                  const [title, desc] = con.split('：');
                  return (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span><strong>{title}：</strong>{desc}</span>
                    </li>
                  );
                })}
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
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <Link to={`/projects/${id || 'new-123'}/results`}>
                <GitCompare className="w-4 h-4 mr-2" />
                对比其他方案
              </Link>
            </Button>
            <Button className="w-full sm:w-auto bg-zinc-900 text-white hover:bg-zinc-800" asChild>
              <Link to="/dashboard">
                进入深化设计
              </Link>
            </Button>
          </div>
        </div>

      </main>
    </div>
  );
}


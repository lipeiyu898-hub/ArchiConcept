import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Building2, Clock, Copy, Trash2, Edit3, ArrowRight, Zap, FileText, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

const myProjects = [
  {
    id: "proj-1",
    name: "Riverside Kindergarten",
    type: "Kindergarten",
    status: "Generated",
    created: "2026-03-10",
    updated: "2 hours ago",
  },
  {
    id: "proj-2",
    name: "Urban Infill Early Education",
    type: "Kindergarten",
    status: "Draft",
    created: "2026-03-12",
    updated: "1 day ago",
  }
];

const exampleProjects = [
  {
    id: "ex-1",
    name: "High-Density Courtyard Model",
    type: "Kindergarten",
    status: "Generated",
    created: "System Template",
    updated: "Read-only",
  },
  {
    id: "ex-2",
    name: "Suburban Linear Terraces",
    type: "Kindergarten",
    status: "Generated",
    created: "System Template",
    updated: "Read-only",
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-10 pb-10">
      {/* Welcome & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Welcome back, Architect</h1>
          <p className="text-zinc-500 text-sm mt-1">Manage your conceptual designs and explore new spatial prototypes.</p>
        </div>
        <Button asChild className="shrink-0">
          <Link to="/projects/new">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Link>
        </Button>
      </div>

      {/* Usage Quota & Plan Status */}
      <Card className="bg-zinc-900 text-zinc-50 border-zinc-800">
        <CardContent className="p-6 sm:flex items-center justify-between gap-8 space-y-4 sm:space-y-0">
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-sm">Basic Plan (Free)</span>
              </div>
              <span className="text-sm font-mono text-zinc-400">2 / 3 Generations Used</span>
            </div>
            <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 w-[66%] rounded-full"></div>
            </div>
            <p className="text-xs text-zinc-400">Your quota resets on April 1, 2026.</p>
          </div>
          <div className="shrink-0">
            <Button variant="outline" className="bg-transparent border-zinc-700 text-zinc-100 hover:bg-zinc-800 hover:text-white">
              Upgrade to Pro
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* My Projects */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
          <Folder className="w-5 h-5 text-zinc-900" />
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900">My Projects</h2>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {myProjects.map((project) => (
            <Card key={project.id} className="group flex flex-col hover:border-zinc-400 transition-colors">
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-mono uppercase tracking-wider font-medium",
                    project.status === "Generated" 
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                      : "bg-zinc-100 text-zinc-600 border border-zinc-200"
                  )}>
                    {project.status}
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors" title="Edit">
                      <Edit3 className="w-3.5 h-3.5 text-zinc-600" />
                    </button>
                    <button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors" title="Duplicate">
                      <Copy className="w-3.5 h-3.5 text-zinc-600" />
                    </button>
                    <button className="p-1.5 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                      <Trash2 className="w-3.5 h-3.5 text-red-600" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-1 mb-6 flex-1">
                  <Link to={`/projects/${project.id}/results`} className="hover:underline decoration-zinc-300 underline-offset-4">
                    <h3 className="font-semibold text-zinc-900 text-base leading-tight">{project.name}</h3>
                  </Link>
                  <div className="flex items-center text-sm text-zinc-500 gap-1.5">
                    <Building2 className="w-3.5 h-3.5" /> {project.type}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 mt-auto">
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Created</div>
                    <div className="text-xs text-zinc-600">{project.created}</div>
                  </div>
                  <div className="space-y-0.5 text-right">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Updated</div>
                    <div className="text-xs text-zinc-600 flex items-center justify-end gap-1">
                      <Clock className="w-3 h-3" /> {project.updated}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Action Footer */}
              <div className="px-5 py-3 bg-zinc-50 border-t border-zinc-100 rounded-b-xl flex justify-end">
                <Button variant="ghost" size="sm" className="h-8 text-xs font-medium text-zinc-600 hover:text-zinc-900" asChild>
                  <Link to={`/projects/${project.id}/${project.status === 'Generated' ? 'results' : 'new'}`}>
                    {project.status === "Generated" ? "View Results" : "Continue Editing"} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
          
          {/* Empty State / Create New Card */}
          <Card className="border-dashed border-2 border-zinc-200 bg-transparent hover:border-zinc-400 hover:bg-zinc-50 transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[240px]" onClick={() => window.location.href='/projects/new'}>
            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-3">
              <Plus className="w-5 h-5 text-zinc-600" />
            </div>
            <span className="font-medium text-zinc-900">Create New Project</span>
            <span className="text-sm text-zinc-500 mt-1">Start a new conceptual design</span>
          </Card>
        </div>
      </div>

      {/* Example Projects */}
      <div className="space-y-4 pt-6">
        <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
          <FileText className="w-5 h-5 text-zinc-900" />
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Example Projects</h2>
        </div>
        <p className="text-sm text-zinc-500 mb-4">Explore pre-generated architectural prototypes to understand the system's capabilities.</p>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exampleProjects.map((project) => (
            <Card key={project.id} className="flex flex-col bg-zinc-50/50 border-zinc-200">
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-mono uppercase tracking-wider font-medium bg-zinc-200 text-zinc-700 border border-zinc-300">
                    Example
                  </div>
                </div>
                
                <div className="space-y-1 mb-6 flex-1">
                  <h3 className="font-semibold text-zinc-900 text-base leading-tight">{project.name}</h3>
                  <div className="flex items-center text-sm text-zinc-500 gap-1.5">
                    <Building2 className="w-3.5 h-3.5" /> {project.type}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-200/60 mt-auto">
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Author</div>
                    <div className="text-xs text-zinc-600">{project.created}</div>
                  </div>
                </div>
              </CardContent>
              <div className="px-5 py-3 bg-zinc-100/50 border-t border-zinc-200/60 rounded-b-xl flex justify-end">
                <Button variant="ghost" size="sm" className="h-8 text-xs font-medium text-zinc-600 hover:text-zinc-900" asChild>
                  <Link to={`/projects/${project.id}/results`}>
                    Explore Concept <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

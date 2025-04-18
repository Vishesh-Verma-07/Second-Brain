
import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "bg-card border border-border rounded-lg p-6 transition-all hover:shadow-md",
      className
    )}>
      <div className="h-12 w-12 rounded-full bg-brain/10 dark:bg-brain/20 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-brain" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

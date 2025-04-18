import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../components/authLayout";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input2";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useToast } from "../hooks/useToast";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (!acceptTerms) {
      toast({
        title: "Error",
        description: "Please accept the terms and conditions",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // This is where you would typically handle user registration
    // For now, we'll just simulate a successful registration
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created",
        description: "Your account has been created successfully",
      });
      navigate("/signin");
    }, 2000);
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start organizing your second brain"
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkHref="/signin"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10"
              required
            />
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
              required
            />
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={acceptTerms}
            onCheckedChange={(checked) => setAcceptTerms(checked === true)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I accept the{" "}
            <a href="#" className="text-primary hover:underline">
              terms and conditions
            </a>
          </label>
        </div>
        
        <Button type="submit" className="w-full" disabled={isLoading || !acceptTerms}>
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </AuthLayout>
  );
}
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { ChevronDown, LayoutDashboard, StarsIcon } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenuTrigger } from "./dropdown-menu";
import { DropdownMenuLabel } from "./dropdown-menu";
import { DropdownMenuSeparator} from "./dropdown-menu";
import { DropdownMenuItem } from "./dropdown-menu";
import { DropdownMenu} from "./dropdown-menu";
import { DropdownMenuContent } from "./dropdown-menu";
import { FileText } from "lucide-react";
import { PenBox } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
        <Image
          src="/logo.png"
          alt="Sensai Logo"
          height={60}
          width={200}
          className="h-12 py-1 w-auto object-contain"
        />
        </Link>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href={"/dashboard"}>
            <Button variant= "outline">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              <span className="hidden md:block">
                 Industry Insights
              </span>
             
            </Button>
            </Link>
      <DropdownMenu>
  <DropdownMenuTrigger>
    <Button>
              <StarsIcon className="h-4 w-4 mr-2" />
              <span className="hidden md:block">Growth Tools</span>
              <ChevronDown className="h-4 w-4"></ChevronDown>
             
            </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    
    
    <DropdownMenuItem>
      <Link href={'/resume'} className="flex-items-center-gap-2">
      <FileText className="h-4 w-4 mr-2" />
              <span>Build Resume</span></Link>
    </DropdownMenuItem>
    <DropdownMenuItem><Link href={'/ai-cover-letter'} className="flex-items-center-gap-2">
      <PenBox className="h-4 w-4 mr-2" />
              <span>Cover Letter</span></Link></DropdownMenuItem>
    <DropdownMenuItem><Link href={'/interview'} className="flex-items-center-gap-2">
      <GraduationCap className="h-4 w-4 mr-2" />
              <span>Interview Prep</span></Link></DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>
</SignedIn>
                <SignedOut>
        <SignInButton>
          <Button variant = "outline">Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton appearance={{
          elements:{
            avatarBox: "w-10 h-10",
            userButtonPopoverCard : "shadow-x1",
            userPreviewMainIdentifier : "font-semibold",
          },
        }}
        afterSignOutUrl="/"/>
      </SignedIn>
        </div>
      </nav>

       
    </header>
  );
};

export default Header;

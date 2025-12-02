import { SignedOut, SignedIn , SignOutButton, UserButton } from '@clerk/clerk-react';
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";

import SignInOAuthButton from './SignInOAuthButton';
import { useAuthStore } from '@/stores/useAuthStore';
const Topbar= () => {
    const {isAdmin} = useAuthStore();
    return (  
<div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
<div className="flex gap-2 items-center"> <img src="/spotify.png" alt="spotify" className="size-8" /> </div>
<div className="flex items-center gap-4">
    {isAdmin && <Link to="/admin" className="text-white hover:text-gray-300 transition-colors duration-200"><LayoutDashboardIcon /> Admin Dashboard</Link>}
      <SignedIn>
        <SignOutButton />
      </SignedIn>
     
     
     <SignedOut>
        <SignInOAuthButton />
     </SignedOut>

     <UserButton />
</div>
</div>
    );
}
 
export default Topbar;
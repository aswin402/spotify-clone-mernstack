import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const SignInOAuthButton = () => {
    const {signIn,isLoaded} = useSignIn();

    if(!isLoaded){
        return null;
    }
    
    const signInWithGoogle = async() =>{
        try{
            await signIn.authenticateWithRedirect({
                strategy:"oauth_google",
                redirectUrl:"/sso-callback",
                redirectUrlComplete: "/auth-callback",
            });
        }catch(error){
            console.error("Error signing in with Google:", error);
        }
    }

    return(
            <Button onClick={signInWithGoogle} variant={"secondary"} className=" w-full text-white border-zinc-100 h-11">Sign In With Google</Button>
    );
   
}

export default SignInOAuthButton;
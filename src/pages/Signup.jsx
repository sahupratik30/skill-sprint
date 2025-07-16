import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <SignUp signInUrl="/" fallbackRedirectUrl="/dashboard" />
    </div>  
    
  );
}

export default Signup;

import { SignIn } from "@clerk/clerk-react";

function Signin() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <SignIn signUpUrl="/signup" />
    </div>
  );
}

export default Signin;

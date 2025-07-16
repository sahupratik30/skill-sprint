import { SignOutButton } from "@clerk/clerk-react";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <SignOutButton redirectUrl="/">
        <button>Sign Out</button>
      </SignOutButton>
    </div>
  );
}

export default Dashboard;

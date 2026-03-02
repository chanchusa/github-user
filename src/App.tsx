import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

function App() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async (username: string) => {
    try {
      setLoading(true);
      setError("");
      setUser(null);

      const response = await axios.get<GitHubUser>(
        `https://api.github.com/users/${username}`
      );

      setUser(response.data);
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        setError("User not found");
      } else {
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex flex-col items-center px-4 relative overflow-hidden">
      
      {/* Background Icon */}
      <div className="absolute -top-24 -right-24 text-white/5 pointer-events-none select-none">
        <svg 
          role="img" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-[500px] h-[500px] rotate-12"
          fill="currentColor"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.04] pointer-events-none select-none -z-10">
        <svg 
          role="img" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-[900px] h-[900px]"
          fill="currentColor"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-1/4 -left-20 text-[10rem] font-black text-white/[0.02] -rotate-90 pointer-events-none select-none uppercase tracking-tighter">
        Github
      </div>
      <div className="absolute bottom-1/4 -right-20 text-[10rem] font-black text-white/[0.02] rotate-90 pointer-events-none select-none uppercase tracking-tighter">
        Explore
      </div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-2xl font-light tracking-[2em] text-white/[0.05] pointer-events-none select-none uppercase whitespace-nowrap">
        Developer Network
      </div>
      <div className="mt-20 mb-4 p-4 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_0_50px_rgba(255,255,255,0.05)] animate-float flex items-center justify-center group hover:bg-white/[0.05] transition-colors duration-500">
        <svg 
          role="img" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          fill="currentColor"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
        GitHub User Finder
      </h1>

      <SearchBar onSearch={fetchUser} />

      {loading && (
        <p className="mt-6 animate-pulse text-gray-400">
          Fetching user...
        </p>
      )}

      {error && (
        <p className="mt-6 text-red-400 font-medium">
          {error}
        </p>
      )}

      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
import { useState } from "react";

interface Props {
  onSearch: (username: string) => void;
}

function SearchBar({ onSearch }: Props) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    onSearch(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md flex flex-col sm:flex-row gap-3 group relative"
    >
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-5 py-3.5 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 shadow-inner"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-500" />
      </div>

      <button
        type="submit"
        className="relative overflow-hidden px-8 py-3.5 rounded-2xl bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-600 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(192,38,211,0.35)] hover:shadow-[0_0_30px_rgba(192,38,211,0.5)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <span className="relative z-10 flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-4 h-4"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Search
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      </button>
    </form>
  );
}

export default SearchBar;
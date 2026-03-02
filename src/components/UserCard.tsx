interface Props {
  user: {
    avatar_url: string;
    name: string;
    bio: string;
    followers: number;
    public_repos: number;
    html_url: string;
  };
}

function UserCard({ user }: Props) {
  return (
    <div className="mt-10 w-full max-w-md bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-2xl hover:scale-[1.02] transition-all duration-300">
      
      <div className="flex flex-col items-center text-center">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg"
        />

        <h2 className="mt-4 text-2xl font-bold">
          {user.name}
        </h2>

        <p className="mt-2 text-gray-400 text-sm">
          {user.bio || "No bio available."}
        </p>

        <div className="flex gap-6 mt-6 text-sm">
          <div>
            <p className="font-bold text-lg">
              {user.followers}
            </p>
            <p className="text-gray-400">Followers</p>
          </div>

          <div>
            <p className="font-bold text-lg">
              {user.public_repos}
            </p>
            <p className="text-gray-400">Repos</p>
          </div>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-sm font-bold tracking-wide shadow-[0_4px_15px_rgba(167,38,211,0.3)] hover:shadow-[0_6px_20px_rgba(167,38,211,0.5)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default UserCard;
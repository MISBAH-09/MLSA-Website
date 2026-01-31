import { useEffect, useState } from "react";
import { Github } from "lucide-react";

const ContributorList = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/MISBAH-09/MLSA-Website/contributors"
        );
        const data = await res.json();
        setContributors(data.slice(0, 6)); // 👈 limit for footer
      } catch (err) {
        console.error("GitHub API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) {
    return <p className="text-white/60 text-sm">Loading contributors…</p>;
  }

  return (
    <div className="grid grid-rows-3 gap-4">
      {contributors.map((user) => (
        <a
          key={user.id}
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center gap-2 group"
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-8 h-8 rounded-full border border-white/10 group-hover:scale-110 transition"
          />
          <span className="text-xs text-white group-hover:text-white">
            {user.login}
          </span>
          <span className="text-[8px] text-white">Commits:{user.contributions}</span>
          
        </a>
      ))}
    </div>
  );
};

export default ContributorList;

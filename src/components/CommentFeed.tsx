import type { Comment } from "../data/markets";

export default function CommentFeed({ comments }: { comments: Comment[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-primary mb-3">Recent Comments</h4>
      <div className="space-y-3">
        {comments.slice(0, 3).map((c) => (
          <div key={c.id} className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-accent-bg text-xs font-semibold text-accent">
              {c.avatar}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-primary">{c.name}</span>
                <span className="text-[11px] text-tertiary">{c.time}</span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">{c.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Icon from "@/components/Icon";

// Fallback header used by ServiceCard when a service has no real photo.
// Stylized navy gradient with a large gold icon and a soft glow,
// so the card grid still feels intentional and visual.

export default function ServicePlaceholder({ icon }: { icon: string }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-deep">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 size-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gold/15 blur-2xl" />
          <div className="relative size-20 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-navy-deep">
            <Icon name={icon} className="size-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

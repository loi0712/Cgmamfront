import { useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { ThemeSwitch } from "@/components/theme-switch";
import { NotificationDropdown } from "@/components/notification-dropdown";
import { CreateNewDropdown } from "../create-new-dropdown";

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  fixed?: boolean;
  ref?: React.Ref<HTMLElement>;
};

export function Header({ className, fixed, children, ...props }: HeaderProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
    };

    // Add scroll listener to the body
    document.addEventListener("scroll", onScroll, { passive: true });

    // Clean up the event listener on unmount
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "z-50 h-16 header-fixed peer/header sticky top-0 w-[inherit] bg-sidebar",
        offset > 10 && fixed ? "shadow" : "shadow-none",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative flex h-full items-center gap-3 p-4 sm:gap-4",
          offset > 10 &&
            fixed &&
            "after:bg-background/20 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-lg"
        )}
      >
        {children}
        <CreateNewDropdown/>

        <div className="ms-auto flex items-center space-x-4">
          <ThemeSwitch />
          <NotificationDropdown />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}

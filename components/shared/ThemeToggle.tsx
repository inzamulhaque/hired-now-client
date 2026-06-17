import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />

          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-40 border bg-white dark:bg-slate-900 shadow-lg backdrop-blur-xl text-foreground"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer transition-colors hover:bg-blue-50 dark:hover:bg-slate-800"
        >
          <Sun className="mr-2 h-4 w-4 text-amber-500" />
          Light
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer transition-colors hover:bg-violet-50 dark:hover:bg-slate-800"
        >
          <Moon className="mr-2 h-4 w-4 text-violet-500" />
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Monitor className="mr-2 h-4 w-4 text-blue-500" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;

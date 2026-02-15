export default function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-border bg-background">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <p className="text-xl font-bold tracking-tight">DEV<span className="text-accent">.</span>ME</p>
                    <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
                        © 2026 Personal Portfolio. Built with passion and code.
                    </p>
                </div>

                <div className="flex gap-8 text-sm text-muted-foreground font-medium">
                    <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                    <a href="#" className="hover:text-foreground transition-colors">Resume</a>
                </div>
            </div>
        </footer>
    );
}

'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border py-6 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground font-sans">
          &copy; {new Date().getFullYear()} Sicario.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
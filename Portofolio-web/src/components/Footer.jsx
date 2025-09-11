function Footer() {
  return (
    <footer className="bg-muted py-10">
      <div className="max-w-6xl mx-auto px-6 space-y-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          ZSH<span className="text-red-500">.</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Zulpadlisyarif@gmail.com
        </p>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} ZSH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

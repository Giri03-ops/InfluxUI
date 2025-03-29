type TabProps = {
  tabs: Array<{ name: string; href: string; current?: boolean }>;
  onTabClick: (tab: { name: string; href: string }) => void;
};

const Tab = ({ tabs, onTabClick }: TabProps) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current)?.name || ""}
          onChange={(e) => {
            const selectedTab = tabs.find((tab) => tab.name === e.target.value);
            if (selectedTab) {
              onTabClick(selectedTab); // 调用 onTabClick 函数
            }
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href="#"
              onClick={(e) => {
                e.preventDefault(); // 阻止默认行为
                onTabClick(tab); // 调用 onTabClick 函数
              }}
              className={classNames(
                tab.current
                  ? "bg-gray-100 text-gray-700"
                  : "text-slate-50 hover:text-gray-300",
                "rounded-md px-3 py-2 text-sm",
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tab;

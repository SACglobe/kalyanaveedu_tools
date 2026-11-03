// English section: the root layout is lang="ta", so mark this subtree as English for screen readers and search engines
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en">{children}</div>;
}

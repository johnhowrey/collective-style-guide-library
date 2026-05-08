import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";

export const metadata = { title: "Install" };

export default function InstallPage() {
  return (
    <>
      <PageHeader kicker="Get started · 1/4" title="Install" lede="Add the foundation and a variant to a Next.js, Vite, Remix, or any React app." />
      <Prose>
        <h2>1. Install dependencies</h2>
        <p>The Collective Style Guide Library is published as a set of workspace packages. Pick the variant(s) you want; install the foundation alongside.</p>
      </Prose>
      <CodeBlock language="bash">{`pnpm add @collective/foundation @collective/foundry @carbon/react @carbon/styles`}</CodeBlock>
      <Prose>
        <p>Replace <code>foundry</code> with any variant: <code>vellum</code>, <code>beacon</code>, <code>marginalia</code>, <code>proscenium</code>, <code>caesura</code>, <code>cipher</code>.</p>

        <h2>2. Import Carbon styles once</h2>
        <p>Add this to your global stylesheet (<code>app/globals.css</code> in Next.js, <code>src/main.tsx</code> in Vite, etc.):</p>
      </Prose>
      <CodeBlock language="scss" filename="globals.scss">{`@use "@carbon/styles/scss/reset";
@use "@carbon/styles/scss/themes";
@use "@carbon/styles/scss/theme" with ($theme: themes.$white);
`}</CodeBlock>
      <Prose>
        <h2>3. Wrap your app</h2>
        <p>The foundation&rsquo;s <code>ThemeProvider</code> takes a variant theme plus optional <code>mode</code>, <code>density</code>, <code>lang</code>, and <code>rtl</code>:</p>
      </Prose>
      <CodeBlock language="tsx" filename="app/layout.tsx">{`import { ThemeProvider } from "@collective/foundation";
import { theme } from "@collective/foundry";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme} mode="light" density="comfortable">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}</CodeBlock>
      <Prose>
        <p>
          That&rsquo;s it. Any <code>@carbon/react</code> component rendered inside picks up the variant&rsquo;s tokens
          automatically. Continue to <a href="/getting-started/first-variant">your first variant →</a>
        </p>
      </Prose>
    </>
  );
}

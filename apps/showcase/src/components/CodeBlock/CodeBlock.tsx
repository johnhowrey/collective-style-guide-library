import styles from "./CodeBlock.module.scss";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ children, language, filename }: CodeBlockProps) {
  return (
    <div className={styles.block}>
      {filename || language ? (
        <header className={styles.header}>
          {filename ? <span className={styles.filename}>{filename}</span> : null}
          {language ? <span className={styles.lang}>{language}</span> : null}
        </header>
      ) : null}
      <pre className={styles.pre}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

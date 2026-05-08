import styles from "../Prose/Prose.module.scss";

interface MarkdownProps {
  html: string;
}

/**
 * Renders markdown that has already been parsed to HTML by `marked`.
 * Wrapped in the Prose styles so headings, lists, code blocks, and tables
 * pick up variant tokens automatically.
 */
export function Markdown({ html }: MarkdownProps) {
  return <div className={styles.prose} dangerouslySetInnerHTML={{ __html: html }} />;
}

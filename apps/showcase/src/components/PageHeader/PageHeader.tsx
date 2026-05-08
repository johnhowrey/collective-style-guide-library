import type { ReactNode } from "react";
import styles from "./PageHeader.module.scss";

interface PageHeaderProps {
  kicker?: string;
  title: string;
  lede?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
}

export function PageHeader({ kicker, title, lede, meta, actions }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.text}>
        {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
        <h1 className={styles.title}>{title}</h1>
        {lede ? <p className={styles.lede}>{lede}</p> : null}
        {meta ? <div className={styles.meta}>{meta}</div> : null}
      </div>
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </header>
  );
}

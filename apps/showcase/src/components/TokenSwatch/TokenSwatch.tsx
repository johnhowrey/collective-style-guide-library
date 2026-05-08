import styles from "./TokenSwatch.module.scss";

interface TokenSwatchProps {
  name: string;
  value: string;
  /** Optional description rendered alongside */
  description?: string;
  /** Optional contrast info */
  contrast?: { vs: string; ratio: number; wcag: "A" | "AA" | "AAA" | string };
}

export function TokenSwatch({ name, value, description, contrast }: TokenSwatchProps) {
  return (
    <div className={styles.swatch}>
      <div className={styles.color} style={{ background: value }} aria-hidden="true" />
      <div className={styles.text}>
        <code className={styles.name}>{name}</code>
        <code className={styles.value}>{value}</code>
        {description ? <p className={styles.description}>{description}</p> : null}
        {contrast ? (
          <p className={styles.contrast}>
            {contrast.ratio.toFixed(1)}:1 vs <code>{contrast.vs}</code> · {contrast.wcag}
          </p>
        ) : null}
      </div>
    </div>
  );
}

"use client";

import {
  Button,
  TextInput,
  Dropdown,
  DataTable,
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Tag,
} from "@carbon/react";
import styles from "./templates.module.scss";

const ROWS = [
  { id: "1", name: "production-api", env: "production", region: "us-east-1", status: "Healthy", uptime: "99.98%", lastDeploy: "2h ago" },
  { id: "2", name: "staging-api", env: "staging", region: "us-east-1", status: "Degraded", uptime: "99.4%", lastDeploy: "12m ago" },
  { id: "3", name: "edge-cache", env: "production", region: "global", status: "Healthy", uptime: "99.99%", lastDeploy: "3d ago" },
  { id: "4", name: "warehouse-etl", env: "production", region: "eu-west-2", status: "Failed", uptime: "97.2%", lastDeploy: "1h ago" },
  { id: "5", name: "billing-worker", env: "production", region: "us-west-2", status: "Healthy", uptime: "99.91%", lastDeploy: "5h ago" },
  { id: "6", name: "search-indexer", env: "staging", region: "us-east-1", status: "Healthy", uptime: "99.7%", lastDeploy: "1d ago" },
];

const HEADERS = [
  { key: "name", header: "Service" },
  { key: "env", header: "Env" },
  { key: "region", header: "Region" },
  { key: "status", header: "Status" },
  { key: "uptime", header: "Uptime" },
  { key: "lastDeploy", header: "Last deploy" },
];

export function ListingTemplate() {
  return (
    <div className={styles.template}>
      <header className={styles.templateHeader}>
        <div>
          <p className={styles.kicker}>Workspace · acme · services</p>
          <h2 className={styles.title}>Services</h2>
        </div>
        <Button kind="primary">New service</Button>
      </header>

      <div className={styles.toolbar}>
        <div className={styles.searchRow}>
          <TextInput id="search" labelText="" placeholder="Search services…" hideLabel />
          <Dropdown id="env-filter" titleText="" hideLabel label="All environments" items={["All environments", "production", "staging", "preview"]} />
        </div>
        <div>
          <Tag type="cyan">{ROWS.length} services</Tag>
        </div>
      </div>

      <DataTable rows={ROWS} headers={HEADERS}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((h) => (
                  <TableHeader {...getHeaderProps({ header: h })} key={h.key}>
                    {h.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow {...getRowProps({ row })} key={row.id}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>
    </div>
  );
}

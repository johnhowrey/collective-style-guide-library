"use client";

import {
  Button,
  Tag,
  TextInput,
  Checkbox,
  RadioButtonGroup,
  RadioButton,
  Toggle,
  Dropdown,
  ProgressBar,
  Loading,
  InlineNotification,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  DataTable,
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@carbon/react";
import styles from "./ComponentExhibit.module.scss";

const ROWS = [
  { id: "a", name: "production-api", status: "Healthy", region: "us-east-1", uptime: "99.98%" },
  { id: "b", name: "staging-api", status: "Degraded", region: "us-east-1", uptime: "99.4%" },
  { id: "c", name: "edge-cache", status: "Healthy", region: "global", uptime: "99.99%" },
  { id: "d", name: "warehouse-etl", status: "Failed", region: "eu-west-2", uptime: "97.2%" },
];

const HEADERS = [
  { key: "name", header: "Service" },
  { key: "status", header: "Status" },
  { key: "region", header: "Region" },
  { key: "uptime", header: "Uptime (30d)" },
];

export function ComponentExhibit() {
  return (
    <div className={styles.exhibit}>
      <section className={styles.row}>
        <h3>Buttons</h3>
        <div className={styles.demoRow}>
          <Button kind="primary">Save changes</Button>
          <Button kind="secondary">Cancel</Button>
          <Button kind="tertiary">Read more</Button>
          <Button kind="ghost">Skip</Button>
          <Button kind="danger">Delete project</Button>
        </div>
      </section>

      <section className={styles.row}>
        <h3>Tags</h3>
        <div className={styles.demoRow}>
          <Tag type="red">red</Tag>
          <Tag type="blue">blue</Tag>
          <Tag type="green">green</Tag>
          <Tag type="purple">purple</Tag>
          <Tag type="cyan">cyan</Tag>
        </div>
      </section>

      <section className={styles.row}>
        <h3>Form controls</h3>
        <div className={styles.formGrid}>
          <TextInput id="name" labelText="Project name" placeholder="e.g. acme-prod" />
          <Dropdown
            id="region"
            label="Region"
            titleText="Region"
            items={["us-east-1", "us-west-2", "eu-west-2", "ap-northeast-1"]}
          />
          <Checkbox labelText="Enable monitoring" id="mon" />
          <Toggle labelText="Public" id="pub" defaultToggled />
          <RadioButtonGroup name="plan" defaultSelected="pro" legendText="Plan" orientation="vertical">
            <RadioButton id="hobby" labelText="Hobby" value="hobby" />
            <RadioButton id="pro" labelText="Pro" value="pro" />
            <RadioButton id="enterprise" labelText="Enterprise" value="enterprise" />
          </RadioButtonGroup>
        </div>
      </section>

      <section className={styles.row}>
        <h3>Status & feedback</h3>
        <div className={styles.demoCol}>
          <ProgressBar label="Indexing" helperText="12 of 47 tables…" value={26} />
          <Loading withOverlay={false} small />
          <InlineNotification
            kind="info"
            title="Build #4128"
            subtitle="Completed in 4m 12s. 1,832 lines changed."
          />
          <InlineNotification kind="error" title="Connection failed" subtitle="ECONNREFUSED 10.0.0.5:5432" />
        </div>
      </section>

      <section className={styles.row}>
        <h3>Tabs</h3>
        <Tabs>
          <TabList aria-label="Demo tabs">
            <Tab>Overview</Tab>
            <Tab>Logs</Tab>
            <Tab>Settings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Service is healthy. Last deploy 2h ago.</TabPanel>
            <TabPanel>Stream tail attached. Press space to pause.</TabPanel>
            <TabPanel>Configure runtime, scaling, and access here.</TabPanel>
          </TabPanels>
        </Tabs>
      </section>

      <section className={styles.row}>
        <h3>Data table</h3>
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
      </section>
    </div>
  );
}

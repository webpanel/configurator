import { DataSource, SortInfoOrder } from "webpanel-data";

import { Entity } from "webpanel-admin";

export const configuratorItemDefinition = (dataSource: DataSource) =>
  new Entity({
    name: "ConfiguratorItemDefinition",
    list: {
      initialSorting: [{ columnKey: "name", order: SortInfoOrder.ascend }]
    },
    dataSource,
    searchable: true
  }).stringField("name");

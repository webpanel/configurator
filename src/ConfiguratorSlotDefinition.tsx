import { DataSource, SortInfoOrder } from "webpanel-data";

import { Entity } from "webpanel-admin";

export const getConfiguratorSlotDefinition = (dataSource: DataSource) =>
  new Entity({
    name: "ConfiguratorSlotDefinition",
    list: {
      initialSorting: [{ columnKey: "name", order: SortInfoOrder.ascend }]
    },
    dataSource,
    searchable: true
  }).stringField("name");

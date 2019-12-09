import { DataSource, SortInfoOrder } from "webpanel-data";

import { Entity } from "webpanel-admin";
import { IEntityConfig } from "webpanel-admin/lib/model/Entity";

export const getConfiguratorSlotDefinition = (
  config: Partial<IEntityConfig<any>>
) =>
  new Entity({
    ...config,
    dataSource: config.dataSource as DataSource,
    name: "ConfiguratorSlotDefinition",
    list: {
      initialSorting: [{ columnKey: "name", order: SortInfoOrder.ascend }]
    },
    searchable: true
  }).stringField("name");

import { DataSource, SortInfoOrder } from "webpanel-data";

import { Entity } from "webpanel-admin";
import { IEntityConfig } from "webpanel-admin/lib/model/Entity";

export const getConfiguratorAttributeDefinition = (
  config: Partial<IEntityConfig<any>>
) =>
  new Entity({
    ...config,
    dataSource: config.dataSource as DataSource,
    name: "ConfiguratorAttributeDefinition",
    list: {
      initialSorting: [{ columnKey: "name", order: SortInfoOrder.ascend }]
    },
    searchable: true
  })
    .stringField("name")
    .enumField("type", {
      options: [
        { value: "STRING", label: "String" },
        { value: "INT", label: "Int" },
        { value: "FLOAT", label: "Float" }
      ]
    });

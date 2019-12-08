import { DataSource, SortInfoOrder } from "webpanel-data";

import { Entity } from "webpanel-admin";

export const getConfiguratorAttributeDefinition = (dataSource: DataSource) =>
  new Entity({
    name: "ConfiguratorAttributeDefinition",
    list: {
      initialSorting: [{ columnKey: "name", order: SortInfoOrder.ascend }]
    },
    dataSource,
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

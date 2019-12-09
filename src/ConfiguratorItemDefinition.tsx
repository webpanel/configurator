import { DataSource, SortInfoOrder } from "webpanel-data";

import { Entity } from "webpanel-admin";
import { IEntityConfig } from "webpanel-admin/lib/model/Entity";
import { getConfiguratorAttributeDefinition } from "./ConfiguratorAttributeDefinition";
import { getConfiguratorSlotDefinition } from "./ConfiguratorSlotDefinition";

export const getConfiguratorItemDefinition = (
  config: Partial<IEntityConfig<any>>
) => {
  const attribute = getConfiguratorAttributeDefinition(config);
  const slot = getConfiguratorSlotDefinition(config);

  return new Entity({
    ...config,
    dataSource: config.dataSource as DataSource,
    name: "ConfiguratorItemDefinition",
    list: {
      initialSorting: [{ columnKey: "name", order: SortInfoOrder.ascend }]
    },
    edit: {
      fields: ["name"]
    },
    layouts: {
      detail: () => "detail page"
    },
    showDetailPage: true,
    searchable: true
  })
    .stringField("name")
    .relationshipField("attributes", {
      targetEntity: () => attribute,
      type: "toMany"
    })
    .relationshipField("slots", {
      targetEntity: () => slot,
      type: "toMany"
    });
};

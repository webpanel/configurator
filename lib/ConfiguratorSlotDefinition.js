import { SortInfoOrder } from "webpanel-data";
import { Entity } from "webpanel-admin";
export var getConfiguratorSlotDefinition = function (dataSource) {
    return new Entity({
        name: "ConfiguratorSlotDefinition",
        list: {
            initialSorting: [{ columnKey: "name", order: SortInfoOrder.ascend }]
        },
        dataSource: dataSource,
        searchable: true
    }).stringField("name");
};
//# sourceMappingURL=ConfiguratorSlotDefinition.js.map
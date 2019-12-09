var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { SortInfoOrder } from "webpanel-data";
import { Entity } from "webpanel-admin";
import { getConfiguratorAttributeDefinition } from "./ConfiguratorAttributeDefinition";
import { getConfiguratorSlotDefinition } from "./ConfiguratorSlotDefinition";
export var getConfiguratorItemDefinition = function (config) {
    var attribute = getConfiguratorAttributeDefinition(config);
    var slot = getConfiguratorSlotDefinition(config);
    return new Entity(__assign(__assign({}, config), { dataSource: config.dataSource, name: "ConfiguratorItemDefinition", list: {
            initialSorting: [{ columnKey: "name", order: SortInfoOrder.ascend }]
        }, edit: {
            fields: ["name"]
        }, layouts: {
            detail: function () { return "detail page"; }
        }, showDetailPage: true, searchable: true }))
        .stringField("name")
        .relationshipField("attributes", {
        targetEntity: function () { return attribute; },
        type: "toMany"
    })
        .relationshipField("slots", {
        targetEntity: function () { return slot; },
        type: "toMany"
    });
};
//# sourceMappingURL=ConfiguratorItemDefinition.js.map
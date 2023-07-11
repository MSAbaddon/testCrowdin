export { type BasicConstructorOptions, TagSelectorBasic } from "./basic.ts";
export { SenseSelector } from "./senses.ts";
export { SpeedSelector } from "./speeds.ts";
export type { TagSelectorOptions } from "./base.ts";

const TAG_SELECTOR_TYPES = ["basic", "senses", "speed-types"] as const;
type TagSelectorType = (typeof TAG_SELECTOR_TYPES)[number];

// CONFIG properties that can be used in a tag selector
const SELECTABLE_TAG_FIELDS = [
    "abilities",
    "actionCategories",
    "actionTraits",
    "actionTypes",
    "actionsNumber",
    "actorSizes",
    "alignments",
    "ancestryItemTraits",
    "ancestryTraits",
    "areaSizes",
    "areaTypes",
    "armorGroups",
    "armorPotencyRunes",
    "armorPropertyRunes",
    "armorResiliencyRunes",
    "armorTraits",
    "attackEffects",
    "attributes",
    "baseWeaponTypes",
    "bulkTypes",
    "classTraits",
    "conditionTypes",
    "consumableTraits",
    "consumableTypes",
    "creatureTraits",
    "currencies",
    "damageCategories",
    "damageDie",
    "damageTypes",
    "dcAdjustments",
    "equipmentTraits",
    "featTraits",
    "hazardTraits",
    "healingTypes",
    "itemBonuses",
    "languages",
    "levels",
    "magicTraditions",
    "materialDamageEffects",
    "monsterTraits",
    "npcAttackTraits",
    "otherArmorTags",
    "otherConsumableTags",
    "otherWeaponTags",
    "preciousMaterialGrades",
    "preciousMaterials",
    "preparationType",
    "prerequisitePlaceholders",
    "proficiencyLevels",
    "rarityTraits",
    "saves",
    "senses",
    "skillList",
    "skills",
    "speedTypes",
    "spellComponents",
    "spellLevels",
    "spellTraits",
    "spellTypes",
    "traitsDescriptions",
    "vehicleTraits",
    "weaponCategories",
    "weaponDamage",
    "weaponDescriptions",
    "weaponGroups",
    "weaponHands",
    "weaponMAP",
    "weaponReload",
    "weaponTraits",
] as const;

type SelectableTagField = (typeof SELECTABLE_TAG_FIELDS)[number];

export { SELECTABLE_TAG_FIELDS, SelectableTagField, TAG_SELECTOR_TYPES, TagSelectorType };
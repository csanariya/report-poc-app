export interface Entity {
  id: number;
  name: string;
  parentId: number | null;
  description: string;
  fields: EntityField[];
}

export interface EntityField {
  id: number;
  entityId: number;
  entityName: string;
  fieldName: string;
  description: string;
  dataType: string;
  isRequired: boolean;
}

export interface TreeNode {
  entity: Entity;
  children: TreeNode[];
  level?: number;
}

export interface SelectedColumn {
  entityName: string;
  field: EntityField;
} 
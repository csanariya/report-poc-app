export interface Entity {
  id: number;
  name: string;
  parentId: number | null;
  description: string;
}

export interface EntityField {
  id: number;
  entityId: number;
  entityName: string;
  fieldName: string;
  description: string;
  dataType: string;
  isOptional: boolean;
}

export type DataType = 'string' | 'int' | 'decimal' | 'datetime' | 'boolean'; 
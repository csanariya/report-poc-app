import { EntityField } from '../../models/entity.interface';

export const ENTITY_FIELDS_DATA: EntityField[] = [
  {
    id: 1,
    entityId: 1,
    entityName: 'Customer',
    fieldName: 'name',
    description: 'Customer full name',
    dataType: 'string',
    isOptional: false
  },
  {
    id: 2,
    entityId: 1,
    entityName: 'Customer',
    fieldName: 'email',
    description: 'Customer email address',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 3,
    entityId: 2,
    entityName: 'Order',
    fieldName: 'orderDate',
    description: 'Date when the order was placed',
    dataType: 'date',
    isOptional: false
  },
  {
    id: 4,
    entityId: 2,
    entityName: 'Order',
    fieldName: 'totalAmount',
    description: 'Total amount of the order',
    dataType: 'number',
    isOptional: false
  },
  {
    id: 5,
    entityId: 3,
    entityName: 'Product',
    fieldName: 'name',
    description: 'Product name',
    dataType: 'string',
    isOptional: false
  },
  {
    id: 6,
    entityId: 3,
    entityName: 'Product',
    fieldName: 'price',
    description: 'Product price',
    dataType: 'number',
    isOptional: false
  },
  {
    id: 7,
    entityId: 3,
    entityName: 'Product',
    fieldName: 'inStock',
    description: 'Whether the product is in stock',
    dataType: 'boolean',
    isOptional: false
  }
]; 
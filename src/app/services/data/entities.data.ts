import { Entity } from '../../models/entity.interface';

export const ENTITIES_DATA: Entity[] = [
  {
    id: 1,
    name: 'Customer',
    parentId: null,
    description: 'Customer information'
  },
  {
    id: 2,
    name: 'Order',
    parentId: 1,
    description: 'Customer order details'
  },
  {
    id: 3,
    name: 'Product',
    parentId: null,
    description: 'Product information'
  }
]; 
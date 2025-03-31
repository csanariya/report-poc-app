import { Entity } from '../../shared/models/entity.interface';

export const ENTITIES_DATA: Entity[] = [
  {
    id: 1,
    name: 'Customer',
    parentId: null,
    description: 'Customer information',
    fields: []
  },
  {
    id: 2,
    name: 'Order',
    parentId: 1,
    description: 'Customer order details',
    fields: []
  },
  {
    id: 3,
    name: 'Product',
    parentId: null,
    description: 'Product information',
    fields: []
  },
  {
    id: 4,
    name: 'Property',
    parentId: null,
    description: 'All buildings',
    fields: []
  },
  {
    id: 5,
    name: 'Unit',
    parentId: 4,
    description: 'Individual units within a property',
    fields: []
  },
  {
    id: 6,
    name: 'Property Manager',
    parentId: 4,
    description: 'PMs managing properties',
    fields: []
  },
  {
    id: 7,
    name: 'Rental Owner',
    parentId: 4,
    description: 'People who own rental properties',
    fields: []
  },
  {
    id: 8,
    name: 'Listings',
    parentId: 5,
    description: 'Listing history for rental units',
    fields: []
  },
  {
    id: 9,
    name: 'Leases',
    parentId: 5,
    description: 'Leasing history for units',
    fields: []
  },
  {
    id: 10,
    name: 'Tenants',
    parentId: 9,
    description: 'Tenants tied to a lease',
    fields: []
  },
  {
    id: 11,
    name: 'Vehicles',
    parentId: 10,
    description: 'Vehicles tied to a tenant',
    fields: []
  },
  {
    id: 12,
    name: 'Address',
    parentId: 4,
    description: '',
    fields: []
  },
  {
    id: 12,
    name: 'Address',
    parentId: 5,
    description: '',
    fields: []
  }
];
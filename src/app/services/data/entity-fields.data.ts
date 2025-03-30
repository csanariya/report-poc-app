import { EntityField } from '../../models/entity.interface';

export const ENTITY_FIELDS_DATA: EntityField[] = [
  {
    id: 1,
    entityId: 1,
    entityName: 'Customer',
    fieldName: 'Name',
    description: 'Customer full name',
    dataType: 'string',
    isOptional: false
  },
  {
    id: 2,
    entityId: 1,
    entityName: 'Customer',
    fieldName: 'Email',
    description: 'Customer email address',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 3,
    entityId: 2,
    entityName: 'Order',
    fieldName: 'Order Date',
    description: 'Date when the order was placed',
    dataType: 'date',
    isOptional: false
  },
  {
    id: 4,
    entityId: 2,
    entityName: 'Order',
    fieldName: 'Total Amount',
    description: 'Total amount of the order',
    dataType: 'number',
    isOptional: false
  },
  {
    id: 5,
    entityId: 3,
    entityName: 'Product',
    fieldName: 'Name',
    description: 'Product name',
    dataType: 'string',
    isOptional: false
  },
  {
    id: 6,
    entityId: 3,
    entityName: 'Product',
    fieldName: 'Price',
    description: 'Product price',
    dataType: 'number',
    isOptional: false
  },
  {
    id: 7,
    entityId: 3,
    entityName: 'Product',
    fieldName: 'In Stock',
    description: 'Whether the product is in stock',
    dataType: 'boolean',
    isOptional: false
  },
  {
    id: 8,
    entityId: 4,
    entityName: 'Property',
    fieldName: 'ID',
    description: 'Property ID',
    dataType: 'number',
    isOptional: false
  },
  {
    id: 9,
    entityId: 4,
    entityName: 'Property',
    fieldName: 'Name',
    description: 'Property name',
    dataType: 'string',
    isOptional: false
  },
  {
    id: 10,
    entityId: 4,
    entityName: 'Property',
    fieldName: 'Type',
    description: 'Property type',
    dataType: 'string',
    isOptional: false
  },
  {
    id: 11,
    entityId: 4,
    entityName: 'Property',
    fieldName: 'Year Built',
    description: '',
    dataType: 'number',
    isOptional: true
  },
  {
    id: 12,
    entityId: 4,
    entityName: 'Property',
    fieldName: 'Manager ID',
    description: '',
    dataType: 'number',
    isOptional: true
  },
  {
    id: 13,
    entityId: 5,
    entityName: 'Unit',
    fieldName: 'ID',
    description: 'Unit ID',
    dataType: 'number',
    isOptional: true
  },
  {
    id: 14,
    entityId: 5,
    entityName: 'Unit',
    fieldName: 'Unit Number',
    description: '',
    dataType: 'string',
    isOptional: false
  },
  {
    id: 15,
    entityId: 5,
    entityName: 'Unit',
    fieldName: 'Bed',
    description: '',
    dataType: 'number',
    isOptional: true
  },
  {
    id: 16,
    entityId: 5,
    entityName: 'Unit',
    fieldName: 'Bath',
    description: '',
    dataType: 'number',
    isOptional: true
  },
  {
    id: 17,
    entityId: 5,
    entityName: 'Unit',
    fieldName: 'Sq Ft',
    description: '',
    dataType: 'number',
    isOptional: true
  },
  {
    id: 18,
    entityId: 6,
    entityName: 'Property Manager',
    fieldName: 'Name',
    description: 'Name of Manager',
    dataType: 'string',
    isOptional: false
  },
  {
    id: 19,
    entityId: 6,
    entityName: 'Property Manager',
    fieldName: 'Role',
    description: '',
    dataType: 'string',
    isOptional: false
  },
  {
    id: 20,
    entityId: 6,
    entityName: 'Property Manager',
    fieldName: 'Email',
    description: '',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 21,
    entityId: 6,
    entityName: 'Property Manager',
    fieldName: 'Phone',
    description: '',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 22,
    entityId: 7,
    entityName: 'Rental Owner',
    fieldName: 'Name',
    description: 'Name of Owner',
    dataType: 'string',
    isOptional: false
  },
  {
    id: 23,
    entityId: 7,
    entityName: 'Rental Owner',
    fieldName: 'Email',
    description: '',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 24,
    entityId: 7,
    entityName: 'Rental Owner',
    fieldName: 'Phone',
    description: '',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 25,
    entityId: 8,
    entityName: 'Listings',
    fieldName: 'Date Listed',
    description: '',
    dataType: 'date',
    isOptional: false
  },
  {
    id: 26,
    entityId: 8,
    entityName: 'Listings',
    fieldName: 'Date Unlisted',
    description: '',
    dataType: 'date',
    isOptional: true
  },
  {
    id: 27,
    entityId: 8,
    entityName: 'Listings',
    fieldName: 'Rent',
    description: 'The listed rent of the rental unit',
    dataType: 'number',
    isOptional: false
  },
  {
    id: 28,
    entityId: 9,
    entityName: 'Leases',
    fieldName: 'ID',
    description: 'Lease ID',
    dataType: 'number',
    isOptional: false
  },
  {
    id: 29,
    entityId: 9,
    entityName: 'Leases',
    fieldName: 'Start Date',
    description: 'The start date of the lease',
    dataType: 'date',
    isOptional: false
  },
  {
    id: 30,
    entityId: 9,
    entityName: 'Leases',
    fieldName: 'End Date',
    description: 'The end date of the lease',
    dataType: 'date',
    isOptional: true
  },
  {
    id: 31,
    entityId: 9,
    entityName: 'Leases',
    fieldName: 'Unit ID',
    description: '',
    dataType: 'number',
    isOptional: false
  },
  {
    id: 32,
    entityId: 9,
    entityName: 'Leases',
    fieldName: 'Rent',
    description: '',
    dataType: 'number',
    isOptional: false
  },
  {
    id: 33,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'ID',
    description: 'Tenant ID',
    dataType: 'number',
    isOptional: false
  },
  {
    id: 34,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'Name',
    description: '',
    dataType: 'string',
    isOptional: false
  },
  {
    id: 35,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'Email',
    description: '',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 36,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'Phone',
    description: '',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 37,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'License',
    description: 'Driver\'s license number of the tenant',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 38,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'Is Primary',
    description: '',
    dataType: 'boolean',
    isOptional: false
  },
  {
    id: 39,
    entityId: 11,
    entityName: 'Vehicles',
    fieldName: 'Make',
    description: 'The make of the vehicle',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 40,
    entityId: 11,
    entityName: 'Vehicles',
    fieldName: 'Model',
    description: 'The model of the vehicle',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 41,
    entityId: 11,
    entityName: 'Vehicles',
    fieldName: 'Year',
    description: '',
    dataType: 'number',
    isOptional: true
  },
  {
    id: 42,
    entityId: 11,
    entityName: 'Vehicles',
    fieldName: 'Color',
    description: '',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 43,
    entityId: 12,
    entityName: 'Address',
    fieldName: 'Street Address',
    description: '',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 44,
    entityId: 12,
    entityName: 'Address',
    fieldName: 'City',
    description: '',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 45,
    entityId: 12,
    entityName: 'Address',
    fieldName: 'State',
    description: '',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 46,
    entityId: 12,
    entityName: 'Address',
    fieldName: 'Zip',
    description: '',
    dataType: 'string',
    isOptional: true
  },
  {
    id: 47,
    entityId: 12,
    entityName: 'Address',
    fieldName: 'Country',
    description: '',
    dataType: 'string',
    isOptional: true
  }
]; 
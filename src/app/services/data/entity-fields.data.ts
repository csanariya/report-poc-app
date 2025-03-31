import { EntityField } from '../../shared/models/entity.interface';

export const ENTITY_FIELDS_DATA: EntityField[] = [
  {
    id: 1,
    entityId: 1,
    entityName: 'Customer',
    fieldName: 'Name',
    description: 'Customer full name',
    dataType: 'string',
    isRequired: true
  },
  {
    id: 2,
    entityId: 1,
    entityName: 'Customer',
    fieldName: 'Email',
    description: 'Customer email address',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 3,
    entityId: 2,
    entityName: 'Order',
    fieldName: 'Order Date',
    description: 'Date when the order was placed',
    dataType: 'date',
    isRequired: true
  },
  {
    id: 4,
    entityId: 2,
    entityName: 'Order',
    fieldName: 'Total Amount',
    description: 'Total amount of the order',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 5,
    entityId: 3,
    entityName: 'Product',
    fieldName: 'Name',
    description: 'Product name',
    dataType: 'string',
    isRequired: true
  },
  {
    id: 6,
    entityId: 3,
    entityName: 'Product',
    fieldName: 'Price',
    description: 'Product price',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 7,
    entityId: 3,
    entityName: 'Product',
    fieldName: 'In Stock',
    description: 'Whether the product is in stock',
    dataType: 'boolean',
    isRequired: true
  },
  {
    id: 8,
    entityId: 4,
    entityName: 'Property',
    fieldName: 'ID',
    description: 'Property ID',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 9,
    entityId: 4,
    entityName: 'Property',
    fieldName: 'Name',
    description: 'Property name',
    dataType: 'string',
    isRequired: true
  },
  {
    id: 10,
    entityId: 4,
    entityName: 'Property',
    fieldName: 'Type',
    description: 'Property type',
    dataType: 'string',
    isRequired: true
  },
  {
    id: 11,
    entityId: 4,
    entityName: 'Property',
    fieldName: 'Year Built',
    description: 'Year the property was built',
    dataType: 'number',
    isRequired: false
  },
  {
    id: 12,
    entityId: 4,
    entityName: 'Property',
    fieldName: 'Manager ID',
    description: '',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 13,
    entityId: 5,
    entityName: 'Unit',
    fieldName: 'ID',
    description: 'Unit ID',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 14,
    entityId: 5,
    entityName: 'Unit',
    fieldName: 'Unit Number',
    description: '',
    dataType: 'string',
    isRequired: true
  },
  {
    id: 15,
    entityId: 5,
    entityName: 'Unit',
    fieldName: 'Bed',
    description: '',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 16,
    entityId: 5,
    entityName: 'Unit',
    fieldName: 'Bath',
    description: '',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 17,
    entityId: 5,
    entityName: 'Unit',
    fieldName: 'Sq Ft',
    description: '',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 18,
    entityId: 6,
    entityName: 'Property Manager',
    fieldName: 'Name',
    description: 'Name of Manager',
    dataType: 'string',
    isRequired: true
  },
  {
    id: 19,
    entityId: 6,
    entityName: 'Property Manager',
    fieldName: 'Role',
    description: '',
    dataType: 'string',
    isRequired: true
  },
  {
    id: 20,
    entityId: 6,
    entityName: 'Property Manager',
    fieldName: 'Email',
    description: '',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 21,
    entityId: 6,
    entityName: 'Property Manager',
    fieldName: 'Phone',
    description: '',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 22,
    entityId: 7,
    entityName: 'Rental Owner',
    fieldName: 'Name',
    description: 'Name of Owner',
    dataType: 'string',
    isRequired: true
  },
  {
    id: 23,
    entityId: 7,
    entityName: 'Rental Owner',
    fieldName: 'Email',
    description: '',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 24,
    entityId: 7,
    entityName: 'Rental Owner',
    fieldName: 'Phone',
    description: '',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 25,
    entityId: 8,
    entityName: 'Listings',
    fieldName: 'Date Listed',
    description: '',
    dataType: 'date',
    isRequired: true
  },
  {
    id: 26,
    entityId: 8,
    entityName: 'Listings',
    fieldName: 'Date Unlisted',
    description: '',
    dataType: 'date',
    isRequired: false
  },
  {
    id: 27,
    entityId: 8,
    entityName: 'Listings',
    fieldName: 'Rent',
    description: 'The listed rent of the rental unit',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 28,
    entityId: 9,
    entityName: 'Leases',
    fieldName: 'ID',
    description: 'Lease ID',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 29,
    entityId: 9,
    entityName: 'Leases',
    fieldName: 'Start Date',
    description: 'The start date of the lease',
    dataType: 'date',
    isRequired: true
  },
  {
    id: 30,
    entityId: 9,
    entityName: 'Leases',
    fieldName: 'End Date',
    description: 'The end date of the lease',
    dataType: 'date',
    isRequired: false
  },
  {
    id: 31,
    entityId: 9,
    entityName: 'Leases',
    fieldName: 'Unit ID',
    description: '',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 32,
    entityId: 9,
    entityName: 'Leases',
    fieldName: 'Rent',
    description: '',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 33,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'ID',
    description: 'Tenant ID',
    dataType: 'number',
    isRequired: true
  },
  {
    id: 34,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'Name',
    description: '',
    dataType: 'string',
    isRequired: true
  },
  {
    id: 35,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'Email',
    description: '',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 36,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'Phone',
    description: '',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 37,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'License',
    description: 'Driver\'s license number of the tenant',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 38,
    entityId: 10,
    entityName: 'Tenants',
    fieldName: 'Is Primary',
    description: '',
    dataType: 'boolean',
    isRequired: true
  },
  {
    id: 39,
    entityId: 11,
    entityName: 'Vehicles',
    fieldName: 'Make',
    description: 'The make of the vehicle',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 40,
    entityId: 11,
    entityName: 'Vehicles',
    fieldName: 'Model',
    description: 'The model of the vehicle',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 41,
    entityId: 11,
    entityName: 'Vehicles',
    fieldName: 'Year',
    description: '',
    dataType: 'number',
    isRequired: false
  },
  {
    id: 42,
    entityId: 11,
    entityName: 'Vehicles',
    fieldName: 'Color',
    description: '',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 43,
    entityId: 12,
    entityName: 'Address',
    fieldName: 'Street Address',
    description: '',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 44,
    entityId: 12,
    entityName: 'Address',
    fieldName: 'City',
    description: '',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 45,
    entityId: 12,
    entityName: 'Address',
    fieldName: 'State',
    description: '',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 46,
    entityId: 12,
    entityName: 'Address',
    fieldName: 'Zip',
    description: '',
    dataType: 'string',
    isRequired: false
  },
  {
    id: 47,
    entityId: 12,
    entityName: 'Address',
    fieldName: 'Country',
    description: '',
    dataType: 'string',
    isRequired: false
  }
]; 
import { Entity } from '../../shared/models/entity.interface';

export const ENTITIES_DATA: Entity[] = [
  {
    "id": 1,
    "name": "Sample Entity",
    "parentId": null,
    "description": "Sample entity",
    "fields": []
  },
  {
    "id": 2,
    "name": "User",
    "parentId": null,
    "description": "Staff, Rental Owners, Vendors",
    "fields": []
  },
  {
    "id": 4,
    "name": "Property",
    "parentId": null,
    "description": "All buildings",
    "fields": []
  },
  {
    "id": 5,
    "name": "Unit",
    "parentId": 4,
    "description": "Individual units within a property",
    "fields": []
  },
  {
    "id": 6,
    "name": "Assigned Managers",
    "parentId": 4,
    "description": "PMs managing properties",
    "fields": []
  },
  {
    "id": 7,
    "name": "Rental Owner",
    "parentId": 4,
    "description": "People who own rental properties",
    "fields": []
  },
  {
    "id": 8,
    "name": "Listings",
    "parentId": 5,
    "description": "Listing history for rental units",
    "fields": []
  },
  {
    "id": 9,
    "name": "Leases",
    "parentId": 5,
    "description": "Leasing history for units",
    "fields": []
  },
  {
    "id": 10,
    "name": "Tenants",
    "parentId": 9,
    "description": "Tenants tied to a lease",
    "fields": []
  },
  {
    "id": 11,
    "name": "Vehicles",
    "parentId": 10,
    "description": "Vehicles tied to a tenant",
    "fields": []
  },
  {
    "id": 12,
    "name": "Address",
    "parentId": 4,
    "description": "",
    "fields": []
  },
  {
    "id": 12,
    "name": "Address",
    "parentId": 5,
    "description": "",
    "fields": []
  },
  {
    "id": 13,
    "name": "Amenity",
    "parentId": 4,
    "description": "Amenities managed on the property",
    "fields": []
  },
  {
    "id": 14,
    "name": "Auto Insurance",
    "parentId": 11,
    "description": "",
    "fields": []
  },
  {
    "id": 15,
    "name": "Auto Insurance Renewal",
    "parentId": 14,
    "description": "Auto insurance renewal history",
    "fields": []
  }
];
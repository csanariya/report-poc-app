import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Entity, EntityField } from '../shared/models/entity.interface';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  constructor(
    private http: HttpClient,
    private configService: ConfigurationService
  ) { }

  getEntities(): Observable<Entity[]> {
    const entities = this.configService.getEntities();
    const entityFields = this.configService.getEntityFields();
    
    // Map the entities and add their fields
    const entitiesWithFields = entities.map(entity => ({
      ...entity,
      fields: entityFields.filter(field => field.entityId === entity.id)
    }));
    return of(entitiesWithFields);
  }

  getEntity(id: number): Observable<Entity> {
    const entities = this.configService.getEntities();
    const entityFields = this.configService.getEntityFields();
    
    const entity = entities.find(e => e.id === id);
    if (entity) {
      return of({
        ...entity,
        fields: entityFields.filter(field => field.entityId === entity.id)
      });
    }
    throw new Error('Entity not found');
  }

  createEntity(entity: Entity): Observable<Entity> {
    const entities = this.configService.getEntities();
    const newEntity = {
      ...entity,
      id: entities.length + 1
    };
    const updatedEntities = [...entities, newEntity];
    this.configService.updateEntities(updatedEntities);
    return of(newEntity);
  }

  updateEntity(id: number, entity: Entity): Observable<Entity> {
    const entities = this.configService.getEntities();
    const index = entities.findIndex(e => e.id === id);
    if (index !== -1) {
      const updatedEntities = [...entities];
      updatedEntities[index] = entity;
      this.configService.updateEntities(updatedEntities);
    }
    return of(entity);
  }

  deleteEntity(id: number): Observable<void> {
    const entities = this.configService.getEntities();
    const updatedEntities = entities.filter(e => e.id !== id);
    this.configService.updateEntities(updatedEntities);
    return of(void 0);
  }

  getEntityFields(): Observable<EntityField[]> {
    return of(this.configService.getEntityFields());
  }

  getEntityFieldsByEntityId(entityId: number): Observable<EntityField[]> {
    const fields = this.configService.getEntityFields();
    return of(fields.filter(field => field.entityId === entityId));
  }

  getEntityField(id: number): Observable<EntityField | undefined> {
    const fields = this.configService.getEntityFields();
    return of(fields.find(f => f.id === id));
  }

  addEntityField(field: Omit<EntityField, 'id'>): Observable<EntityField> {
    const fields = this.configService.getEntityFields();
    const newField = {
      ...field,
      id: fields.length + 1
    };
    const updatedFields = [...fields, newField];
    this.configService.updateEntityFields(updatedFields);
    return of(newField);
  }

  updateEntityField(field: EntityField): Observable<EntityField> {
    const fields = this.configService.getEntityFields();
    const index = fields.findIndex(f => f.id === field.id);
    if (index !== -1) {
      const updatedFields = [...fields];
      updatedFields[index] = field;
      this.configService.updateEntityFields(updatedFields);
    }
    return of(field);
  }

  deleteEntityField(id: number): Observable<void> {
    const fields = this.configService.getEntityFields();
    const updatedFields = fields.filter(f => f.id !== id);
    this.configService.updateEntityFields(updatedFields);
    return of(void 0);
  }
} 
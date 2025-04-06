import { Pipe, PipeTransform } from '@angular/core';
import { EntityField } from '../models/entity.interface';

@Pipe({
  name: 'filterByEntityId',
  standalone: true
})
export class FilterByEntityIdPipe implements PipeTransform {
  transform(fields: EntityField[], entityId: number): EntityField[] {
    if (!fields || !entityId) {
      return [];
    }
    return fields.filter(field => field.entityId === entityId);
  }
} 
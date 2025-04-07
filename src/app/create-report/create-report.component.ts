import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityService } from '../services/entity.service';
import { Entity, EntityField, TreeNode, SelectedColumn } from '../shared/models/entity.interface';
import { TreeNodeComponent } from '../shared/components/tree-node/tree-node.component';

@Component({
  selector: 'app-create-report',
  standalone: true,
  imports: [CommonModule, TreeNodeComponent],
  templateUrl: './create-report.component.html',
  styleUrls: ['../shared/styles/tree-view.scss']
})
export class CreateReportComponent implements OnInit {
  treeNodes: TreeNode[] = [];
  selectedColumns: SelectedColumn[] = [];

  constructor(private entityService: EntityService) {}

  ngOnInit(): void {
    this.loadEntities();
  }

  loadEntities(): void {
    this.entityService.getEntities().subscribe(entities => {
      this.treeNodes = this.buildTree(entities);
    });
  }

  buildTree(entities: Entity[]): TreeNode[] {
    const entityMap = new Map<number, TreeNode>();
    const roots: TreeNode[] = [];

    // First pass: create all nodes
    entities.forEach(entity => {
      entityMap.set(entity.id, {
        entity,
        children: []
      });
    });

    // Second pass: build the tree structure
    entities.forEach(entity => {
      const node = entityMap.get(entity.id)!;
      if (entity.parentId) {
        const parent = entityMap.get(entity.parentId);
        if (parent) {
          parent.children.push(node);
        }
      } else {
        roots.push(node);
      }
    });

    return roots;
  }

  addColumn(field: EntityField): void {
    if (!this.selectedColumns.some(col => col.field.id === field.id)) {
      this.selectedColumns.push({
        entityName: field.entityName,
        field
      });
    }
  }

  removeColumn(fieldId: number): void {
    this.selectedColumns = this.selectedColumns.filter(col => col.field.id !== fieldId);
  }

  getSampleValue(field: EntityField): string {
    switch (field.dataType.toLowerCase()) {
      case 'string':
        return 'Sample';
      case 'text':
        return 'Sample that is longer.';
      case 'number':
        return '123';
      case 'decimal':
        return '123.45';
      case 'datetime':
        return new Date().toLocaleString();
      case 'date':
        return new Date().toLocaleDateString();
      case 'boolean':
        return 'Yes'; 
      case 'bit':
        return '4';
      case 'blob':
        return '{id:1, name:"Sample blob"}';
      default:
        return 'Value';
    }
  }
} 
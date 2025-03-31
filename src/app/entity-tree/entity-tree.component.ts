import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityService } from '../services/entity.service';
import { Entity, EntityField, TreeNode } from '../shared/models/entity.interface';
import { TreeNodeComponent } from '../shared/components/tree-node/tree-node.component';

@Component({
  selector: 'app-entity-tree',
  standalone: true,
  imports: [CommonModule, TreeNodeComponent],
  templateUrl: './entity-tree.component.html',
  styleUrls: ['../shared/styles/tree-view.scss']
})
export class EntityTreeComponent implements OnInit {
  treeNodes: TreeNode[] = [];

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
    // This is just a placeholder since we don't need to handle column selection in the tree view
    console.log('Field selected:', field);
  }
} 
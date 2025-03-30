import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityService } from '../services/entity.service';
import { Entity } from '../models/entity.interface';

interface TreeNode {
  entity: Entity;
  children: TreeNode[];
  expanded: boolean;
  level: number;
}

@Component({
  selector: 'app-entity-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entity-tree.component.html',
  styleUrls: ['./entity-tree.component.scss']
})
export class EntityTreeComponent implements OnInit {
  entities: Entity[] = [];
  rootNodes: TreeNode[] = [];

  constructor(private entityService: EntityService) {}

  ngOnInit(): void {
    this.loadEntities();
  }

  loadEntities(): void {
    this.entityService.getEntities().subscribe(entities => {
      this.entities = entities;
      this.buildTree();
    });
  }

  buildTree(): void {
    // Create a map of all entities
    const entityMap = new Map<number, Entity>();
    this.entities.forEach(entity => entityMap.set(entity.id, entity));

    // Build the tree structure
    this.rootNodes = this.entities
      .filter(entity => entity.parentId === null)
      .map(entity => this.createTreeNode(entity, entityMap, 1));
  }

  createTreeNode(entity: Entity, entityMap: Map<number, Entity>, level: number): TreeNode {
    const children = this.entities
      .filter(e => e.parentId === entity.id)
      .map(child => this.createTreeNode(child, entityMap, level + 1));

    return {
      entity,
      children,
      expanded: true,
      level
    };
  }

  toggleNode(node: TreeNode): void {
    node.expanded = !node.expanded;
  }

  getLevelLabel(level: number): string {
    return `L${level}`;
  }

  getLevelColor(level: number): string {
    const colors = [
      '#000000', // Level 1 - Black
      '#2E7D32', // Level 2 - Green
      '#1976D2', // Level 3 - Blue
      '#9C27B0', // Level 4 - Purple
      '#F57C00', // Level 5 - Orange
      '#D32F2F', // Level 6 - Red
      '#455A64'  // Level 7 - Dark Grey
    ];
    return colors[level - 1] || '#000000';
  }
} 
/**
 *
 *  Copyright 2016 Netflix, Inc.
 *
 *     Licensed under the Apache License, Version 2.0 (the "License");
 *     you may not use this file except in compliance with the License.
 *     You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 *
 */
import Node from '../base/node';
import NodeViewDetailed from '../base/nodeViewDetailed';

class GlobalNode extends Node {
  constructor (node) {
    super(node, 'global');
    this.size = 120;
    this.refreshLoaded();
  }

  isInteractive () {
    return !this.isEntryNode();
  }

  refreshLoaded () {
    this.loaded = this.isEntryNode() || (this.nodes && this.nodes.length > 0);
  }

  invalidateIncomingVolume () {
    super.invalidateIncomingVolume();
    this.refreshLoaded();
  }

  invalidateOutgoingVolume () {
    super.invalidateOutgoingVolume();
    this.refreshLoaded();
  }

  render () {
    this.view = new NodeViewDetailed(this);
  }
}

export default GlobalNode;

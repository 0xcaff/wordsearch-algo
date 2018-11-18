export interface MatchResult {
  /**
   * The match is complete. The value is in the trie.
   */
  isComplete: boolean;

  /**
   * There are items with this prefix.
   */
  hasMore: boolean;
}

export class TrieNode {
  private isTerminal: boolean = false;
  private children: Map<string, TrieNode> = new Map<string, TrieNode>();

  add(word: string) {
    if (word.length === 0) {
      this.isTerminal = true;
      return;
    }

    const prefix = word[0];
    const child = this.getOrAdd(prefix);

    child.add(word.slice(1));
  }

  isPrefix(word: string): MatchResult | null {
    if (word.length === 0) {
      return {
        isComplete: this.isTerminal,
        hasMore: this.children.size > 0
      };
    }

    const prefix = word[0];
    const child = this.children.get(prefix);
    if (!child) {
      return null;
    }

    return child.isPrefix(word.slice(1));
  }

  private getOrAdd(prefix: string): TrieNode {
    let node = this.children.get(prefix);
    if (!node) {
      node = new TrieNode();
      this.children.set(prefix, node);
    }

    return node;
  }
}

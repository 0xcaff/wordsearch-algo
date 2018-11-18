import { TrieNode } from "./trie";

const trie = new TrieNode();
trie.add("dog");
trie.add("cat");
trie.add("mouse");
trie.add("car");
trie.add("catty");
trie.add("badheart");
trie.add("sweetheart");

it("should tell when a match is a prefix match", () =>
  expect(trie.isPrefix("c")).toEqual({ isComplete: false, hasMore: true }));

it("should tell when not a match", () => expect(trie.isPrefix("t")).toBeNull());

it("should tell when a terminal complete match", () =>
  expect(trie.isPrefix("dog")).toEqual({ isComplete: true, hasMore: false }));

it("should tell when a non-terminal complete match", () =>
  expect(trie.isPrefix("cat")).toEqual({ isComplete: true, hasMore: true }));

it("should not match suffix", () => expect(trie.isPrefix("heart")).toBeNull());

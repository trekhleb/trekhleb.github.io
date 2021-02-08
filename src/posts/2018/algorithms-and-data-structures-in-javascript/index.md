---
title: "Algorithms and Data Structures in JavaScript"

summary: "Collection of classic algorithms and data structures implemented in ES6 JavaScript with explanations and links to further readings and YouTube videos"

cover: assets/01-cover.png

date: 2018-05-21

---

Hello Readers! I’ve recently launched JavaScript [Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms) repository on GitHub with a collection of classic algorithms and data structures implemented in ES6 JavaScript with explanations and links to further readings and YouTube videos. There is also [Algorithms and Data Structures YouTube playlist](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8) that contains all the videos mentioned in that repository, so you may just go and take this hand-made online learning course :)

So I guess you’ve already grasped the main idea of the project — **helping developers to learn and practice algorithms and do it in JavaScript**.

To make this process even smoother I’ve tried to put some **graphical illustrations** for each algorithm and data structure where it was possible just to make the idea behind those algorithms to be easily grasped and memorized.

You also may find some practical information just in the root README file that may be handy while you’re studying. Such information as:

- **big O notation graphs** - to see quickly what is worse O(n!) or, let’s say, O(n²)
- **list of some of the most used Big O notations**, and their performance comparisons - to get the idea how big is 10! (it is 3628800)
- **data structures operations complexity** - how fast are searches, reads, or insertions for different data-structures
- **comparative table of sorting algorithms complexity** - to help you choose the proper sorting algorithm in your situation

![Big O graphs](assets/02.png)

All **code is 100% covered with tests**. This is done not only to keep code working correctly but also to give you an illustration of how each algorithm or data structure works, what basic operations they have (let’s say polling for the heap), and what are the edge cases (what to do if the graph is directed).

The repository also has a **playground**. This is just a small function template along with an empty test case that will help you to start testing or working on algorithms just right after cloning the repo.

Currently, there are following data structures are covered:

- Linked List
- Queue
- Stack
- Hash Table
- Heap
- Priority Queue
- Trie
- Tree (Binary Search Tree, AVL Tree)
- Graph (both directed and undirected)
- Disjoint Set

On top of those data structures, there are **more than 50 popular algorithms are implemented**. Among them are sorting, searching algorithms, graph/tree/sets/string/math related algorithms. All algorithms are also categorized by their paradigms:

- **Brute Force Algorithms** - look at all the possibilities and selects the best solution
- **Greedy Algorithms** - choose the best option at the current time, without any consideration for the future
- **Divide and Conquer Algorithms** - divide the problem into smaller parts and then solve those parts
- **Dynamic Programming Algorithms** - build up to a solution using previously found sub-solutions
- **Backtracking Algorithms** - similarly to brute force try to generate all possible solutions but each time you generate a solution test if it satisfies all conditions, and only then continue generating subsequent solutions. Otherwise, backtrack and go on a different path of finding a solution

[JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms) repository is still under active development and more algorithms and data-structures are yet to come. You may also be a part of it by contributing your code and your implementations of web-known algorithms!

I hope this repository will be helpful for you! Enjoy coding!

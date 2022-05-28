# what is an algorithm ?
An algorithm is a set of well-defined instructions to solve a particular problem.
- An algorithm have well defined outputs and inputs.
- Each step sould be clear and unabiguous.
- An algorithm is language indipendent.
- Learning algorithm translates to learning different techniques to efficiently solve those problems.
- On problem  can be solved in many ways using  different algorithms.
- We evaluate the performance of an algorithm in terms of its input size.

## Time complexity
- Amount of time taken by an algorithm to run, as a function of input size.

## Space complexity
- Amount of memory taken by an algorithm to run, as a function of input size.


- There no one single solution that works every single time. It is always good to know mutliple ways to solve  the problem and use  the best solution, given your constraints.

- If your app needs to be very quick and has plenty of memory to work, you don't have to worry about space complexity.
- If you have very little memory work with, you should pick a solution that is relatively slower but needs less space.

## Asymptotic notations
- Asymptotic notations helps to represent time and space complexity of an algorithm.
- Asymptotic notations are mathematical tools to represent time and space complexity.
- There are mainly three Asymptotic notations
  1. Big-O Notation(O-notation) - Worst case complexity
  2. Omega Notation - Best case complexity
  3. Theta Notation - Average case complexity

# Big-O Notation
- It has two important charactoristics
  1. It is expressed in terms of the input.
  2. It focuses on the bigger picture without getting caught up in the minute details
  3. O(1) - constants, O(n)- Linear

  ## Big-O notation in Objects
  - An object is a collection of key value pairs
  - When delete. insert or access an element to an items has constant time complexity.
    ```
      - Remove - O(1) - Constants
      - Insert - O(1) -   "
      - Access - O(1) -   "
      - Search - O(n) - Linear
      - Object.keys() - O(n) - Linear
      - Object.values() - O(n) - Linear
      - Object.entries() = O(n) - linear
    ```

  ## Big-O notation in Arrays
  - An array is an ordered collection of values.
  ```
    - Insert/Remove at end - O(1)
    - Insert/Remove at beginning - O(n)
    - Access - O(1)
    - Search - O(n)
    - Push/pop - O(1)
    - Shift/unshift/concat/slice/splice - O(n)
    - Foreach/filter/map/reduce - O(n)
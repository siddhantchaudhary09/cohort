# data structures

- they are of two types primitive and non primitive
- primitive are those which are supported by lang out of the box. for example array
- Non primitive are those which are custom implementation of ds for eg stack , linkedlist etc

## Objects

- In Objects we store data in key value pair.
- In Objects we can group in data in a container like structure

## Memories in Objects

variable - Memory

- there are two types of memroies stack and heap

- stack cannot grow but heap can grow therefore for dynamically grow things stack fails so in objects heap uses but for strings etc computer uses Stack

- suppose p1={} then { } created in heap and in stack there is p1 using reference of that p1=0xx123 etc then p2= p1 so p2 created in stack p2 pointing same memory

if we put things in stack flexibility goes but read operation is fast but in pointer there is readability slow but we gets dynamic memory.

- we often listen garbage collector and memory leak

if we removed the p1 from stack so gc will automatically clear but if gc is not there then we have to do manually .

memory leak:: suppose there are two devs 1st one made p2 and 2nd used p1 = p2 and first one cleared p2 from heap and stack then p1 has address reference that is called memory leak becuase p1 can access that memory but js can automatically handle these situations.

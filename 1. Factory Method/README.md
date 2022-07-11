# Factory Method

example1.ts = More by the book and following the learning resources\
example2.ts = Tried to adjust the desgin pattern to a different use case, practicing syntax and understanding of the concept.

## Keypoints

Creational pattern = provides object creation mechanisms that increase flexibility and reuse of existing code\
Factory = Method getting called\
Client = Thing calling the factory\
Product = Object returned from factory

Move creation of objects from constructor calls, using the new keyword to a method that handles creation of classes. These classes created by the factory method are called "products".\
The factorys products should all share a common interface.

This enables the client to just make a call to the factory of their choice without having to know much further implementation details. All product specific implementation should be handled by the factory.

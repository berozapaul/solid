# Single responsibility principle
A class should have only one reason to change and it should only have single 
responsibility. 

In the example code have a Notebook class that has mixed responsibility. The theme 
changing or font-changing tasks are added with the Notebook class. This is the 
violation of single responsibility principle. 

We should have separate class for theme changing or font changing. 

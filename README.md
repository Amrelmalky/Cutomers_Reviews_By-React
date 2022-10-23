# Reviews of the Users Task 🐻

👉 (A) - npm install

👉 (B) - npm install react-icon

👉 (C) - Think About the Task
-----------------------------

 - We have data array of objects , each object
{ id , name , job , image}

    -  We need to Appear Review depend on Array index ,
       for example the default review IN ARRAY is object with index 0

    -  So we will use state with initial value 0 for index

    -  destructure array of objects with named variables { name, job, image, text }

    App sturcture :
       main
        ⬇️
      section
        ⬇️
      article
        ⬇️
       (div)
        ⬇️
    image + span
        ⬇️
    h4 , p , p

==========================  
 (div)
   ⬇️
button for (<>)
   ⬇️
button for (surprise me )

👉 Our Logic :
==============

    - create function to index + 1 & go to  the next index
    - create function to index - 1 & go to the pervious index

    - check if given array not bigger that array.length 
      (if not return 0  the first element in array )
      check if given array not less than Zero ( if not return array.length-1 the last element in array )

    - create function to get random of array.length using Math methods 
      Math.floor((Math.random)*array.length)

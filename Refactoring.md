# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I think that the original function has redundant code because first ask if the event input is undefined. If it's true come back to ask if the candidate variable is undefined and then assign zero value if it's true.

I refactored the code to ask only one time if the input variable is undefined and if it's true then obtain the hash we're lookin for and return it.

Also, I refactored the name of the variables to be code more redable and I used the ECMAScript 6 features to don't use semicolons at the end of each instruction

The variables names I have use are:
- defaultKey: Is the default response
- maxKeyLength: Is the max size of key
- hashkey = Is the hash that the function return

I create five unit test that run fine in all cases.

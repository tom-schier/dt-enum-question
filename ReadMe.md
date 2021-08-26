This is to support a Stack Overflow Question
[here](https://stackoverflow.com/questions/68921117/how-do-you-properly-declare-enum-type-in-a-definitelytyped-library)

To replicate the issue
Run ```npm i``` then MOVE the enums folder into node_modules\@types

As per my question this does not work but if you replace
```export enum EnumType ...``` with
```export const enum EnumType...``` this works fine.

However, the linter required for submission to DefintelyTyped does not allow this.
So how do you achieve this or work around it?

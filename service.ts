    // The consumer of this type definition file
    // service.ts
    import express from 'express';
    import {SomeInterface, EnumType} from 'enum-test'
    
    let myObject: SomeInterface = {
        stringAttribute: "Awsome",
        enumAttribute: EnumType.TYPE_A,
    }
    const app = express();
    app.listen(3000, () => {
    
        console.log('The application is listening on port 3000!');
        console.log('Account is' + myObject.stringAttribute);
    })
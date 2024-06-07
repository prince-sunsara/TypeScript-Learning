// *************************
// * INTERFACE VS TYPE
// *************************

/*
    ?> use custom type when you need unions, intersections, or types.
    ?> Use interface when defining object shapes or classes that adhere to a contract

    ?> Custom types can use unions and intersections for more complex type compositions.
    ?> Interfaces can extend other interfaces to inherit their members

    ?> same interface name treated as one
        type Stud = {
            name:string;
            age: number;
        }
        type Addr = {
            city:string;
            pinCode: number;
        }

        const bioData: Stud & Addr = {
            name: "prince",
            age: 29,
            city: "Patan",
            PinCode : 384260
        }
        
    ?> For interface 
        interface Stud {
            name:string;
            age: number;
        }
        interface Addr {
            city:string;
            pinCode: number;
        }

        const Data extends Stud, Addr {}

        // const bioData:Data = {
        //     name: "prince",
        //     age: 29,
        //     city: "Patan",
        //     PinCode : 384260
        // }

        class BioData implements Data {
            -------- Code --------
        }
    ?>  

*/

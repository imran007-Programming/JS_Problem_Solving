// type User = [string, Number, boolean]
// const userInfo: User = ["imran", 23, true]
// type Id = string | number | boolean
// let userId: Id
// userId = 12,
//     userId = "12"
// userId = false

// type status = "pending" | "approved" | "success"

// let newStatus: status
// newStatus = "success"
// newStatus = "approved"
// type User = {
//     name: string
// }
// type Admin = User & {
//     mobile: number
// }
// const admin: Admin = {
//     name: "imran",
//     mobile: 4343324343
// }
// interface ApiResponse<T> {
//     success: boolean;
//     data: T
// }

// interface User {
//     name: string;
//     age: number
// }

// interface product {
//     name: string;
//     price: number;
//     stock: number
// }

// interface Category {
//     name: string;
//     image: string
// }

// const productResponse: ApiResponse<product> = {
//     success: true,
//     data: {
//         name: "t-shirt",
//         price: 120,
//         stock: 12
//     }
// }




// const CategoryResponse: ApiResponse<Category> = {
//     success: true,
//     data: {
//         name: "t-shirt",
//         image: "dsdsd"
//     }
// }

// console.log(CategoryResponse)



// const genericFunction = <T, U>(data: T[], name: U) => {
//     return `my name is ${name} and i am ${data[1]}`
// }

// const result = genericFunction(["imran", 23], "imran")

// console.log(result)

// type User = {
//     name: string
// }
// type Role = User & {
//     role: string
// }
// const userData: Role = {
//     name: "imran",
//     role: "admin"
// }
// console.log(userData)

interface User {
    name: string;
    age: number

}

interface userData extends User {
    mobile: string;
    location: string
}

const userInfo: userData = {
    age: 23,
    location: "lakshmipur",
    mobile: "232323232",
    name: "imran"
}

interface IRole {
    role: "ADMIN" | "USER" | "DEVELOPER"

}

const userRole: IRole = {
    role: "ADMIN"
}
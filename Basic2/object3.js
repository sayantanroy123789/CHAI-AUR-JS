
//destructure
const course={
    about:"javascript",
    price:999,
    courseInstructor:"sayan"
}
console.log(course.about);
const {about,price:rs,courseInstructor}=course
console.log(about);
console.log(rs);
console.log(courseInstructor);

// JSON-> json is a object without any name ex:-
// {
//     "name":"sayan",      alwys use key value as a string.
//     "age":25,
//     "islogedin":true
// }
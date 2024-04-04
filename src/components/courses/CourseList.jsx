const coursesList = [
    { id: 1, by:"Determined-Poitras", title: "Create an LMS Website with LearnPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image-1.png' },
    { id: 2, by:"Determined-Poitras", title: "Design a website with ThimPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image-2.png' },
    { id: 3, by:"Determined-Poitras", title: "Create an LMS Website with LearnPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image-3.png' },
    { id: 4, by:"Determined-Poitras", title: "Create an LMS Website with LearnPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image-4.png' },
    { id: 5, by:"Determined-Poitras", title: "Create an LMS Website with LearnPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image5.png' },
    { id: 6, by:"Determined-Poitras", title: "Create an LMS Website with LearnPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image.png' },
];

// Create 24 items by repeating the original list
export const extendedCoursesList = [...coursesList];
for (let i = 1; i < 4; i++) {
    extendedCoursesList.push(...coursesList.map(course => ({ ...course, id: course.id + (i * 6) })));
}

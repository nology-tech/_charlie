import StudentPhoto from "../assets/images/student-photo.png"
import React from "react";

const students= [
        {
            studentName: "Student 1",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv", 
            enrolledType: "Full-Time", 
            pictureLink: "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png"
        },
        {
            studentName: "Student 2",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Self-Paced",
            pictureLink: "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png"
        },
        {
            studentName: "Student 3",
            enrolledOn: "Mariana",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Corporate",
            pictureLink: "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png"
        },
        {
            studentName: "Student 4",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Full-Time",
            pictureLink: "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png"
        },
        {
            studentName: "Student 5",
            enrolledOn: "Jersey",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Full-Time",
            pictureLink: "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png"
        },
        {
            studentName: "Student 6",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Full-Time",
            pictureLink: "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png"
        },
        {
            studentName: "Student 7",
            enrolledOn: "Mariana",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Self-Paced",
            pictureLink: "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png"
        },
        {
            studentName: "Student 8",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Corporate",
        },
        {
            studentName: "Student 9",
            enrolledOn: "Jersey",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Self-Paced"
        },
        {
            studentName: "Student 10",
            enrolledOn: "Hawaii",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Full-Time"
        },
        {
            studentName: "Student 11",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Full-Time"
        },
        {
            studentName: "Student 12",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Full-Time"
        },
        {
            studentName: "Student 13",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Self-Paced"
        },
        {
            studentName: "Student 14",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Self-Paced"
        },
        {
            studentName: "Student 15",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Corporate"
        },
        {
            studentName: "Student 16",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Self-Paced"
        },
        {
            studentName: "Student 17",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Self-Paced"
        },
        {
            studentName: "Student 18",
            enrolledOn: "Mariana",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Full-Time"
        },
        {
            studentName: "Student 19",
            enrolledOn: "Florida",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Full-Time"
        },
        {
            studentName: "Student 20",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Full-Time"
        },
        {
            studentName: "Student 21",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Self-Paced"
        },
        {
            studentName: "Student 22",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Full-Time"
        },
        {
            studentName: "Student 23",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Self-Paced"
        },
        {
            studentName: "Student 24",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Corporate"
        },
        {
            studentName: "Student 25",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Full-Time"
        },
        {
            studentName: "Student 26",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Self-Paced"
        },
        {
            studentName: "Student 27",
            enrolledOn: "Ibiza",
            githubAccount: "github.com/wtang98",
            portfolio : "www.wei.com",
            resume: "www.wei.com/cv",
            enrolledType: "Self-Paced"
        }
];


export default students;




















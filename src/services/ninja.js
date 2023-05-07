import axios from "axios";

export const doObtainStudents = () => {
    var yo = {};
    axios.get(process.env.REACT_APP_API_URL + "/students")
        .then((evt) => {console.dir(evt.data); yo= evt.data.data})
        .catch((evt) => {
            console.dir("fail");
            console.dir(evt);
                    });
    return yo;
}
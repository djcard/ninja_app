
export const isolateStudentResults = (studentId, studentSkills) => {
    let retme = {};
    studentSkills?.filter((studentSkill)=>{
        return studentSkill.studentId===studentId;
    })
    .forEach((studentSkill)=>{
        retme[studentSkill.skillCode]=studentSkill.skillLevel;
    });
    return retme;
}

export const isolateStudentResults = (studentId, studentSkills) => {
    return studentSkills?.filter((studentSkill)=>{
        return studentSkill.id===studentId;
    })[0];
}
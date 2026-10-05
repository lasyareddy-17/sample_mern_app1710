from fastapi import APIRouter
student_router=APIRouter(prefix="Student",tags=["Student"])
#localhost:8000/Student/getStudent
@student_router.get("/getStudents")
def getStudents():
    return"get Student method called"
#localhost:8000/student/addStudent
@student_router.post("/addstudent")
def addstudent():
    return "add student method called"
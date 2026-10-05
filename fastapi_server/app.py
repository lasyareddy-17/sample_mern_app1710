from fastapi import FastAPI   
from models import Student,Staff
from database import Student_collection,staff_collection
frpm routes.Student import student_router
from routes.staff import staff_router
app=FastAPI()
app.include_router(student_router)
app.include_router(staff_router)

def Student_details(Student):
    return{
        "id":str(Student["_id"]),
        "name":Student["name"],
        "email":Student["email"],
        "age":Student["age"],
        "marks":Student["marks"]
    }

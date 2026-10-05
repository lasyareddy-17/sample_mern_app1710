from fastapi import APIRouter
staff_router=APIRouter(prefix="/staff",tags=["Staff"])
#localhost:8000/staff/getStaffs
@staff_router.get("/getStaffs")
def getStaffs():
    return"get Staff method called"
#localhost:8000/staff/addStaff
@staff_router.post("/addstaff")
def addstaff():
    return "add staff method called"
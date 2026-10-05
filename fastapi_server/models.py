from pydantic import BaseModel
class Student(BaseModel):
    name:str
    email:str
    mark:float
class Staff(BaseModel):
    name:str
    email:str
    designation:str
    
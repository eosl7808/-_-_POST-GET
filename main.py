from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles

class Chat(BaseModel):
    id: int
    content: str
    
chat=[]
    
    
    
    
app=FastAPI()
    
    
    
    
    
    
    
@app.post("/chatters")
def create_chat(c:Chat):
    chat.append(c)
    return 'success!'
        
        
@app.get("/chatters")
def read_chat():
    return chat

    
app.mount("/", StaticFiles(directory="static",html=True),name="static")
    
describe('Suite  to test classses',()=> {
   
    let e=null;
    
    it('It should set ',()=>{
       const e = new employee("Koushik","K")
       const b=emp.validateName(e);
        expect(true).toBe(b)
    })
    it('should set email',()=>{
        const e = new employee("Koushik","K")
        const check=emp.validateEmail(e);
         expect(true).toBe(check)
     })


    
})


describe('Suite  to test classses',()=> {
    let e=null;
    


    it('It should set ',()=>{
       const e = new employee("Koushik","af@g")
       const b=emp.validateName(e);
        expect(true).toBe(b)
    })
    it('should set email',()=>{
        const e = new employee("Koushik","afg")
        const check=emp.validateEmail(e);
         expect(true).toBe(check)
     })


     it('should set Phone',()=>{
        const e = new employee("Koushik","k","8056272472",8056272472)
        const check2=emp.validatePhone(e);
         expect(true).toBe(check2)
     })
     
    
})


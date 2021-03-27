import showCurrentHelth from "../js/app.js";
test ('check healthy', () => {
const result = showCurrentHelth(100);

expect(result).toBe('healthy');
});

test ('check wounded', () => {
    const result = showCurrentHelth(50);
    
    expect(result).toBe('wounded');
    });

    test ('check wounded', () => {
        const result = showCurrentHelth(16);
        
        expect(result).toBe('wounded');
        });


    test ('check critical', () => {
        const result = showCurrentHelth(15);
        
        expect(result).toBe('critical');
        })

        test ('check critical', () => {
            const result = showCurrentHelth(14);
            
            expect(result).toBe('critical');
            })